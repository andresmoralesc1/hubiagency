import Link from "next/link";
import DataGridHero from "@/components/ui/data-grid-hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <DataGridHero
        rows={25}
        cols={40}
        spacing={3}
        duration={6}
        color="hsl(180, 100%, 60%)"
        animationType="pulse"
        pulseEffect={true}
        mouseGlow={true}
        opacityMin={0.05}
        opacityMax={0.7}
        background="hsl(220, 20%, 5%)"
      >
        <h1
          style={{
            fontFamily: "Arial Black, sans-serif",
            fontSize: "clamp(3rem, 10vw, 8rem)",
            fontWeight: 900,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "white",
            margin: 0,
            textShadow: "0 0 40px rgba(0, 212, 255, 0.6), 0 0 80px rgba(0, 212, 255, 0.4)",
          }}
        >
          HUBIAGENCY
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255, 255, 255, 0.95)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginTop: "1rem",
            textShadow: "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(0,212,255,0.3)",
            border: "1px solid rgba(255,255,255,0.2)",
            padding: "0.5rem 1rem",
            borderRadius: "0.25rem",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
          }}
        >
          Automate • Innovate • Elevate
        </p>
        <div style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            href="/store/products"
            style={{
              padding: "1rem 2.5rem",
              backgroundColor: "transparent",
              color: "white",
              fontWeight: 600,
              borderRadius: "0.5rem",
              textDecoration: "none",
              transition: "all 0.3s ease",
              border: "1px solid rgba(255,255,255,0.4)",
              backdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            View AI Services
          </Link>
          <Link
            href="/contact"
            style={{
              padding: "1rem 2.5rem",
              backgroundColor: "hsl(280, 80%, 60%)",
              color: "white",
              fontWeight: 600,
              borderRadius: "0.5rem",
              textDecoration: "none",
              transition: "all 0.3s ease",
              border: "1px solid transparent",
            }}
          >
            Contact Us
          </Link>
        </div>
      </DataGridHero>

      {/* AI Abstract Image Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/17483870/pexels-photo-17483870.png?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="AI Neural Networks Abstract"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-8 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white animate-fade-in-up">
              Transforming Businesses with AI
            </h2>
            <p className="text-lg text-white/80 animate-fade-in-up delay-200">
              From workflow automation to custom AI solutions, we help you leverage the power of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="bg-black text-white py-24 px-8 relative overflow-hidden">
        <div className="orb orb-cyan w-[400px] h-[400px] -top-48 left-1/2 -translate-x-1/2 opacity-20" />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in-up">
            What We Do
          </h2>
          <p className="text-center text-zinc-400 mb-16 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Transform your business with cutting-edge AI solutions and intelligent automation
          </p>

          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            <Link href="/services" className="group glass-dark p-8 rounded-2xl card-hover border-glow">
              <div className="text-cyan-400 text-4xl mb-4 float">⚡</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient-cyan transition-all">Workflow Automation</h3>
              <p className="text-zinc-400">Streamline operations and eliminate repetitive tasks with intelligent automation solutions.</p>
            </Link>

            <Link href="/services" className="group glass-dark p-8 rounded-2xl card-hover border-glow">
              <div className="text-cyan-400 text-4xl mb-4 float" style={{animationDelay: '0.3s'}}>🤖</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient-cyan transition-all">AI Chatbots</h3>
              <p className="text-zinc-400">Deploy intelligent conversational AI that enhances customer engagement and support.</p>
            </Link>

            <Link href="/services" className="group glass-dark p-8 rounded-2xl card-hover border-glow">
              <div className="text-cyan-400 text-4xl mb-4 float" style={{animationDelay: '0.6s'}}>🧠</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient-cyan transition-all">Custom AI Development</h3>
              <p className="text-zinc-400">Build tailored AI solutions designed specifically for your unique business challenges.</p>
            </Link>
          </div>

          <div className="text-center mt-16">
            <Link href="/store/products" className="btn-shine inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all hover-scale">
              View AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-zinc-950 text-white py-24 px-8 border-y border-zinc-800/50 relative overflow-hidden">
        <div className="orb orb-purple w-80 h-80 top-0 right-0 opacity-15" />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center animate-fade-in-up">
            Why Choose hubIAgency
          </h2>
          <p className="text-center text-zinc-400 mb-16 max-w-2xl mx-auto animate-fade-in-up delay-100">
            We combine deep technical expertise with business acumen to deliver solutions that drive real results.
          </p>

          <div className="grid md:grid-cols-4 gap-8 stagger-children">
            <div className="text-center glass-dark p-6 rounded-2xl">
              <div className="text-cyan-400 text-5xl mb-4 font-bold">50+</div>
              <h3 className="font-semibold mb-2">Projects Delivered</h3>
              <p className="text-zinc-400 text-sm">Across various industries and use cases</p>
            </div>
            <div className="text-center glass-dark p-6 rounded-2xl">
              <div className="text-cyan-400 text-5xl mb-4 font-bold">85%</div>
              <h3 className="font-semibold mb-2">Cost Reduction</h3>
              <p className="text-zinc-400 text-sm">Average savings in operational costs</p>
            </div>
            <div className="text-center glass-dark p-6 rounded-2xl">
              <div className="text-cyan-400 text-5xl mb-4 font-bold">24/7</div>
              <h3 className="font-semibold mb-2">AI Availability</h3>
              <p className="text-zinc-400 text-sm">Continuous automated operations</p>
            </div>
            <div className="text-center glass-dark p-6 rounded-2xl">
              <div className="text-cyan-400 text-5xl mb-4 font-bold">100%</div>
              <h3 className="font-semibold mb-2">Client Satisfaction</h3>
              <p className="text-zinc-400 text-sm">Dedicated support and follow-up</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-black text-white py-24 px-8 relative overflow-hidden">
        <div className="orb orb-cyan w-64 h-64 bottom-0 left-0 opacity-10" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-12 animate-fade-in-up">Technologies We Master</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["n8n", "LangChain", "Ollama", "OpenAI", "RAG", "Vector DBs", "PostgreSQL", "Redis"].map((tech, i) => (
              <span
                key={tech}
                className="px-6 py-3 glass rounded-full hover:neon-border hover-scale transition-all cursor-default"
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
            Our Process
          </h2>
          <p className="text-center text-zinc-400 mb-16 animate-fade-in-up delay-100">
            From discovery to deployment, we ensure a seamless journey
          </p>

          <div className="grid md:grid-cols-4 gap-8 stagger-children">
            <div className="text-center glass-dark p-6 rounded-2xl">
              <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mx-auto mb-4 neon-border">1</div>
              <h3 className="font-semibold mb-2">Discovery</h3>
              <p className="text-zinc-400 text-sm">Understanding your needs and goals</p>
            </div>
            <div className="text-center glass-dark p-6 rounded-2xl">
              <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mx-auto mb-4 neon-border">2</div>
              <h3 className="font-semibold mb-2">Strategy</h3>
              <p className="text-zinc-400 text-sm">Designing the optimal solution</p>
            </div>
            <div className="text-center glass-dark p-6 rounded-2xl">
              <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mx-auto mb-4 neon-border">3</div>
              <h3 className="font-semibold mb-2">Implementation</h3>
              <p className="text-zinc-400 text-sm">Building and testing your solution</p>
            </div>
            <div className="text-center glass-dark p-6 rounded-2xl">
              <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mx-auto mb-4 neon-border">4</div>
              <h3 className="font-semibold mb-2">Support</h3>
              <p className="text-zinc-400 text-sm">Ongoing optimization and help</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-24 px-8 relative overflow-hidden">
        <div className="orb orb-cyan w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Transform Your Business?</h2>
          <p className="text-zinc-400 mb-8 animate-fade-in-up delay-100">
            Let&apos;s discuss how AI can revolutionize your operations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap stagger-children">
            <Link href="/contact" className="btn-shine inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all hover-scale">
              Schedule a Call
            </Link>
            <Link href="/store/products" className="btn-shine inline-block px-8 py-4 border border-zinc-700 hover:border-cyan-500/50 font-semibold rounded-lg transition-all hover-scale">
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
