import Reveal from "../ui/Reveal";

export default function PacksProcell() {
  return (
    <section id="packs-procell" className="bg-white border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        {/* Heading */}
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0B0B0B] sm:text-4xl">
              Packs Procell recomendados por{" "}
              <span className="text-[#1E90FF]">JJHP</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-gray-600">
              Suplementación deportiva seleccionada personalmente para mejorar
              el rendimiento, acelerar la recuperación y progresar con
              seguridad. Nada genérico. Solo lo que funciona.
            </p>
          </Reveal>
        </div>

        {/* Packs */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Pack 1 */}
          <Reveal delay={0.1}>
            <div className="rounded-xl border p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#0B0B0B]">
                Pack Inicio
              </h3>
              <p className="mt-4 text-gray-600">
                Ideal para empezar a entrenar con una base sólida.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>✔ Proteína Whey</li>
                <li>✔ Creatina</li>
                <li>✔ Multivitamínico</li>
              </ul>

              <a
                href="https://wa.me/34600000000"
                target="_blank"
                className="mt-8 inline-block rounded-md bg-[#1E90FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#187bcd] transition"
              >
                Consultar pack
              </a>
            </div>
          </Reveal>

          {/* Pack 2 */}
          <Reveal delay={0.2}>
            <div className="rounded-xl border p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#0B0B0B]">
                Pack Rendimiento
              </h3>
              <p className="mt-4 text-gray-600">
                Para entrenar fuerte, rendir más y mejorar semana a semana.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>✔ Whey o ISO</li>
                <li>✔ Creatina</li>
                <li>✔ Pre-entreno</li>
              </ul>

              <a
                href="https://wa.me/34600000000"
                target="_blank"
                className="mt-8 inline-block rounded-md bg-[#1E90FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#187bcd] transition"
              >
                Consultar pack
              </a>
            </div>
          </Reveal>

          {/* Pack 3 */}
          <Reveal delay={0.3}>
            <div className="rounded-xl border p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#0B0B0B]">
                Pack Avanzado
              </h3>
              <p className="mt-4 text-gray-600">
                Pensado para atletas, competición y rendimiento exigente.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>✔ Proteína ISO</li>
                <li>✔ Creatina</li>
                <li>✔ Aminos / intra</li>
                <li>✔ Recuperador</li>
              </ul>

              <a
                href="https://wa.me/34600000000"
                target="_blank"
                className="mt-8 inline-block rounded-md bg-[#1E90FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#187bcd] transition"
              >
                Consultar pack
              </a>
            </div>
          </Reveal>
        </div>

        {/* Nota legal / confianza */}
        <Reveal delay={0.4}>
          <p className="mt-12 text-sm text-gray-500">
            Packs orientativos. La suplementación se adapta según objetivos,
            nivel y necesidades individuales. Asesoramiento personal en tienda
            o por WhatsApp.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
