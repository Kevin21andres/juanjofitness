import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function SobreJuanjo() {
  return (
    <section id="sobre-mi" className="relative bg-white">

      {/* TRANSICIÓN MÁS SUTIL DESDE SECCIÓN NEGRA */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 pt-24 pb-28 sm:px-6 sm:pt-24 sm:pb-32">

        {/* BLOQUE PRINCIPAL */}
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* TEXTO */}
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-[#0B0B0B] sm:text-4xl lg:text-5xl">
                Quién está detrás de{" "}
                <span className="text-[#1E90FF] font-semibold">JJHP</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Soy Juanjo Hidalgo, preparador físico y entrenador personal con
                más de{" "}
                <strong className="text-[#0B0B0B]">
                  10 años de experiencia
                </strong>{" "}
                en transformación corporal, rendimiento y competición.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                He trabajado con todo tipo de perfiles, desde personas que
                empiezan de cero hasta atletas en competición. Esa experiencia
                es la base de un método exigente, realista y sostenible.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Fundador de JJHP y distribuidor oficial de Procell Sport,
                apostando siempre por calidad, seguridad y resultados reales.
              </p>
            </Reveal>
          </div>

          {/* IMAGEN PRINCIPAL */}
          <Reveal delay={0.2}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                <Image
                  src="/sobrejuanjo/sobrejuanjo.webp"
                  alt="Juanjo Hidalgo JJHP"
                  fill
                  className="object-cover grayscale"
                />
              </div>

              <div className="absolute -inset-4 -z-10 rounded-2xl bg-[#1E90FF]/10 blur-3xl" />
            </div>
          </Reveal>
        </div>

        {/* BLOQUE AUTORIDAD */}
        <Reveal delay={0.25}>
          <div className="mt-20 max-w-2xl">
            <h3 className="text-xl font-semibold text-[#0B0B0B]">
              Competición, disciplina y resultados de élite.
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Experiencia real en escenario profesional y compromiso absoluto
              con la excelencia física y mental.
            </p>
          </div>
        </Reveal>

        {/* GRID EDITORIAL */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_0.5fr]">

          {/* IMAGEN GRANDE */}
          <Reveal delay={0.3}>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/sobrejuanjo/sobrejuanjo2.webp"
                alt="Preparación física profesional JJHP"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>
          </Reveal>

          {/* IMAGEN SECUNDARIA */}
          <Reveal delay={0.4}>
            <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/sobrejuanjo/sobrejuanjo3.webp"
                alt="IFBB Pro Card y trayectoria competitiva"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}