"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-200 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO / NOMBRE */}
        <Link
          href="/"
          className="font-[var(--font-playfair)] text-xl text-stone-900"
        >
          Trattoria Italiana
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/carta">Carta</NavLink>
          <NavLink href="./#ubicacion">Ubicación</NavLink>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-stone-800"
          aria-label="Abrir menú"
        >
          <span className="text-2xl cursor-pointer">☰</span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-stone-200 bg-stone-200">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <MobileLink href="/carta" onClick={() => setOpen(false)}>
              Carta
            </MobileLink>

            <MobileLink href="./#ubicacion" onClick={() => setOpen(false)}>
              Ubicación
            </MobileLink>
          </nav>
        </div>
      )}
    </header>
  );
}

/* --- COMPONENTES AUXILIARES --- */

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-stone-700 hover:text-brand-primary transition"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-lg font-medium text-stone-800"
    >
      {children}
    </Link>
  );
}
