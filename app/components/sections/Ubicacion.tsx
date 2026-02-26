import Reveal from "../ui/Reveal";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="relative bg-white border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Texto */}
          <div className="max-w-xl">
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0B0B0B] sm:text-4xl lg:text-5xl">
                Tienda física en{" "}
                <span className="text-[#1E90FF]">Tarragona</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                JJHP cuenta con tienda física en Tarragona. Un espacio real donde
                recibir asesoramiento profesional, resolver tus dudas cara a cara y
                acceder a suplementación deportiva seleccionada bajo criterios de
                rendimiento y calidad.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 inline-flex flex-wrap items-center gap-2 rounded-full border border-black/5 bg-black/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-600">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1E90FF]" />
                Tienda · Asesoramiento
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 rounded-2xl border border-black/5 bg-white p-6 shadow-[0_12px_35px_rgba(2,6,23,0.06)]">
                <p className="text-sm font-semibold text-[#0B0B0B]">Dirección</p>
                <p className="mt-2 text-gray-700">Av. Catalunya, 31</p>
                <p className="text-gray-700">43002 Tarragona</p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Av.+Catalunya+31,+43002+Tarragona"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#1E90FF] px-8 text-sm font-semibold text-white shadow-lg shadow-[#1E90FF]/20 transition hover:bg-[#187bcd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E90FF]/30"
                  >
                    Cómo llegar
                  </a>

                  <a
                    href="#contacto"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white px-8 text-sm font-semibold text-[#0B0B0B] transition hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
                  >
                    Preguntar disponibilidad
                  </a>
                </div>

                <p className="mt-4 text-xs text-gray-500">
                  Si vienes por primera vez, escríbenos y te guiamos.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Mapa */}
          <Reveal delay={0.2}>
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_18px_55px_rgba(2,6,23,0.08)]">
              <div className="relative h-[360px] w-full sm:h-[420px]">
                <iframe
                  title="Ubicación Juanjo Fitness · JJHP Tarragona"
                  src="https://www.google.com/maps?q=Av.+Catalunya+31,+43002+Tarragona&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Overlay sutil */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/30" />

              {/* Label flotante */}
              <div className="pointer-events-none absolute left-6 top-6 rounded-full border border-white/20 bg-black/55 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                Av. Catalunya, 31 · Tarragona
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}