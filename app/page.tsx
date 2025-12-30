import Hero from "./components/sections/Hero";
import Metodo from "./components/sections/Metodo";
import Servicios from "./components/sections/Servicios";
import Contacto from "./components/sections/Contacto";
import Ubicacion from "./components/sections/Ubicacion";
import SobreJuanjo from "./components/sections/SobreJuanjo";

export default function Home() {
  return (
    <>
      <Hero />
      <SobreJuanjo />
      <Metodo />
      <Servicios />
      <Ubicacion />
      <Contacto />
    </>
  );
}
