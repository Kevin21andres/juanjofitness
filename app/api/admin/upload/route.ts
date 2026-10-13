import {NextRequest,NextResponse} from "next/server";
import {isAdminRequest,validOrigin} from "@/lib/admin-auth";
import {uploadRemoteImage} from "@/lib/github-cms";
export const runtime="nodejs";
export async function POST(request:NextRequest){
  if(!isAdminRequest(request))return NextResponse.json({error:"No autorizado."},{status:401});
  if(!validOrigin(request))return NextResponse.json({error:"Origen no permitido."},{status:403});
  if(Number(request.headers.get("content-length")||0)>2500000)return NextResponse.json({error:"Imagen demasiado grande."},{status:413});
  try{
    const form=await request.formData();const file=form.get("file");
    if(!(file instanceof File))throw new Error("Selecciona una imagen.");
    if(file.size>2*1024*1024)throw new Error("El máximo es 2 MB.");
    const url=await uploadRemoteImage(Buffer.from(await file.arrayBuffer()),file.type);
    return NextResponse.json({url});
  }catch(e){return NextResponse.json({error:String(e instanceof Error?e.message:e)},{status:400});}
}
