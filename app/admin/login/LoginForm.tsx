"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "No se ha podido acceder.");
      router.replace("/admin");
      router.refresh();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Error de acceso.");
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f6f6f3] pt-[var(--header-height)] text-[#101820]">
      <div className="site-container grid min-h-[calc(100dvh-var(--header-height))] items-center gap-14 py-14 lg:grid-cols-[1fr_.95fr] lg:gap-20">
        <div className="mx-auto w-full max-w-[480px] lg:mx-0">
          <p className="kicker">Área privada / JJHP</p>
          <h1 className="section-heading mt-5">Gestión de contenidos.</h1>
          <p className="mt-5 text-sm leading-7 text-[#52616b]">Acceso exclusivo para administrar las publicaciones del blog.</p>
          <form onSubmit={submit} className="mt-10 border border-[#dce1e2] bg-white p-6 sm:p-9">
            <label htmlFor="admin-password" className="block text-sm font-extrabold">Contraseña</label>
            <div className="relative mt-3">
              <input id="admin-password" type={visible ? "text" : "password"}
                autoComplete="current-password" value={password} onChange={event => setPassword(event.target.value)}
                required className="min-h-13 w-full border border-[#bdc8ce] bg-white px-4 py-3 pr-24 text-sm text-[#101820]"/>
              <button type="button" onClick={() => setVisible(current => !current)} aria-label={visible ? "Ocultar contraseña" : "Mostrar contraseña"}
                className="absolute inset-y-0 right-0 px-4 text-xs font-extrabold text-[#0967af]">{visible ? "Ocultar" : "Mostrar"}</button>
            </div>
            {error && <p role="alert" className="mt-4 border-l-[3px] border-red-700 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">{error}</p>}
            <button type="submit" disabled={busy} className="action-primary mt-6 w-full disabled:opacity-60">
              {busy ? "Comprobando acceso…" : "Entrar al panel"} <span aria-hidden="true">↗</span>
            </button>
          </form>
          <p className="mt-6 text-xs font-semibold text-[#6b7983]">Panel de uso interno. Acceso restringido.</p>
        </div>
        <div className="relative hidden min-h-[600px] overflow-hidden bg-[#101820] lg:block">
          <Image src="/sobrejuanjo/sobrejuanjo.webp" alt="Juanjo Hidalgo, preparación física" fill sizes="45vw" priority className="object-cover"/>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101820]/90 to-transparent px-8 pb-9 pt-28">
            <p className="text-sm font-extrabold text-white">JUANJO FITNESS</p>
            <p className="mt-2 text-xs font-semibold tracking-wider text-white/70">El contenido también forma parte del método.</p>
          </div>
        </div>
      </div>
    </main>
  );
}