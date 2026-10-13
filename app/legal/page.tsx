export default function Legal() {
  return (
    <main className="min-h-screen bg-[#f6f6f3] pt-[var(--header-height)] text-[#101820]">
      {/* Línea superior sutil */}
      <div className="h-px w-full bg-[#dce1e2]" />

      <div className="site-container max-w-4xl py-16 sm:py-24">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold tracking-[-.045em] sm:text-5xl mb-12">
          Aviso Legal
        </h1>

        <p className="text-[#52616b] leading-relaxed mb-8">
          En cumplimiento con el deber de información recogido en la Ley
          34/2002, de 11 de julio, de Servicios de la Sociedad de la Información
          y de Comercio Electrónico (LSSI-CE), se facilitan a continuación los
          siguientes datos:
        </p>

        {/* Datos */}
        <div className="rounded-2xl border border-[#dce1e2] bg-white p-6 mb-14">
          <ul className="space-y-3 text-[#445361]">
            <li>
              <span className="font-semibold text-[#101820]">Responsable:</span>{" "}
              Juan José Hidalgo Pomes
            </li>
            <li>
              <span className="font-semibold text-[#101820]">Domicilio:</span>{" "}
              Tarragona, España
            </li>
            <li>
              <span className="font-semibold text-[#101820]">Correo electrónico:</span>{" "}
              <a
                href="mailto:jjhp2026@outlook.es"
                className="text-[#0967af] hover:underline"
              >
                jjhp2026@outlook.es
              </a>
            </li>
            <li>
              <span className="font-semibold text-[#101820]">Actividad:</span>{" "}
              Entrenamiento personal y asesoramiento deportivo
            </li>
          </ul>
        </div>

        {/* Condiciones */}
        <section className="mb-14">
          <h2 className="text-xl font-extrabold tracking-tight mb-4">Condiciones de uso</h2>
          <p className="text-[#52616b] leading-relaxed">
            El acceso y uso de este sitio web atribuye la condición de usuario e
            implica la aceptación plena de las presentes condiciones. El usuario
            se compromete a hacer un uso adecuado de los contenidos y servicios
            ofrecidos.
          </p>
        </section>

        {/* Propiedad intelectual */}
        <section className="mb-14">
          <h2 className="text-xl font-extrabold tracking-tight mb-4">Propiedad intelectual</h2>
          <p className="text-[#52616b] leading-relaxed">
            Todos los contenidos de esta web (textos, imágenes, logotipos,
            diseño, estructura y código fuente) son propiedad de Juan José
            Hidalgo Pomes o cuentan con licencia para su uso, quedando prohibida
            su reproducción total o parcial sin autorización expresa.
          </p>
        </section>

        {/* Legislación */}
        <section>
          <h2 className="text-xl font-extrabold tracking-tight mb-4">Legislación aplicable</h2>
          <p className="text-[#52616b] leading-relaxed">
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