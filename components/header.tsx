"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/services", label: "Servicios" },
  { href: "/store/products", label: "Tienda" },
  { href: "/portfolio", label: "Portafolio" },
  { href: "/contact", label: "Contacto" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-6 py-4 bg-black backdrop-blur-xl border-b border-cyan-500/50">
      <span className="text-cyan-400 font-bold text-lg">HUBIAGENCY</span>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 link-underline ${
            pathname === link.href
              ? "text-cyan-400"
              : "text-white/70 hover:text-white"
          }`}
        >
          {link.label}
          {pathname === link.href && (
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
          )}
        </Link>
      ))}
    </nav>
  );
}
