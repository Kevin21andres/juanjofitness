import Link from "next/link";
import Image from "next/image";
import type {Metadata} from "next";
import {publishedPosts,CATEGORIES} from "@/lib/posts";
export const metadata:Metadata={title:"Blog",description:"Guías de entrenamiento, nutrición y competición escritas por Juanjo Hidalgo.",alternates:{canonical:"/blog"}};

export default async function BlogPage({searchParams}:{searchParams:Promise<{q?:string;cat?:string}>}){
 const query=await searchParams;const q=(query.q||"").slice(0,100).toLowerCase().trim();const cat=query.cat||"Todos";
 const posts=publishedPosts().filter(p=>(cat==="Todos"||p.category===cat)&&(!q||[p.title,p.excerpt,p.body,p.tags.join(" ")].join(" ").toLowerCase().includes(q)));
 return <div className="min-h-screen bg-[#0B0B0B] pt-28 text-white"><div className="mx-auto max-w-7xl px-5 pb-24">
 <p className="text-sm font-bold uppercase tracking-widest text-[#1E90FF]">Blog JJHP</p><h1 className="mt-4 text-4xl font-extrabold sm:text-6xl">Entrenamiento, nutrición y disciplina</h1>
 <p className="mt-5 max-w-2xl text-white/65">Consejos profesionales para mejorar tu rendimiento, tus hábitos y tu salud.</p>
 <form className="mt-10 flex max-w-lg gap-3"><input name="q" aria-label="Buscar artículos" defaultValue={query.q||""} placeholder="Buscar publicaciones..." className="min-w-0 flex-1 rounded-xl border border-white/20 bg-white/10 p-3 text-white"/><button className="rounded-xl bg-[#1E90FF] px-6 font-bold">Buscar</button></form>
 <nav aria-label="Categorías del blog" className="mt-6 flex flex-wrap gap-2">{(["Todos",...CATEGORIES] as string[]).map(c=><Link key={c} href={"/blog?cat="+encodeURIComponent(c)+(q?"&q="+encodeURIComponent(q):"")} className={"rounded-full px-4 py-2 text-sm "+(cat===c?"bg-[#1E90FF] text-white":"bg-white/10 text-white/80")}>{c}</Link>)}</nav>
 {posts.length===0?<p className="mt-12 rounded-xl bg-white/10 p-6">No hay publicaciones para estos filtros.</p>:
 <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">{posts.map(p=><Link href={"/blog/"+p.slug} key={p.slug} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10">
 <div className="relative aspect-[16/10] bg-black/50">{p.cover?<Image alt={p.title} src={p.cover} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover"/>:<div className="flex h-full items-center justify-center text-xl font-bold text-white/40">JJHP</div>}</div>
 <div className="p-6"><p className="text-xs text-[#1E90FF]">{p.category} · {p.date}</p><h2 className="mt-3 text-xl font-bold">{p.title}</h2><p className="mt-3 text-sm leading-6 text-white/65">{p.excerpt}</p></div></Link>)}</div>}</div></div>;
}
