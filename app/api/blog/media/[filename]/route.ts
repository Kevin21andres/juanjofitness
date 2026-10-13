import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Context = { params: Promise<{ filename: string }> };

const uploadName = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}\.(?:png|jpg|jpeg|webp)$/;
const types: Record<string, string> = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  webp: "image/webp",
};
const MAX_IMAGE_BYTES = 2 * 1024 * 1024;

function hasValidSignature(bytes: Buffer, extension: string): boolean {
  if (extension === "png") {
    return bytes.length >= 8
      && bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  }
  if (extension === "jpg" || extension === "jpeg") {
    return bytes.length >= 3
      && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  }
  if (extension === "webp") {
    return bytes.length >= 12
      && bytes.toString("ascii", 0, 4) === "RIFF"
      && bytes.toString("ascii", 8, 12) === "WEBP";
  }
  return false;
}

/**
 * GitHub's raw content API sometimes labels binary PNG/JPEG responses as JSON.
 * Inspect actual response bytes rather than relying on the Content-Type header.
 */
export async function GET(_request: NextRequest, { params }: Context) {
  const { filename } = await params;
  if (!uploadName.test(filename)) {
    return new NextResponse("Invalid filename", { status: 400 });
  }

  const repo = process.env.GITHUB_REPO || "";
  const token = process.env.GITHUB_TOKEN || "";
  const branch = process.env.GITHUB_BRANCH || "main";
  if (!/^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/.test(repo) || !token) {
    return new NextResponse("Media source unavailable", { status: 503 });
  }

  const extension = filename.split(".").at(-1) || "";
  const url = "https://api.github.com/repos/" + repo
    + "/contents/public/blog/uploads/" + filename
    + "?ref=" + encodeURIComponent(branch);

  try {
    const result = await fetch(url, {
      cache: "no-store",
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/vnd.github.raw+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    if (result.status === 404) {
      return new NextResponse("Image not found", {
        status: 404,
        headers: { "Cache-Control": "no-store" },
      });
    }
    if (!result.ok) {
      return new NextResponse("Image source temporarily unavailable", { status: 502 });
    }

    const received = Buffer.from(await result.arrayBuffer());
    if (received.length > MAX_IMAGE_BYTES * 2) {
      return new NextResponse("Media exceeds size limit", { status: 502 });
    }

    let image = received;
    if (!hasValidSignature(image, extension)) {
      // Some API responses contain base64-encoded contents as JSON.
      if (!received.toString("utf8", 0, 64).trimStart().startsWith("{")) {
        return new NextResponse("Invalid media", { status: 502 });
      }
      const data: unknown = JSON.parse(received.toString("utf8"));
      if (!data || typeof data !== "object" || !("encoding" in data)
        || data.encoding !== "base64" || !("content" in data)
        || typeof data.content !== "string") {
        return new NextResponse("Media unavailable", { status: 502 });
      }
      image = Buffer.from(data.content.replace(/\s/g, ""), "base64");
    }

    if (image.length === 0 || image.length > MAX_IMAGE_BYTES
      || !hasValidSignature(image, extension)) {
      return new NextResponse("Invalid or oversized image", { status: 502 });
    }

    const payload = new ArrayBuffer(image.length);
    new Uint8Array(payload).set(image);

    return new NextResponse(payload, {
      status: 200,
      headers: {
        "Content-Type": types[extension],
        "Cache-Control": "public, max-age=60, s-maxage=60",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Failed to fetch uploaded blog media:", error);
    return new NextResponse("Image source temporarily unavailable", { status: 502 });
  }
}
