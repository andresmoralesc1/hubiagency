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
            color: "rgba(255, 255, 255, 0.8)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginTop: "1rem",
          }}
        >
          Automate • Innovate • Elevate
        </p>
        <div style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            href="/store/products"
            style={{
              padding: "1rem 2rem",
              backgroundColor: "hsl(180, 100%, 50%)",
              color: "black",
              fontWeight: "bold",
              borderRadius: "0.5rem",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            View AI Services
          </Link>
          <Link
            href="/contact"
            style={{
              padding: "1rem 2rem",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "white",
              fontWeight: "bold",
              borderRadius: "0.5rem",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            Contact Us
          </Link>
        </div>
      </DataGridHero>

      {/* Services Preview Section */}
      <section className="bg-black text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            What We Do
          </h2>
          <p className="text-center text-zinc-400 mb-16 max-w-2xl mx-auto">
            Transform your business with cutting-edge AI solutions and intelligent automation
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services" className="group p-8 border border-zinc-800 hover:border-cyan-500/50 transition-all rounded-lg bg-zinc-950/50">
              <div className="text-cyan-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Workflow Automation</h3>
              <p className="text-zinc-400">Streamline operations and eliminate repetitive tasks with intelligent automation solutions.</p>
            </Link>

            <Link href="/services" className="group p-8 border border-zinc-800 hover:border-cyan-500/50 transition-all rounded-lg bg-zinc-950/50">
              <div className="text-cyan-400 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">AI Chatbots</h3>
              <p className="text-zinc-400">Deploy intelligent conversational AI that enhances customer engagement and support.</p>
            </Link>

            <Link href="/services" className="group p-8 border border-zinc-800 hover:border-cyan-500/50 transition-all rounded-lg bg-zinc-950/50">
              <div className="text-cyan-400 text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Custom AI Development</h3>
              <p className="text-zinc-400">Build tailored AI solutions designed specifically for your unique business challenges.</p>
            </Link>
          </div>

          <div className="text-center mt-16">
            <Link href="/store/products" className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors">
              View AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-zinc-950 text-white py-24 px-8 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Why Choose hubIAgency
          </h2>
          <p className="text-center text-zinc-400 mb-16 max-w-2xl mx-auto">
            We combine deep technical expertise with business acumen to deliver solutions that drive real results.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-cyan-400 text-5xl mb-4">50+</div>
              <h3 className="font-semibold mb-2">Projects Delivered</h3>
              <p className="text-zinc-400 text-sm">Across various industries and use cases</p>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 text-5xl mb-4">85%</div>
              <h3 className="font-semibold mb-2">Cost Reduction</h3>
              <p className="text-zinc-400 text-sm">Average savings in operational costs</p>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 text-5xl mb-4">24/7</div>
              <h3 className="font-semibold mb-2">AI Availability</h3>
              <p className="text-zinc-400 text-sm">Continuous automated operations</p>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 text-5xl mb-4">100%</div>
              <h3 className="font-semibold mb-2">Client Satisfaction</h3>
              <p className="text-zinc-400 text-sm">Dedicated support and follow-up</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-black text-white py-24 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Technologies We Master</h2>
          <div className="flex flex-wrap justify-center gap-8 text-zinc-400">
            <span className="px-6 py-3 border border-zinc-800 rounded-full hover:border-cyan-500/50 transition-colors">n8n</span>
            <span className="px-6 py-3 border border-zinc-800 rounded-full hover:border-cyan-500/50 transition-colors">LangChain</span>
            <span className="px-6 py-3 border border-zinc-800 rounded-full hover:border-cyan-500/50 transition-colors">Ollama</span>
            <span className="px-6 py-3 border border-zinc-800 rounded-full hover:border-cyan-500/50 transition-colors">OpenAI</span>
            <span className="px-6 py-3 border border-zinc-800 rounded-full hover:border-cyan-500/50 transition-colors">RAG</span>
            <span className="px-6 py-3 border border-zinc-800 rounded-full hover:border-cyan-500/50 transition-colors">Vector DBs</span>
            <span className="px-6 py-3 border border-zinc-800 rounded-full hover:border-cyan-500/50 transition-colors">PostgreSQL</span>
            <span className="px-6 py-3 border border-zinc-800 rounded-full hover:border-cyan-500/50 transition-colors">Redis</span>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-zinc-950 text-white py-24 px-8 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Our Process
          </h2>
          <p className="text-center text-zinc-400 mb-16">
            From discovery to deployment, we ensure a seamless journey
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Discovery</h3>
              <p className="text-zinc-400 text-sm">Understanding your needs and goals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Strategy</h3>
              <p className="text-zinc-400 text-sm">Designing the optimal solution</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Implementation</h3>
              <p className="text-zinc-400 text-sm">Building and testing your solution</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Support</h3>
              <p className="text-zinc-400 text-sm">Ongoing optimization and help</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-24 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-zinc-400 mb-8">
            Let&apos;s discuss how AI can revolutionize your operations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors">
              Schedule a Call
            </Link>
            <Link href="/store/products" className="inline-block px-8 py-4 border border-zinc-700 hover:border-zinc-500 font-semibold rounded-lg transition-colors">
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
