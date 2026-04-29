"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import logo from "@/Media/Logo.png";
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
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-6 py-4 bg-black backdrop-blur-xl border-b border-cyan-500/50">
        {/* Mobile: Hamburger button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white md:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>

        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Hubiagency Logo" width={24} height={24} className="w-6 h-6" />
          <span className="text-cyan-400 font-bold text-lg">HUBIAGENCY</span>
        </Link>

        {/* Desktop: Navigation links - hidden on mobile */}
        <div className="hidden md:flex gap-6">
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
