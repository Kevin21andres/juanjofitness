export default function Home() {
  return (
    <section className="min-h-screen px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center py-32 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Web Base
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-600">
          Base profesional en Next.js + TypeScript + Tailwind.
          Pensada para crear webs de clientes de forma rápida y limpia.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <span className="rounded-md bg-black px-6 py-3 text-white">
            Starter listo
          </span>
          <span className="rounded-md border px-6 py-3">
            Personalizable
          </span>
        </div>
      </div>
    </section>
  );
}
