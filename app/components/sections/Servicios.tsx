import Reveal from "../ui/Reveal";
import Link from "next/link";

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        {/* Heading */}
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0B0B0B] sm:text-4xl">
              Servicios de entrenamiento personal en{" "}
              <span className="text-[#1E90FF]">Tarragona</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-gray-600">
              Programas de entrenamiento y preparación física adaptados a tu
              nivel, objetivos y contexto real. Trabajo individual, seguimiento
              continuo y resultados medibles.
            </p>
          </Reveal>
        </div>

        {/* Servicios */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Servicio 1 */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-xl border border-black/5 p-6 transition hover:shadow-sm">
              <h3 className="text-xl font-bold text-[#0B0B0B]">
                Entrenamiento personal
              </h3>
              <p className="mt-4 text-gray-600">
                Sesiones individuales en centro físico en Tarragona o modalidad
                online. Planificación personalizada, control técnico y
                progresión real.
              </p>
            </div>
          </Reveal>

          {/* Servicio 2 */}
          <Reveal delay={0.2}>
            <div className="h-full rounded-xl border border-black/5 p-6 transition hover:shadow-sm">
              <h3 className="text-xl font-bold text-[#0B0B0B]">
                Transformación corporal
              </h3>
              <p className="mt-4 text-gray-600">
                Programas enfocados en pérdida de grasa, mejora estética y
                recomposición corporal. Método sostenible, sin soluciones
                rápidas ni promesas vacías.
              </p>
            </div>
          </Reveal>

          {/* Servicio 3 */}
          <Reveal delay={0.3}>
            <div className="h-full rounded-xl border border-black/5 p-6 transition hover:shadow-sm">
              <h3 className="text-xl font-bold text-[#0B0B0B]">
                Preparación para competición
              </h3>
              <p className="mt-4 text-gray-600">
                Preparación específica para atletas y competidores. Control del
                entrenamiento, planificación avanzada y acompañamiento durante
                todo el proceso competitivo.
              </p>
            </div>
          </Reveal>

          {/* Servicio 4 */}
          <Reveal delay={0.4}>
            <div className="h-full rounded-xl border border-black/5 p-6 transition hover:shadow-sm">
              <h3 className="text-xl font-bold text-[#0B0B0B]">
                Seguimiento online
              </h3>
              <p className="mt-4 text-gray-600">
                Entrenamiento y control a distancia con revisiones periódicas,
                ajustes personalizados y contacto directo. Ideal si no puedes
                entrenar de forma presencial.
              </p>
            </div>
          </Reveal>

          {/* Servicio 5 */}
          <Reveal delay={0.5}>
            <div className="h-full rounded-xl border border-black/5 p-6 transition hover:shadow-sm">
              <h3 className="text-xl font-bold text-[#0B0B0B]">
                Asesoramiento en suplementación
              </h3>
              <p className="mt-4 text-gray-600">
                Orientación profesional en suplementación deportiva de calidad,
                adaptada a tu objetivo y contexto. Distribuidor oficial de
                Procell Sport.
              </p>
            </div>
          </Reveal>

          {/* Servicio 6 */}
          <Reveal delay={0.6}>
            <div className="h-full rounded-xl border border-black/5 p-6 transition hover:shadow-sm">
              <h3 className="text-xl font-bold text-[#0B0B0B]">
                Readaptación y mejora del rendimiento
              </h3>
              <p className="mt-4 text-gray-600">
                Trabajo enfocado en volver a entrenar con seguridad, mejorar
                capacidades físicas y optimizar el rendimiento deportivo a
                medio y largo plazo.
              </p>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal delay={0.2}>
          <div className="mt-16 text-center">
            <Link
              href="#contacto"
              className="inline-block rounded-md bg-[#1E90FF] px-10 py-4 font-semibold text-white hover:bg-[#187bcd] transition"
            >
              Solicitar información
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
