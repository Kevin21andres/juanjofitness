// app/components/sections/Hero.tsx
import Image from "next/image";
import Reveal from "../ui/Reveal";

const WHATSAPP_NUMBER = "34649833960";
const WHATSAPP_TEXT = encodeURIComponent(
  "Hola Juanjo, quiero info para empezar un plan. ¿Cómo funciona?"
);

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-black"
      aria-labelledby="hero-title"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.35)_1px,transparent_0)] [background-size:28px_28px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E90FF]/10 via-transparent to-transparent" />
        <div className="absolute left-1/2 top-[-140px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#1E90FF]/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-18">
          {/* TEXTO */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
                  Preparación física + nutrición
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
                  Presencial · Tarragona
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
                  Online · Seguimiento semanal
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1
                id="hero-title"
                className="mt-6 text-balance text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                Entrena con un método{" "}
                <span className="text-[#1E90FF]">real</span>
                <br className="hidden sm:block" />
                y consigue{" "}
                <span className="text-[#1E90FF]">resultados</span> medibles.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-gray-300 sm:text-xl">
                Planes personalizados para{" "}
                <strong className="font-semibold text-white">
                  perder grasa, ganar músculo y rendir mejor
                </strong>
                , con disciplina, control y acompañamiento real.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.22}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href="#contacto"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#1E90FF] px-6 text-sm font-semibold text-white shadow-lg shadow-[#1E90FF]/20 transition hover:bg-[#187bcd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E90FF] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Empieza hoy
                </a>

                <a
                  href="#metodo"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white/15 bg-white/0 px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Ver el método
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Hablar por WhatsApp"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-[#1E90FF]/35 bg-[#1E90FF]/10 px-6 text-sm font-semibold text-white transition hover:border-[#1E90FF]/60 hover:bg-[#1E90FF]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E90FF] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.36}>
              <p className="mt-6 text-sm text-gray-400">
                ✔ Plan 100% adaptado · ✔ Seguimiento real · ✔ Progreso medible
              </p>
            </Reveal>
          </div>

          {/* IMAGEN */}
          <Reveal delay={0.18}>
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-lg">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/50">
                  <Image
                    src="/hero/jjhp.webp"
                    alt="Juanjo Hidalgo · JJHP"
                    fill
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 520px, 560px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
                </div>

                <div className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl bg-[#1E90FF]/25 blur-3xl" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}