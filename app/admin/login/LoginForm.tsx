"use client";
import {useState,type FormEvent} from "react";
import {useRouter} from "next/navigation";
export default function LoginForm(){
 const router=useRouter();const [password,setPassword]=useState("");const [error,setError]=useState("");const [busy,setBusy]=useState(false);
 async function submit(e:FormEvent){e.preventDefault();setBusy(true);setError("");
 try{const r=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password})});
 const data=await r.json();if(!r.ok)throw new Error(data.error||"Error de acceso.");router.replace("/admin");router.refresh();}
 catch(e){setError(e instanceof Error?e.message:"Error de acceso.");setBusy(false);}
 }
 return <section className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-24 text-white">
 <h1 className="text-3xl font-extrabold">Administración JJHP</h1><p className="mt-3 text-white/60">Acceso privado para gestionar el blog.</p>
 <form onSubmit={submit} className="mt-10 space-y-5"><label htmlFor="password" className="block text-sm font-semibold">Contraseña</label>
 <input id="password" type="password" autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)}
 required className="w-full rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-white"/>
 {error&&<p role="alert" className="text-red-400">{error}</p>}
 <button disabled={busy} className="w-full rounded-xl bg-[#1E90FF] px-6 py-3 font-bold disabled:opacity-50">{busy?"Comprobando...":"Entrar"}</button></form></section>;
}
