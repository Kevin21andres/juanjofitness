import { NextRequest,NextResponse } from "next/server";
import { isAdminRequest,validOrigin } from "@/lib/admin-auth";
import { deleteRemotePost,saveRemotePost } from "@/lib/github-cms";
export const runtime="nodejs";
type Context={params:Promise<{slug:string}>};
export async function PUT(request:NextRequest,context:Context){
  if(!isAdminRequest(request))return NextResponse.json({error:"No autorizado."},{status:401});
  if(!validOrigin(request))return NextResponse.json({error:"Origen no permitido."},{status:403});
  if(Number(request.headers.get("content-length")||0)>120000)return NextResponse.json({error:"Artículo demasiado grande."},{status:413});
  try {const {slug}=await context.params;const post=await saveRemotePost(await request.json(),slug);return NextResponse.json({post});}
  catch(e){return NextResponse.json({error:String(e instanceof Error?e.message:e)},{status:400});}
}
export async function DELETE(request:NextRequest,context:Context){
  if(!isAdminRequest(request))return NextResponse.json({error:"No autorizado."},{status:401});
  if(!validOrigin(request))return NextResponse.json({error:"Origen no permitido."},{status:403});
  try{await deleteRemotePost((await context.params).slug);return NextResponse.json({ok:true});}
  catch(e){return NextResponse.json({error:String(e instanceof Error?e.message:e)},{status:400});}
}
