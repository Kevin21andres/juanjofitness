import Reveal from "../ui/Reveal";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="bg-white border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Texto */}
          <div>
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0B0B0B] sm:text-4xl">
                Entrenamiento personal y tienda física en{" "}
                <span className="text-[#1E90FF]">Tarragona</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-gray-600">
                JJHP cuenta con tienda física y centro de entrenamiento personal
                en Tarragona. Un espacio real donde entrenar, asesorarte de forma
                profesional y acceder a suplementación deportiva de calidad.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 text-gray-700">
                <p className="font-semibold text-[#0B0B0B]">
                  📍 Dirección
                </p>
                <p>Av. Catalunya, 31</p>
                <p>43002 Tarragona</p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.+Catalunya+31,+43002+Tarragona"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-md bg-[#1E90FF] px-8 py-4 font-semibold text-white hover:bg-[#187bcd] transition"
              >
                Cómo llegar
              </a>
            </Reveal>
          </div>

          {/* Mapa */}
          <Reveal delay={0.2}>
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg border border-black/10 shadow-sm">
              <iframe
                title="Ubicación Juanjo Fitness · JJHP Tarragona"
                src="https://www.google.com/maps?q=Av.+Catalunya+31,+43002+Tarragona&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
