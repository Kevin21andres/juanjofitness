import Image from "next/image";
import InstagramIcon from "../ui/InstagramIcon";
import FacebookIcon from "../ui/FacebookIcon";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">

        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/logo_jjhp.png"
              alt="JJHP"
              width={500}
              height={250}
              className="h-13 w-auto"
            />
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Preparación física y transformación corporal con método real,
              disciplina y seguimiento profesional.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide text-white">
              Navegación
            </h4>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a href="#metodo" className="hover:text-white transition">
                Método
              </a>
              <a href="#tarifas" className="hover:text-white transition">
                Tarifas
              </a>
              <a href="/blog" className="hover:text-white transition">
                Blog
              </a>
              <a href="#contacto" className="hover:text-white transition">
                Contacto
              </a>
            </div>
          </div>

          {/* Legal + Social */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-white">
                Legal
              </h4>
              <div className="mt-3 flex flex-col gap-3 text-sm text-white/60">
                <a href="/privacy" className="hover:text-white transition">
                  Privacidad
                </a>
                <a href="/cookies" className="hover:text-white transition">
                  Cookies
                </a>
                <a href="/legal" className="hover:text-white transition">
                  Aviso legal
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/juanjofitness/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Juanjo Fitness"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition"
              >
                <InstagramIcon className="h-5 w-5 text-white" />
              </a>

              <a
                href="https://www.facebook.com/p/Juanjo-Hidalgo-100063191922499/?locale=es_ES"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Juanjo Fitness"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition"
              >
                <FacebookIcon className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Juanjo Fitness · JJHP. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}