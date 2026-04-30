import { ShinyButton } from "@/components/ui/shiny-button";
import { Header } from "@/components/header";
import { CyanFlowShader } from "@/components/ui/cyan-flow-shader";

export default function CustomAIPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-8 relative z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/30 via-black to-black" />
          <CyanFlowShader />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <span className="inline-block text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4 animate-pulse-slow">
            03 — Custom AI Development
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-zinc-400 bg-clip-text text-transparent animate-fade-in-up">
            IA a tu medida
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Modelos disenados para tus datos. Desde analisis predictivo hasta vision por computadora con LangChain.
          </p>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-16 px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-12 text-center">
            <p className="text-zinc-500 text-lg mb-8">Contenido personalizado vendra aqui</p>
            <ShinyButton href="/contact">Solicitar cotizacion</ShinyButton>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-8 relative z-10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            "Fine-tuning de modelos",
            "Pipelines con LangChain",
            "API personalizada",
            "Monitoreo y versionado"
          ].map((feature, i) => (
            <div key={i} className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6">
              <span className="w-2 h-2 rounded-full bg-cyan-500/50 mr-3" />
              <span className="text-zinc-300">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Listo para automatizar?</h2>
          <p className="text-zinc-500 mb-8 text-lg">Agenda una llamada y descubre como podemos ayudarte.</p>
          <ShinyButton href="/contact">Agendar Llamada</ShinyButton>
        </div>
      </section>
    </div>
  );
}