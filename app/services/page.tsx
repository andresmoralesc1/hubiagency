import Image from "next/image";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Header } from "@/components/header";

const services = [
  {
    id: "automation",
    icon: "⚡",
    title: "Workflow Automation",
    description: "Elimina tareas repetitivas y optimiza tus operaciones con automatización inteligente. Analizamos tus procesos existentes e implementamos soluciones que ahorran tiempo y reducen errores.",
    features: ["Mapeo y optimización de procesos", "Flujos de trabajo de automatización personalizados", "Integración con herramientas existentes", "Monitoreo y mejora continua"],
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    imageAlt: "Automatización de flujo de trabajo con tecnología moderna"
  },
  {
    id: "chatbots",
    icon: "🤖",
    title: "AI Chatbots",
    description: "Implementa IA conversacional inteligente que mejora el engagement del cliente y proporciona soporte 24/7. Nuestros chatbots entienden contexto y ofrecen experiencias personalizadas.",
    features: ["Desarrollo de chatbots personalizados", "Despliegue multi-canal", "Procesamiento de lenguaje natural", "Análisis e insights"],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    imageAlt: "Chatbot con IA conversacional"
  },
  {
    id: "custom-ai",
    icon: "🧠",
    title: "Custom AI Development",
    description: "Construye soluciones de IA adaptadas específicamente para tus desafíos de negocio únicos. Desde análisis predictivo hasta visión por computadora, llevamos IA de vanguardia a tu industria.",
    features: ["Desarrollo de modelos personalizados", "Arquitectura de pipelines de datos", "Integración y despliegue de APIs", "Aprendizaje continuo y actualizaciones"],
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
    imageAlt: "Desarrollo de inteligencia artificial personalizada"
  },
  {
    id: "consulting",
    icon: "💼",
    title: "AI Consulting",
    description: "Guía estratégica para ayudarte a navegar el panorama de la IA y tomar decisiones informadas sobre inversiones tecnológicas que generan valor real de negocio.",
    features: ["Evaluación de preparación para IA", "Recomendaciones de stack tecnológico", "Análisis de ROI y planificación", "Hojas de ruta de implementación"],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    imageAlt: "Consultoría en inteligencia artificial"
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
        <div className="max-w-4xl mx-auto space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`glass-dark p-6 md:p-8 rounded-2xl card-hover border-glow ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className={`flex-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="text-4xl float mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-semibold mb-3 text-gradient-cyan">{service.title}</h2>
                  <p className="text-zinc-400 mb-4">
                    {service.description}
                  </p>
                  <ul className="text-zinc-400 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="animate-fade-in-left" style={{animationDelay: `${i * 100}ms`}}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className={`relative w-full md:w-72 h-52 flex-shrink-0 rounded-xl overflow-hidden ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 288px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 border-t border-zinc-800 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">¿Listo para Comenzar?</h2>
          <p className="text-zinc-400 mb-8 animate-fade-in-up delay-100">Explora nuestros servicios de IA o programa una consulta.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <ShinyButton href="/store/products">
              Explorar Servicios
            </ShinyButton>
            <ShinyButton href="/contact" variant="outline">
              Programar Consulta
            </ShinyButton>
          </div>
        </div>
      </section>
    </div>
  );
}
