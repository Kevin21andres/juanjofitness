const phases = [
  {number:"01",name:"ESCUCHAR",body:"Entender tu situación, tus hábitos, el tiempo que tienes y hasta dónde quieres llegar."},
  {number:"02",name:"PLANIFICAR",body:"Elegir qué hacer, cuándo y con qué intensidad. Un programa con una lógica clara."},
  {number:"03",name:"REVISAR",body:"Analizar cómo respondes y ajustar entrenamiento y pautas cuando sea necesario."},
  {number:"04",name:"AVANZAR",body:"Convertir las buenas decisiones en continuidad. Trabajar hoy pensando en mañana."},
];

export default function Metodo(){
 return <section id="metodo" className="overflow-hidden bg-[#10191f] text-white">
   <div className="site-container section-space grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-26">
     <div className="lg:sticky lg:top-32 lg:self-start">
       <p className="kicker kicker-light">03 / EL MÉTODO</p>
       <h2 className="section-heading mt-7">MENOS RUIDO.<br/><span className="text-[#1ad8ec]">MÁS SENTIDO.</span></h2>
       <p className="body-copy mt-8 max-w-lg text-white/60">No necesitas un plan espectacular sobre el papel. Necesitas uno que funcione contigo, que se pueda seguir y que evolucione.</p>
       <div className="mt-11 flex items-center gap-5 border-t border-white/20 pt-7 text-[10px] font-black uppercase tracking-[.18em] text-[#1ad8ec]"><span className="h-[2px] w-9 bg-[#1ad8ec]"/> CADA PASO TIENE UN PORQUÉ.</div>
     </div>
     <ol className="border-t border-white/25">
       {phases.map(phase=><li key={phase.number} className="grid gap-5 border-b border-white/25 py-9 sm:grid-cols-[80px_1fr] sm:gap-6 lg:py-11">
         <span className="text-4xl font-black tracking-[-.07em] text-[#1ad8ec]">{phase.number}</span>
         <div><h3 className="text-[clamp(2rem,3.6vw,3.9rem)] font-black leading-none tracking-[-.065em]">{phase.name}</h3><p className="mt-5 max-w-md text-base leading-8 text-white/60">{phase.body}</p></div>
       </li>)}
     </ol>
   </div>
 </section>;
}