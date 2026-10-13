import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "../ui/InstagramIcon";
import FacebookIcon from "../ui/FacebookIcon";

const footerLinks = [
  {label:"Sobre Juanjo",href:"/#sobre-mi"},
  {label:"Servicios",href:"/#servicios"},
  {label:"Método",href:"/#metodo"},
  {label:"Tarifas",href:"/#tarifas"},
  {label:"Blog",href:"/blog"},
];

export default function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[#101820] text-white">
      <div className="site-container grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16 md:py-20">
        <div>
          <Link href="/" aria-label="Juanjo Fitness, inicio">
            <Image src="/logo_jjhp.png" alt="Juanjo Fitness" width={260} height={130} className="h-13 w-auto"/>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
            Entrenamiento personal y preparación física con un método adaptado a tus objetivos. Tarragona y online.
          </p>
          <div className="mt-7 flex items-center gap-3">
            <a href="https://www.instagram.com/juanjofitness/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Juanjo Fitness" className="flex h-11 w-11 items-center justify-center border border-white/25 transition-colors hover:border-white"><InstagramIcon className="h-5 w-5" /></a>
            <a href="https://www.facebook.com/p/Juanjo-Hidalgo-100063191922499/?locale=es_ES" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Juanjo Fitness" className="flex h-11 w-11 items-center justify-center border border-white/25 transition-colors hover:border-white"><FacebookIcon className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-[.18em] text-white/50">Explora</h2>
          <nav aria-label="Navegación del pie" className="mt-6 flex flex-col items-start gap-4">
            {footerLinks.map(link => <Link key={link.href} href={link.href} className="text-sm font-semibold transition-colors hover:text-[#83c9fb]">{link.label}</Link>)}
          </nav>
        </div>
        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-[.18em] text-white/50">Hablemos</h2>
          <a href="mailto:jjhp2026@outlook.es" className="mt-6 block break-all text-sm font-semibold hover:text-[#83c9fb]">jjhp2026@outlook.es</a>
          <a href="https://wa.me/34649833960" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-semibold hover:text-[#83c9fb]">WhatsApp ↗</a>
          <p className="mt-7 text-sm leading-6 text-white/55">Av. Catalunya, 31<br/>43002 Tarragona</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-5 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Juanjo Fitness · JJHP</span>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/legal" className="hover:text-white">Aviso legal</Link>
            <Link href="/privacy" className="hover:text-white">Privacidad</Link>
            <Link href="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}