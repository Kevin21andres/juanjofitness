"use client";
import { useState } from "react";

export default function MapWithConsent() {
  const [consent, setConsent] = useState(false);
  if (consent) {
    return (
      <iframe
        title="Mapa de Google Maps: Juanjo Fitness, Avenida Catalunya 31, Tarragona"
        src="https://www.google.com/maps?q=Av.+Catalunya+31,+43002+Tarragona&output=embed"
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 text-center text-[#101820]">
      <span aria-hidden="true" className="text-3xl text-[#1684d4]">⌖</span>
      <h3 className="mt-5 text-xl font-extrabold">Av. Catalunya, 31</h3>
      <p className="mt-1 text-sm font-semibold text-[#63707c]">43002 Tarragona</p>
      <p className="mt-5 max-w-sm text-sm leading-6 text-[#52616b]">
        Por privacidad, el mapa se carga solo si lo solicitas. Al abrirlo, tu navegador se conectará a Google.
      </p>
      <button type="button" onClick={() => setConsent(true)} className="action-primary mt-7">Ver mapa <span aria-hidden="true">↗</span></button>
    </div>
  );
}