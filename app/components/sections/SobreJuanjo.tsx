import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function SobreJuanjo() {
  return (
    <section id="sobre-mi" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* TEXTO */}
          <div>
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0B0B0B] sm:text-4xl">
                Quién está detrás de{" "}
                <span className="text-[#1E90FF]">JJHP</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-gray-600">
                Soy Juanjo Hidalgo, preparador físico y entrenador personal con
                más de{" "}
                <strong className="text-[#0B0B0B]">
                  10 años de experiencia
                </strong>{" "}
                en transformación corporal, rendimiento y competición.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 text-gray-600">
                He trabajado con todo tipo de perfiles, desde personas que
                empiezan de cero hasta atletas en competición. Esa experiencia
                es la base de un método exigente, realista y sostenible.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-4 text-gray-600">
                Fundador de JJHP y distribuidor oficial de Procell Sport,
                apostando siempre por calidad, seguridad y resultados reales.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 text-sm text-gray-700">
                <span>✔ +10 años de experiencia real</span>
                <span>✔ Centro físico en Tarragona</span>
                <span>✔ Preparador en activo</span>
                <span>✔ Marca propia JJHP</span>
              </div>
            </Reveal>
          </div>

          {/* IMAGEN */}
          <Reveal delay={0.2}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="/sobrejuanjo/sobrejuanjo.webp"
                  alt="Juanjo Hidalgo JJHP"
                  fill
                  className="object-cover grayscale"
                />
              </div>

              {/* Glow sutil */}
              <div className="absolute -inset-4 -z-10 rounded-xl bg-[#1E90FF]/20 blur-3xl" />

              {/* Firma */}
              <p className="mt-6 text-center text-sm text-gray-500">
                Juanjo Hidalgo · JJHP
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
