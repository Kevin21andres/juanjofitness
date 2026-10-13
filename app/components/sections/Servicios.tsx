import Link from "next/link";
import Reveal from "../ui/Reveal";

const services = [
  {num:"01",name:"Entrenamiento personal",text:"Sesiones y planificación adaptadas a tu experiencia, disponibilidad y objetivos. Atención al movimiento y a la progresión."},
  {num:"02",name:"Transformación corporal",text:"Pérdida de grasa, ganancia muscular y recomposición corporal con hábitos que se puedan sostener."},
  {num:"03",name:"Preparación para competir",text:"Planificación por fases, ajustes y acompañamiento para quienes se preparan para subir al escenario."},
  {num:"04",name:"Seguimiento online",text:"Entrena desde donde estés con revisiones periódicas y cambios en tu programa cuando sean necesarios."},
  {num:"05",name:"Nutrición deportiva",text:"Planificación de hábitos y pautas nutricionales orientadas al entrenamiento y a tus objetivos individuales."},
  {num:"06",name:"Rendimiento deportivo",text:"Trabajo de fuerza, condición física y progresión para mejorar tu capacidad de entrenar."},
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white text-[#101820]">
      <div className="site-container section-space">
        <div className="grid gap-7 lg:grid-cols-[1fr_.8fr] lg:items-end lg:gap-20">
          <Reveal>
            <p className="kicker">02 / Qué hacemos</p>
            <h2 className="section-heading mt-5 max-w-2xl">Un entrenamiento a la altura de tu objetivo.</h2>
          </Reveal>
          <p className="body-copy max-w-xl text-[#52616b]">No existe un único camino para progresar. Elegimos las herramientas que necesitas y las adaptamos a tu realidad.</p>
        </div>
        <div className="mt-14 grid border-l border-t border-[#dce1e2] sm:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <div key={service.num} className="group flex min-h-[260px] flex-col border-b border-r border-[#dce1e2] p-7 transition-colors hover:bg-[#f6f6f3] sm:p-8">
              <span className="text-xs font-extrabold tracking-[.16em] text-[#1684d4]">{service.num}</span>
              <h3 className="mt-9 text-xl font-extrabold leading-snug tracking-tight">{service.name}</h3>
              <p className="mt-4 text-sm leading-7 text-[#52616b]">{service.text}</p>
            </div>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-[#52616b]">¿No sabes qué programa encaja contigo?</p>
            <Link href="/#contacto" className="action-dark">Cuéntame tu objetivo <span aria-hidden="true">↗</span></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}