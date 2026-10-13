import Image from "next/image";
import Link from "next/link";

export default function SobreJuanjo() {
  return (
    <section id="sobre-mi" className="overflow-hidden bg-[#f2f0ea] text-[#0b1115]">
      <div className="site-container section-space">
        <div className="grid gap-10 border-b border-[#cdd0c9] pb-12 lg:grid-cols-[1.25fr_.75fr] lg:items-end lg:gap-24 lg:pb-17">
          <div>
            <p className="kicker">01 / QUIÉN HAY DETRÁS</p>
            <h2 className="section-heading mt-7">EL MÉTODO TIENE <span className="text-[#077c92]">NOMBRE PROPIO.</span></h2>
          </div>
          <p className="body-copy max-w-md text-[#506068]">Juanjo Hidalgo. Preparador físico, entrenador y competidor. Más de una década transformando experiencia en programas que tienen sentido para cada persona.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.02fr_.98fr] lg:gap-12">
          <div className="relative min-h-[340px] overflow-hidden bg-[#283036] sm:min-h-[560px] lg:min-h-[660px]">
            <Image src="/sobrejuanjo/sobrejuanjo2.webp" alt="Juanjo en preparación física, trabajando su forma de competición" fill
              sizes="(max-width:1023px) 100vw, 50vw" className="object-cover object-center"/>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1115]/80 to-transparent p-6 pt-24 text-white sm:p-9">
              <div className="flex items-center justify-between border-t border-white/60 pt-4 text-[11px] font-extrabold uppercase tracking-[.13em]">
                <span>EXPERIENCIA REAL</span><span>NO HAY ATAJOS.</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-10 border-t-2 border-[#0b1115] pt-8 lg:border-t-0 lg:px-8 lg:pt-4">
            <div>
              <span className="text-[11px] font-extrabold tracking-[.22em] text-[#077c92]">JJHP / DESDE LA EXPERIENCIA</span>
              <h3 className="mt-10 text-[clamp(2.1rem,4.5vw,4.8rem)] font-black leading-[1.05] tracking-[-.075em]">
                EL CAMBIO SE ENTRENA.<br/><span className="text-[#077c92]">NO SE PROMETE.</span>
              </h3>
              <p className="body-copy mt-9 max-w-xl text-[#506068]">He trabajado con personas que empiezan de cero y con atletas que preparan una competición. Mi trabajo consiste en entender dónde estás y construir contigo el siguiente paso.</p>
              <p className="body-copy mt-5 max-w-xl text-[#506068]">Cada decisión tiene un porqué: una carga, un ajuste nutricional, una revisión. Porque progresar no consiste en hacerlo todo, sino en hacer lo que toca.</p>
            </div>
            <div>
              <div className="flex items-baseline gap-4 border-t border-[#cbd1ce] py-6">
                <span className="text-[clamp(3.6rem,6.5vw,6rem)] font-black leading-none tracking-[-.1em]">10<span className="text-[#077c92]">+</span></span>
                <p className="max-w-[200px] text-sm font-bold leading-6 text-[#506068]">Años de experiencia en preparación física</p>
              </div>
              <Link href="/#contacto" className="action-dark mt-5">CONOCER A JUANJO <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}