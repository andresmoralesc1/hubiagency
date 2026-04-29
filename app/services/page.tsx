import { ShinyButton } from "@/components/ui/shiny-button";
import { Header } from "@/components/header";

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
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Workflow Automation */}
          <div className="glass-dark p-8 rounded-2xl card-hover border-glow">
            <div className="flex items-start gap-4">
              <div className="text-4xl float">⚡</div>
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-gradient-cyan">Workflow Automation</h2>
                <p className="text-zinc-400 mb-4">
                  Elimina tareas repetitivas y optimiza tus operaciones con automatización inteligente.
                  Analizamos tus procesos existentes e implementamos soluciones que ahorran tiempo y reducen errores.
                </p>
                <ul className="text-zinc-400 space-y-2">
                  <li className="animate-fade-in-left delay-100">• Mapeo y optimización de procesos</li>
                  <li className="animate-fade-in-left delay-200">• Flujos de trabajo de automatización personalizados</li>
                  <li className="animate-fade-in-left delay-300">• Integración con herramientas existentes</li>
                  <li className="animate-fade-in-left delay-400">• Monitoreo y mejora continua</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Chatbots */}
          <div className="glass-dark p-8 rounded-2xl card-hover border-glow">
            <div className="flex items-start gap-4">
              <div className="text-4xl float" style={{animationDelay: '0.5s'}}>🤖</div>
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-gradient-cyan">AI Chatbots</h2>
                <p className="text-zinc-400 mb-4">
                  Implementa IA conversacional inteligente que mejora el engagement del cliente y proporciona soporte 24/7.
                  Nuestros chatbots entienden contexto y ofrecen experiencias personalizadas.
                </p>
                <ul className="text-zinc-400 space-y-2">
                  <li className="animate-fade-in-left delay-100">• Desarrollo de chatbots personalizados</li>
                  <li className="animate-fade-in-left delay-200">• Despliegue multi-canal</li>
                  <li className="animate-fade-in-left delay-300">• Procesamiento de lenguaje natural</li>
                  <li className="animate-fade-in-left delay-400">• Análisis e insights</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Custom AI Development */}
          <div className="glass-dark p-8 rounded-2xl card-hover border-glow">
            <div className="flex items-start gap-4">
              <div className="text-4xl float" style={{animationDelay: '1s'}}>🧠</div>
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-gradient-cyan">Custom AI Development</h2>
                <p className="text-zinc-400 mb-4">
                  Construye soluciones de IA adaptadas específicamente para tus desafíos de negocio únicos.
                  Desde análisis predictivo hasta visión por computadora, llevamos IA de vanguardia a tu industria.
                </p>
                <ul className="text-zinc-400 space-y-2">
                  <li className="animate-fade-in-left delay-100">• Desarrollo de modelos personalizados</li>
                  <li className="animate-fade-in-left delay-200">• Arquitectura de pipelines de datos</li>
                  <li className="animate-fade-in-left delay-300">• Integración y despliegue de APIs</li>
                  <li className="animate-fade-in-left delay-400">• Aprendizaje continuo y actualizaciones</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Consulting */}
          <div className="glass-dark p-8 rounded-2xl card-hover border-glow">
            <div className="flex items-start gap-4">
              <div className="text-4xl float" style={{animationDelay: '1.5s'}}>💼</div>
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-gradient-cyan">AI Consulting</h2>
                <p className="text-zinc-400 mb-4">
                  Guía estratégica para ayudarte a navegar el panorama de la IA y tomar decisiones informadas
                  sobre inversiones tecnológicas que generan valor real de negocio.
                </p>
                <ul className="text-zinc-400 space-y-2">
                  <li className="animate-fade-in-left delay-100">• Evaluación de preparación para IA</li>
                  <li className="animate-fade-in-left delay-200">• Recomendaciones de stack tecnológico</li>
                  <li className="animate-fade-in-left delay-300">• Análisis de ROI y planificación</li>
                  <li className="animate-fade-in-left delay-400">• Hojas de ruta de implementación</li>
                </ul>
              </div>
            </div>
          </div>
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
