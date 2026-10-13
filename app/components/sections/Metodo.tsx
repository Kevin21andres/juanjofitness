import Reveal from "../ui/Reveal";

const steps = [
  {number:"01",title:"Primero, entenderte",text:"Hablamos de tu nivel, tu disponibilidad, tus hábitos y del resultado que quieres conseguir."},
  {number:"02",title:"Después, planificar",text:"Organizamos el entrenamiento y las pautas de trabajo para que tengas una dirección concreta."},
  {number:"03",title:"Medir y ajustar",text:"Revisamos cómo avanzas. Cambiamos lo que haga falta según la respuesta de tu cuerpo y tu día a día."},
  {number:"04",title:"Construir continuidad",text:"Buscamos hábitos y decisiones que te permitan mantener el progreso más allá de una semana."},
];

export default function Metodo() {
  return (
    <section id="metodo" className="bg-[#101820] text-white">
      <div className="site-container section-space">
        <Reveal>
          <p className="kicker kicker-light">03 / El método JJHP</p>
          <div className="mt-5 grid gap-7 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:gap-24">
            <h2 className="section-heading">El plan importa. <span className="text-[#83c9fb]">El seguimiento, más.</span></h2>
            <p className="body-copy text-white/65">La diferencia no está en entrenar más por entrenar. Está en saber por qué haces cada cosa y cómo evoluciona tu programa.</p>
          </div>
        </Reveal>
        <div className="mt-16 grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div key={item.number} className="border-b border-white/20 py-9 sm:pr-8 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0">
              <span className="text-sm font-extrabold text-[#83c9fb]">{item.number} /</span>
              <h3 className="mt-10 text-xl font-bold tracking-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/60">{item.text}</p>
              {index === 3 && <span className="sr-only">Última fase</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}