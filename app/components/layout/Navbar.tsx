"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Método", href: "#metodo" },
  { label: "Tarifas", href: "#tarifas" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const headerClass = useMemo(() => {
    if (!scrolled) return "bg-transparent";
    return "bg-black/60 backdrop-blur-2xl border-b border-white/10";
  }, [scrolled]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${headerClass}`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* LOGO */}
          <Link
            href="/"
            className="group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Ir a inicio"
          >
            <Image
              src="/logo_jjhp.png"
              alt="JJHP"
              width={500}
              height={250}
              className="h-11 w-auto opacity-95 transition-opacity group-hover:opacity-100"
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium text-white/70 transition hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white/80 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <Link
              href="/blog"
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              Blog
            </Link>

            <a
              href="#contacto"
              className="inline-flex h-10 items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Empieza ahora
            </a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Abrir menú"
          >
            <span className="relative block h-[2px] w-5 bg-white">
              <span className="absolute -top-2 left-0 h-[2px] w-5 bg-white" />
              <span className="absolute top-2 left-0 h-[2px] w-5 bg-white" />
            </span>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-[100] md:hidden">
          
          {/* Overlay */}
          <button
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          />

          {/* BLACK SHEET */}
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-black border-l border-white/10 shadow-2xl animate-slideIn">
            
            {/* Header */}
            <div className="flex h-20 items-center justify-between px-6 border-b border-white/10">
              <Image
                src="/logo_jjhp.png"
                alt="JJHP"
                width={500}
                height={250}
                className="h-9 w-auto"
              />

              <button
                onClick={closeMenu}
                className="text-white text-xl"
                aria-label="Cerrar menú"
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <div className="px-6 py-8">
              <div className="flex flex-col gap-6">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="text-lg font-semibold text-white/85 transition hover:text-[#1E90FF]"
                  >
                    {item.label}
                  </a>
                ))}

                <Link
                  href="/blog"
                  onClick={closeMenu}
                  className="text-lg font-semibold text-white/85 transition hover:text-[#1E90FF]"
                >
                  Blog
                </Link>

                <div className="mt-4 h-px w-full bg-white/10" />

                <a
                  href="#contacto"
                  onClick={closeMenu}
                  className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-[#1E90FF] px-6 text-sm font-semibold text-white transition hover:bg-[#187bcd]"
                >
                  Empieza ahora
                </a>

                <p className="mt-4 text-xs text-white/50">
                  Respuesta rápida por WhatsApp y seguimiento real.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}