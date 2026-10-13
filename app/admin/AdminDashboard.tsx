"use client";
import {useEffect,useState,type FormEvent,type ChangeEvent} from "react";
import {useRouter} from "next/navigation";
import {CATEGORIES,slugify,type BlogPost} from "@/lib/blog-types";
import Markdown from "@/app/components/blog/Markdown";
type Draft=BlogPost;
const today=()=>new Date().toISOString().slice(0,10);
const empty=():Draft=>({slug:"",title:"",excerpt:"",body:"",cover:"",date:today(),updatedAt:new Date().toISOString(),status:"draft",category:"Entrenamiento",author:"Juanjo Hidalgo",tags:[]});
export default function AdminDashboard(){
 const router=useRouter();const [posts,setPosts]=useState<BlogPost[]>([]);const [form,setForm]=useState<Draft>(empty);const [original,setOriginal]=useState<string|null>(null);
 const [loading,setLoading]=useState(true);const [busy,setBusy]=useState(false);const [message,setMessage]=useState("");const [error,setError]=useState("");const [preview,setPreview]=useState(false);const [tagText,setTagText]=useState("");
 const set=<K extends keyof Draft>(key:K,value:Draft[K])=>setForm(old=>({...old,[key]:value}));
 async function load(){setLoading(true);try{const r=await fetch("/api/admin/posts",{cache:"no-store"});const data=await r.json();if(!r.ok)throw new Error(data.error||"No se pudo cargar.");setPosts(data.posts);}
 catch(e){setError(e instanceof Error?e.message:"Error inesperado.");}finally{setLoading(false);}}
 useEffect(()=>{void load();},[]);
 function edit(p:BlogPost){setForm({...p});setTagText(p.tags.join(", "));setOriginal(p.slug);setError("");setMessage("");setPreview(false);window.scrollTo({top:0,behavior:"smooth"});}
 function fresh(){setForm(empty());setOriginal(null);setTagText("");setError("");setMessage("");setPreview(false);}
 async function save(e:FormEvent){e.preventDefault();setBusy(true);setError("");setMessage("");
 try{const body={...form,slug:form.slug||slugify(form.title),updatedAt:new Date().toISOString(),tags:tagText.split(",").map(s=>s.trim()).filter(Boolean)};
 const r=await fetch(original?"/api/admin/posts/"+original:"/api/admin/posts",{method:original?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
 const data=await r.json();if(!r.ok)throw new Error(data.error||"Error al guardar.");setMessage("Guardado en GitHub. Los cambios aparecerán al finalizar el despliegue de Vercel.");edit(data.post);setMessage("Guardado en GitHub. Los cambios aparecerán al finalizar el despliegue de Vercel.");await load();}
 catch(e){setError(e instanceof Error?e.message:"Error inesperado.");}finally{setBusy(false);}}
 async function remove(p:BlogPost){if(!confirm("¿Eliminar definitivamente «"+p.title+"»?"))return;setBusy(true);setError("");
 try{const r=await fetch("/api/admin/posts/"+p.slug,{method:"DELETE"});const data=await r.json();if(!r.ok)throw new Error(data.error||"Error.");if(original===p.slug)fresh();setMessage("Artículo eliminado del repositorio.");await load();}
 catch(e){setError(e instanceof Error?e.message:"Error.");}finally{setBusy(false);}}
 async function upload(e:ChangeEvent<HTMLInputElement>,cover:boolean){const f=e.target.files?.[0];if(!f)return;setBusy(true);setError("");
 try{const fd=new FormData();fd.append("file",f);const r=await fetch("/api/admin/upload",{method:"POST",body:fd});const data=await r.json();if(!r.ok)throw new Error(data.error||"No se ha subido.");if(cover)set("cover",data.url);
 else setForm(old=>({...old,body:old.body+(old.body?"\n\n":"")+"![Descripción de la fotografía]("+data.url+")"}));
 setMessage("Imagen subida a GitHub. Aparecerá tras el despliegue.");}
 catch(e){setError(e instanceof Error?e.message:"Error.");}finally{setBusy(false);e.target.value="";}}
 async function logout(){await fetch("/api/admin/logout",{method:"POST"});router.replace("/admin/login");router.refresh();}
 const field="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900";
 return <div className="min-h-screen bg-slate-100 text-slate-900"><div className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6">
 <div className="flex flex-wrap items-center justify-between gap-4"><div><p className="text-sm font-semibold text-blue-600">JJHP · Gestión de contenidos</p><h1 className="text-3xl font-black">Administración del blog</h1></div>
 <div className="flex gap-3"><a href="/blog" target="_blank" className="rounded-xl border border-slate-300 px-4 py-2">Ver blog</a><button onClick={logout} className="rounded-xl bg-slate-950 px-4 py-2 text-white">Cerrar sesión</button></div></div>
 <p className="mt-3 text-sm text-slate-600">Los borradores no son públicos. Las publicaciones se guardan en GitHub y se muestran cuando Vercel despliega la nueva versión.</p>
 {error&&<p role="alert" className="mt-5 rounded-xl bg-red-100 p-4 text-red-800">{error}</p>}
 {message&&<p role="status" className="mt-5 rounded-xl bg-green-100 p-4 text-green-800">{message}</p>}
 <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
 <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-8"><div className="mb-6 flex items-center justify-between"><h2 className="text-xl font-bold">{original?"Editar publicación":"Nueva publicación"}</h2><button onClick={fresh} className="text-sm font-semibold text-blue-600">+ Nueva</button></div>
 <form onSubmit={save} className="space-y-5">
 <label className="block text-sm font-semibold">Título<input required maxLength={120} value={form.title} onChange={e=>{const title=e.target.value;setForm(old=>({...old,title,slug:original?old.slug:slugify(title)}));}} className={"mt-2 "+field}/></label>
 <label className="block text-sm font-semibold">URL del artículo (slug)<input required disabled={Boolean(original)} value={form.slug} maxLength={90} onChange={e=>set("slug",e.target.value)} className={"mt-2 "+field+" disabled:opacity-60"}/></label>
 <label className="block text-sm font-semibold">Descripción breve<textarea required maxLength={400} rows={3} value={form.excerpt} onChange={e=>set("excerpt",e.target.value)} className={"mt-2 "+field}/></label>
 <div className="grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold">Categoría<select value={form.category} onChange={e=>set("category",e.target.value as Draft["category"])} className={"mt-2 "+field}>{CATEGORIES.map(c=><option key={c}>{c}</option>)}</select></label>
 <label className="text-sm font-semibold">Estado<select value={form.status} onChange={e=>set("status",e.target.value as Draft["status"])} className={"mt-2 "+field}><option value="draft">Borrador</option><option value="published">Publicado</option></select></label></div>
 <div className="grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold">Fecha<input type="date" value={form.date} onChange={e=>set("date",e.target.value)} className={"mt-2 "+field}/></label><label className="text-sm font-semibold">Autor<input value={form.author} onChange={e=>set("author",e.target.value)} className={"mt-2 "+field}/></label></div>
 <label className="block text-sm font-semibold">Etiquetas separadas por comas<input value={tagText} onChange={e=>setTagText(e.target.value)} className={"mt-2 "+field}/></label>
 <div className="rounded-xl bg-slate-50 p-4"><p className="font-semibold">Imagen de portada</p><input aria-label="Subir portada" type="file" accept="image/jpeg,image/png,image/webp" disabled={busy} onChange={e=>void upload(e,true)} className="mt-3 block w-full text-sm"/>
 {form.cover&&<div className="mt-3"><img src={form.cover} alt="Portada del artículo" className="max-h-40 rounded-lg object-contain"/><p className="mt-1 break-all text-xs">{form.cover}</p></div>}</div>
 <label className="block text-sm font-semibold">Contenido del artículo (Markdown)<textarea required maxLength={80000} rows={18} value={form.body} onChange={e=>set("body",e.target.value)} placeholder={"## Primer apartado\n\nEscribe aquí...\n\n- Un punto\n- Otro punto"} className={"mt-2 font-mono text-sm "+field}/></label>
 <div className="rounded-xl bg-slate-50 p-4"><p className="font-semibold">Añadir fotos al contenido</p><p className="mt-1 text-xs text-slate-600">JPG, PNG o WebP. Máximo 2 MB. Se insertará un enlace a la fotografía en el texto.</p><input aria-label="Subir foto al artículo" type="file" accept="image/jpeg,image/png,image/webp" disabled={busy} onChange={e=>void upload(e,false)} className="mt-3 block w-full text-sm"/></div>
 <button type="button" onClick={()=>setPreview(p=>!p)} className="rounded-xl border border-slate-300 px-5 py-3 font-bold">{preview?"Ocultar vista previa":"Vista previa del texto"}</button>
 {preview&&<div className="rounded-xl border p-6"><Markdown body={form.body}/></div>}
 <button type="submit" disabled={busy} className="block w-full rounded-xl bg-[#1E90FF] px-6 py-4 font-bold text-white disabled:opacity-50">{busy?"Guardando...":original?"Guardar cambios":"Crear artículo"}</button>
 </form></div>
 <aside className="h-fit rounded-2xl bg-white p-5 shadow-sm"><div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-bold">Publicaciones</h2><button onClick={()=>void load()} className="text-xs text-blue-600">Actualizar</button></div>
 {loading?<p>Cargando...</p>:posts.length===0?<p className="text-sm text-slate-500">Todavía no hay artículos.</p>:<div className="space-y-4">{posts.map(p=><div key={p.slug} className="border-b pb-4"><p className="font-semibold">{p.title}</p><p className="mt-1 text-xs text-slate-500">{p.date} · {p.status==="published"?"Publicado":"Borrador"}</p><div className="mt-3 flex gap-4"><button onClick={()=>edit(p)} className="text-sm font-semibold text-blue-600">Editar</button><button disabled={busy} onClick={()=>void remove(p)} className="text-sm text-red-600">Eliminar</button></div></div>)}</div>}</aside></div></div></div>;
}
