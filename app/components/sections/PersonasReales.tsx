import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function PersonasReales() {
  return (
    <section
      id="personas"
      className="relative bg-black text-white"
    >
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Personas reales.{" "}
              <span className="text-[#1E90FF]">Resultados reales.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Transformaciones construidas con método, disciplina y seguimiento
              profesional. Sin filtros. Sin atajos. Solo trabajo real.
            </p>
          </Reveal>
        </div>

        {/* Galería */}
        <div className="mt-16 lg:mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "persona1.webp",
            "persona2.webp",
            "persona3.webp",
            "persona4.webp",
            "persona5.webp",
            "persona6.webp",
          ].map((img, i) => (
            <Reveal key={img} delay={0.1 + i * 0.05}>
              <div className="group relative overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl shadow-black/50">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={`/personas/${img}`}
                    alt="Transformación real JJHP"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Overlay elegante */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Micro detalle */}
                <div className="absolute bottom-4 left-4 text-xs text-white/80 opacity-0 transition duration-500 group-hover:opacity-100">
                  Progreso real · Método JJHP
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA Section */}
        <Reveal delay={0.3}>
          <div className="mt-28 text-center">
            <h3 className="text-2xl font-bold">
              Tu transformación puede ser la siguiente.
            </h3>

            <p className="mt-4 text-white/60">
              Si estás dispuesto a comprometerte, el método se encarga del resto.
            </p>

            <div className="mt-8">
              <a
                href="#contacto"
                className="inline-flex h-13 items-center justify-center rounded-full bg-[#1E90FF] px-10 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(30,144,255,0.35)] transition hover:bg-[#187bcd] hover:shadow-[0_10px_40px_rgba(30,144,255,0.45)]"              >
                Empieza hoy
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}