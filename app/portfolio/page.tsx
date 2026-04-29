import Link from "next/link";
import { Header } from "@/components/header";

const projects = [
  {
    title: "E-Commerce Automation Platform",
    category: "Workflow Automation",
    description: "Automated order processing and inventory management for a leading retailer",
    results: ["70% reduction in processing time", "99.9% accuracy improvement", "24/7 automated operations"]
  },
  {
    title: "AI Customer Support Bot",
    category: "AI Chatbot",
    description: "Intelligent support assistant for a SaaS company handling 10,000+ daily queries",
    results: ["85% query resolution rate", "50% reduction in support costs", "95% customer satisfaction"]
  },
  {
    title: "Predictive Analytics Dashboard",
    category: "Custom AI",
    description: "Machine learning model for sales forecasting and inventory optimization",
    results: ["40% improvement in forecast accuracy", "25% reduction in stockouts", "$2M annual savings"]
  },
  {
    title: "Document Processing System",
    category: "Workflow Automation",
    description: "AI-powered document extraction and processing for financial services",
    results: ["90% faster document processing", "95% extraction accuracy", "Zero manual data entry"]
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Work
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Real results for real businesses. See how we've helped companies transform with AI.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="p-8 border border-zinc-800 rounded-lg bg-zinc-950/50 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 rounded-full">
                  {project.category}
                </span>
              </div>
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <p className="text-zinc-400 mb-6">{project.description}</p>
              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-3">Key Results:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {project.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2 text-zinc-400">
                      <span className="text-cyan-400">✓</span>
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 border-t border-zinc-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
          <p className="text-zinc-400 mb-8">Let's discuss how we can help transform your business.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
