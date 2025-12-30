import Reveal from "../ui/Reveal";

export default function Metodo() {
  return (
    <section id="metodo" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        {/* Heading */}
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0B0B0B] sm:text-4xl">
              Un método basado en resultados,
              <span className="text-[#1E90FF]"> no en promesas.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-gray-600">
              Cada persona es distinta. Por eso el entrenamiento, la
              planificación y el seguimiento se adaptan de forma individual,
              con un enfoque profesional, realista y sostenible.
            </p>
          </Reveal>
        </div>

        {/* Pilares */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Pilar 1 */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-xl border border-black/5 p-6 transition hover:shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#1E90FF]">
                01
              </span>
              <h3 className="mt-4 text-xl font-bold text-[#0B0B0B]">
                Planificación individual
              </h3>
              <p className="mt-4 text-gray-600">
                Programas diseñados según tu nivel, objetivos y contexto real.
                Nada genérico, nada copiado.
              </p>
            </div>
          </Reveal>

          {/* Pilar 2 */}
          <Reveal delay={0.2}>
            <div className="h-full rounded-xl border border-black/5 p-6 transition hover:shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#1E90FF]">
                02
              </span>
              <h3 className="mt-4 text-xl font-bold text-[#0B0B0B]">
                Seguimiento y control
              </h3>
              <p className="mt-4 text-gray-600">
                Evaluación constante del progreso, ajustes estratégicos y
                control del rendimiento para avanzar sin estancarte.
              </p>
            </div>
          </Reveal>

          {/* Pilar 3 */}
          <Reveal delay={0.3}>
            <div className="h-full rounded-xl border border-black/5 p-6 transition hover:shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#1E90FF]">
                03
              </span>
              <h3 className="mt-4 text-xl font-bold text-[#0B0B0B]">
                Disciplina y compromiso
              </h3>
              <p className="mt-4 text-gray-600">
                El resultado no depende de la motivación puntual, sino de la
                constancia. Trabajo serio y mentalidad a largo plazo.
              </p>
            </div>
          </Reveal>

          {/* Pilar 4 — Marca propia / Procell */}
          <Reveal delay={0.4}>
            <div className="h-full rounded-xl border border-black/5 p-6 transition hover:shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#1E90FF]">
                04
              </span>
              <h3 className="mt-4 text-xl font-bold text-[#0B0B0B]">
                Experiencia y marca propia
              </h3>
              <p className="mt-4 text-gray-600">
                Fundador de JJHP y distribuidor oficial de Procell Sport,
                marca referente en suplementación deportiva. Experiencia real
                y conocimiento profundo del sector.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
