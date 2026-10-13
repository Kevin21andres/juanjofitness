import Hero from "./components/sections/Hero";
import SobreJuanjo from "./components/sections/SobreJuanjo";
import Servicios from "./components/sections/Servicios";
import Metodo from "./components/sections/Metodo";
import PersonasReales from "./components/sections/PersonasReales";
import Tarifas from "./components/sections/Tarifas";
import PacksProcell from "./components/sections/PacksProcell";
import Ubicacion from "./components/sections/Ubicacion";
import Contacto from "./components/sections/Contacto";

const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://juanjofitness.com/#jjhp",
  name: "Juanjo Fitness · JJHP",
  url: "https://juanjofitness.com",
  description: "Entrenamiento personal, preparación física y programas online con Juanjo Hidalgo.",
  image: "https://juanjofitness.com/sobrejuanjo/sobrejuanjo.webp",
  telephone: "+34649833960",
  email: "jjhp2026@outlook.es",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Catalunya, 31",
    postalCode: "43002",
    addressLocality: "Tarragona",
    addressCountry: "ES"
  },
  sameAs: [
    "https://www.instagram.com/juanjofitness/",
    "https://www.facebook.com/p/Juanjo-Hidalgo-100063191922499/"
  ]
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(businessStructuredData).replace(/</g,"\\u003c")}} />
      <Hero />
      <SobreJuanjo />
      <Servicios />
      <Metodo />
      <PersonasReales />
      <Tarifas />
      <PacksProcell />
      <Ubicacion />
      <Contacto />
    </main>
  );
}