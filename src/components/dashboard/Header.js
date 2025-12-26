'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/tramites', label: 'Trámites' },
    { href: '/historial', label: 'Historial' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <header className="bg-[#0b63c7] text-white shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
      <div className="mx-auto max-w-[1400px] px-4 py-3 flex items-center justify-between">

        {/* HAMBURGUESA SOLO MÓVIL */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden h-10 w-10 rounded-md bg-white/15 border border-white/25 flex items-center justify-center"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="hidden md:flex items-center gap-4">
          <div className="bg-white rounded-md px-6 py-2">
            <Image
              src="/logo-muni.webp"
              alt="Municipalidad Distrital de Ate"
              width={300}
              height={300}
              className="w-[120px] h-auto"
            />
          </div>

          <div>
            <p className="text-[26px] font-semibold">Plataforma de Trámites</p>
            <span className="text-[13px] opacity-80">Municipalidad de Ate</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 bg-white/18 border border-white/25 rounded-lg px-4 py-2">
          <span className="h-9 w-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-semibold">
            U
          </span>
          <span className="text-sm opacity-95">usuario@gmail.com</span>
        </div>
      </div>

      {/* MENU DESPLEGABLE*/}
      {isOpen && (
        <div className="md:hidden border-t border-white/15 bg-[#0b63c7]">
          <div className="px-4 py-4 space-y-4">

            <div className="bg-white/18 border border-white/25 rounded-lg px-4 py-2">
              <p className="text-sm">usuario@gmail.com</p>
            </div>

            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-semibold hover:bg-white/15 transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
