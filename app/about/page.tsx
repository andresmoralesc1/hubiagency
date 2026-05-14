import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { ShinyButton } from "@/components/ui/shiny-button";

export const metadata: Metadata = {
  title: "Sobre Nosotros - hubIAgency",
  description: "Conoce al equipo de hubIAgency. Automatización inteligente y soluciones AI a medida, lideradas por Andrés Morales y Alejandro Montes.",
  keywords: ["equipo hubiagency", "autores", "IA Colombia", "automatización Bogotá"],
  openGraph: {
    title: "Sobre Nosotros - hubIAgency",
    description: "Conoce al equipo de hubIAgency. Automatización inteligente y soluciones AI a medida.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Sobre hubIAgency
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Nuestra misión es hacer la automatización inteligente accesible para cada negocio
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-8 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 border border-zinc-800 rounded-lg bg-zinc-950/50 mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-cyan-400">Nuestra Misión</h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              En hubIAgency, creemos que la IA y la automatización deben ser herramientas que empoderen a las empresas,
              no complicarlas. Nuestra misión es cerrar la brecha entre la tecnología de vanguardia
              y las soluciones prácticas de negocio, ayudando a empresas de todos los tamaños a aprovechar
              el poder de la IA para trabajar de manera más inteligente, no más difícil.
            </p>
          </div>

          {/* Values */}
          <h2 className="text-3xl font-semibold mb-8 text-center">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-950/50 text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Enfocados en Resultados</h3>
              <p className="text-zinc-400">Cada solución que construimos está enfocada en entregar resultados de negocio medibles.</p>
            </div>
            <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-950/50 text-center">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-2">Confianza y Transparencia</h3>
              <p className="text-zinc-400">Creemos en la comunicación clara y alianzas honestas con nuestros clientes.</p>
            </div>
            <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-950/50 text-center">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Innovación Continua</h3>
              <p className="text-zinc-400">Nos mantenemos a la vanguardia de la tecnología de IA para traerte las mejores soluciones.</p>
            </div>
          </div>

          {/* Approach */}
          <div className="p-8 border border-zinc-800 rounded-lg bg-zinc-950/50">
            <h2 className="text-3xl font-semibold mb-6 text-cyan-400">Nuestro Enfoque</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Descubrimiento</h3>
                  <p className="text-zinc-400">Comenzamos entendiendo profundamente tu negocio, desafíos y objetivos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Estrategia</h3>
                  <p className="text-zinc-400">Diseñamos una hoja de ruta de solución personalizada con hitos claros y proyecciones de ROI.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Implementación</h3>
                  <p className="text-zinc-400">Construimos y desplegamos tu solución con pruebas rigurosas y control de calidad.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Soporte</h3>
                  <p className="text-zinc-400">Proporcionamos soporte continuo, monitoreo y optimización para asegurar el éxito continuado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-8 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-zinc-800 rounded-lg bg-zinc-950/50 text-center">
              <div className="w-24 h-24 rounded-full bg-cyan-500/20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Andrés Morales</h3>
              <p className="text-cyan-400 mb-4">Founder & Lead Engineer</p>
              <p className="text-zinc-400 text-sm">
                Automatización inteligente y soluciones AI a medida. Construyendo el futuro de las operaciones empresariales.
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <a href="https://github.com/andresmoralesc1/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="GitHub">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .29a12 12 0 00-3.797 23.401c.6.11.82-.26.82-.577v-2.17c-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.332-1.756-1.332-1.756-1.09-.744.084-.729.084-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.306 3.495.999.106-.775.418-1.307.76-1.608-2.665-.301-5.466-1.332-5.466-5.933 0-1.31.469-2.381 1.236-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.301 1.23a11.502 11.502 0 016.002 0c2.292-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.119 3.176.77.841 1.235 1.912 1.235 3.222 0 4.61-2.805 5.629-5.476 5.925.429.369.813 1.096.813 2.211v3.285c0 .32.217.694.825.576A12 12 0 0012 .29"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/andresmoralesc1/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 19h-3v-9h3zm-1.5-10.268a1.752 1.752 0 110-3.505 1.752 1.752 0 010 3.505zm15.5 10.268h-3v-4.5c0-1.07-.02-2.450-1.492-2.450-1.495 0-1.725 1.166-1.725 2.372v4.578h-3v-9h2.88v1.23h.04a3.157 3.157 0 012.847-1.568c3.042 0 3.605 2.003 3.605 4.612v4.726z"/></svg>
                </a>
                <a href="https://andresmorales.com.co" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="Website">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                </a>
              </div>
            </div>
            <div className="p-8 border border-zinc-800 rounded-lg bg-zinc-950/50 text-center">
              <div className="w-24 h-24 rounded-full bg-cyan-500/20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Alejandro Montes</h3>
              <p className="text-cyan-400 mb-4">AI Architect</p>
              <p className="text-zinc-400 text-sm">
                Especializado en LangChain, RAG, y despliegue de agentes AI locales con Ollama.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 border-t border-zinc-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Trabajemos Juntos</h2>
          <p className="text-zinc-400 mb-8">¿Listo para transformar tu negocio? Contacta a nuestro equipo.</p>
          <ShinyButton href="/contact">
            Contáctanos
          </ShinyButton>
        </div>
      </section>
    </div>
  );
}
