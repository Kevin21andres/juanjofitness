const WHATSAPP = "https://wa.me/34649833960";

const waLink = (msg: string) =>
  `${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export default function Tarifas() {
  return (
    <section
      id="tarifas"
      className="bg-slate-50 py-20 border-t border-black/5"
    >
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Tarifas
          </h2>
          <p className="mt-4 text-slate-600">
            Precios claros, sin permanencias y con seguimiento real.
            Si tienes un objetivo concreto, lo vemos sin compromiso.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Tarifa 40€ */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold text-slate-900">
              Nutrición + Rutina
            </h3>

            <p className="mt-4 text-4xl font-bold text-slate-900">
              40<span className="text-lg font-medium">€</span>
            </p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Plan nutricional personalizado</li>
              <li>• Rutina de entrenamiento adaptada</li>
              <li>• Ajustes según evolución</li>
              <li>• Soporte por WhatsApp</li>
            </ul>

            <a
              href={waLink(
                "Hola Juanjo, me interesa la tarifa de 40€ (Nutrición + Rutina)"
              )}
              target="_blank"
              className="mt-8 inline-flex justify-center rounded-xl bg-slate-900 px-6 py-3 text-white font-medium hover:bg-slate-800 transition"
            >
              Quiero esta tarifa
            </a>
          </div>

          {/* Tarifa 60€ - destacada */}
          <div className="relative bg-white rounded-2xl border-2 border-blue-600 p-8 shadow-md flex flex-col">
            
            {/* Badge */}
            <span className="absolute -top-4 left-6 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
              Recomendado
            </span>

            <h3 className="text-xl font-semibold text-slate-900">
              Nutrición + Rutina (Competidor)
            </h3>

            <p className="mt-4 text-4xl font-bold text-blue-600">
              60<span className="text-lg font-medium">€</span>
            </p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Nutrición específica de competición</li>
              <li>• Rutina avanzada de alto rendimiento</li>
              <li>• Estrategia por fases (volumen / definición)</li>
              <li>• Seguimiento más cercano</li>
            </ul>

            <a
              href={waLink(
                "Hola Juanjo, me interesa la tarifa de 60€ (Competidor)"
              )}
              target="_blank"
              className="mt-8 inline-flex justify-center rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-500 transition"
            >
              Quiero esta tarifa
            </a>
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
