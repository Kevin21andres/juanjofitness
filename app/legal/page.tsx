export default function Legal() {
  return (
    <main className="bg-[#0B0B0B] text-white min-h-screen">
      {/* Línea superior sutil */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-12">
          Aviso Legal
        </h1>

        <p className="text-white/70 leading-relaxed mb-8">
          En cumplimiento con el deber de información recogido en la Ley
          34/2002, de 11 de julio, de Servicios de la Sociedad de la Información
          y de Comercio Electrónico (LSSI-CE), se facilitan a continuación los
          siguientes datos:
        </p>

        {/* Datos */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-14">
          <ul className="space-y-3 text-white/80">
            <li>
              <span className="font-semibold text-white">Responsable:</span>{" "}
              Juan José Hidalgo Pomes
            </li>
            <li>
              <span className="font-semibold text-white">Domicilio:</span>{" "}
              Tarragona, España
            </li>
            <li>
              <span className="font-semibold text-white">Correo electrónico:</span>{" "}
              <a
                href="mailto:jjhp2026@outlook.es"
                className="text-[#1E90FF] hover:underline"
              >
                jjhp2026@outlook.es
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Actividad:</span>{" "}
              Entrenamiento personal y asesoramiento deportivo
            </li>
          </ul>
        </div>

        {/* Condiciones */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold mb-4">Condiciones de uso</h2>
          <p className="text-white/70 leading-relaxed">
            El acceso y uso de este sitio web atribuye la condición de usuario e
            implica la aceptación plena de las presentes condiciones. El usuario
            se compromete a hacer un uso adecuado de los contenidos y servicios
            ofrecidos.
          </p>
        </section>

        {/* Propiedad intelectual */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold mb-4">Propiedad intelectual</h2>
          <p className="text-white/70 leading-relaxed">
            Todos los contenidos de esta web (textos, imágenes, logotipos,
            diseño, estructura y código fuente) son propiedad de Juan José
            Hidalgo Pomes o cuentan con licencia para su uso, quedando prohibida
            su reproducción total o parcial sin autorización expresa.
          </p>
        </section>

        {/* Legislación */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Legislación aplicable</h2>
          <p className="text-white/70 leading-relaxed">
            La relación entre el titular y el usuario se regirá por la normativa
            española vigente, sometiéndose cualquier controversia a los juzgados
            y tribunales competentes de Tarragona.
          </p>
        </section>

        {/* Separador inferior */}
        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </main>
  );
}