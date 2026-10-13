import Reveal from "../ui/Reveal";

const packs = [
  {name:"Inicio",intro:"Una base sencilla para acompañar tus primeros pasos.",items:["Proteína Whey","Creatina","Multivitamínico"]},
  {name:"Rendimiento",intro:"Opciones orientadas a quienes entrenan con regularidad.",items:["Whey o ISO","Creatina","Pre-entreno"]},
  {name:"Avanzado",intro:"Una selección para necesidades deportivas específicas.",items:["Proteína ISO","Creatina","Aminoácidos / intra","Recuperación"]},
];

export default function PacksProcell() {
  return (
    <section id="packs-procell" className="bg-[#f6f6f3] text-[#101820]">
      <div className="site-container section-space">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1fr_.8fr] lg:items-end lg:gap-16">
            <div>
              <p className="kicker">06 / Suplementación</p>
              <h2 className="section-heading mt-5">Procell Sport. Selección con criterio.</h2>
            </div>
            <p className="body-copy text-[#52616b]">Packs orientativos para consultar con Juanjo. Elegimos productos en función de tu contexto, no por seguir una lista.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {packs.map((pack, index) => (
            <article key={pack.name} className="flex h-full flex-col border border-[#d7dedf] bg-white p-7 sm:p-8">
              <p className="text-xs font-extrabold tracking-[.16em] text-[#1684d4]">{String(index + 1).padStart(2, "0")} / PACK</p>
              <h3 className="mt-6 text-2xl font-extrabold tracking-tight">{pack.name}</h3>
              <p className="mt-4 min-h-12 text-sm leading-7 text-[#52616b]">{pack.intro}</p>
              <ul className="mt-7 flex-1 space-y-3 border-t border-[#dce1e2] pt-6">
                {pack.items.map(item => <li key={item} className="flex gap-3 text-sm font-semibold"><span aria-hidden="true" className="text-[#1684d4]">—</span>{item}</li>)}
              </ul>
              <a href={"https://wa.me/34649833960?text=" + encodeURIComponent("Hola Juanjo, quiero consultar el Pack " + pack.name + " de Procell Sport.")}
                target="_blank" rel="noopener noreferrer"
                className="mt-9 inline-flex min-h-12 items-center justify-between border-t border-[#dce1e2] pt-5 text-sm font-extrabold transition-colors hover:text-[#0967af]">
                Consultar disponibilidad <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-7 text-[#63707c]">La composición de los packs es orientativa y puede variar. Los suplementos no sustituyen una alimentación equilibrada.</p>
      </div>
    </section>
  );
}