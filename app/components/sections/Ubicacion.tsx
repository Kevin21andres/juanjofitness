import MapWithConsent from "./MapWithConsent";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="bg-white text-[#101820]">
      <div className="site-container section-space">
        <div className="grid gap-9 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-16">
          <div>
            <p className="kicker">07 / Nos encontrarás aquí</p>
            <h2 className="section-heading mt-5">Estamos en Tarragona.</h2>
            <p className="body-copy mt-7 max-w-lg text-[#52616b]">
              Visítanos en nuestra tienda para consultar sobre entrenamiento y suplementación deportiva, o escríbenos antes de venir.
            </p>
            <address className="mt-10 border-l-[3px] border-[#1684d4] pl-5 not-italic">
              <p className="text-sm font-extrabold">Juanjo Fitness · JJHP</p>
              <p className="mt-2 text-sm leading-7 text-[#52616b]">Av. Catalunya, 31<br/>43002 Tarragona</p>
            </address>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="https://www.google.com/maps/search/?api=1&query=Av.+Catalunya+31,+43002+Tarragona"
                target="_blank" rel="noopener noreferrer" className="action-dark">Cómo llegar <span aria-hidden="true">↗</span></a>
              <a href="https://wa.me/34649833960" target="_blank" rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center border border-[#dce1e2] px-6 text-sm font-bold text-[#101820] hover:bg-[#f6f6f3]">
                Preguntar antes de venir
              </a>
            </div>
          </div>
          <div className="relative h-[340px] overflow-hidden border border-[#dce1e2] bg-[#edf1f3] sm:h-[460px]">
            <MapWithConsent />
          </div>
        </div>
      </div>
    </section>
  );
}