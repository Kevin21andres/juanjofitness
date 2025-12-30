import Reveal from "../ui/Reveal";

export default function SobreJuanjo() {
  return (
    <section id="sobre-mi" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Texto */}
          <div>
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0B0B0B] sm:text-4xl">
                Quién está detrás de{" "}
                <span className="text-[#1E90FF]">JJHP</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-gray-600">
                Soy <strong className="text-[#0B0B0B]">Juanjo Hidalgo</strong>,
                entrenador personal y preparador físico en{" "}
                <strong className="text-[#0B0B0B]">Tarragona</strong>, con más de{" "}
                <strong className="text-[#0B0B0B]">
                  10 años de experiencia
                </strong>{" "}
                en entrenamiento, mejora del rendimiento y transformación
                corporal.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 text-gray-600">
                He trabajado con todo tipo de perfiles: desde personas que
                empiezan de cero hasta atletas en competición. Esa experiencia
                real es la que me ha permitido crear un método exigente,
                sostenible y basado en lo que funciona en la práctica, no en
                modas ni promesas vacías.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-4 text-gray-600">
                Además, soy fundador de <strong>JJHP</strong> y distribuidor
                oficial de <strong>Procell Sport</strong>, una marca de
                suplementación deportiva enfocada en calidad, seguridad y
                rendimiento, con centro físico en Tarragona.
              </p>
            </Reveal>

            {/* Highlights */}
            <Reveal delay={0.4}>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 text-sm text-gray-700">
                <li>✔ +10 años de experiencia real</li>
                <li>✔ Centro físico en Tarragona</li>
                <li>✔ Preparador en activo</li>
                <li>✔ Marca propia JJHP</li>
              </ul>
            </Reveal>
          </div>

          {/* Bloque visual / cita */}
          <Reveal delay={0.2}>
            <div className="rounded-xl bg-black p-10 text-white">
              <p className="text-xl font-semibold leading-relaxed">
                “No creo en soluciones rápidas. Creo en el trabajo bien hecho,
                la constancia y los resultados que se mantienen en el tiempo.”
              </p>

              <p className="mt-6 text-sm text-gray-400">
                — Juanjo Hidalgo · JJHP
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
