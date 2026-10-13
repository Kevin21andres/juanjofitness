export default function Contacto() {
  return (
    <section id="contacto" className="bg-[#101820] text-white">
      <div className="site-container section-space">
        <div className="grid gap-9 lg:grid-cols-[1fr_.7fr] lg:items-end lg:gap-20">
          <div>
            <p className="kicker kicker-light">08 / Tu siguiente paso</p>
            <h2 className="section-heading mt-6 max-w-3xl">El primer paso es <span className="text-[#83c9fb]">hablarlo.</span></h2>
            <p className="body-copy mt-7 max-w-xl text-white/65">Cuéntame qué buscas, desde dónde empiezas y qué necesitas. Encontraremos la mejor forma de trabajar juntos.</p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-stretch">
            <a href={"https://wa.me/34649833960?text=" + encodeURIComponent("Hola Juanjo, me gustaría saber cómo podemos empezar a trabajar juntos.")}
              target="_blank" rel="noopener noreferrer" className="action-primary w-full">
              Escribir por WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a href="mailto:jjhp2026@outlook.es" className="action-outline w-full">Enviar un correo <span aria-hidden="true">↗</span></a>
            <p className="mt-2 text-center text-xs font-semibold text-white/45">Atención presencial en Tarragona y seguimiento online.</p>
          </div>
        </div>
      </div>
    </section>
  );
}