import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest, validOrigin } from "@/lib/admin-auth";
import { listRemotePosts, saveRemotePost } from "@/lib/github-cms";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function GET(request:NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({error:"No autorizado."},{status:401});
  try { return NextResponse.json({posts:await listRemotePosts()},{headers:{"Cache-Control":"no-store"}}); }
  catch (e) { return NextResponse.json({error:String(e instanceof Error?e.message:e)},{status:502}); }
}
export async function POST(request:NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({error:"No autorizado."},{status:401});
  if (!validOrigin(request)) return NextResponse.json({error:"Origen no permitido."},{status:403});
  if (Number(request.headers.get("content-length")||0)>120000) return NextResponse.json({error:"Artículo demasiado grande."},{status:413});
  try {
    const post=await saveRemotePost(await request.json());
    return NextResponse.json({post});
  } catch (e) { return NextResponse.json({error:String(e instanceof Error?e.message:e)},{status:400}); }
}
