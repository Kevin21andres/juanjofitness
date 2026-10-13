import Image from "next/image";
import Link from "next/link";
const results = [
  {src:"persona1.webp", alt:"Evolución física de un cliente de JJHP mostrada en dos fotografías"},
  {src:"persona2.webp", alt:"Fotografías compartidas de entrenamiento y transformación"},
  {src:"persona3.webp", alt:"Antes y después de un proceso deportivo"},
  {src:"persona4.webp", alt:"Evolución de un deportista en preparación física"},
  {src:"persona5.webp", alt:"Imágenes de una transformación corporal"},
  {src:"persona6.webp", alt:"Fotografías de seguimiento deportivo"},
];
export default function PersonasReales() {
 return <section id="personas" className="bg-[#e9e9e3] text-[#0b1115]">
   <div className="site-container section-space">
     <div className="grid gap-8 lg:grid-cols-[1fr_.65fr] lg:items-end lg:gap-18">
       <div><p className="kicker">04 / RESULTADOS REALES</p><h2 className="section-heading mt-6">EL PROCESO<br/>DEJA <span className="text-[#077c92]">HUELLA.</span></h2></div>
       <div><p className="body-copy max-w-lg text-[#4b5c65]">No hay dos historias iguales. Detrás de cada cambio hay meses de decisiones y trabajo constante.</p><p className="mt-5 text-xs font-bold leading-6 text-[#566771]">Resultados individuales; cada proceso depende del punto de partida y la constancia.</p></div>
     </div>
     <div className="mt-13 grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-12">
       {results.map((r,i)=><figure key={r.src} className={"group relative overflow-hidden bg-[#c5cecb] "+(
          i===0?"col-span-2 aspect-[1.12] sm:aspect-[1.7] lg:col-span-6 lg:row-span-2 lg:aspect-auto":
          i===1?"col-span-2 aspect-[1.4] sm:col-span-1 sm:aspect-[.95] lg:col-span-3 lg:aspect-[.9]":
          i===2?"col-span-2 aspect-[1.4] sm:col-span-1 sm:aspect-[.95] lg:col-span-3 lg:aspect-[.9]":
          "col-span-1 aspect-[.76] lg:col-span-2 lg:aspect-[.88]"
         )}>
         <Image src={"/personas/"+r.src} alt={r.alt} fill sizes="(max-width:639px) 100vw, (max-width:1023px) 50vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"/>
         <span className="absolute bottom-0 left-0 bg-[#0b1115]/90 px-3 py-2 text-[10px] font-black uppercase tracking-wider text-white">{String(i+1).padStart(2,"0")} / JJHP</span>
       </figure>)}
     </div>
     <div className="mt-12 flex flex-col gap-6 border-t border-[#bfc8c5] pt-8 sm:flex-row sm:items-center sm:justify-between">
       <p className="max-w-lg text-sm font-semibold leading-7 text-[#4b5c65]">Tu objetivo será distinto. El compromiso con tu proceso es el mismo.</p>
       <Link href="/#contacto" className="action-dark">EMPEZAR MI PROCESO <span aria-hidden="true">↗</span></Link>
     </div>
   </div>
 </section>;
}