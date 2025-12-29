export default function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span>
            © {new Date().getFullYear()} WebBase. All rights reserved.
          </span>

          <div className="flex gap-6">
            <a href="#" className="hover:text-black">
              Privacy
            </a>
            <a href="#" className="hover:text-black">
              Cookies
            </a>
            <a href="#" className="hover:text-black">
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
