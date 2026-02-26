import Link from "next/link";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#0B0B0B]"
    >
      {/* Línea decorativa superior (sutil) */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Fade inferior para fundir con el footer */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-b from-transparent to-black/40" />

      <div className="mx-auto max-w-7xl px-6 py-24 text-center sm:py-28">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          ¿Listo para empezar tu cambio?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Si buscas un entrenamiento serio, seguimiento real y resultados
          medibles, este es el momento. Contacta y valora si el método encaja
          contigo.
        </p>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link
            href="https://wa.me/34649833960"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#1E90FF] px-8 text-sm font-semibold text-white shadow-lg shadow-[#1E90FF]/20 transition hover:bg-[#187bcd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E90FF]/30"
          >
            Contactar por WhatsApp
          </Link>

          <Link
            href="mailto:jjhp2026@outlook.es"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
          >
            Enviar email
          </Link>
        </div>
      </div>
    </section>
  );
}