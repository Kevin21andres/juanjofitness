export default function Privacy() {
  return (
    <main className="bg-[#0B0B0B] text-white min-h-screen">
      {/* Línea superior sutil */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-12">
          Política de Privacidad
        </h1>

        <p className="text-white/70 leading-relaxed mb-8">
          En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica
          3/2018 (LOPDGDD), se informa de lo siguiente:
        </p>

        {/* Datos responsables */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-14">
          <ul className="space-y-3 text-white/80">
            <li>
              <span className="font-semibold text-white">Responsable:</span>{" "}
              Juan José Hidalgo Pomes
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
              <span className="font-semibold text-white">Domicilio:</span>{" "}
              Tarragona, España
            </li>
          </ul>
        </div>

        {/* Sección 1 */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold mb-4">
            Recogida de datos
          </h2>
          <p className="text-white/70 leading-relaxed">
            Este sitio web no recoge datos personales mediante formularios ni
            sistemas automatizados. En caso de que el usuario contacte
            voluntariamente por correo electrónico, los datos facilitados serán
            tratados únicamente para responder a la consulta realizada.
          </p>
        </section>

        {/* Sección 2 */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold mb-4">
            Base legal
          </h2>
          <p className="text-white/70 leading-relaxed">
            La base jurídica del tratamiento es el consentimiento del interesado
            al contactar voluntariamente.
          </p>
        </section>

        {/* Sección 3 */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold mb-4">
            Conservación de datos
          </h2>
          <p className="text-white/70 leading-relaxed">
            Los datos se conservarán el tiempo estrictamente necesario para
            atender la consulta o mientras exista una relación profesional.
          </p>
        </section>

        {/* Sección 4 */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Derechos del usuario
          </h2>
          <p className="text-white/70 leading-relaxed">
            El usuario puede ejercer sus derechos de acceso, rectificación,
            supresión, limitación y oposición enviando una solicitud al correo{" "}
            <a
              href="mailto:jjhp2026@outlook.es"
              className="text-[#1E90FF] hover:underline"
            >
              jjhp2026@outlook.es
            </a>.
          </p>
        </section>

        {/* Separador inferior */}
        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </main>
  );
}