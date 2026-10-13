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
