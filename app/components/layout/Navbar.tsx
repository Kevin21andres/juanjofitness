"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "El método", href: "/#metodo" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Resultados", href: "/#personas" },
  { label: "Tarifas", href: "/#tarifas" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", escape);
    return () => {
      window.removeEventListener("keydown", escape);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/12 bg-[#0b1115]/97 text-white backdrop-blur-xl">
      <div className="site-container flex h-[var(--header-height)] items-center justify-between gap-6">
        <Link href="/" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-4" aria-label="JJHP - inicio">
          <Image src="/logo_jjhp.png" alt="Juanjo Fitness" width={240} height={120} priority className="h-11 w-auto object-contain max-sm:h-9"/>
          <span className="hidden border-l border-white/20 pl-4 text-[9px] font-extrabold uppercase leading-[1.6] tracking-[.15em] text-white/50 2xl:block">Personal<br/>Training Studio</span>
        </Link>
        <nav aria-label="Navegación principal" className="hidden items-center gap-9 lg:flex">
          {menu.map(item => <Link key={item.href} href={item.href} aria-current={item.href === "/blog" && pathname.startsWith("/blog") ? "page" : undefined}
            className="group relative py-3 text-[12px] font-bold tracking-wide text-white/70 transition-colors hover:text-white" >
            {item.label}<span className="absolute bottom-0 left-0 h-px w-0 bg-[#1ad8ec] transition-all duration-300 group-hover:w-full"/>
          </Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/#contacto" className="hidden min-h-12 items-center gap-5 border border-[#1ad8ec] bg-[#1ad8ec] px-5 text-[12px] font-extrabold text-[#0b1115] transition hover:border-white hover:bg-white sm:inline-flex">
            EMPEZAR <span aria-hidden="true" className="text-lg">↗</span>
          </Link>
          <button type="button" onClick={() => setOpen(v => !v)} aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open} aria-controls="nav-mobile"
            className="flex h-12 w-12 items-center justify-center border border-white/25 lg:hidden max-sm:h-10 max-sm:w-10">
            {open ? <span aria-hidden="true" className="text-2xl leading-none">×</span> :
              <span aria-hidden="true" className="flex w-5 flex-col gap-[6px]"><span className="h-[2px] bg-white"/><span className="h-[2px] bg-white"/><span className="h-[2px] w-3 bg-[#1ad8ec]"/></span>}
          </button>
        </div>
      </div>
      {open && (
        <nav id="nav-mobile" aria-label="Menú móvil" className="fixed inset-x-0 top-[var(--header-height)] z-50 h-[calc(100dvh-var(--header-height))] overflow-y-auto border-t border-white/15 bg-[#0b1115] px-5 py-7 lg:hidden">
          <div className="mx-auto max-w-2xl">
            <p className="kicker kicker-light mb-4">Explorar / JJHP</p>
            {menu.map((item,index)=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)} className="flex min-h-[72px] items-center justify-between border-b border-white/15 text-[clamp(1.5rem,5vw,2.1rem)] font-extrabold tracking-tight">
              {item.label}<span className="text-xs font-bold tracking-widest text-[#1ad8ec]">{String(index+1).padStart(2,"0")} ↗</span>
            </Link>)}
            <Link href="/#contacto" onClick={()=>setOpen(false)} className="action-primary mt-10 w-full">SOLICITAR INFORMACIÓN <span aria-hidden="true">↗</span></Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-white/50">Tarragona · Online</p>
          </div>
        </nav>
      )}
    </header>
  );
}