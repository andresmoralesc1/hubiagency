import Image from "next/image";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Header } from "@/components/header";
import DataGridHero from "@/components/ui/data-grid-hero";

const services = [
  {
    id: "automation",
    number: "01",
    title: "Workflow Automation",
    tagline: "Elimina lo repetitivo",
    description: "Automatiza procesos y optimiza operaciones. Reducimos errores y ahorramos horas de trabajo manual con flujos inteligentes.",
    features: ["Mapeo y automatización de procesos", "Flujos de trabajo con n8n", "Integración API con tu stack", "Reportes de tiempo ahorrado"],
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
  },
  {
    id: "chatbots",
    number: "02",
    title: "AI Chatbots",
    tagline: "Soporte 24/7",
    description: "Chatbots inteligentes que entienden contexto. Integración con WhatsApp, web y más canales con NLP en español.",
    features: ["GPT-4 personalizado", "WhatsApp + Web + Slack", "NLP con contexto", "Dashboard de conversaciones"],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
  },
  {
    id: "custom-ai",
    number: "03",
    title: "Custom AI Development",
    tagline: "IA a tu medida",
    description: "Modelos diseñados para tus datos. Desde análisis predictivo hasta visión por computadora con LangChain.",
    features: ["Fine-tuning de modelos", "Pipelines con LangChain", "API personalizada", "Monitoreo y versionado"],
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg"
  },
  {
    id: "consulting",
    number: "04",
    title: "AI Consulting",
    tagline: "Estrategia con ROI",
    description: "Evaluamos, planificamos y ejecutamos. roadmap de IA en 90 días con métricas de ROI garantizadas.",
    features: ["Auditoría de procesos", "Roadmap en 90 días", "Stack tecnológico", "Métricas de ROI"],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />

      <Header />

      {/* Hero Section with minimalist DataGridHero */}
      <section className="relative">
        <DataGridHero
          rows={15}
          cols={25}
          spacing={6}
          opacityMin={0.03}
          opacityMax={0.15}
          pulseEffect={true}
          mouseGlow={false}
          background="transparent"
        />
        <div className="absolute inset-0 pt-32 pb-24 px-8 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4 animate-pulse-slow">
              Servicios
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-zinc-400 bg-clip-text text-transparent animate-fade-in-up">
              Soluciones de IA
            </h1>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Transformamos cómo opera tu negocio con automatización inteligente y IA personalizada
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 stagger-children">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-zinc-900/40" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Number + Tagline */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-6xl font-black text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors duration-500">
                    {service.number}
                  </span>
                  <span className="text-xs font-medium tracking-widest uppercase text-cyan-400/60">
                    {service.tagline}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-cyan-100 transition-colors">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-zinc-400 mb-6 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <ShinyButton href="/contact" variant="outline" className="text-sm group-hover:border-cyan-400 group-hover:text-cyan-300 transition-all">
                  Explorar →
                </ShinyButton>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para transformar tu negocio?</h2>
          <p className="text-zinc-500 mb-8 text-lg">Agenda una llamada y descubre cómo la IA puede ayudarte.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <ShinyButton href="/contact">
              Agenda Llamada
            </ShinyButton>
            <ShinyButton href="/brief" variant="outline">
              Llena un Brief
            </ShinyButton>
          </div>
        </div>
      </section>
    </div>
  );
}
