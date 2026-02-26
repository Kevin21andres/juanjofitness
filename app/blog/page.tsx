import Link from "next/link";

const WHATSAPP = "https://wa.me/34649833960";
const waLink = (msg: string) => `${WHATSAPP}?text=${encodeURIComponent(msg)}`;

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Nutrición" | "Entrenamiento" | "Hábitos" | "Competición" | "Suplementación";
  readTime: string;
  date: string; // display
  level: "Principiante" | "Intermedio" | "Avanzado";
  featured?: boolean;
};

const CATEGORIES: { label: string; value: Post["category"] | "Todos" }[] = [
  { label: "Todos", value: "Todos" },
  { label: "Entrenamiento", value: "Entrenamiento" },
  { label: "Nutrición", value: "Nutrición" },
  { label: "Hábitos", value: "Hábitos" },
  { label: "Suplementación", value: "Suplementación" },
  { label: "Competición", value: "Competición" },
];

const POSTS: Post[] = [
  {
    slug: "como-perder-grasa-sin-perder-musculo",
    title: "Cómo perder grasa sin perder músculo (sin atajos)",
    excerpt:
      "La mayoría falla por lo mismo: déficit mal planteado, cardio sin control y entreno sin progresión. Te explico el enfoque JJHP: simple, medible y sostenible.",
    category: "Nutrición",
    readTime: "7 min",
    date: "Febrero 2026",
    level: "Intermedio",
    featured: true,
  },
  {
    slug: "rutina-para-principiantes-que-si-funciona",
    title: "Rutina para principiantes que sí funciona (y por qué las otras no)",
    excerpt:
      "No necesitas 20 ejercicios. Necesitas básicos bien hechos, progresión y constancia. Te dejo una estructura realista para empezar fuerte.",
    category: "Entrenamiento",
    readTime: "6 min",
    date: "Febrero 2026",
    level: "Principiante",
    featured: true,
  },
  {
    slug: "disciplina-vs-motivacion",
    title: "Disciplina vs motivación: la diferencia entre cambiar y entretenerse",
    excerpt:
      "La motivación aparece y desaparece. La disciplina se construye con hábitos simples. Aquí tienes un sistema para sostener el proceso incluso en semanas malas.",
    category: "Hábitos",
    readTime: "5 min",
    date: "Enero 2026",
    level: "Principiante",
  },
  {
    slug: "cuantas-proteinas-necesito",
    title: "¿Cuánta proteína necesitas de verdad? (sin mitos)",
    excerpt:
      "Ni 1 g ni 4 g por kg. Depende de tu objetivo, tu porcentaje graso y tu entrenamiento. Te lo dejo claro con rangos fáciles de aplicar.",
    category: "Nutrición",
    readTime: "8 min",
    date: "Enero 2026",
    level: "Intermedio",
  },
  {
    slug: "volumen-vs-definicion",
    title: "Volumen vs definición: cómo decidir qué fase te toca",
    excerpt:
      "No todo el mundo debería ‘definir’. Y no todo el mundo debería ‘volumen’. Aprende a decidir con lógica: punto de partida, rendimiento y adherencia.",
    category: "Entrenamiento",
    readTime: "9 min",
    date: "Enero 2026",
    level: "Intermedio",
  },
  {
    slug: "suplementos-que-si",
    title: "Suplementos que sí tienen sentido (y cuáles no)",
    excerpt:
      "Creatina, cafeína, omega-3… y el resto, depende. Te explico qué usar según tu objetivo y cómo evitar gastar dinero en humo.",
    category: "Suplementación",
    readTime: "7 min",
    date: "Diciembre 2025",
    level: "Principiante",
  },
  {
    slug: "prep-competicion-realista",
    title: "Preparación a competición: lo que nadie te dice (real)",
    excerpt:
      "La prep es estrategia, cabeza y control. Si estás pensando en competir, esto es lo que necesitas tener claro antes de empezar.",
    category: "Competición",
    readTime: "10 min",
    date: "Diciembre 2025",
    level: "Avanzado",
  },
];

const RESOURCES = [
  {
    title: "Checklist semanal JJHP",
    desc: "Entreno · pasos · agua · sueño · cumplimiento.",
  },
  {
    title: "Errores típicos en definición",
    desc: "Lo que más frena el progreso aunque “hagas dieta”.",
  },
  {
    title: "Guía rápida de macros",
    desc: "Proteína · carbo · grasa: rangos simples y útiles.",
  },
];

function Badge({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "blue";
}) {
  const base =
    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide";
  const variants: Record<string, string> = {
    default: "border-white/10 bg-white/5 text-white/75",
    blue: "border-[#1E90FF]/30 bg-[#1E90FF]/15 text-white",
  };
  return <span className={`${base} ${variants[tone]}`}>{children}</span>;
}

function PostCard({ post }: { post: Post }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="blue">{post.category}</Badge>
        <Badge>{post.level}</Badge>
        <span className="text-xs text-white/45">{post.readTime}</span>
        <span className="text-xs text-white/25">·</span>
        <span className="text-xs text-white/45">{post.date}</span>
      </div>

      <h3 className="mt-4 text-xl font-bold tracking-tight text-white transition group-hover:text-white">
        {post.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-white/70">
        {post.excerpt}
      </p>

      <div className="mt-6">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E90FF] transition group-hover:translate-x-0.5"
        >
          Leer artículo
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const featured = POSTS.filter((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Hero */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Blog JJHP
              <span className="text-[#1E90FF]">.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Entrenamiento, nutrición y mentalidad sin humo. Contenido directo
              para gente que quiere resultados reales: estrategia clara,
              medición y disciplina.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={waLink("Hola Juanjo, vengo del blog y quiero información.")}
                target="_blank"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#1E90FF] px-8 text-sm font-semibold text-white shadow-lg shadow-[#1E90FF]/20 transition hover:bg-[#187bcd]"
              >
                Preguntar por WhatsApp
              </Link>

              <Link
                href="/#tarifas"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver tarifas
              </Link>
            </div>

            {/* Fake search */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/60">
                  Buscar (ej: “déficit”, “rutina”, “creatina”) — próximamente
                </div>
                <button
                  className="h-11 rounded-xl bg-white/10 px-5 text-sm font-semibold text-white/80 transition hover:bg-white/15"
                  type="button"
                >
                  Buscar
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <span
                    key={c.value}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70"
                  >
                    {c.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#1E90FF]/20 blur-3xl" />
        </div>
      </section>

      {/* Featured */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Destacados</h2>
              <p className="mt-2 text-sm text-white/60">
                Artículos largos y prácticos, sin teoría vacía.
              </p>
            </div>

            <Link
              href="/#contacto"
              className="hidden rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 sm:inline-flex"
            >
              Hablar con JJHP
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {featured.map((post) => (
              <article
                key={post.slug}
                className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-8 transition hover:from-white/[0.10] hover:to-white/[0.05]"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="blue">{post.category}</Badge>
                  <Badge>{post.level}</Badge>
                  <span className="text-xs text-white/45">{post.readTime}</span>
                  <span className="text-xs text-white/25">·</span>
                  <span className="text-xs text-white/45">{post.date}</span>
                </div>

                <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-white">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex h-11 items-center justify-center rounded-full bg-[#1E90FF] px-6 text-sm font-semibold text-white shadow-lg shadow-[#1E90FF]/20 transition hover:bg-[#187bcd]"
                  >
                    Leer ahora
                  </Link>

                  <Link
                    href={waLink(
                      `Hola Juanjo, acabo de ver el artículo: "${post.title}". ¿Me aconsejas por dónde empezar?`
                    )}
                    target="_blank"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white/80 transition hover:bg-white/10"
                  >
                    Preguntar duda
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* List + Sidebar */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
            {/* Posts list */}
            <div>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold">Últimos artículos</h2>
                  <p className="mt-2 text-sm text-white/60">
                    Entrena con cabeza. Come con estrategia. Progresa con control.
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {rest.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>

              {/* CTA block */}
              <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-xl font-bold">
                  ¿Quieres que lo aterricemos a tu caso?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  El contenido del blog te da la base. Pero el cambio real llega
                  cuando ajustas el plan a tu punto de partida, tu contexto y tu
                  objetivo. Si quieres, lo vemos por WhatsApp.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={waLink(
                      "Hola Juanjo, quiero que me ayudes con un plan (objetivo + punto de partida)."
                    )}
                    target="_blank"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#1E90FF] px-8 text-sm font-semibold text-white shadow-lg shadow-[#1E90FF]/20 transition hover:bg-[#187bcd]"
                  >
                    Hablar por WhatsApp
                  </Link>

                  <Link
                    href="/#metodo"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-sm font-semibold text-white/80 transition hover:bg-white/10"
                  >
                    Ver el método
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-bold">Guías rápidas</h3>
              <p className="mt-2 text-sm text-white/60">
                Recursos cortos para aplicar desde hoy.
              </p>

              <div className="mt-6 space-y-4">
                {RESOURCES.map((r) => (
                  <div
                    key={r.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <p className="font-semibold">{r.title}</p>
                    <p className="mt-2 text-sm text-white/65">{r.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  Consejo JJHP
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Si tu plan no se puede medir, no se puede mejorar. Define un
                  objetivo concreto, registra tus básicos (entreno, peso, fotos)
                  y ajusta con criterio, no con impulsos.
                </p>
              </div>

              <div className="mt-10 h-px w-full bg-white/10" />

              <div className="mt-8">
                <Link
                  href="/#tarifas"
                  className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white/80 transition hover:bg-white/10"
                >
                  Ver planes y tarifas
                </Link>

                <Link
                  href={waLink("Hola Juanjo, quiero empezar. ¿Qué plan me recomiendas?")}
                  target="_blank"
                  className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#1E90FF] px-6 text-sm font-semibold text-white shadow-lg shadow-[#1E90FF]/20 transition hover:bg-[#187bcd]"
                >
                  Empezar hoy
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </main>
  );
}