import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { CATEGORIES, validSlug } from "./blog-types";
import type { Category, BlogPost } from "./blog-types";
export { CATEGORIES, slugify, validSlug } from "./blog-types";
export type { BlogPost, Category } from "./blog-types";
export function validatePost(value: unknown): BlogPost {
  if (!value || typeof value !== "object") throw new Error("Publicación no válida.");
  const p = value as Record<string, unknown>;
  const str = (field: string, max: number, required = true) => {
    if (typeof p[field] !== "string") throw new Error("Campo no válido: " + field);
    const v = (p[field] as string).trim();
    if (v.length > max || (required && !v)) throw new Error("Longitud no válida: " + field);
    return v;
  };
  const slug = str("slug", 90);
  if (!validSlug(slug)) throw new Error("La URL del artículo no es válida.");
  const title = str("title", 120);
  const excerpt = str("excerpt", 400);
  const body = str("body", 80000);
  const cover = str("cover", 300, false);
  if (cover && !/^\/blog\/(uploads|covers)\/[a-zA-Z0-9_.-]+\.(png|jpg|jpeg|webp)$/.test(cover)) {
    throw new Error("La portada debe ser una imagen subida al blog.");
  }
  if (!CATEGORIES.includes(p.category as Category)) throw new Error("Categoría desconocida.");
  if (p.status !== "published" && p.status !== "draft") throw new Error("Estado desconocido.");
  if (!Array.isArray(p.tags) || p.tags.length > 12 || !p.tags.every(t => typeof t === "string" && t.length <= 40)) {
    throw new Error("Etiquetas inválidas.");
  }
  const date = str("date", 30);
  const updatedAt = str("updatedAt", 30);
  if (!/^\d{4}-\d\d-\d\d$/.test(date) || !/^\d{4}-\d\d-\d\dT/.test(updatedAt)) throw new Error("Fechas inválidas.");
  return { slug, title, excerpt, body, cover, category: p.category as Category,
    status: p.status, date, updatedAt, author: str("author", 100), tags: p.tags as string[] };
}

export function allPosts(): BlogPost[] {
  const directory = join(process.cwd(), "content", "posts");
  let files: string[] = [];
  try { files = readdirSync(directory).filter(f => f.endsWith(".json")); }
  catch { return []; }
  return files.flatMap(file => {
    try { return [validatePost(JSON.parse(readFileSync(join(directory, file), "utf8")))]; }
    catch (error) { console.error("Invalid blog entry:", file, error); return []; }
  }).sort((a, b) => b.date.localeCompare(a.date));
}
export function publishedPosts() { return allPosts().filter(p => p.status === "published"); }
export function findPost(slug: string) { return publishedPosts().find(p => p.slug === slug); }
