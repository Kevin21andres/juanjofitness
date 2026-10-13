import Hero from "./components/sections/Hero";
import SobreJuanjo from "./components/sections/SobreJuanjo";
import Servicios from "./components/sections/Servicios";
import Metodo from "./components/sections/Metodo";
import PersonasReales from "./components/sections/PersonasReales";
import Tarifas from "./components/sections/Tarifas";
import PacksProcell from "./components/sections/PacksProcell";
import Ubicacion from "./components/sections/Ubicacion";
import Contacto from "./components/sections/Contacto";

export default function Home() {
  return (
    <main>
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