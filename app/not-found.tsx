"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { Glitchy404 } from "@/components/ui/glitchy-404-1";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-32 pb-16 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Glitchy404 width={600} height={180} color="#fff" />
          </div>
          <p className="text-zinc-400 mb-8">
            La página que buscas no existe o ha sido movida.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors"
            >
              Ir al Inicio
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-zinc-800 hover:border-zinc-700 font-semibold rounded-lg transition-colors"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
