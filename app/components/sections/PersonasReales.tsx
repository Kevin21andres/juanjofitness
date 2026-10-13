import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";

const gallery = [
  "persona1.webp","persona2.webp","persona3.webp",
  "persona4.webp","persona5.webp","persona6.webp",
];

export default function PersonasReales() {
  return (
    <section id="personas" className="bg-[#f6f6f3] text-[#101820]">
      <div className="site-container section-space">
        <Reveal>
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="kicker">04 / Progreso real</p>
              <h2 className="section-heading mt-5">El trabajo se ve.</h2>
            </div>
            <p className="body-copy max-w-md text-[#52616b]">Personas, procesos y cambios que no suceden de un día para otro. La constancia cuenta.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-3">
          {gallery.map((image, index) => (
            <figure key={image} className="relative aspect-[3/4] overflow-hidden bg-[#dbe0e2]">
              <Image src={"/personas/" + image} alt={"Galería de resultados de entrenamiento, fotografía " + (index + 1)} fill
                sizes="(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-500 hover:scale-[1.035]" />
            </figure>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-6 border-t border-[#d1dadd] pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm leading-7 text-[#52616b]">Cada proceso es diferente. Hablemos del tuyo y de cómo podemos empezar.</p>
          <Link href="/#contacto" className="action-dark shrink-0">Quiero empezar <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}