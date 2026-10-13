import "server-only";
import { randomUUID } from "node:crypto";
import { validSlug, validatePost, type BlogPost } from "./posts";

type ContentItem = { name: string; path: string; sha: string; content?: string; encoding?: string };
const repo = () => {
  const value = process.env.GITHUB_REPO || "";
  if (!/^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/.test(value)) throw new Error("GITHUB_REPO no está configurado.");
  return value;
};
const branch = () => process.env.GITHUB_BRANCH || "main";
async function api(path: string, init: RequestInit = {}) {
  if (!process.env.GITHUB_TOKEN) throw new Error("Falta GITHUB_TOKEN.");
  const res = await fetch("https://api.github.com/repos/" + repo() + path, {
    ...init, cache: "no-store", headers: {
      Authorization: "Bearer " + process.env.GITHUB_TOKEN,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...init.headers,
    },
  });
  if (!res.ok) {
    if (res.status === 409 || res.status === 422) throw new Error("Conflicto al guardar. Actualiza la página e inténtalo de nuevo.");
    throw new Error("GitHub no ha podido completar la operación (" + res.status + ").");
  }
  return res.status === 204 ? null : res.json();
}
function postPath(slug: string) {
  if (!validSlug(slug)) throw new Error("Identificador inválido.");
  return "content/posts/" + slug + ".json";
}
async function readContent(path: string): Promise<ContentItem | null> {
  try { return await api("/contents/" + path + "?ref=" + encodeURIComponent(branch())); }
  catch (error) { if (String(error).includes("(404)")) return null; throw error; }
}
async function writeContent(path: string, bytes: Buffer, message: string, sha?: string) {
  return api("/contents/" + path, { method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, branch: branch(), content: bytes.toString("base64"), ...(sha ? { sha } : {}) })
  });
}
export async function listRemotePosts(): Promise<BlogPost[]> {
  const list = await api("/contents/content/posts?ref=" + encodeURIComponent(branch())) as ContentItem[];
  if (!Array.isArray(list)) throw new Error("El directorio del blog no existe.");
  const entries = list.filter(file => file.name.endsWith(".json")).slice(0, 200);
  const results = await Promise.all(entries.map(async file => {
    try {
      const item = await readContent(file.path);
      if (!item?.content) return null;
      return validatePost(JSON.parse(Buffer.from(item.content.replace(/\n/g, ""), "base64").toString("utf8")));
    } catch { return null; }
  }));
  return results.filter((p): p is BlogPost => p !== null).sort((a, b) => b.date.localeCompare(a.date));
}
export async function saveRemotePost(value: unknown, originalSlug?: string): Promise<BlogPost> {
  const post = validatePost(value);
  if (originalSlug && originalSlug !== post.slug) throw new Error("La URL no puede cambiarse al editar.");
  const path = postPath(post.slug);
  const existing = await readContent(path);
  if (originalSlug && !existing) throw new Error("El artículo que quieres editar ya no existe.");
  if (!originalSlug && existing) throw new Error("Ya existe un artículo con esta URL.");
  await writeContent(path, Buffer.from(JSON.stringify(post, null, 2) + "\n"), (existing ? "Update" : "Create") + " blog post: " + post.slug, existing?.sha);
  return post;
}
export async function deleteRemotePost(slug: string) {
  const path = postPath(slug);
  const existing = await readContent(path);
  if (!existing) throw new Error("No existe el artículo.");
  await api("/contents/" + path, { method: "DELETE", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "Delete blog post: " + slug, sha: existing.sha, branch: branch() }) });
}
export async function uploadRemoteImage(buffer: Buffer, type: string): Promise<string> {
  if (buffer.length < 16 || buffer.length > 2 * 1024 * 1024) throw new Error("La imagen debe pesar menos de 2 MB.");
  const matches = (type === "image/png" && buffer.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10])))
    || (type === "image/jpeg" && buffer[0] === 255 && buffer[1] === 216 && buffer[2] === 255)
    || (type === "image/webp" && buffer.toString("ascii", 0, 4) === "RIFF" && buffer.toString("ascii", 8, 12) === "WEBP");
  if (!matches) throw new Error("Solo se admiten imágenes JPG, PNG o WebP.");
  const ext = type === "image/png" ? "png" : type === "image/jpeg" ? "jpg" : "webp";
  const path = "public/blog/uploads/" + randomUUID() + "." + ext;
  await writeContent(path, buffer, "Upload blog image");
  return "/" + path.replace(/^public\//, "");
}
