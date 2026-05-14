"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Header } from "@/components/header";

const DataGridHero = dynamic(() => import("@/components/ui/data-grid-hero").then(m => m.default), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <DataGridHero
        rows={25}
        cols={40}
        spacing={3}
        duration={6}
        color="hsl(180, 100%, 60%)"
        animationType="pulse"
        pulseEffect={true}
        mouseGlow={false}
        opacityMin={0.05}
        opacityMax={0.7}
        background="hsl(220, 20%, 5%)"
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-widest uppercase text-white drop-shadow-[0_0_40px_rgba(0,212,255,0.6)]">
          HUBIAGENCY
        </h1>
        <p className="text-base md:text-lg text-white/95 tracking-widest uppercase border border-white/20 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm mt-4">
          Automatizar • Innovar • Elevar
        </p>
        <div className="mt-12 flex gap-4 flex-wrap justify-center">
          <ShinyButton href="/store/products" variant="outline">
            Ver Servicios de IA
          </ShinyButton>
          <ShinyButton href="/contact">
            Contáctanos
          </ShinyButton>
        </div>
      </DataGridHero>

      {/* Services Preview Section */}
      <section className="bg-black text-white py-24 px-8 relative overflow-hidden">
        <div className="orb orb-cyan w-[400px] h-[400px] -top-48 left-1/2 -translate-x-1/2 opacity-20" />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in-up">
            Lo Que Hacemos
          </h2>
          <p className="text-center text-zinc-400 mb-16 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Transforma tu negocio con soluciones de IA de vanguardia y automatización inteligente
          </p>

          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            <Link href="/services" className="group glass-dark p-8 rounded-xl card-hover border-glow">
              <div className="text-cyan-400 text-4xl mb-4 float">⚡</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient-cyan transition-all">Automatización de Flujos de Trabajo</h3>
              <p className="text-zinc-400">Optimiza operaciones y elimina tareas repetitivas con soluciones de automatización inteligente.</p>
            </Link>

            <Link href="/services" className="group glass-dark p-8 rounded-xl card-hover border-glow">
              <div className="text-cyan-400 text-4xl mb-4 float" style={{animationDelay: '0.3s'}}>🤖</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient-cyan transition-all">Chatbots con IA</h3>
              <p className="text-zinc-400">Implementa IA conversacional inteligente que mejora el engagement y soporte al cliente.</p>
            </Link>

            <Link href="/services" className="group glass-dark p-8 rounded-xl card-hover border-glow">
              <div className="text-cyan-400 text-4xl mb-4 float" style={{animationDelay: '0.6s'}}>🧠</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient-cyan transition-all">Desarrollo de IA Personalizada</h3>
              <p className="text-zinc-400">Construye soluciones de IA adaptadas específicamente para tus desafíos de negocio únicos.</p>
            </Link>
          </div>

          <div className="text-center mt-16">
            <ShinyButton href="/store/products" variant="default">
              Ver Servicios de IA
            </ShinyButton>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-zinc-950 text-white py-24 px-8 border-y border-zinc-800/50 relative overflow-hidden">
        <div className="orb orb-purple w-80 h-80 top-0 right-0 opacity-15" />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center animate-fade-in-up">
            Por Qué Elegir hubIAgency
          </h2>
          <p className="text-center text-zinc-400 mb-16 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Combinamos experiencia técnica profunda con conocimiento de negocio para entregar soluciones que generan resultados reales.
          </p>

          <div className="grid md:grid-cols-4 gap-8 stagger-children">
            <div className="text-center glass-dark p-6 rounded-xl">
              <div className="text-cyan-400 text-5xl mb-4 font-bold">50+</div>
              <h3 className="font-semibold mb-2">Proyectos Entregados</h3>
              <p className="text-zinc-400 text-sm">En diversas industrias y casos de uso</p>
            </div>
            <div className="text-center glass-dark p-6 rounded-xl">
              <div className="text-cyan-400 text-5xl mb-4 font-bold">85%</div>
              <h3 className="font-semibold mb-2">Reducción de Costos</h3>
              <p className="text-zinc-400 text-sm">Ahorro promedio en costos operativos</p>
            </div>
            <div className="text-center glass-dark p-6 rounded-xl">
              <div className="text-cyan-400 text-5xl mb-4 font-bold">24/7</div>
              <h3 className="font-semibold mb-2">Disponibilidad de IA 24/7</h3>
              <p className="text-zinc-400 text-sm">Operaciones automatizadas continuas</p>
            </div>
            <div className="text-center glass-dark p-6 rounded-xl">
              <div className="text-cyan-400 text-5xl mb-4 font-bold">100%</div>
              <h3 className="font-semibold mb-2">Satisfacción del Cliente</h3>
              <p className="text-zinc-400 text-sm">Soporte y seguimiento dedicado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-black text-white py-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-96">
          <Image
            src="https://images.pexels.com/photos/17483870/pexels-photo-17483870.png?auto=compress&cs=tinysrgb&h=800&w=1920"
            alt="Infraestructura tecnológica de IA con servidores y cables de red"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="orb orb-cyan w-64 h-64 bottom-0 left-0 opacity-10" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-12 animate-fade-in-up">Tecnologías que Dominamos</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["n8n", "LangChain", "Ollama", "OpenAI", "RAG", "Vector DBs", "PostgreSQL", "Redis"].map((tech, i) => (
              <span
                key={tech}
                className="px-6 py-3 glass rounded-full hover:neon-border hover:scale-105 transition-all cursor-default"
                style={{animationDelay: `${i * 100}ms`}}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-zinc-950 text-white py-24 px-8 border-y border-zinc-800/50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center animate-fade-in-up">
            Nuestro Proceso
          </h2>
          <p className="text-center text-zinc-400 mb-16 animate-fade-in-up delay-100">
            Desde el descubrimiento hasta el despliegue, aseguramos un viaje sin interrupciones
          </p>

          <div className="grid md:grid-cols-4 gap-8 stagger-children">
            <div className="text-center glass-dark p-6 rounded-xl">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mx-auto mb-4 neon-border">1</div>
              <h3 className="font-semibold mb-2">Descubrimiento</h3>
              <p className="text-zinc-400 text-sm">Entendiendo tus necesidades y objetivos</p>
            </div>
            <div className="text-center glass-dark p-6 rounded-xl">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mx-auto mb-4 neon-border">2</div>
              <h3 className="font-semibold mb-2">Estrategia</h3>
              <p className="text-zinc-400 text-sm">Diseñando la solución óptima</p>
            </div>
            <div className="text-center glass-dark p-6 rounded-xl">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mx-auto mb-4 neon-border">3</div>
              <h3 className="font-semibold mb-2">Implementación</h3>
              <p className="text-zinc-400 text-sm">Construyendo y probando tu solución</p>
            </div>
            <div className="text-center glass-dark p-6 rounded-xl">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mx-auto mb-4 neon-border">4</div>
              <h3 className="font-semibold mb-2">Soporte</h3>
              <p className="text-zinc-400 text-sm">Optimización y ayuda continua</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-24 px-8 relative overflow-hidden">
        <div className="orb orb-cyan w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">¿Listo para Transformar Tu Negocio?</h2>
          <p className="text-zinc-400 mb-8 animate-fade-in-up delay-100">
            Discutamos cómo la IA puede revolucionar tus operaciones.
          </p>
          <div className="flex gap-4 justify-center flex-wrap stagger-children">
            <ShinyButton href="/contact">
              Programar una Llamada
            </ShinyButton>
            <ShinyButton href="/store/products" variant="outline">
              Explorar Servicios
            </ShinyButton>
          </div>
        </div>
      </section>
    </div>
  );
}
