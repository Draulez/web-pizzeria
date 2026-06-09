"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-primary bg-brand-cream shadow-sm">
      <div className="h-1 bg-brand-color" />
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO / NOMBRE */}
        <Link
          href="/"
          className="font-[var(--font-playfair)] text-xl text-brand-color"
        >
          Trattoria Pizzeria de l&apos;Ángel
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/carta">Carta</NavLink>
          <NavLink href="./#ubicacion">Ubicación</NavLink>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-brand-color"
          aria-label="Abrir menú"
        >
          <span className="text-2xl cursor-pointer">☰</span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-brand-primary bg-brand-cream-deep">
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
      className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-dark hover:text-brand-color transition"
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
      className="text-lg font-medium text-brand-dark"
    >
      {children}
    </Link>
  );
}
