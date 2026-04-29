import Link from "next/link";
import { Header } from "@/components/header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About hubIAgency
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            We're on a mission to make intelligent automation accessible to every business
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 border border-zinc-800 rounded-lg bg-zinc-950/50 mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-cyan-400">Our Mission</h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              At hubIAgency, we believe that AI and automation should be tools that empower businesses,
              not complicate them. Our mission is to bridge the gap between cutting-edge technology
              and practical business solutions, helping companies of all sizes harness the power of AI
              to work smarter, not harder.
            </p>
          </div>

          {/* Values */}
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-950/50 text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
              <p className="text-zinc-400">Every solution we build is focused on delivering measurable business outcomes.</p>
            </div>
            <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-950/50 text-center">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-2">Trust & Transparency</h3>
              <p className="text-zinc-400">We believe in clear communication and honest partnerships with our clients.</p>
            </div>
            <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-950/50 text-center">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Continuous Innovation</h3>
              <p className="text-zinc-400">We stay at the forefront of AI technology to bring you the best solutions.</p>
            </div>
          </div>

          {/* Approach */}
          <div className="p-8 border border-zinc-800 rounded-lg bg-zinc-950/50">
            <h2 className="text-3xl font-semibold mb-6 text-cyan-400">Our Approach</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                  <p className="text-zinc-400">We start by understanding your business, challenges, and goals deeply.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strategy</h3>
                  <p className="text-zinc-400">We design a tailored solution roadmap with clear milestones and ROI projections.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                  <p className="text-zinc-400">We build and deploy your solution with rigorous testing and quality assurance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Support</h3>
                  <p className="text-zinc-400">We provide ongoing support, monitoring, and optimization to ensure continued success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 border-t border-zinc-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-zinc-400 mb-8">Ready to transform your business? Get in touch with our team.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
