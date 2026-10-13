import MapWithConsent from "./MapWithConsent";

export default function Ubicacion() {
 return <section id="ubicacion" className="bg-[#f2f0ea] text-[#0b1115]">
   <div className="site-container section-space grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20">
     <div>
       <p className="kicker">07 / ESTAMOS AQUÍ</p>
       <h2 className="section-heading mt-7">TARRAGONA.<br/><span className="text-[#077c92]">EN PERSONA.</span></h2>
       <p className="body-copy mt-7 max-w-lg text-[#4b5c65]">Puedes acercarte a la tienda de JJHP para consultar tus dudas o escribir antes de venir. También trabajamos online.</p>
       <address className="mt-9 border-l-2 border-[#077c92] pl-6 not-italic">
         <strong className="block text-sm font-black uppercase tracking-[.08em]">JUANJO FITNESS · JJHP</strong>
         <span className="mt-3 block text-base leading-7 text-[#4b5c65]">Av. Catalunya, 31<br/>43002 Tarragona</span>
       </address>
       <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
         <a href="https://www.google.com/maps/search/?api=1&query=Av.+Catalunya+31,+43002+Tarragona" target="_blank" rel="noopener noreferrer" className="action-dark">CÓMO LLEGAR <span aria-hidden="true">↗</span></a>
         <a href="https://wa.me/34649833960" target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center border border-[#aeb8b5] px-5 text-xs font-black text-[#0b1115] hover:bg-white">CONSULTAR DISPONIBILIDAD</a>
       </div>
     </div>
     <div className="relative h-[350px] overflow-hidden border border-[#bdc7c3] bg-[#e5ebe8] sm:h-[520px]">
       <MapWithConsent/>
     </div>
   </div>
 </section>;
}