import Hero from "./components/sections/Hero";
import Metodo from "./components/sections/Metodo";
import Servicios from "./components/sections/Servicios";
import Contacto from "./components/sections/Contacto";
import Ubicacion from "./components/sections/Ubicacion";
import SobreJuanjo from "./components/sections/SobreJuanjo";
import PacksProcell from "./components/sections/PacksProcell";

export default function Home() {
  return (
    <>
      <Hero />
      <SobreJuanjo />
      <Metodo />
      <PacksProcell />
      <Servicios />
      <Ubicacion />
      <Contacto />
    </>
  );
}
