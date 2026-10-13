import {NextRequest,NextResponse} from "next/server";
export const runtime="nodejs";
export const dynamic="force-dynamic";
type Params={params:Promise<{filename:string}>};
const uploadName=/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}\.(?:png|jpg|jpeg|webp)$/;
const types:Record<string,string>={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",webp:"image/webp"};
export async function GET(_request:NextRequest,{params}:Params){
  const {filename}=await params;
  if(!uploadName.test(filename))return new NextResponse("Invalid filename",{status:400});
  const repo=process.env.GITHUB_REPO||"";
  const token=process.env.GITHUB_TOKEN||"";
  const branch=process.env.GITHUB_BRANCH||"main";
  if(!/^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/.test(repo)||!token)
    return new NextResponse("Media source unavailable",{status:503});
  const url="https://api.github.com/repos/"+repo+"/contents/public/blog/uploads/"+filename+"?ref="+encodeURIComponent(branch);
  try{
    const result=await fetch(url,{cache:"no-store",headers:{
      Authorization:"Bearer "+token,
      Accept:"application/vnd.github.raw+json",
      "X-GitHub-Api-Version":"2022-11-28"
    }});
    if(result.status===404)return new NextResponse("Image not found",{status:404,headers:{"Cache-Control":"no-store"}});
    if(!result.ok)return new NextResponse("Image source temporarily unavailable",{status:502});
    let image:Uint8Array;
    const contentType=result.headers.get("content-type")||"";
    if(contentType.includes("json")){
      const data=await result.json();
      if(typeof data.content!=="string"||data.encoding!=="base64")return new NextResponse("Media unavailable",{status:502});
      image=new Uint8Array(Buffer.from(data.content.replace(/\n/g,""),"base64"));
    }else{
      image=new Uint8Array(await result.arrayBuffer());
    }
    if(!image.length||image.length>2*1024*1024)return new NextResponse("Media exceeds size limit",{status:502});
    const extension=filename.split(".").at(-1)||"";
    return new NextResponse(image,{status:200,headers:{
      "Content-Type":types[extension],
      "Cache-Control":"public, max-age=60, s-maxage=60",
      "X-Content-Type-Options":"nosniff"
    }});
  }catch(error){console.error("Failed to fetch uploaded blog media:",error);
    return new NextResponse("Image source temporarily unavailable",{status:502});}
}
