"use client";
import {useState} from "react";
export default function MapWithConsent(){
 const [consent,setConsent]=useState(false);
 return consent ? <iframe
 title="Mapa de Google Maps: Juanjo Fitness, Avenida Catalunya 31, Tarragona"
 src="https://www.google.com/maps?q=Av.+Catalunya+31,+43002+Tarragona&output=embed"
 className="h-full w-full border-0" loading="lazy"
 referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
 /> : <div className="relative flex h-full flex-col items-center justify-center overflow-hidden px-6 text-center text-[#0b1115]">
 <span aria-hidden="true" className="absolute -right-7 -top-13 select-none text-[min(34vw,310px)] font-black leading-none tracking-[-.1em] text-[#cbdcd9]">43°</span>
 <span className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#077c92] text-2xl text-[#077c92]">⌖</span>
 <h3 className="relative text-2xl font-black tracking-tight">Av. Catalunya, 31</h3>
 <p className="relative mt-2 text-sm font-bold text-[#53636b]">43002 Tarragona</p>
 <p className="relative mt-5 max-w-sm text-sm leading-7 text-[#4b5c65]">El mapa solo se carga si lo solicitas. Al abrirlo, tu navegador se conecta con Google.</p>
 <button type="button" onClick={()=>setConsent(true)} className="action-dark relative mt-7">MOSTRAR MAPA <span aria-hidden="true">↗</span></button>
 </div>;
}