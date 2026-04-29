import Link from "next/link";
import { Header } from "@/components/header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sobre hubIAgency
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Nuestra misión es hacer la automatización inteligente accesible para cada negocio
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-8">
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
              <h3 className="text-xl font-semibold mb-2">Tu Nombre</h3>
              <p className="text-cyan-400 mb-4">Founder & Lead Engineer</p>
              <p className="text-zinc-400 text-sm">
                Automatización inteligente y soluciones AI a medida. Construyendo el futuro de las operaciones empresariales.
              </p>
            </div>
            <div className="p-8 border border-zinc-800 rounded-lg bg-zinc-950/50 text-center">
              <div className="w-24 h-24 rounded-full bg-cyan-500/20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Alejandro Montes</h3>
              <p className="text-cyan-400 mb-4">AI Architect</p>
              <p className="text-zinc-400 text-sm">
                Especializado enLangChain, RAG, y despliegue de agentes AI locales con Ollama.
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
          <Link href="/contact" className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors">
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
}
