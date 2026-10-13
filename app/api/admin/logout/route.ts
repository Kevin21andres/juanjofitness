import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, validOrigin } from "@/lib/admin-auth";
export async function POST(request: NextRequest) {
  if (!validOrigin(request)) return NextResponse.json({error:"Origen no permitido."},{status:403});
  const response = NextResponse.json({ok:true});
  response.cookies.set(SESSION_COOKIE,"",{path:"/",maxAge:0,httpOnly:true,sameSite:"strict",secure:process.env.NODE_ENV==="production"});
  return response;
}
