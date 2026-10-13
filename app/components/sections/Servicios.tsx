import Link from "next/link";

const services = [
  {number:"01",title:"ENTRENAMIENTO PERSONAL",detail:"Presencial en Tarragona o a distancia. Técnica, progresión y una planificación ajustada a tu vida.",types:"FUERZA / PLANIFICACIÓN / EVOLUCIÓN"},
  {number:"02",title:"TRANSFORMACIÓN CORPORAL",detail:"Pérdida de grasa, ganancia muscular y mejora de composición corporal con hábitos sostenibles.",types:"NUTRICIÓN / RUTINAS / SEGUIMIENTO"},
  {number:"03",title:"PREPARACIÓN PARA COMPETIR",detail:"Trabajo por fases, planificación avanzada y acompañamiento para objetivos competitivos.",types:"ALTO RENDIMIENTO / COMPETICIÓN"},
  {number:"04",title:"SEGUIMIENTO ONLINE",detail:"Revisiones periódicas, ajustes y comunicación para entrenar con rumbo estés donde estés.",types:"A DISTANCIA / REVISIÓN / CONTROL"},
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white text-[#0b1115]">
      <div className="site-container section-space">
        <div className="grid gap-9 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-18">
          <div><p className="kicker">02 / SERVICIOS</p><h2 className="section-heading mt-6">UN OBJETIVO.<br/><span className="text-[#077c92]">TU CAMINO.</span></h2></div>
          <p className="body-copy max-w-xl text-[#53636a]">No trabajamos con soluciones iguales para todo el mundo. El punto de partida, tu contexto y el objetivo determinan cada programa.</p>
        </div>
        <div className="mt-15 border-t-2 border-[#0b1115]">
          {services.map(s=><div key={s.number} className="group grid gap-5 border-b border-[#d6d9d4] py-9 transition-colors hover:bg-[#f6f7f4] md:grid-cols-[60px_minmax(0,1.3fr)_minmax(0,.7fr)] md:items-center md:gap-6 lg:py-12">
            <span className="text-[11px] font-extrabold tracking-[.16em] text-[#077c92]">{s.number} /</span>
            <h3 className="max-w-2xl text-[clamp(1.7rem,3.3vw,3.3rem)] font-black leading-[1.09] tracking-[-.06em] transition-colors group-hover:text-[#077c92]">{s.title}</h3>
            <div className="md:pl-6">
              <p className="max-w-md text-sm font-medium leading-7 text-[#4b5c65]">{s.detail}</p>
              <span className="mt-4 block text-[10px] font-extrabold tracking-[.11em] text-[#077c92]">{s.types}</span>
            </div>
          </div>)}
        </div>
        <div className="mt-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <p className="text-sm font-semibold leading-6 text-[#4b5c65]">¿No sabes cuál es el mejor punto de partida?</p>
          <Link href="/#contacto" className="action-dark">HABLEMOS DE TU CASO <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}