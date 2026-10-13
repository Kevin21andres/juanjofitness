import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

export const CATEGORIES = ["Entrenamiento", "Nutrición", "Disciplina", "Suplementación", "Competición"] as const;
export type Category = (typeof CATEGORIES)[number];
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  cover: string;
  body: string;
  date: string;
  updatedAt: string;
  status: "draft" | "published";
  author: string;
  tags: string[];
};

export function validSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) && slug.length <= 90;
}
export function slugify(input: string): string {
  return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 90).replace(/-$/g, "");
}
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
