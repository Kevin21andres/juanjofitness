import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#0b1115] pt-[var(--header-height)] text-white">
      <div className="relative grid min-h-[680px] grid-cols-1 lg:min-h-[min(850px,calc(100svh-82px))] lg:grid-cols-[57%_43%]">
        <div className="relative z-10 flex flex-col justify-center px-[max(25px,calc((100vw-1450px)/2))] pb-9 pt-13 sm:px-11 lg:px-14 lg:py-16 xl:pl-[max(44px,calc((100vw-1450px)/2))] xl:pr-6">
          <div className="flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-[.18em] text-white/65">
            <span className="h-[2px] w-9 bg-[#1ad8ec]"/><span>JUANJO HIDALGO / TARRAGONA + ONLINE</span>
          </div>
          <h1 id="hero-title" className="mt-13 text-[clamp(3.55rem,8.4vw,10rem)] font-black leading-[.90] tracking-[-.095em] max-sm:mt-8 max-sm:text-[clamp(3.3rem,14.3vw,5.3rem)] lg:mt-14">
            ENTRENA.<br/><span className="text-[#1ad8ec]">PROGRESA.</span><br/>REPITE.
          </h1>
          <div className="mt-7 max-w-[590px] sm:mt-11 border-l-[2px] border-[#1ad8ec] pl-5 sm:pl-7">
            <p className="max-w-xl text-[clamp(1rem,1.7vw,1.25rem)] font-medium leading-[1.7] text-white/80">Tu cuerpo no necesita otra rutina genérica. Necesita un plan diseñado para ti, seguimiento real y alguien que sepa cuándo ajustar.</p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <Link href="/#contacto" className="action-primary">QUIERO EMPEZAR <span aria-hidden="true">↗</span></Link>
            <Link href="/#metodo" className="action-outline">VER EL MÉTODO <span aria-hidden="true">↓</span></Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-10 sm:mt-13 gap-y-4 border-t border-white/20 pt-5 text-xs font-bold text-white/55">
            <span><strong className="mr-2 text-lg font-black text-white">10+</strong>Años de experiencia</span>
            <span>Entrenamiento presencial <span className="text-[#1ad8ec]">/</span> online</span>
          </div>
        </div>
        <div className="relative min-h-[360px] overflow-hidden bg-[#26282a] lg:min-h-0">
          <Image src="/sobrejuanjo/sobrejuanjo.webp" alt="Juanjo Hidalgo, entrenador personal, en su centro de entrenamiento" fill priority
            sizes="(max-width:1023px) 100vw, 43vw"
            className="object-cover object-[center_30%] grayscale"/>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1115]/85 via-transparent to-[#0b1115]/15"/>
          <span aria-hidden="true" className="pointer-events-none absolute -left-1 bottom-5 hidden select-none text-[clamp(8rem,19vw,22rem)] font-black leading-none tracking-[-.12em] text-white/8 mix-blend-overlay lg:block">JJ</span>
          <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between border-t border-white/55 pt-4 text-[10px] font-black uppercase tracking-[.16em] text-white sm:left-12 sm:right-12">
            <span>THE WORK IS THE WAY.</span><span>JJHP ©</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 bg-[#11191e]">
        <div className="site-container grid gap-4 py-5 text-[10px] font-extrabold uppercase tracking-[.12em] text-white/55 sm:grid-cols-3 sm:gap-6">
          <div className="flex justify-between gap-4 sm:justify-start"><span className="text-[#1ad8ec]">01</span><span>Entrenamiento individualizado</span></div>
          <div className="flex justify-between gap-4 sm:justify-start"><span className="text-[#1ad8ec]">02</span><span>Planificación con criterio</span></div>
          <div className="flex justify-between gap-4 sm:justify-start"><span className="text-[#1ad8ec]">03</span><span>Progreso con seguimiento</span></div>
        </div>
      </div>
    </section>
  );
}