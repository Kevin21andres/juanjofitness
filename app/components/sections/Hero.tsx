import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#101820] pt-[var(--header-height)] text-white" aria-labelledby="hero-title">
      <div className="site-container grid min-h-[650px] items-stretch gap-10 pb-12 pt-14 md:min-h-[730px] md:grid-cols-[1.1fr_.9fr] md:gap-14 md:pb-16 md:pt-20 lg:gap-20">
        <div className="flex flex-col justify-center py-4">
          <p className="kicker kicker-light">Juanjo Hidalgo · Preparación física</p>
          <h1 id="hero-title" className="display-heading mt-7 max-w-[720px]">
            El progreso <span className="text-[#83c9fb]">no se improvisa.</span>
          </h1>
          <p className="body-copy mt-8 max-w-lg text-white/70">
            Entrenamiento y planificación adaptados a ti. Sin rutinas copiadas ni promesas rápidas: un plan claro, seguimiento y trabajo constante.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/#tarifas" className="action-primary">Ver programas <span aria-hidden="true">↗</span></Link>
            <Link href="/#metodo" className="action-outline">Conoce el método <span aria-hidden="true">↓</span></Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-[13px] font-semibold text-white/65">
            <span><span className="mr-2 text-[#83c9fb]" aria-hidden="true">●</span> Tarragona</span>
            <span><span className="mr-2 text-[#83c9fb]" aria-hidden="true">●</span> Asesoramiento online</span>
          </div>
        </div>
        <div className="relative min-h-[400px] overflow-hidden bg-[#27323a] md:min-h-[580px]">
          <Image
            src="/hero/jjhp.webp"
            alt="Juanjo Hidalgo, entrenador personal y preparador físico"
            fill priority
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 44vw, 540px"
            className="object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101820]/90 via-[#101820]/15 to-transparent p-6 pt-24 sm:p-8 sm:pt-32">
            <div className="flex items-end justify-between gap-3 border-t border-white/35 pt-5">
              <p className="text-sm font-bold">JJHP <span className="font-medium text-white/75">/ Entrenamiento con criterio</span></p>
              <span className="text-xs font-bold tracking-[.13em] text-white/80">TARRAGONA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}