"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";

interface MenuVerticalProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MenuVertical({ isOpen, onClose, links }: MenuVerticalProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 z-50 h-full w-72 bg-black border-r border-cyan-500/50 shadow-xl"
          >
            <div className="flex flex-col h-full p-6">
              {/* Header with Logo and Close button */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center" onClick={onClose}>
                  <img
                    src="/Logo.png"
                    alt="Hubiagency"
                    className="h-8 w-auto"
                  />
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 text-white/70 hover:text-white transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="size-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 flex-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={`group flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                      pathname === link.href
                        ? "text-cyan-400 bg-cyan-500/10"
                        : "text-white/70 hover:text-white hover:bg-cyan-500/10"
                    }`}
                  >
                    <span className="font-medium">{link.label}</span>
                    <ArrowRight className="size-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-cyan-400" />
                  </Link>
                ))}
              </nav>

              {/* Brief CTA */}
              <Link
                href="/brief"
                onClick={onClose}
                className="mt-4 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-black hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                Brief
              </Link>

              {/* Close hint */}
              <p className="text-zinc-500 text-xs text-center mt-4">
                Toca fuera para cerrar
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
