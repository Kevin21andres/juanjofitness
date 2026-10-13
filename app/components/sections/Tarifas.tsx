import Link from "next/link";
const plans=[
{name:"BASE", subtitle:"Rutina + nutrición",price:"40",who:"Para quien quiere avanzar con una dirección clara.",features:["Plan de entrenamiento adaptado","Pautas nutricionales personalizadas","Revisiones y ajustes","Comunicación por WhatsApp"],message:"Hola Juanjo, me interesa el plan Rutina + Nutrición de 40 € al mes. ¿Podemos hablar?"},
{name:"COMPETICIÓN",subtitle:"Preparación específica",price:"60",who:"Para objetivos deportivos exigentes y preparación por fases.",features:["Planificación nutricional por fases","Entrenamiento avanzado","Seguimiento más cercano","Revisión y ajustes durante la preparación"],message:"Hola Juanjo, me interesa el plan de competición de 60 € al mes. ¿Podemos hablar?"}
];
export default function Tarifas() {
 return <section id="tarifas" className="bg-[#f2f0ea] text-[#0b1115]">
   <div className="site-container section-space">
     <div className="flex flex-col gap-7 border-b border-[#bfc9c6] pb-9 lg:flex-row lg:items-end lg:justify-between">
       <div><p className="kicker">05 / PROGRAMAS Y TARIFAS</p><h2 className="section-heading mt-6">INVERTIR EN<br/><span className="text-[#077c92]">TU PROGRESO.</span></h2></div>
       <p className="body-copy max-w-md text-[#4b5c65]">Sin precios ocultos. Dos puntos de partida para hablar de tu situación y encontrar la preparación que necesitas.</p>
     </div>
     <div className="mt-10 grid gap-4 lg:grid-cols-2">
       {plans.map((p,i)=><article key={p.name} className={"relative flex flex-col overflow-hidden border p-7 sm:p-11 "+(i===1?"border-[#0b1115] bg-[#0b1115] text-white":"border-[#bec8c5] bg-white text-[#0b1115]")}>
         <div className="flex items-start justify-between gap-6">
           <span className={"text-xs font-black uppercase tracking-[.18em] "+(i===1?"text-[#1ad8ec]":"text-[#077c92]")}>PLAN / 0{i+1}</span>
           <span className={"h-[2px] w-12 "+(i===1?"bg-[#1ad8ec]":"bg-[#077c92]")}/>
         </div>
         <div className="mt-11 flex flex-col gap-6 border-b pb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
           <div><h3 className="text-[clamp(2.5rem,4.7vw,5rem)] font-black leading-none tracking-[-.08em]">{p.name}</h3><p className={"mt-4 text-sm font-semibold "+(i===1?"text-white/65":"text-[#4b5c65]")}>{p.subtitle}</p></div>
           <div className="shrink-0"><div className="flex items-start"><span className="text-[clamp(5rem,7.7vw,8.5rem)] font-black leading-[.78] tracking-[-.11em]">{p.price}</span><span className={"ml-2 text-3xl font-black "+(i===1?"text-[#1ad8ec]":"text-[#077c92]")}>€</span></div><span className={"mt-3 block text-right text-xs font-bold "+(i===1?"text-white/60":"text-[#4b5c65]")}>/ MES</span></div>
         </div>
         <p className={"mt-8 text-base font-semibold leading-7 "+(i===1?"text-white/80":"text-[#4b5c65]")}>{p.who}</p>
         <ul className="mt-8 flex-1 space-y-4">
           {p.features.map(f=><li key={f} className="flex gap-3 text-sm font-medium leading-6"><span aria-hidden="true" className={i===1?"text-[#1ad8ec]":"text-[#077c92]"}>↗</span>{f}</li>)}
         </ul>
         <Link href={"https://wa.me/34649833960?text="+encodeURIComponent(p.message)}
           target="_blank" rel="noopener noreferrer"
           className={"mt-11 flex min-h-14 items-center justify-between gap-3 px-6 text-xs font-black tracking-[.06em] transition-colors "+(i===1?"bg-[#1ad8ec] text-[#0b1115] hover:bg-white":"bg-[#0b1115] text-white hover:bg-[#29363d]")}>
           CONSULTAR ESTE PLAN <span aria-hidden="true" className="text-xl">↗</span>
         </Link>
       </article>)}
     </div>
     <p className="mt-8 max-w-3xl text-sm leading-7 text-[#53636b]">Los planes son personalizados. Si tienes objetivos especiales o dudas sobre el alcance, escríbeme y lo valoramos contigo.</p>
   </div>
 </section>;
}