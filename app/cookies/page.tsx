export default function Cookies() {
  return (
    <main className="bg-[#0B0B0B] text-white min-h-screen">
      {/* Línea superior sutil */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-12">
          Política de Cookies
        </h1>

        <p className="text-white/70 leading-relaxed mb-10">
          Este sitio web utiliza únicamente cookies técnicas necesarias para su
          correcto funcionamiento.
        </p>

        {/* ¿Qué son? */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold mb-4">
            ¿Qué son las cookies?
          </h2>
          <p className="text-white/70 leading-relaxed">
            Las cookies son pequeños archivos que se almacenan en el navegador
            del usuario con la finalidad de garantizar el correcto
            funcionamiento del sitio web.
          </p>
        </section>

        {/* Tipo de cookies */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold mb-4">
            Tipo de cookies utilizadas
          </h2>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/80 leading-relaxed">
              Esta web no utiliza cookies analíticas, publicitarias ni de
              terceros. Únicamente se emplean cookies técnicas necesarias
              gestionadas por el proveedor de alojamiento (Vercel) para
              garantizar la seguridad y el rendimiento del servicio.
            </p>
          </div>
        </section>

        {/* Modificación */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Modificación de la política
          </h2>
          <p className="text-white/70 leading-relaxed">
            Si en el futuro se incorporan cookies adicionales, se actualizará
            esta política y se solicitará el consentimiento correspondiente,
            conforme a la normativa vigente.
          </p>
        </section>

        {/* Separador inferior */}
        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </main>
  );
}