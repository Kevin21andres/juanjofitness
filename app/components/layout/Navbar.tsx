import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Nombre */}
        <Link href="/" className="text-lg font-semibold">
          WebBase
        </Link>

        {/* Navegación */}
        <div className="flex items-center gap-6 text-sm">
          <Link href="#" className="text-gray-600 hover:text-black">
            Features
          </Link>
          <Link href="#" className="text-gray-600 hover:text-black">
            Pricing
          </Link>
          <Link href="#" className="text-gray-600 hover:text-black">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
