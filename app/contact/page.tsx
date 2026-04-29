"use client";

import { useState } from "react";
import { Header } from "@/components/header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", company: "", service: "", message: "" });
      } else {
        const data = await response.json();
        setError(data.error || "Failed to send message");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Ready to transform your business with AI? Let's start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-8">
        <div className="max-w-2xl mx-auto">
          <div className="p-8 border border-zinc-800 rounded-lg bg-zinc-950/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="workflow">Workflow Automation</option>
                  <option value="chatbot">AI Chatbots</option>
                  <option value="custom">Custom AI Development</option>
                  <option value="consulting">AI Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              {success && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                  Message sent! We&apos;ll be in touch within 24 hours.
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-zinc-800">
              <p className="text-center text-zinc-400 mb-4">Or reach us directly</p>
              <div className="flex justify-center gap-6 text-sm">
                <a href="mailto:hello@hubiagency.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  hello@hubiagency.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-8 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">What Happens Next?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-8">
            <div>
              <div className="text-2xl mb-2">📅</div>
              <h3 className="font-semibold mb-1">1. We'll Reach Out</h3>
              <p className="text-sm text-zinc-400">Within 24 hours, we'll contact you to schedule a discovery call.</p>
            </div>
            <div>
              <div className="text-2xl mb-2">💡</div>
              <h3 className="font-semibold mb-1">2. Discovery Call</h3>
              <p className="text-sm text-zinc-400">We'll learn about your challenges and discuss potential solutions.</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📋</div>
              <h3 className="font-semibold mb-1">3. Custom Proposal</h3>
              <p className="text-sm text-zinc-400">You'll receive a tailored proposal with clear deliverables and pricing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
