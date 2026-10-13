import { NextRequest, NextResponse } from "next/server";
import { adminConfigured, cookieSettings, issueSession, SESSION_COOKIE, validOrigin, verifyPassword } from "@/lib/admin-auth";
export const runtime = "nodejs";
export async function POST(request: NextRequest) {
  if (!validOrigin(request)) return NextResponse.json({error:"Origen no permitido."},{status:403});
  if (!adminConfigured()) return NextResponse.json({error:"El panel necesita configurar sus variables de entorno."},{status:503});
  const body = await request.json().catch(()=>null);
  if (!body || typeof body.password !== "string" || body.password.length > 256)
    return NextResponse.json({error:"Datos incorrectos."},{status:400});
  if (!verifyPassword(body.password))
    return NextResponse.json({error:"Credenciales incorrectas."},{status:401,headers:{"Cache-Control":"no-store"}});
  const response = NextResponse.json({ok:true});
  response.cookies.set(SESSION_COOKIE, issueSession(),cookieSettings);
  response.headers.set("Cache-Control","no-store");
  return response;
}
