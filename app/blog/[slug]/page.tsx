import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { publishedPosts } from "@/lib/posts";
import { getPublishedBlogPosts } from "@/lib/current-posts";
import { mediaUrl } from "@/lib/blog-types";
import Markdown from "@/app/components/blog/Markdown";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export function generateStaticParams() {
  return publishedPosts().map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = (await getPublishedBlogPosts()).find(item => item.slug === slug);
  if (!post) return { title: "Artículo no encontrado", robots: { index: false } };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: "/blog/" + post.slug },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: post.cover ? [mediaUrl(post.cover)] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (await getPublishedBlogPosts()).find(item => item.slug === slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#f6f6f3] pt-[var(--header-height)] text-[#101820]">
      <article>
        <header className="site-container max-w-[1000px] py-14 sm:py-20">
          <Link href="/blog" className="inline-flex items-center gap-3 text-sm font-extrabold text-[#0967af] hover:underline">← Volver al blog</Link>
          <div className="mt-9 flex flex-wrap gap-3 text-xs font-extrabold uppercase tracking-[.12em]">
            <span className="text-[#1684d4]">{post.category}</span><span className="text-[#a7afb4]">/</span>
            <time dateTime={post.date} className="text-[#63707c]">{post.date}</time>
          </div>
          <h1 className="mt-5 max-w-[920px] text-[clamp(2.2rem,5.3vw,4.8rem)] font-extrabold leading-[1.08] tracking-[-.055em]">{post.title}</h1>
          <p className="mt-7 max-w-[760px] text-lg leading-8 text-[#52616b]">{post.excerpt}</p>
          <p className="mt-7 border-t border-[#d6dddf] pt-5 text-sm font-bold">Por {post.author}</p>
        </header>

        {post.cover && (
          <div className="site-container max-w-[1120px]">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#dce1e2] sm:aspect-[16/8]">
              <Image src={mediaUrl(post.cover)} alt={post.title} fill
                unoptimized={post.cover.startsWith("/blog/uploads/")} priority
                sizes="(max-width: 1120px) 100vw, 1120px" className="object-cover" />
            </div>
          </div>
        )}

        <div className="site-container max-w-[770px] pb-20 pt-12 sm:pb-28 sm:pt-16">
          <Markdown body={post.body}/>
          {post.tags.length > 0 &&
            <div className="mt-12 flex flex-wrap gap-2 border-t border-[#d6dddf] pt-7">
              {post.tags.map(tag => <span key={tag} className="border border-[#d6dddf] px-3 py-2 text-xs font-bold text-[#52616b]">{tag}</span>)}
            </div>
          }
          <div className="mt-15 border-t border-[#d6dddf] pt-10">
            <h2 className="text-2xl font-extrabold tracking-tight">¿Quieres ponerlo en práctica?</h2>
            <p className="mt-4 text-sm leading-7 text-[#52616b]">Hablemos de un plan adaptado a tus objetivos.</p>
            <Link href="/#contacto" className="action-dark mt-7">Hablar con Juanjo <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </article>
    </main>
  );
}