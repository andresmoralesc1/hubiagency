"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { MenuVertical } from "@/components/ui/menu-vertical";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/services", label: "Servicios" },
  { href: "/store/products", label: "Tienda" },
  { href: "/portfolio", label: "Portafolio" },
  { href: "/contact", label: "Contacto" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
        {/* Glass container */}
        <div className="relative mx-auto max-w-5xl flex items-center justify-between px-6 py-3 rounded-2xl bg-zinc-950/60 backdrop-blur-2xl border border-zinc-800/50 shadow-lg shadow-cyan-500/5">
          {/* Mobile: Hamburger button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-white hover:text-white md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/Media/Logo.png"
              alt="Hubiagency"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop: Navigation links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-xl ${
                  pathname === link.href
                    ? "text-cyan-400 bg-cyan-500/10"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA - Brief button */}
          <Link
            href="/brief"
            className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-black hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-500/25"
          >
            Brief
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MenuVertical
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
