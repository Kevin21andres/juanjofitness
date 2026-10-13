import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CATEGORIES, mediaUrl } from "@/lib/blog-types";
import { getPublishedBlogPosts } from "@/lib/current-posts";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos de Juanjo Hidalgo sobre entrenamiento, nutrición y preparación física.",
  alternates: { canonical: "/blog" },
};

type BlogQuery = { q?: string; cat?: string };

export default async function BlogPage({ searchParams }: { searchParams: Promise<BlogQuery> }) {
  const query = await searchParams;
  const q = typeof query.q === "string" ? query.q.slice(0, 100).trim() : "";
  const cat = typeof query.cat === "string" && CATEGORIES.some(c => c === query.cat) ? query.cat : "Todos";
  const normalized = q.toLocaleLowerCase("es");
  const posts = (await getPublishedBlogPosts()).filter(post =>
    (cat === "Todos" || post.category === cat) &&
    (!normalized || [post.title, post.excerpt, post.body, post.tags.join(" ")].join(" ").toLocaleLowerCase("es").includes(normalized))
  );

  return (
    <main className="min-h-screen bg-[#f6f6f3] pt-[var(--header-height)] text-[#101820]">
      <div className="border-b border-[#dce1e2] bg-[#101820] text-white">
        <div className="site-container py-17 sm:py-24">
          <p className="kicker kicker-light">Ideas para entrenar mejor</p>
          <div className="mt-5 grid gap-7 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:gap-16">
            <h1 className="display-heading">El blog de JJHP.</h1>
            <p className="max-w-md text-base leading-7 text-white/65">Entrenamiento, nutrición y decisiones que ayudan a progresar. Contenido escrito con experiencia, no con fórmulas mágicas.</p>
          </div>
        </div>
      </div>
      <div className="site-container section-space">
        <div className="flex flex-col gap-7 border-b border-[#d6dddf] pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="kicker">Explorar artículos</p>
            <p aria-live="polite" className="mt-2 text-sm font-semibold text-[#52616b]">{posts.length} {posts.length === 1 ? "publicación" : "publicaciones"}</p>
          </div>
          <form action="/blog" method="get" role="search" className="flex w-full max-w-lg items-stretch gap-2">
            {cat !== "Todos" && <input type="hidden" name="cat" value={cat} />}
            <label htmlFor="blog-search" className="sr-only">Buscar publicaciones</label>
            <input id="blog-search" name="q" type="search" defaultValue={q} maxLength={100}
              placeholder="Buscar un tema..."
              className="min-w-0 flex-1 border border-[#bac5ca] bg-white px-4 py-3 text-sm text-[#101820] placeholder:text-[#6e7b86]"/>
            <button type="submit" className="action-dark">Buscar</button>
          </form>
        </div>

        <nav aria-label="Categorías del blog" className="-mx-1 mt-6 flex gap-2 overflow-x-auto px-1 pb-3">
          {(["Todos", ...CATEGORIES] as string[]).map(item => {
            const active = cat === item;
            const href = "/blog?cat=" + encodeURIComponent(item) + (q ? "&q=" + encodeURIComponent(q) : "");
            return <Link key={item} href={href} aria-current={active ? "page" : undefined}
              className={"whitespace-nowrap border px-4 py-2.5 text-xs font-extrabold transition-colors " +
              (active ? "border-[#101820] bg-[#101820] text-white" : "border-[#d0d9dc] bg-white text-[#52616b] hover:border-[#101820] hover:text-[#101820]")}>{item}</Link>;
          })}
        </nav>

        {posts.length === 0 ? (
          <div className="mt-12 border border-[#dce1e2] bg-white px-7 py-16 text-center">
            <h2 className="text-2xl font-extrabold">No hay artículos con esos filtros.</h2>
            <p className="mt-3 text-sm leading-7 text-[#52616b]">Prueba otra búsqueda o vuelve a ver todo el contenido.</p>
            <Link href="/blog" className="action-dark mt-7">Ver todos los artículos</Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, index) => (
              <article key={post.slug} className={"group min-w-0 " + (index === 0 ? "md:col-span-2 xl:col-span-2" : "")}>
                <Link href={"/blog/" + post.slug} className="block h-full">
                  <div className={"relative overflow-hidden bg-[#dce1e2] " + (index === 0 ? "aspect-[16/10] sm:aspect-[16/8]" : "aspect-[16/10]")}>
                    {post.cover ? (
                      <Image alt={post.title} src={mediaUrl(post.cover)} unoptimized={post.cover.startsWith("/blog/uploads/")}
                        fill loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"}
                        sizes={index === 0 ? "(max-width: 767px) 100vw, (max-width: 1279px) 100vw, 800px" : "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 390px"}
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"/>
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[#17242f] text-3xl font-extrabold text-white/65">JJHP</div>
                    )}
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-xs font-extrabold tracking-[.04em] text-[#1684d4]">
                    <span>{post.category}</span><span aria-hidden="true" className="text-[#8a959a]">/</span><time dateTime={post.date} className="text-[#647481]">{post.date}</time>
                  </div>
                  <h2 className={"mt-3 font-extrabold tracking-tight transition-colors group-hover:text-[#0967af] " + (index === 0 ? "text-2xl leading-tight sm:text-4xl" : "text-xl leading-snug")}>{post.title}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#52616b]">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 border-b border-[#101820] pb-1 text-xs font-extrabold">Leer artículo <span aria-hidden="true">↗</span></span>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}