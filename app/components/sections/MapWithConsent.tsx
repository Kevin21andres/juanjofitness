"use client";
import {useState} from "react";
export default function MapWithConsent(){
 const [consent,setConsent]=useState(false);
 return consent ? <iframe
 title="Google Maps: tienda Juanjo Fitness en Tarragona"
 src="https://www.google.com/maps?q=Av.+Catalunya+31,+43002+Tarragona&output=embed"
 className="h-full w-full border-0" loading="lazy"
 referrerPolicy="strict-origin-when-cross-origin"
 /> : <div className="flex h-full flex-col items-center justify-center bg-slate-100 px-8 text-center text-slate-800">
 <p className="text-lg font-bold">Ver ubicación en el mapa</p>
 <p className="mt-3 max-w-sm text-sm text-slate-600">El mapa de Google Maps no se carga automáticamente para proteger tu privacidad. Al mostrarlo, tu navegador se conectará con Google.</p>
 <button type="button" onClick={()=>setConsent(true)} className="mt-6 rounded-full bg-[#1E90FF] px-6 py-3 font-semibold text-white hover:bg-[#187bcd]">Mostrar mapa</button>
 </div>;
}
