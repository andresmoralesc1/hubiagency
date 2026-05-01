"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { ContactCard } from "@/components/ui/contact-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

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

      {/* Contact Card Section */}
      <section className="pt-24 md:pt-32 pb-16 px-8">
        <div className="max-w-5xl mx-auto">
          <ContactCard
            title="Get in touch"
            description="Si tienes preguntas sobre nuestros servicios o necesitas ayuda, completa el formulario. Respondemos en 24 horas."
            contactInfo={[
              {
                icon: MailIcon,
                label: 'Email',
                value: 'hello@hubiagency.com',
              },
              {
                icon: PhoneIcon,
                label: 'WhatsApp',
                value: '+57 324 542 5387',
              },
              {
                icon: MapPinIcon,
                label: 'Ubicación',
                value: 'Bogotá, Colombia',
              }
            ]}
          >
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="text-zinc-300">Nombre</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-zinc-300">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="company" className="text-zinc-300">Empresa</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                  className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="service" className="text-zinc-300">Servicio</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-zinc-900 px-3 py-2 text-sm ring-offset-background text-white placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="workflow">Automatización de Flujos de Trabajo</option>
                  <option value="chatbot">Chatbots con IA</option>
                  <option value="custom">Desarrollo de IA Personalizada</option>
                  <option value="consulting">Consultoría de IA</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="text-zinc-300">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 min-h-[80px]"
                />
              </div>

              {success && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm">
                  ¡Mensaje enviado! Nos pondremos en contacto dentro de 24 horas.
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold"
              >
                {isLoading ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </ContactCard>
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