import Hero from "./components/sections/Hero";
import PersonasReales from "./components/sections/PersonasReales";
import Servicios from "./components/sections/Servicios";
import Metodo from "./components/sections/Metodo";
import Tarifas from "./components/sections/Tarifas";
import PacksProcell from "./components/sections/PacksProcell";
import SobreJuanjo from "./components/sections/SobreJuanjo";
import Ubicacion from "./components/sections/Ubicacion";
import Contacto from "./components/sections/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <PersonasReales />
      <SobreJuanjo />
      <Metodo />
      <Tarifas />
      <Ubicacion />
      <Contacto />
    </>
  );
}
//
