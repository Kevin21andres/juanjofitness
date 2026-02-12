import Reveal from "../ui/Reveal";

export default function Metodo() {
  return (
    <section id="metodo" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        {/* Heading */}
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0B0B0B] sm:text-4xl">
              Un método diseñado para transformar tu cuerpo,
              <span className="text-[#1E90FF]"> no para entretenerte.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-gray-600">
              Aquí no trabajamos con rutinas estándar ni planes descargados de
              internet. Cada proceso está construido en función de tu punto de
              partida, tus objetivos y tu realidad. Resultados medibles,
              estrategia clara y evolución constante.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-[#1E90FF]">
              Método estructurado. Resultados medibles. Sin atajos.
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
                Estrategia personalizada
              </h3>
              <p className="mt-4 text-gray-600">
                Cada entrenamiento y planificación nutricional se diseñan según
                tu nivel, tus limitaciones y tu objetivo real. Sin plantillas.
                Sin improvisación.
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
                Seguimiento inteligente
              </h3>
              <p className="mt-4 text-gray-600">
                Medimos progreso, ajustamos cargas, optimizamos nutrición y
                adaptamos el plan cuando es necesario. El cuerpo evoluciona,
                el método también.
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
                Mentalidad y disciplina
              </h3>
              <p className="mt-4 text-gray-600">
                La motivación es temporal. La disciplina es lo que construye
                resultados reales. Te acompaño para desarrollar hábitos sólidos
                y sostenibles en el tiempo.
              </p>
            </div>
          </Reveal>

          {/* Pilar 4 */}
          <Reveal delay={0.4}>
            <div className="h-full rounded-xl border border-black/5 p-6 transition hover:shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#1E90FF]">
                04
              </span>
              <h3 className="mt-4 text-xl font-bold text-[#0B0B0B]">
                Experiencia real en el sector
              </h3>
              <p className="mt-4 text-gray-600">
                Fundador de JJHP y distribuidor oficial de Procell Sport.
                Años de experiencia trabajando con deportistas y clientes
                reales, con conocimiento práctico del rendimiento y la
                suplementación.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
