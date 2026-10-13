import Link from "next/link";
import Image from "next/image";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {findPost,publishedPosts} from "@/lib/posts";
import Markdown from "@/app/components/blog/Markdown";
export const dynamicParams=true;
export function generateStaticParams(){return publishedPosts().map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;const p=findPost(slug);if(!p)return {title:"Artículo no encontrado",robots:{index:false}};
 return {title:p.title,description:p.excerpt,alternates:{canonical:"/blog/"+p.slug},openGraph:{title:p.title,description:p.excerpt,type:"article",publishedTime:p.date,images:p.cover?[p.cover]:undefined}};
}
export default async function BlogPostPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const post=findPost(slug);if(!post)notFound();
 return <article className="min-h-screen bg-white pb-20 pt-32 text-slate-900"><div className="mx-auto max-w-3xl px-5">
 <Link href="/blog" className="text-sm font-semibold text-blue-600">← Volver al blog</Link>
 <div className="mt-9 text-sm font-semibold text-blue-600">{post.category} · {post.date}</div>
 <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">{post.title}</h1>
 <p className="mt-5 text-xl text-slate-600">{post.excerpt}</p><p className="mt-5 text-sm text-slate-500">Por {post.author}</p>
 {post.cover&&<div className="relative mt-10 aspect-video overflow-hidden rounded-2xl"><Image alt={post.title} src={post.cover} fill priority sizes="(max-width:768px) 100vw, 768px" className="object-cover"/></div>}
 <div className="mt-12"><Markdown body={post.body}/></div>
 <div className="mt-16 border-t pt-8"><p className="text-lg font-bold">¿Quieres empezar a entrenar?</p><a href="/#contacto" className="mt-5 inline-block rounded-xl bg-[#1E90FF] px-6 py-3 font-semibold text-white">Contactar con Juanjo</a></div>
 </div></article>;
}
