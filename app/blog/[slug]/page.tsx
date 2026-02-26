// app/blog/[slug]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "../_data/posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="bg-white min-h-screen">
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <Link href="/blog" className="text-sm font-semibold text-gray-600 hover:text-[#1E90FF] transition">
            ← Volver al blog
          </Link>

          <div className="mt-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-gray-600">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1E90FF]" />
              {post.category} · {post.readingTime}
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#0B0B0B] sm:text-5xl">
              {post.title}
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span>Por <span className="font-semibold text-[#0B0B0B]">{post.author}</span></span>
              <span>·</span>
              <span>{new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "2-digit" })}</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 pb-10 sm:px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-black/10 bg-black shadow-[0_18px_55px_rgba(2,6,23,0.08)]">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <article className="prose prose-slate max-w-none">
            {post.content.map((block, idx) => {
              if (block.type === "p") return <p key={idx} className="text-gray-700 leading-relaxed">{block.text}</p>;
              if (block.type === "h2") return <h2 key={idx} className="mt-10 text-2xl font-bold text-[#0B0B0B]">{block.text}</h2>;
              if (block.type === "h3") return <h3 key={idx} className="mt-8 text-xl font-bold text-[#0B0B0B]">{block.text}</h3>;
              if (block.type === "quote") return (
                <blockquote key={idx} className="my-8 rounded-2xl border border-black/5 bg-slate-50 p-6 text-[#0B0B0B]">
                  <p className="m-0 text-lg font-semibold">{block.text}</p>
                </blockquote>
              );
              if (block.type === "ul") return (
                <ul key={idx} className="mt-5 list-disc pl-6 text-gray-700">
                  {block.items.map((it, i) => <li key={i} className="mt-2">{it}</li>)}
                </ul>
              );
              if (block.type === "divider") return <div key={idx} className="my-10 h-px w-full bg-black/10" />;
              if (block.type === "img") return (
                <div key={idx} className="my-10 overflow-hidden rounded-3xl border border-black/10 bg-black shadow-[0_18px_55px_rgba(2,6,23,0.08)]">
                  <div className="relative aspect-[16/9]">
                    <Image src={block.src} alt={block.alt} fill className="object-cover" sizes="100vw" />
                  </div>
                </div>
              );
              if (block.type === "video") return (
                <div key={idx} className="my-10 overflow-hidden rounded-3xl border border-black/10 bg-black shadow-[0_18px_55px_rgba(2,6,23,0.08)]">
                  <div className="relative aspect-video">
                    <iframe
                      title={block.title ?? "Video"}
                      src={`https://www.youtube.com/embed/${block.youtubeId}`}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              );
              if (block.type === "cta") return (
                <div key={idx} className="my-12 rounded-3xl border border-black/5 bg-[#0B0B0B] p-8 text-white">
                  <h3 className="text-2xl font-bold">{block.title}</h3>
                  <p className="mt-3 text-white/80">{block.text}</p>
                  <div className="mt-6">
                    <Link
                      href={block.href}
                      className="inline-flex h-12 items-center justify-center rounded-full bg-[#1E90FF] px-8 text-sm font-semibold text-white shadow-lg shadow-[#1E90FF]/20 transition hover:bg-[#187bcd]"
                    >
                      {block.buttonText}
                    </Link>
                  </div>
                </div>
              );
              return null;
            })}
          </article>

          {/* Related */}
          <div className="mt-14 border-t border-black/5 pt-10">
            <h3 className="text-lg font-bold text-[#0B0B0B]">Más del blog</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2).map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl border border-black/5 bg-white p-5 hover:bg-black/[0.02] transition">
                  <p className="text-xs font-semibold text-[#1E90FF]">{p.category}</p>
                  <p className="mt-2 font-bold text-[#0B0B0B]">{p.title}</p>
                  <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}