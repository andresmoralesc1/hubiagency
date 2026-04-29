import Link from "next/link";
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
            Our Services
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Comprehensive AI solutions designed to transform how your business operates
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
                  Eliminate repetitive tasks and streamline your operations with intelligent automation.
                  We analyze your existing processes and implement solutions that save time and reduce errors.
                </p>
                <ul className="text-zinc-400 space-y-2">
                  <li className="animate-fade-in-left delay-100">• Process mapping and optimization</li>
                  <li className="animate-fade-in-left delay-200">• Custom automation workflows</li>
                  <li className="animate-fade-in-left delay-300">• Integration with existing tools</li>
                  <li className="animate-fade-in-left delay-400">• Ongoing monitoring and improvement</li>
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
                  Deploy intelligent conversational AI that enhances customer engagement and provides 24/7 support.
                  Our chatbots understand context and deliver personalized experiences.
                </p>
                <ul className="text-zinc-400 space-y-2">
                  <li className="animate-fade-in-left delay-100">• Custom chatbot development</li>
                  <li className="animate-fade-in-left delay-200">• Multi-channel deployment</li>
                  <li className="animate-fade-in-left delay-300">• Natural language processing</li>
                  <li className="animate-fade-in-left delay-400">• Analytics and insights</li>
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
                  Build tailored AI solutions designed specifically for your unique business challenges.
                  From predictive analytics to computer vision, we bring cutting-edge AI to your industry.
                </p>
                <ul className="text-zinc-400 space-y-2">
                  <li className="animate-fade-in-left delay-100">• Custom model development</li>
                  <li className="animate-fade-in-left delay-200">• Data pipeline architecture</li>
                  <li className="animate-fade-in-left delay-300">• API integration and deployment</li>
                  <li className="animate-fade-in-left delay-400">• Continuous learning and updates</li>
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
                  Strategic guidance to help you navigate the AI landscape and make informed decisions
                  about technology investments that drive real business value.
                </p>
                <ul className="text-zinc-400 space-y-2">
                  <li className="animate-fade-in-left delay-100">• AI readiness assessment</li>
                  <li className="animate-fade-in-left delay-200">• Technology stack recommendations</li>
                  <li className="animate-fade-in-left delay-300">• ROI analysis and planning</li>
                  <li className="animate-fade-in-left delay-400">• Implementation roadmaps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 border-t border-zinc-800 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">Ready to Get Started?</h2>
          <p className="text-zinc-400 mb-8 animate-fade-in-up delay-100">Browse our AI services or schedule a consultation.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/store/products" className="btn-shine inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all hover-scale">
              Browse Services
            </Link>
            <Link href="/contact" className="btn-shine inline-block px-8 py-4 border border-zinc-700 hover:border-cyan-500/50 font-semibold rounded-lg transition-all hover-scale">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
