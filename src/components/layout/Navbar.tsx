"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">


        <Link href="/" className="text-lg font-bold text-white">
          AppsZoneBD
        </Link>


        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-sm text-white">Services</Link>
          <Link href="/hosting" className="text-sm text-white">Hosting</Link>
          {/* <Link href="#" className="text-sm text-white">Career</Link> */}
          <Link href="/about" className="text-sm text-white">About</Link>
          <Link href="/contact" className="text-sm text-white">Contact</Link>
        </nav>

    
        <Link
          href="/contact"
          className="hidden md:block text-sm bg-white  text-[#09041f] px-4 py-2 rounded-lg"
        >
          Make an Appointment
        </Link>

        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 px-6 py-4 flex flex-col gap-4 bg-white">
          <Link href="/services" className="text-sm text-gray-700" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/hosting" className="text-sm text-gray-700" onClick={() => setOpen(false)}>Hosting</Link>
          {/* <Link href="/career" className="text-sm text-gray-700" onClick={() => setOpen(false)}>Career</Link> */}
          <Link href="/about" className="text-sm text-gray-700" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" className="text-sm text-gray-700" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/contact" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg text-center" onClick={() => setOpen(false)}>
            Make an Appointment
          </Link>
        </div>
      )}
    </header>
  );
}