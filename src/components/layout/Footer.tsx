import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a1a] border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">AppsZoneBD</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Web development, hosting & IT services based in Dhaka, Bangladesh.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-white/40 text-sm hover:text-white"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/40 text-sm hover:text-white"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/40 text-sm hover:text-white"
                >
                  Professional Email
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/40 text-sm hover:text-white"
                >
                  ICT Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Hosting</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-white/40 text-sm hover:text-white"
                >
                  Shared Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/40 text-sm hover:text-white"
                >
                  VPS
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/40 text-sm hover:text-white"
                >
                  Dedicated Server
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/40 text-sm hover:text-white"
                >
                  Reseller Hosting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/40 text-sm">info@appszonebd.com</li>
              <li className="text-white/40 text-sm">Dhaka, Bangladesh</li>
              {/* <li>
                <Link
                  href="#"
                  className="text-white/40 text-sm hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/40 text-sm hover:text-white"
                >
                  Career
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} AppsZoneBD. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/30 text-sm hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/30 text-sm hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
