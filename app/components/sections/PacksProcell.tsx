const packs=[
 {id:"01",name:"INICIO",details:"Proteína Whey · Creatina · Multivitamínico"},
 {id:"02",name:"RENDIMIENTO",details:"Whey / ISO · Creatina · Pre-entreno"},
 {id:"03",name:"AVANZADO",details:"ISO · Creatina · Aminoácidos · Recuperación"}
];
export default function PacksProcell(){
 return <section id="packs-procell" className="border-t border-[#1d3139] bg-[#0b1115] text-white">
   <div className="site-container grid gap-10 py-18 lg:grid-cols-[.85fr_1.15fr] lg:gap-22 lg:py-22">
     <div><p className="kicker kicker-light">06 / SUPLEMENTACIÓN</p><h2 className="mt-6 text-[clamp(2.6rem,4.5vw,5rem)] font-black leading-[.98] tracking-[-.07em]">PRECISIÓN<br/><span className="text-[#1ad8ec]">TAMBIÉN FUERA</span><br/>DEL GYM.</h2><p className="mt-7 max-w-lg text-sm leading-7 text-white/60">Selección orientativa de Procell Sport. La suplementación se adapta al entrenamiento y a tus necesidades, no al revés.</p></div>
     <div className="border-t border-white/25">
       {packs.map(p=><a key={p.id} href={"https://wa.me/34649833960?text="+encodeURIComponent("Hola Juanjo, quiero consultar el pack Procell "+p.name+".")}
        target="_blank" rel="noopener noreferrer"
        className="group grid gap-3 border-b border-white/25 py-7 transition-colors hover:text-[#1ad8ec] sm:grid-cols-[55px_1fr_24px] sm:items-center">
         <span className="text-[11px] font-extrabold tracking-widest text-[#1ad8ec]">{p.id}/</span>
         <div><h3 className="text-2xl font-black tracking-[-.045em] sm:text-3xl">{p.name}</h3><p className="mt-2 text-xs font-semibold leading-6 text-white/55">{p.details}</p></div>
         <span aria-hidden="true" className="text-2xl">↗</span>
       </a>)}
       <p className="mt-5 text-xs leading-6 text-white/45">Composición orientativa y disponibilidad a confirmar. Los suplementos no sustituyen una dieta equilibrada.</p>
     </div>
   </div>
 </section>;
}