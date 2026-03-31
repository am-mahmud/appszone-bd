"use client";

import { MainNavbar } from "@/content/navbar";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="AppsZoneBD Logo"
            width={120}
            height={40}
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-8">
          {MainNavbar.map((item) => (
            <div
              key={item.name}
              className="relative pb-3"
              onMouseEnter={() => item.submenu && setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>

              {item.submenu && (
                <div
                  className={`absolute top-full left-0 w-56 bg-slate-800 border border-slate-700 shadow-xl py-2 px-1 rounded-lg ${
                    activeMenu === item.name ? "flex flex-col gap-1" : "hidden"
                  }`}
                >
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="text-sm text-slate-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md transition-colors duration-150"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* ── CTA ── */}
        <Link
          href="/contact"
          className="hidden md:block text-sm bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Make an Appointment
        </Link>

        {/* ── Mobile Toggle ── */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 hover:text-white transition-colors duration-200"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Nav ── */}
      {open && (
        <div className="md:hidden border-t border-slate-700/50 px-6 py-4 flex flex-col gap-1 bg-slate-900">
          {MainNavbar.map((item) => (
            <div key={item.name}>
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className="text-sm text-slate-300 hover:text-white py-2 transition-colors duration-150"
                  onClick={() => !item.submenu && setOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <button
                    className="text-slate-400 hover:text-white p-1 transition-colors duration-150"
                    onClick={() =>
                      setMobileOpen(mobileOpen === item.name ? null : item.name)
                    }
                  >
                    {mobileOpen === item.name
                      ? <ChevronUp size={16} />
                      : <ChevronDown size={16} />
                    }
                  </button>
                )}
              </div>

              {item.submenu && mobileOpen === item.name && (
                <div className="flex flex-col gap-1 pl-4 pb-2 border-l border-slate-700 ml-1">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="text-sm text-slate-400 hover:text-white py-1.5 transition-colors duration-150"
                      onClick={() => setOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/contact"
            className="text-sm bg-purple-600 hover:bg-purple-500 text-white px-4 py-2.5 rounded-lg text-center mt-3 transition-colors duration-200"
            onClick={() => setOpen(false)}
          >
            Make an Appointment
          </Link>
        </div>
      )}
    </header>
  );
}