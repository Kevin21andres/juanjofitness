export default function Contacto() {
 return <section id="contacto" className="relative overflow-hidden bg-[#0b1115] text-white">
   <div aria-hidden="true" className="absolute right-[-5%] top-0 select-none text-[clamp(15rem,38vw,46rem)] font-black leading-none tracking-[-.14em] text-white/[.025]">J</div>
   <div className="site-container section-space relative">
     <p className="kicker kicker-light">08 / EL SIGUIENTE PASO</p>
     <h2 className="mt-8 max-w-[1250px] text-[clamp(3.5rem,10vw,10rem)] font-black leading-[.92] tracking-[-.09em]">
       EMPIEZA<br/>POR <span className="text-[#1ad8ec]">HABLAR.</span>
     </h2>
     <div className="mt-13 grid gap-9 border-t border-white/30 pt-9 lg:grid-cols-[1fr_.75fr] lg:items-end lg:gap-30">
       <p className="body-copy max-w-xl text-white/65">Cuéntame qué quieres conseguir y dónde estás ahora. Antes de hablar de rutinas, vamos a hablar de ti.</p>
       <div className="flex flex-col gap-3">
         <a href={"https://wa.me/34649833960?text="+encodeURIComponent("Hola Juanjo, quiero hablar contigo para empezar un plan de entrenamiento.")}
           target="_blank" rel="noopener noreferrer" className="action-primary justify-between">ESCRIBIR POR WHATSAPP <span aria-hidden="true">↗</span></a>
         <a href="mailto:jjhp2026@outlook.es" className="action-outline justify-between">ENVIAR UN CORREO <span aria-hidden="true">↗</span></a>
       </div>
     </div>
   </div>
 </section>;
}