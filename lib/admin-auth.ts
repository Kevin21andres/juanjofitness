import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export const SESSION_COOKIE = "jjhp_admin";
const SESSION_SECONDS = 8 * 60 * 60;
const passwordHash = () => process.env.ADMIN_PASSWORD_HASH || "";
const secret = () => process.env.ADMIN_SESSION_SECRET || "";

export function adminConfigured(): boolean {
  return Boolean(passwordHash().startsWith("scrypt$") && secret().length >= 32
    && process.env.GITHUB_TOKEN && process.env.GITHUB_REPO);
}
export function verifyPassword(input: string): boolean {
  const [, salt, expected] = passwordHash().split("$");
  if (!salt || !expected || !/^[a-f0-9]{32,}$/.test(salt) || !/^[a-f0-9]{128}$/.test(expected)) return false;
  try {
    const actual = scryptSync(input, Buffer.from(salt, "hex"), 64);
    return timingSafeEqual(actual, Buffer.from(expected, "hex"));
  } catch { return false; }
}
function signature(payload: string) {
  return createHmac("sha256", secret()).update(payload).update(passwordHash()).digest("base64url");
}
export function issueSession(): string {
  if (!adminConfigured()) throw new Error("El panel no está configurado.");
  const payload = Buffer.from(JSON.stringify({
    exp: Date.now() + SESSION_SECONDS * 1000,
    nonce: randomBytes(18).toString("hex")
  })).toString("base64url");
  return payload + "." + signature(payload);
}
function validSession(cookie?: string): boolean {
  if (!cookie || !adminConfigured() || cookie.length > 500) return false;
  const i = cookie.lastIndexOf(".");
  if (i <= 0) return false;
  const payload = cookie.slice(0, i);
  const actual = Buffer.from(cookie.slice(i + 1));
  const expected = Buffer.from(signature(payload));
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) return false;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    return Number.isFinite(data.exp) && data.exp > Date.now() && data.exp <= Date.now() + SESSION_SECONDS * 1000;
  } catch { return false; }
}
export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  return validSession(store.get(SESSION_COOKIE)?.value);
}
export function isAdminRequest(request: NextRequest): boolean {
  return validSession(request.cookies.get(SESSION_COOKIE)?.value);
}
export function validOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  const url = new URL(request.url);
  return Boolean(origin && origin === url.origin);
}
export const cookieSettings = {
  httpOnly: true, secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const, path: "/", maxAge: SESSION_SECONDS,
};
