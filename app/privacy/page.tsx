import { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for hubIAgency - How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-32 pb-16 px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-invert prose-zinc max-w-none space-y-6">
            <p className="text-zinc-400">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-zinc-300">
              We collect information you provide directly to us, such as when you fill out a contact form,
              subscribe to our newsletter, or communicate with us through our website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-zinc-300">
              We use the information we collect to respond to your inquiries, provide our services,
              send you relevant updates, and improve our website and services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-zinc-300">
              We do not sell, trade, or otherwise transfer your personal information to third parties
              without your consent, except as described in this policy or as necessary to provide our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p className="text-zinc-300">
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
            <p className="text-zinc-300">
              You have the right to access, correct, or delete your personal information. Contact us
              at hello@hubiagency.com to exercise these rights.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies</h2>
            <p className="text-zinc-300">
              We use cookies to enhance your browsing experience. You can control cookie preferences
              through your browser settings.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p className="text-zinc-300">
              If you have questions about this Privacy Policy, please contact us at:
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
