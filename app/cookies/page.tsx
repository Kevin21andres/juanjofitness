export default function Cookies() {
  return (
    <main className="min-h-screen bg-[#f6f6f3] pt-[var(--header-height)] text-[#101820]">
      {/* Línea superior sutil */}
      <div className="h-px w-full bg-[#dce1e2]" />

      <div className="site-container max-w-4xl py-16 sm:py-24">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold tracking-[-.045em] sm:text-5xl mb-12">
          Política de Cookies
        </h1>

        <p className="text-[#52616b] leading-relaxed mb-10">
          Este sitio web utiliza los recursos técnicos necesarios para funcionar. El mapa de Google Maps se carga únicamente cuando el visitante decide mostrarlo. Los servicios de terceros pueden tratar datos y utilizar cookies según sus propias políticas.
        </p>

        {/* ¿Qué son? */}
        <section className="mb-14">
          <h2 className="text-xl font-extrabold tracking-tight mb-4">
            ¿Qué son las cookies?
          </h2>
          <p className="text-[#52616b] leading-relaxed">
            Las cookies son pequeños archivos que se almacenan en el navegador
            del usuario con la finalidad de garantizar el correcto
            funcionamiento del sitio web.
          </p>
        </section>

        {/* Tipo de cookies */}
        <section className="mb-14">
          <h2 className="text-xl font-extrabold tracking-tight mb-4">
            Tipo de cookies utilizadas
          </h2>

          <div className="rounded-2xl border border-[#dce1e2] bg-white p-6">
            <p className="text-[#445361] leading-relaxed">
              No utilizamos directamente cookies analíticas ni de publicidad en el código de la web. El alojamiento puede emplear recursos técnicos de seguridad. Si decides cargar el mapa, el navegador se conectará a Google Maps, un proveedor externo que podría utilizar cookies u otros mecanismos de tratamiento de datos. Puedes evitarlo utilizando el enlace «Cómo llegar» sin cargar el mapa en esta página.
            </p>
          </div>
        </section>

        {/* Modificación */}
        <section>
          <h2 className="text-xl font-extrabold tracking-tight mb-4">
            Modificación de la política
          </h2>
          <p className="text-[#52616b] leading-relaxed">
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