// app/blog/_data/posts.ts
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string; // /blog/covers/xxx.webp
  date: string; // ISO "2026-02-26"
  readingTime: string; // "6 min"
  category: "Entrenamiento" | "Nutrición" | "Disciplina" | "Suplementación" | "Competición";
  tags: string[];
  author: string;
  content: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "quote"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "img"; src: string; alt: string }
    | { type: "video"; youtubeId: string; title?: string }
    | { type: "divider" }
    | { type: "cta"; title: string; text: string; buttonText: string; href: string }
  >;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-empezar-en-el-gym-sin-perder-el-tiempo",
    title: "Cómo empezar en el gym sin perder el tiempo (y sin lesionarte)",
    excerpt:
      "Los 5 errores típicos al empezar, cómo evitarlos y una hoja de ruta simple para progresar desde la primera semana.",
    cover: "/blog/covers/logo_jjhp.png",
    date: "2026-02-26",
    readingTime: "7 min",
    category: "Entrenamiento",
    tags: ["principiantes", "rutina", "técnica", "progresión"],
    author: "Juanjo Hidalgo",
    content: [
      { type: "p", text: "Empezar fuerte no es lo mismo que empezar bien. Si quieres cambiar el cuerpo, necesitas estrategia: entrenar con intención, progresar, y evitar el ruido." },
      { type: "h2", text: "1) Lo primero: el objetivo real" },
      { type: "p", text: "¿Buscas perder grasa, ganar músculo o rendir? Si no defines esto, tu rutina será un collage de ejercicios que no te llevan a ningún lado." },
      { type: "h2", text: "2) Los 5 errores que te frenan" },
      { type: "ul", items: [
        "Entrenar “a lo loco” sin progresión de cargas.",
        "Cambiar de rutina cada semana.",
        "No controlar la técnica en básicos.",
        "Cardio sin estructura (o nada).",
        "Comer “más o menos bien” sin consistencia."
      ]},
      { type: "divider" },
      { type: "h2", text: "Una base simple que funciona" },
      { type: "p", text: "3–4 días de fuerza, ejercicios básicos, progresión semanal y un mínimo de pasos diarios. No necesitas magia, necesitas constancia." },
      { type: "img", src: "/blog/images/progresion.webp", alt: "Ejemplo de progresión semanal" },
      { type: "h2", text: "Técnica: tu seguro de vida" },
      { type: "quote", text: "La técnica no es estética: es rendimiento + prevención de lesión." },
      { type: "p", text: "Si no puedes controlar el movimiento, no estás listo para subir peso. Primero control, luego carga." },
      { type: "cta", title: "¿Quieres que lo adaptemos a tu caso?", text: "Te digo qué hacer desde tu punto de partida (objetivo, rutina, y nutrición).", buttonText: "Hablar por WhatsApp", href: "#contacto" },
    ],
  },

  {
    slug: "deficit-calorico-sin-volverte-loco",
    title: "Déficit calórico sin volverte loco: guía realista",
    excerpt:
      "Cómo perder grasa sin sufrir: estructura, comida sencilla, y cómo ajustar sin obsesionarte con la báscula.",
    cover: "/blog/covers/logo_jjhp.png",
    date: "2026-02-20",
    readingTime: "6 min",
    category: "Nutrición",
    tags: ["pérdida de grasa", "déficit", "hábitos", "constancia"],
    author: "Juanjo Hidalgo",
    content: [
      { type: "p", text: "El déficit calórico funciona, pero hacerlo mal te deja sin energía, sin adherencia y rebotando cada dos semanas." },
      { type: "h2", text: "La regla que nadie quiere oír" },
      { type: "p", text: "Si no sostienes el plan 8–12 semanas, no es un plan: es un intento." },
      { type: "h2", text: "Estructura simple" },
      { type: "ul", items: [
        "Proteína alta (cada comida).",
        "Verdura diaria (volumen + saciedad).",
        "Carbohidrato en torno al entreno.",
        "Grasas buenas controladas.",
        "Agua y sueño: obligatorios."
      ]},
      { type: "video", youtubeId: "dQw4w9WgXcQ", title: "Cómo ajustar el plan semanal" },
      { type: "cta", title: "¿Quieres que te lo deje exacto?", text: "Te lo dejo en gramos según tu objetivo y tu rutina.", buttonText: "Empieza hoy", href: "#contacto" },
    ],
  },

  {
    slug: "disciplina-vs-motivacion",
    title: "Disciplina vs motivación: por qué siempre gana la disciplina",
    excerpt:
      "La motivación sube y baja. La disciplina se entrena. Te explico cómo construirla con un sistema.",
    cover: "/blog/covers/logo_jjhp.png",
    date: "2026-02-10",
    readingTime: "5 min",
    category: "Disciplina",
    tags: ["hábitos", "mentalidad", "rutina", "consistencia"],
    author: "Juanjo Hidalgo",
    content: [
      { type: "p", text: "La motivación es emocional. La disciplina es estructura. Y la estructura es la que te cambia el cuerpo." },
      { type: "h2", text: "Tu sistema manda" },
      { type: "ul", items: [
        "Misma hora de entreno.",
        "Plan escrito (no improvisado).",
        "Seguimiento semanal (peso, medidas, rendimiento).",
        "Reglas simples de comida.",
      ]},
      { type: "quote", text: "No necesitas ganas. Necesitas un plan." },
      { type: "cta", title: "Si quieres disciplina, necesitas dirección", text: "Te marco el camino y lo seguimos semana a semana.", buttonText: "Contactar", href: "#contacto" },
    ],
  },
];