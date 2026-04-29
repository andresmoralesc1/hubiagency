import Link from "next/link";
import { Header } from "@/components/header";

export const metadata = {
  title: "Portfolio | hubIAgency - AI Automation Success Stories",
  description: "See how we've helped companies transform with AI automation. Real results for Fondo Regional de Garantías, Superllantas, and Octava Club.",
};

const projects = [
  {
    title: "Automatización de Validación de Pólizas",
    category: "Workflow Automation",
    client: "Fondo Regional de Garantías",
    description: "Sistema de automatización que valida y procesa pólizas de garantía automáticamente, eliminando la entrada manual de datos en múltiples sistemas.",
    results: [
      "12+ horas de trabajo manual ahorradas diariamente",
      "99.5% de precisión en validación de datos",
      "Procesamiento 10x más rápido"
    ]
  },
  {
    title: "Bot de WhatsApp para Agendamiento",
    category: "AI Chatbot",
    client: "Octava Club",
    description: "Asistente virtual de WhatsApp que maneja reservas de canchas, responde preguntas frecuentes y envía recordatorios automáticos a los usuarios.",
    results: [
      "85% de consultas resueltas sin intervención humana",
      "200+ reservas mensuales automatizadas",
      "Respuesta instantánea 24/7"
    ]
  },
  {
    title: "Pipeline de Automatización Integral",
    category: "Workflow Automation",
    client: "Superllantas",
    description: "Automatización del flujo de trabajo completo desde la recepción de órdenes hasta la facturación y gestión de inventario de neumáticos.",
    results: [
      "70% reducción en tiempo de procesamiento",
      "Eliminación de errores de captura manual",
      "Integración en tiempo real con sistemas existentes"
    ]
  },
  {
    title: "Dashboard de Métricas con IA",
    category: "Custom AI",
    client: "Fondo Regional de Garantías",
    description: "Tablero de control con insights generados por IA que analiza datos históricos y predice tendencias para toma de decisiones estratégicas.",
    results: [
      "40% mejora en precisión de forecasts",
      "Reportes automáticos generados con IA",
      "Visualización en tiempo real de KPIs"
    ]
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Floating orbs background */}
      <div className="orb orb-cyan w-[500px] h-[500px] top-20 -right-64 opacity-20" />
      <div className="orb orb-purple w-96 h-96 bottom-40 -left-48 opacity-15" />

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Work
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Real results for real businesses. See how we've helped companies transform with AI.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-8 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-dark p-8 rounded-2xl card-hover border-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                  {project.category}
                </span>
                <span className="px-3 py-1 text-sm bg-zinc-800/50 text-zinc-300 rounded-full">
                  {project.client}
                </span>
              </div>
              <h2 className="text-2xl font-semibold mb-3 animate-fade-in-up">{project.title}</h2>
              <p className="text-zinc-400 mb-6 animate-fade-in-up delay-100">{project.description}</p>
              <div className="animate-fade-in-up delay-200">
                <h3 className="text-sm font-semibold text-zinc-300 mb-3">Key Results:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {project.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2 text-zinc-400 p-3 glass rounded-lg">
                      <span className="text-cyan-400 pulse-glow rounded-full p-1">✓</span>
                      <span className="text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 border-t border-zinc-800 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">Ready to Achieve Similar Results?</h2>
          <p className="text-zinc-400 mb-8 animate-fade-in-up delay-100">Let's discuss how we can help transform your business.</p>
          <Link href="/contact" className="btn-shine inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all hover-scale">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
