import { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for hubIAgency - Conditions governing the use of our services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-32 pb-16 px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-invert prose-zinc max-w-none space-y-6">
            <p className="text-zinc-400">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-zinc-300">
              By accessing and using hubIAgency&apos;s website and services, you accept and agree to be bound
              by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services Description</h2>
            <p className="text-zinc-300">
              hubIAgency provides B2B consulting services focused on workflow automation, AI chatbots,
              and custom AI development. Specific service details are provided in proposals and contracts.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Payment Terms</h2>
            <p className="text-zinc-300">
              Payment terms are specified in individual service agreements. Generally, a 50% deposit
              is required before project commencement, with the balance due upon completion.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
            <p className="text-zinc-300">
              Upon full payment, clients receive ownership of custom-developed solutions. Pre-existing
              libraries, tools, and frameworks remain the property of their respective owners.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Confidentiality</h2>
            <p className="text-zinc-300">
              Both parties agree to maintain the confidentiality of proprietary information shared
              during the engagement. This obligation survives termination of the agreement.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-zinc-300">
              hubIAgency&apos;s liability is limited to the amount paid for the specific service in question.
              We are not liable for indirect, incidental, or consequential damages.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Termination</h2>
            <p className="text-zinc-300">
              Either party may terminate an engagement with 30 days written notice. Upon termination,
              payment is due for all work completed up to the termination date.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law</h2>
            <p className="text-zinc-300">
              These terms are governed by and construed in accordance with applicable laws.
              Any disputes shall be resolved through binding arbitration.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact</h2>
            <p className="text-zinc-300">
              Questions about these Terms? Contact us at:
              <br />
              <a href="mailto:hello@hubiagency.com" className="text-cyan-400 hover:underline">
                hello@hubiagency.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
