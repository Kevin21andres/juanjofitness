import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "../ui/InstagramIcon";
import FacebookIcon from "../ui/FacebookIcon";

const links=[{label:"Método",href:"/#metodo"},{label:"Servicios",href:"/#servicios"},{label:"Resultados",href:"/#personas"},{label:"Tarifas",href:"/#tarifas"},{label:"Blog",href:"/blog"}];

export default function Footer(){
 return <footer className="overflow-hidden border-t border-white/15 bg-[#0b1115] text-white">
   <div className="site-container">
     <div className="grid gap-12 py-18 lg:grid-cols-[1.5fr_.65fr_.7fr] lg:gap-20">
       <div>
         <Link href="/" aria-label="Juanjo Fitness - inicio" className="inline-flex items-center">
           <Image src="/logo_jjhp.png" alt="JJHP" width={300} height={150} className="h-15 w-auto" />
         </Link>
         <h2 className="mt-7 text-[clamp(2rem,3.7vw,4.1rem)] font-black leading-[1.05] tracking-[-.06em]">LA DIFERENCIA<br/><span className="text-[#1ad8ec]">SE ENTRENA.</span></h2>
         <p className="mt-6 max-w-sm text-sm font-medium leading-7 text-white/55">Entrenamiento y preparación física en Tarragona y online. Conoce tu punto de partida, construye un plan y sigue avanzando.</p>
       </div>
       <nav aria-label="Enlaces del pie de página">
         <h2 className="text-[11px] font-black uppercase tracking-[.19em] text-[#1ad8ec]">EXPLORAR</h2>
         <ul className="mt-7 space-y-4">{links.map(l=><li key={l.href}><Link href={l.href} className="text-sm font-bold text-white/75 transition-colors hover:text-[#1ad8ec]">{l.label}</Link></li>)}</ul>
       </nav>
       <div>
         <h2 className="text-[11px] font-black uppercase tracking-[.19em] text-[#1ad8ec]">HABLEMOS</h2>
         <a href="mailto:jjhp2026@outlook.es" className="mt-7 block break-words text-sm font-bold hover:text-[#1ad8ec]">jjhp2026@outlook.es</a>
         <a href="https://wa.me/34649833960" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-bold hover:text-[#1ad8ec]">WHATSAPP ↗</a>
         <address className="mt-6 text-sm not-italic leading-7 text-white/55">Av. Catalunya, 31<br/>43002 Tarragona</address>
         <div className="mt-7 flex gap-3">
           <a href="https://www.instagram.com/juanjofitness/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Juanjo Fitness" className="flex h-11 w-11 items-center justify-center border border-white/25 transition-colors hover:border-[#1ad8ec]"><InstagramIcon className="h-5 w-5"/></a>
           <a href="https://www.facebook.com/p/Juanjo-Hidalgo-100063191922499/?locale=es_ES" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Juanjo Fitness" className="flex h-11 w-11 items-center justify-center border border-white/25 transition-colors hover:border-[#1ad8ec]"><FacebookIcon className="h-5 w-5"/></a>
         </div>
       </div>
     </div>
     <div className="flex flex-col gap-4 border-t border-white/20 py-7 text-[11px] font-bold text-white/45 md:flex-row md:items-center md:justify-between">
       <p>© {new Date().getFullYear()} JJHP / JUANJO FITNESS. TARRAGONA.</p>
       <nav aria-label="Enlaces legales" className="flex flex-wrap gap-x-6 gap-y-3">
         <Link href="/legal" className="hover:text-white">AVISO LEGAL</Link>
         <Link href="/privacy" className="hover:text-white">PRIVACIDAD</Link>
         <Link href="/cookies" className="hover:text-white">COOKIES</Link>
       </nav>
     </div>
   </div>
 </footer>;
}