import Reveal from "../ui/Reveal";

export default function Metodo() {
  return (
    <section id="metodo" className="relative bg-white border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6 py-28 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#0B0B0B] sm:text-5xl lg:text-6xl leading-tight">
              Un método diseñado para transformar tu cuerpo,
              <span className="text-[#1E90FF]"> no para entretenerte.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              Aquí no trabajamos con rutinas estándar ni planes descargados de
              internet. Cada proceso está construido en función de tu punto de
              partida, tus objetivos y tu realidad.
              <span className="block mt-4">
                Resultados medibles. Estrategia clara. Evolución constante.
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E90FF]">
              MÉTODO ESTRUCTURADO · RESULTADOS MEDIBLES · SIN ATAJOS
            </p>
          </Reveal>
        </div>

        {/* Pilares */}
        <div className="mt-24 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Pilar */}
          {[
            {
              number: "01",
              title: "Estrategia personalizada",
              text: "Cada entrenamiento y planificación nutricional se diseñan según tu nivel, tus limitaciones y tu objetivo real. Sin plantillas. Sin improvisación."
            },
            {
              number: "02",
              title: "Seguimiento inteligente",
              text: "Medimos progreso, ajustamos cargas, optimizamos nutrición y adaptamos el plan cuando es necesario. El cuerpo evoluciona, el método también."
            },
            {
              number: "03",
              title: "Mentalidad y disciplina",
              text: "La motivación es temporal. La disciplina es lo que construye resultados reales. Desarrollamos hábitos sólidos y sostenibles."
            },
            {
              number: "04",
              title: "Experiencia real en el sector",
              text: "Años trabajando con deportistas y clientes reales, con conocimiento práctico del rendimiento y la suplementación."
            }
          ].map((pilar, i) => (
            <Reveal key={pilar.number} delay={0.1 + i * 0.1}>
              <div className="group relative">
                
                {/* Número grande tipo editorial */}
                <span className="text-xs font-semibold tracking-[0.2em] text-[#1E90FF]">
                  {pilar.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold text-[#0B0B0B] transition duration-300 group-hover:text-[#1E90FF]">
                  {pilar.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                  {pilar.text}
                </p>

                {/* Línea inferior minimal */}
                <div className="mt-6 h-[1px] w-0 bg-[#1E90FF] transition-all duration-500 group-hover:w-12" />
              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}