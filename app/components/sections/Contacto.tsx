import Link from "next/link";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="relative bg-[#0B0B0B] border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          ¿Listo para empezar tu cambio?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Si buscas un entrenamiento serio, seguimiento real y resultados
          medibles, este es el momento. Contacta y valora si el método encaja
          contigo.
        </p>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Link
            href="https://wa.me/34649833960"
            target="_blank"
            className="rounded-md bg-[#1E90FF] px-10 py-4 font-semibold text-white hover:bg-[#187bcd] transition"
          >
            Contactar por WhatsApp
          </Link>

          <Link
            href="mailto:jjhp2026@outlook.es"
            className="rounded-md border border-white/20 px-10 py-4 font-semibold text-white hover:border-white hover:bg-white/5 transition"
          >
            Enviar email
          </Link>
        </div>
      </div>

      {/* Línea decorativa */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#1E90FF] to-transparent opacity-40" />
    </section>
  );
}
