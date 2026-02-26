const WHATSAPP = "https://wa.me/34649833960";

const waLink = (msg: string) => `${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export default function Tarifas() {
  return (
    <section id="tarifas" className="relative bg-slate-50 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        {/* Heading */}
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Tarifas
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Precios claros, sin permanencias y con seguimiento real. Si tienes un
            objetivo concreto, lo vemos sin compromiso.
          </p>

          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
            Transparente · Personalizado · Medible
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* 40€ */}
          <div className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(2,6,23,0.10)]">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Nutrición + Rutina
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Ideal si quieres mejorar composición corporal.
                </p>
              </div>

              <div className="text-right">
                <p className="text-4xl font-extrabold text-slate-900 leading-none">
                  40<span className="ml-1 text-lg font-semibold text-slate-500">€</span>
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  / mes
                </p>
              </div>
            </div>

            <div className="mt-7 h-px w-full bg-black/5" />

            <ul className="mt-7 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900/70" />
                <span>Plan nutricional personalizado</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900/70" />
                <span>Rutina de entrenamiento adaptada</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900/70" />
                <span>Ajustes según evolución</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900/70" />
                <span>Soporte por WhatsApp</span>
              </li>
            </ul>

            <a
              href={waLink("Hola Juanjo, me interesa la tarifa de 40€ (Nutrición + Rutina)")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30"
            >
              Quiero esta tarifa
            </a>

            <p className="mt-4 text-xs text-slate-500">
              Respuesta rápida por WhatsApp.
            </p>
          </div>

          {/* 60€ (destacada) */}
          <div className="group relative overflow-hidden rounded-3xl border border-[#1E90FF]/30 bg-white p-8 shadow-[0_12px_40px_rgba(30,144,255,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_55px_rgba(30,144,255,0.18)]">
            {/* Glow */}
            <div className="pointer-events-none absolute -top-24 right-[-80px] h-64 w-64 rounded-full bg-[#1E90FF]/15 blur-3xl" />

            {/* Badge */}
            <div className="absolute left-7 top-7 inline-flex items-center gap-2 rounded-full border border-[#1E90FF]/25 bg-[#1E90FF]/10 px-3 py-1 text-xs font-semibold text-[#1E90FF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1E90FF]" />
              Recomendado
            </div>

            <div className="pt-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Nutrición + Rutina <span className="text-slate-500">(Competidor)</span>
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Para alto rendimiento y objetivos exigentes.
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-4xl font-extrabold text-[#1E90FF] leading-none">
                    60<span className="ml-1 text-lg font-semibold text-slate-500">€</span>
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    / mes
                  </p>
                </div>
              </div>

              <div className="mt-7 h-px w-full bg-black/5" />

              <ul className="mt-7 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1E90FF]" />
                  <span>Nutrición específica de competición</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1E90FF]" />
                  <span>Rutina avanzada de alto rendimiento</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1E90FF]" />
                  <span>Estrategia por fases (volumen / definición)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1E90FF]" />
                  <span>Seguimiento más cercano</span>
                </li>
              </ul>

              <a
                href={waLink("Hola Juanjo, me interesa la tarifa de 60€ (Competidor)")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#1E90FF] px-6 text-sm font-semibold text-white shadow-lg shadow-[#1E90FF]/20 transition hover:bg-[#187bcd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E90FF]/30"
              >
                Quiero esta tarifa
              </a>

              <p className="mt-4 text-xs text-slate-500">
                Te digo si encaja contigo en 2 minutos.
              </p>
            </div>
          </div>
        </div>

        {/* Nota inferior */}
        <p className="mt-10 text-sm text-slate-500">
          * Si estás preparando una competición o tienes un objetivo muy específico,
          escríbeme y lo valoramos de forma personalizada.
        </p>
      </div>
    </section>
  );
}