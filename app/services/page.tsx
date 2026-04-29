import Link from "next/link";
import { Header } from "@/components/header";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform how your business operates
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Workflow Automation */}
          <div className="p-8 border border-zinc-800 rounded-lg bg-zinc-950/50 hover:border-cyan-500/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="text-4xl">⚡</div>
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-cyan-400">Workflow Automation</h2>
                <p className="text-zinc-400 mb-4">
                  Eliminate repetitive tasks and streamline your operations with intelligent automation.
                  We analyze your existing processes and implement solutions that save time and reduce errors.
                </p>
                <ul className="text-zinc-400 space-y-2">
                  <li>• Process mapping and optimization</li>
                  <li>• Custom automation workflows</li>
                  <li>• Integration with existing tools</li>
                  <li>• Ongoing monitoring and improvement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Chatbots */}
          <div className="p-8 border border-zinc-800 rounded-lg bg-zinc-950/50 hover:border-cyan-500/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🤖</div>
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-cyan-400">AI Chatbots</h2>
                <p className="text-zinc-400 mb-4">
                  Deploy intelligent conversational AI that enhances customer engagement and provides 24/7 support.
                  Our chatbots understand context and deliver personalized experiences.
                </p>
                <ul className="text-zinc-400 space-y-2">
                  <li>• Custom chatbot development</li>
                  <li>• Multi-channel deployment</li>
                  <li>• Natural language processing</li>
                  <li>• Analytics and insights</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Custom AI Development */}
          <div className="p-8 border border-zinc-800 rounded-lg bg-zinc-950/50 hover:border-cyan-500/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🧠</div>
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-cyan-400">Custom AI Development</h2>
                <p className="text-zinc-400 mb-4">
                  Build tailored AI solutions designed specifically for your unique business challenges.
                  From predictive analytics to computer vision, we bring cutting-edge AI to your industry.
                </p>
                <ul className="text-zinc-400 space-y-2">
                  <li>• Custom model development</li>
                  <li>• Data pipeline architecture</li>
                  <li>• API integration and deployment</li>
                  <li>• Continuous learning and updates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Consulting */}
          <div className="p-8 border border-zinc-800 rounded-lg bg-zinc-950/50 hover:border-cyan-500/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="text-4xl">💼</div>
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-cyan-400">AI Consulting</h2>
                <p className="text-zinc-400 mb-4">
                  Strategic guidance to help you navigate the AI landscape and make informed decisions
                  about technology investments that drive real business value.
                </p>
                <ul className="text-zinc-400 space-y-2">
                  <li>• AI readiness assessment</li>
                  <li>• Technology stack recommendations</li>
                  <li>• ROI analysis and planning</li>
                  <li>• Implementation roadmaps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 border-t border-zinc-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-zinc-400 mb-8">Browse our AI services or schedule a consultation.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/store/products" className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors">
              Browse Services
            </Link>
            <Link href="/contact" className="inline-block px-8 py-4 border border-zinc-700 hover:border-zinc-500 font-semibold rounded-lg transition-colors">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
