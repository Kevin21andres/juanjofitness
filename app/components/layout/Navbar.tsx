"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Sobre Juanjo", href: "/#sobre-mi" },
  { name: "Servicios", href: "/#servicios" },
  { name: "Método", href: "/#metodo" },
  { name: "Tarifas", href: "/#tarifas" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[var(--header-height)] border-b border-white/10 bg-[#101820]/95 text-white backdrop-blur-md">
      <div className="site-container flex h-full items-center justify-between gap-8">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Juanjo Fitness, ir al inicio" className="shrink-0">
          <Image src="/logo_jjhp.png" alt="Juanjo Fitness" width={240} height={120} sizes="120px" priority className="h-10 w-auto object-contain sm:h-11" />
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className="text-[13px] font-semibold text-white/75 transition-colors hover:text-white">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/#contacto" className="hidden min-h-11 items-center rounded-[4px] bg-[#1684d4] px-5 text-[13px] font-extrabold text-white transition-colors hover:bg-[#0967af] sm:inline-flex">
            Hablemos <span aria-hidden="true" className="ml-3">↗</span>
          </Link>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="nav-mobile"
            onClick={() => setOpen(current => !current)}
            className="flex h-11 w-11 items-center justify-center border border-white/20 lg:hidden"
          >
            <span className="sr-only">Menú</span>
            {open ? <span aria-hidden="true" className="text-2xl leading-none">×</span> :
              <span aria-hidden="true" className="flex w-5 flex-col gap-[5px]"><span className="h-[2px] bg-white"/><span className="h-[2px] bg-white"/><span className="h-[2px] bg-white"/></span>}
          </button>
        </div>
      </div>

      {open && (
        <nav id="nav-mobile" aria-label="Menú móvil" className="fixed left-0 right-0 top-[var(--header-height)] z-50 h-[calc(100dvh-var(--header-height))] overflow-y-auto border-t border-white/10 bg-[#101820] p-5 lg:hidden">
          <div className="mx-auto flex max-w-xl flex-col">
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex min-h-[68px] items-center justify-between border-b border-white/15 text-lg font-bold">
                {item.name}<span aria-hidden="true" className="text-sm text-[#83c9fb]">{String(index + 1).padStart(2, "0")} ↗</span>
              </Link>
            ))}
            <Link href="/#contacto" onClick={() => setOpen(false)} className="action-primary mt-9 w-full">Solicitar información <span aria-hidden="true">↗</span></Link>
            <p className="mt-8 text-sm leading-relaxed text-white/50">Preparación física en Tarragona y online.</p>
          </div>
        </nav>
      )}
    </header>
  );
}