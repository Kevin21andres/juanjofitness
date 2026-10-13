import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function SobreJuanjo() {
  return (
    <section id="sobre-mi" className="bg-[#f6f6f3] text-[#101820]">
      <div className="site-container section-space">
        <div className="grid gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-20">
          <Reveal>
            <div className="relative max-w-[520px]">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#dbe0e2]">
                <Image src="/hero/jjhp.webp" alt="Trofeos y trayectoria deportiva de Juanjo Fitness" fill
                  sizes="(max-width: 1023px) 90vw, 500px" className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-3 border-l-4 border-[#1684d4] bg-[#101820] px-6 py-5 text-white sm:right-[-28px]">
                <p className="text-2xl font-extrabold">+10 años</p>
                <p className="mt-1 text-xs font-semibold text-white/65">Experiencia en preparación física</p>
              </div>
            </div>
          </Reveal>

          <div className="pt-6 lg:pt-0">
            <Reveal>
              <p className="kicker">01 / Sobre Juanjo</p>
              <h2 className="section-heading mt-5">Detrás de cada plan hay una persona.</h2>
            </Reveal>
            <Reveal delay={.05}>
              <p className="body-copy mt-8 text-[#445361]">
                Soy Juanjo Hidalgo. Llevo más de diez años acompañando a personas que quieren cambiar su físico, mejorar su rendimiento o preparar una competición.
              </p>
              <p className="body-copy mt-5 text-[#445361]">
                Mi trabajo empieza por escucharte, entender tu punto de partida y construir algo que puedas mantener. La experiencia marca la diferencia en cada ajuste.
              </p>
              <div className="mt-9 border-t border-[#d5dbde] pt-7">
                <p className="text-sm font-bold text-[#101820]">Entrenamiento personal · Transformación corporal · Competición</p>
              </div>
              <Link href="/#contacto" className="action-dark mt-8">Habla conmigo <span aria-hidden="true">↗</span></Link>
            </Reveal>
          </div>
        </div>
        <div className="mt-24 grid gap-5 sm:grid-cols-[1.5fr_1fr]">
          <div className="relative aspect-[16/10] overflow-hidden bg-[#dfe1e0]">
            <Image src="/sobrejuanjo/sobrejuanjo2.webp" alt="Preparación física y trayectoria de Juanjo" fill sizes="(max-width: 639px) 100vw, 55vw" className="object-cover" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-[#dfe1e0] sm:aspect-auto">
            <Image src="/sobrejuanjo/sobrejuanjo3.webp" alt="Trayectoria de Juanjo en competición" fill sizes="(max-width: 639px) 100vw, 35vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}