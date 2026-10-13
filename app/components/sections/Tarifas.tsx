import Link from "next/link";

const plans = [
  {
    name: "Nutrición + Rutina",
    level: "Plan de seguimiento",
    price: "40",
    subtitle: "Para empezar o seguir progresando con un programa adaptado.",
    features: ["Pautas nutricionales personalizadas", "Rutina de entrenamiento adaptada", "Revisión y ajustes según evolución", "Soporte por WhatsApp"],
    action: "Consultar este plan",
    message: "Hola Juanjo, me interesa el plan Nutrición + Rutina de 40 € al mes. ¿Podemos hablar?",
  },
  {
    name: "Plan Competidor",
    level: "Preparación específica",
    price: "60",
    subtitle: "Para personas con objetivos deportivos más exigentes.",
    features: ["Planificación nutricional por fases", "Entrenamiento avanzado", "Ajustes según el calendario de preparación", "Seguimiento más cercano"],
    action: "Consultar preparación",
    message: "Hola Juanjo, me interesa el Plan Competidor de 60 € al mes. ¿Podemos hablar?",
  },
];

export default function Tarifas() {
  return (
    <section id="tarifas" className="bg-white text-[#101820]">
      <div className="site-container section-space">
        <div className="grid gap-6 md:grid-cols-[1fr_.8fr] md:items-end md:gap-12">
          <div>
            <p className="kicker">05 / Tarifas</p>
            <h2 className="section-heading mt-5">Precios claros. Un plan a tu medida.</h2>
          </div>
          <p className="body-copy text-[#52616b]">Elige el punto de partida. Antes de comenzar, hablamos de tus objetivos y resolvemos cualquier duda.</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <article key={plan.price} className={"flex flex-col border p-7 sm:p-10 " + (index === 1 ? "border-[#1684d4] bg-[#f1f8fd]" : "border-[#dce1e2] bg-[#fbfbfa]")}>
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[.17em] text-[#1684d4]">{plan.level}</p>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight">{plan.name}</h3>
                </div>
                <p className="text-right"><span className="text-[3.4rem] font-extrabold leading-none tracking-[-.07em]">{plan.price} €</span><span className="block pt-1 text-xs font-bold text-[#647481]">al mes</span></p>
              </div>
              <p className="mt-6 max-w-md text-sm leading-7 text-[#52616b]">{plan.subtitle}</p>
              <ul className="mt-8 flex-1 space-y-4 border-t border-[#dce1e2] pt-7">
                {plan.features.map(feature => (
                  <li key={feature} className="flex gap-3 text-sm font-medium leading-6">
                    <span aria-hidden="true" className="shrink-0 font-extrabold text-[#1684d4]">✓</span>{feature}
                  </li>
                ))}
              </ul>
              <Link href={"https://wa.me/34649833960?text=" + encodeURIComponent(plan.message)}
                target="_blank" rel="noopener noreferrer"
                className={(index === 1 ? "action-primary" : "action-dark") + " mt-10 w-full"}>
                {plan.action} <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-7 max-w-3xl text-sm leading-7 text-[#63707c]">Los programas se personalizan según tu situación. Para necesidades específicas, escríbeme y valoramos la mejor opción.</p>
      </div>
    </section>
  );
}