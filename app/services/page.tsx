import Image from "next/image";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Header } from "@/components/header";

const services = [
  {
    id: "automation",
    icon: "⚡",
    title: "Workflow Automation",
    description: "Automatiza procesos repetitivos y optimiza operaciones. Implementamos flujos que reducen errores y ahorran horas de trabajo manual.",
    features: ["Mapeo y automatización de procesos", "Flujos de trabajo con n8n", "Integración API con tu stack actual", "Reportes de tiempo ahorrado"],
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    imageAlt: "Automatización de flujo de trabajo con tecnología moderna",
    price: "Desde $500/mes"
  },
  {
    id: "chatbots",
    icon: "🤖",
    title: "AI Chatbots",
    description: "Chatbots inteligentes que entienden contexto y ofrecen soporte 24/7. Integración con WhatsApp, web y más canales.",
    features: ["Chatbots personalizados con GPT-4", "Integración WhatsApp + Web + Slack", "NLP en español con contexto", "Dashboard de conversaciones"],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    imageAlt: "Chatbot con IA conversacional",
    price: "Desde $300/mes"
  },
  {
    id: "custom-ai",
    icon: "🧠",
    title: "Custom AI Development",
    description: "Modelos de IA diseñados para tus datos y desafíos específicos. Desde análisis predictivo hasta visión por computadora.",
    features: ["Fine-tuning de modelos open source", "Pipelines de datos con LangChain", "Despliegue API personalizada", "Monitoreo y versionado de modelos"],
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
    imageAlt: "Desarrollo de inteligencia artificial personalizada",
    price: "Desde $2,000/proyecto"
  },
  {
    id: "consulting",
    icon: "💼",
    title: "AI Consulting",
    description: "Estrategia clara para implementar IA en tu negocio. Evaluamos, planificamos y ejecutamos con ROI medible.",
    features: ["Auditoría de procesos actuales", "Roadmap de IA en 90 días", "Stack tecnológico recomendado", "Métricas de ROI garantizadas"],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    imageAlt: "Consultoría en inteligencia artificial",
    price: "Sesión desde $200"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Floating orbs background */}
      <div className="orb orb-cyan w-96 h-96 -top-48 -left-48 opacity-30" />
      <div className="orb orb-purple w-80 h-80 top-1/2 -right-40 opacity-20" />

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Soluciones completas de IA diseñadas para transformar cómo opera tu negocio
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-8 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className="glass-dark p-6 md:p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-8 items-center`}>
                {/* Text Content */}
                <div className={`flex-1 ${index % 2 === 1 ? 'md:pr-8' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                      <p className="text-cyan-400 font-semibold text-sm">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-zinc-400">
                        <span className="text-cyan-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ShinyButton href="/contact" className="text-sm">
                    Solicitar Cotización
                  </ShinyButton>
                </div>
                {/* Image */}
                <div className={`relative w-full md:w-80 h-56 flex-shrink-0 rounded-xl overflow-hidden group ${index % 2 === 1 ? 'md:pl-8' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 320px"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-black to-zinc-950 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para Transformar Tu Negocio?</h2>
          <p className="text-zinc-400 mb-8 text-lg">Agenda una llamada y descubre cómo la IA puede ayudarte.</p>
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
