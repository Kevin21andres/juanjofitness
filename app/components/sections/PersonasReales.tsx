import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function PersonasReales() {
  return (
    <section id="personas" className="bg-white border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        
        {/* Heading */}
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0B0B0B] sm:text-4xl">
              Personas reales.{" "}
              <span className="text-[#1E90FF]">Resultados reales.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-gray-600">
              Personas que entrenan en JJHP con método, disciplina y seguimiento
              real. Sin filtros. Sin promesas vacías.
            </p>
          </Reveal>
        </div>

        {/* Galería */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "persona1.webp",
            "entrenamiento-2.webp",
            "entrenamiento-3.webp",
            "entrenamiento-4.webp",
            "entrenamiento-5.webp",
            "entrenamiento-6.webp",
          ].map((img, i) => (
            <Reveal key={img} delay={0.1 + i * 0.05}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-black">
                <Image
                  src={`/personas/${img}`}
                  alt="Entrenamiento real en JJHP"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Nota de honestidad */}
        <Reveal delay={0.4}>
          <p className="mt-12 max-w-2xl text-sm text-gray-500">
            Todas las imágenes corresponden a entrenamientos reales en el centro
            JJHP, con personas que confían en el método y el trabajo diario.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
