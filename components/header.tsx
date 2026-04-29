"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/store/products", label: "Store" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-8 py-8 bg-black/80 backdrop-blur-sm">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`transition-colors ${
            pathname === link.href
              ? "text-cyan-400"
              : "text-white/80 hover:text-white"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
