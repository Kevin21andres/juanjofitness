import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* TEXTO */}
          <div>
            <Reveal>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Entrenamiento real.
                <br />
                <span className="text-[#1E90FF]">Resultados reales.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg text-gray-300">
                Preparador físico especializado en transformación corporal,
                rendimiento y competición. Método probado, disciplina y
                acompañamiento real.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="rounded-md bg-[#1E90FF] px-8 py-4 font-semibold text-white hover:bg-[#187bcd] transition"
                >
                  Empieza tu cambio
                </a>

                <a
                  href="#metodo"
                  className="rounded-md border border-white/20 px-8 py-4 font-semibold text-white hover:border-white/40 transition"
                >
                  Ver método
                </a>
              </div>
            </Reveal>

            {/* Micro autoridad */}
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
                <span>✔ Centro físico en Tarragona</span>
                <span>✔ Marca propia JJHP</span>
                <span>✔ Preparador en activo</span>
              </div>
            </Reveal>
          </div>

          {/* IMAGEN */}
          <Reveal delay={0.5}>
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="/hero/jjhp.webp"
                  alt="Juanjo Hidalgo · JJHP"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Glow sutil */}
              <div className="absolute -inset-4 -z-10 rounded-xl bg-[#1E90FF]/20 blur-3xl" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
