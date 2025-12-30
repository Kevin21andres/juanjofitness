import InstagramIcon from "../ui/InstagramIcon";
import FacebookIcon from "../ui/FacebookIcon";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-gray-400 sm:px-6 sm:py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Marca */}
          <span className="font-semibold text-white">
            © {new Date().getFullYear()} Juanjo Fitness · JJHP
          </span>

          {/* Links legales */}
          <div className="flex flex-wrap items-center gap-6">
            <a href="/privacy" className="hover:text-white transition">
              Privacidad
            </a>
            <a href="/cookies" className="hover:text-white transition">
              Cookies
            </a>
            <a href="/legal" className="hover:text-white transition">
              Legal
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/juanjofitness/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Juanjo Fitness"
              className="hover:text-[#1E90FF] transition"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>

            <a
              href="https://www.facebook.com/p/Juanjo-Hidalgo-100063191922499/?locale=es_ES"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Juanjo Fitness"
              className="hover:text-[#1E90FF] transition"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
