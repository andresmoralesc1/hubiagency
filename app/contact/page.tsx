"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { ShinyButton } from "@/components/ui/shiny-button";

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
    setError(""); // Clear error on submit
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
      setError("Error de red. Por favor intenta de nuevo.");
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
      <section className="pt-24 md:pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Ponerse en Contacto
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            ¿Listo para transformar tu negocio con IA? Comencemos la conversación.
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
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Tu nombre"
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
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="workflow">Automatización de Flujos de Trabajo</option>
                  <option value="chatbot">Chatbots con IA</option>
                  <option value="custom">Desarrollo de IA Personalizada</option>
                  <option value="consulting">Consultoría de IA</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                />
              </div>

              {success && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                  ¡Mensaje enviado! Nos pondremos en contacto dentro de 24 horas.
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
                {isLoading ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-zinc-800">
              <p className="text-center text-zinc-400 mb-4">O contáctanos directamente</p>
              <div className="flex justify-center gap-6 text-sm">
                <ShinyButton href="mailto:hello@hubiagency.com" variant="outline">
                  hello@hubiagency.com
                </ShinyButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-8 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">¿Qué Sigue?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-8">
            <div>
              <div className="text-2xl mb-2">📅</div>
              <h3 className="font-semibold mb-1">1. Nos Pondremos en Contacto</h3>
              <p className="text-sm text-zinc-400">En 24 horas, te contactaremos para programar una llamada de descubrimiento.</p>
            </div>
            <div>
              <div className="text-2xl mb-2">💡</div>
              <h3 className="font-semibold mb-1">2. Llamada de Descubrimiento</h3>
              <p className="text-sm text-zinc-400">Aprenderemos sobre tus desafíos y discutiremos posibles soluciones.</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📋</div>
              <h3 className="font-semibold mb-1">3. Propuesta Personalizada</h3>
              <p className="text-sm text-zinc-400">Recibirás una propuesta a medida con entregables claros y precios.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
