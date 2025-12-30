"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra menú al navegar
  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-black/95 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* LOGO */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-lg font-extrabold text-white">JJHP</span>
          <span className="text-xs tracking-wide text-gray-400">
            Juanjo Fitness
          </span>
        </Link>

        {/* LINKS DESKTOP */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#metodo"
            className="text-sm text-gray-300 hover:text-[#1E90FF] transition"
          >
            MÉTODO
          </a>
          <a
            href="#servicios"
            className="text-sm text-gray-300 hover:text-[#1E90FF] transition"
          >
            SERVICIOS
          </a>
          <Link
            href="/blog"
            className="text-sm text-gray-300 hover:text-[#1E90FF] transition"
          >
            BLOG
          </Link>

          <a
            href="#contacto"
            className="rounded-md bg-[#1E90FF] px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#187bcd] transition"
          >
            EMPIEZA AHORA
          </a>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
          aria-label="Abrir menú"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-t border-white/10" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-6 bg-black px-6 py-6">
          <a
            href="#metodo"
            onClick={closeMenu}
            className="text-gray-300 hover:text-[#1E90FF] transition"
          >
            Método
          </a>
          <a
            href="#servicios"
            onClick={closeMenu}
            className="text-gray-300 hover:text-[#1E90FF] transition"
          >
            Servicios
          </a>
          <Link
            href="/blog"
            onClick={closeMenu}
            className="text-gray-300 hover:text-[#1E90FF] transition"
          >
            Blog
          </Link>
          <a
            href="#contacto"
            onClick={closeMenu}
            className="mt-4 rounded-md bg-[#1E90FF] px-6 py-3 text-center font-semibold text-white shadow hover:bg-[#187bcd] transition"
          >
            Empieza ahora
          </a>
        </nav>
      </div>
    </header>
  );
}
