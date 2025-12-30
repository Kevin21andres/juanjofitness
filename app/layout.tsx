import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Entrenador personal en Tarragona | Juanjo Fitness · JJHP",
    template: "%s | Juanjo Fitness · Tarragona",
  },
  description:
    "Entrenador personal y preparador físico en Tarragona, especializado en transformación corporal, rendimiento y competición. Método serio, seguimiento real y resultados medibles.",
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
    description:
      "Preparador físico en Tarragona especializado en transformación corporal y competición. Entrenamiento real, resultados reales.",
    url: "https://juanjofitness.com",
    siteName: "Juanjo Fitness",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Juanjo Fitness · Entrenador personal en Tarragona",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://juanjofitness.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        suppressHydrationWarning
        className={`${raleway.className} antialiased bg-[#0B0B0B]`}
      >
        <Navbar />
        <main className="bg-[#0B0B0B]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
