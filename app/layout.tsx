import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Entrenador personal en Tarragona | Juanjo Fitness · JJHP",
    template: "%s | Juanjo Fitness · Tarragona",
  },
  description:
    "Preparación física y entrenamiento personal en Tarragona y online. Programas personalizados, seguimiento y objetivos reales con Juanjo Hidalgo.",
  keywords: [
    "entrenador personal Tarragona",
    "preparador físico Tarragona",
    "entrenamiento personal Tarragona",
    "transformación corporal Tarragona",
    "preparación competición Tarragona",
    "fitness Tarragona",
    "JJHP Tarragona",
  ],
  metadataBase: new URL("https://juanjofitness.com"),
  openGraph: {
    title: "Entrenador personal en Tarragona | Juanjo Fitness",
    description: "Preparación física, transformación corporal y competición. Entrena con un plan pensado para ti.",
    url: "https://juanjofitness.com",
    siteName: "Juanjo Fitness",
    images: [{
      url: "/blog/covers/logo_jjhp.png",
      width: 1200,
      height: 630,
      alt: "Juanjo Fitness · Entrenador personal en Tarragona",
    }],
    locale: "es_ES",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={raleway.variable}>
      <body className="antialiased">
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-white focus:px-5 focus:py-3 focus:text-[#101820]">
          Saltar al contenido
        </a>
        <Navbar />
        <div id="contenido">{children}</div>
        <Footer />
      </body>
    </html>
  );
}