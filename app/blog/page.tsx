// app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "./_data/posts";

export const metadata = {
  title: "Blog | JJHP",
  description: "Entrenamiento, nutrición, disciplina y rendimiento con método JJHP.",
};

const categories = [
  "Todos",
  "Entrenamiento",
  "Nutrición",
  "Disciplina",
  "Suplementación",
  "Competición",
] as const;

export default function BlogPage({
  searchParams,
}: {
  searchParams?: { q?: string; cat?: string };
}) {
  const q = (searchParams?.q ?? "").toLowerCase().trim();
  const cat = searchParams?.cat ?? "Todos";

  const filtered = BLOG_POSTS.filter((p) => (cat === "Todos" ? true : p.category === cat))
    .filter((p) => {
      if (!q) return true;
      const hay = `${p.title} ${p.excerpt} ${p.tags.join(" ")} ${p.category}`.toLowerCase();
      return hay.includes(q);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3); // ✅ con 3 está bien para empezar

  return (
    <main className="min-h-screen bg-[#0B0B0B]">
      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1E90FF]">
              Blog JJHP
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Entrenamiento, nutrición y disciplina.
            </h1>

            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              Artículos prácticos, sin humo: estructura, progresión y hábitos reales.
            </p>

            <div className="mt-7 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1E90FF]" />
              Método · Resultados · Sin atajos
            </div>
          </div>

          {/* Search + categories */}
          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <form className="flex w-full max-w-xl items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[0_18px_55px_rgba(0,0,0,0.35)]">
              <span className="text-white/40">⌕</span>

              <input
                name="q"
                defaultValue={searchParams?.q ?? ""}
                placeholder="Buscar: déficit, rutina, disciplina..."
                className="w-full bg-transparent text-sm outline-none text-white placeholder:text-white/35"
              />

              <input type="hidden" name="cat" value={cat} />

              <button className="rounded-full bg-[#1E90FF] px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-[#1E90FF]/20 transition hover:bg-[#187bcd]">
                Buscar
              </button>
            </form>

            <div className="flex flex-wrap gap-2">
              {categories.map((c) => {
                const active = c === cat;
                const href = `/blog?cat=${encodeURIComponent(c)}${
                  q ? `&q=${encodeURIComponent(q)}` : ""
                }`;

                return (
                  <Link
                    key={c}
                    href={href}
                    className={[
                      "inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold transition",
                      active
                        ? "bg-[#1E90FF] text-white"
                        : "border border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/[0.07]",
                    ].join(" ")}
                  >
                    {c}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Glow sutil */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-[#1E90FF]/20 blur-3xl" />
      </section>

      {/* GRID */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center shadow-[0_18px_55px_rgba(0,0,0,0.35)]">
              <h2 className="text-xl font-bold text-white">No hay resultados</h2>
              <p className="mt-3 text-white/70">Prueba con otra búsqueda o categoría.</p>

              <Link
                href="/blog"
                className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-[#1E90FF] px-8 text-sm font-semibold text-white shadow-lg shadow-[#1E90FF]/20 transition hover:bg-[#187bcd]"
              >
                Ver todo el blog
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_18px_55px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:bg-white/[0.06]"
                >
                  <div className="relative aspect-[16/10] bg-black">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-black/0" />

                    <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      {p.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white transition group-hover:text-[#1E90FF]">
                      {p.title}
                    </h3>

                    <p className="mt-3 text-sm text-white/70 leading-relaxed">
                      {p.excerpt}
                    </p>

                    <div className="mt-5 flex items-center justify-between text-xs text-white/45">
                      <span>
                        {new Date(p.date).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        })}
                      </span>
                      <span>{p.readingTime}</span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Línea inferior sutil */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}