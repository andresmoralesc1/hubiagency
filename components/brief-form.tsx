"use client";

import { useState } from "react";
import Link from "next/link";
import { ShinyButton } from "@/components/ui/shiny-button";

const tools = [
  "Google Sheets", "Excel", "CRM (HubSpot, Salesforce)", "Slack",
  "WhatsApp", "Shopify", "WooCommerce", "Notion", "Trello",
  "SAP", "Dynamics", "Zoho", "Mailchimp", "Stripe", "PayPal"
];

const painPoints = [
  "Entrada manual de datos repetitivos",
  "Sincronización entre sistemas (doble trabajo)",
  "Respuestas a clientes (WhatsApp, email)",
  "Generación de reportes manuales",
  "Seguimiento de leads y pipeline",
  "Gestión de inventario",
  "Facturación y cobros",
  "Agendamiento y calendario"
];

const goals = [
  { id: "efficiency", label: "Ahorrar tiempo", icon: "⏱️", desc: "Automatizar tareas repetitivas para que mi equipo haga más en menos tiempo" },
  { id: "revenue", label: "Generar más dinero", icon: "📈", desc: "Aumentar ventas, conversiones o reducir pérdidas" },
  { id: "both", label: "Los dos", icon: "🎯", desc: "Optimizar operaciones Y aumentar ingresos" }
];

const urgency = [
  { id: "yesterday", label: "Para ayer", desc: "Tengo un problema urgente que resolver" },
  { id: "month", label: "Este mes", desc: "Quiero implementarlo dentro de 30 días" },
  { id: "exploring", label: "Solo explorando", desc: "Quiero entender opciones para el futuro" }
];

const budgets = [
  { min: 500, max: 2000, label: "$500 - $2,000", desc: "Automatización puntual" },
  { min: 2000, max: 5000, label: "$2,000 - $5,000", desc: "Proyecto completo" },
  { min: 5000, max: 15000, label: "$5,000 - $15,000", desc: "Solución integral" },
  { min: 15000, max: 50000, label: "$15,000+", desc: "Transformación digital" }
];

export function BriefForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "", email: "", company: "",
    pain: [] as string[],
    tools: [] as string[],
    connection: "", goal: "", urgency: "", budget: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const totalSteps = 6;

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "brief-form" })
      });
      if (res.ok) setSubmitted(true);
    } catch (e) {
      console.error(e);
    }
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white">
        <header className="py-6 px-8 border-b border-zinc-800">
          <Link href="/" className="text-xl font-bold">hubIAgency</Link>
        </header>
        <section className="pt-32 px-8">
          <div className="max-w-xl mx-auto text-center">
            <div className="text-6xl mb-6">🚀</div>
            <h1 className="text-4xl font-bold mb-4">¡Recibido!</h1>
            <p className="text-xl text-zinc-400 mb-6">
              En 5 minutos recibirás un diagnóstico inicial de arquitectura en tu correo.
            </p>
            <p className="text-zinc-500 mb-8">
              Mientras tanto, explora nuestros casos de éxito en el{" "}
              <Link href="/portfolio" className="text-cyan-400 hover:underline">portafolio</Link>.
            </p>
            <ShinyButton href="/contact">
              Agendar llamada ahora
            </ShinyButton>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-6 px-8 border-b border-zinc-800">
        <Link href="/" className="text-xl font-bold">hubIAgency</Link>
      </header>

      {/* Progress bar */}
      <div className="fixed top-[57px] left-0 right-0 h-1 bg-zinc-900 z-50">
        <div
          className="h-full bg-cyan-500 transition-all duration-300"
          style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
        />
      </div>

      <section className="pt-24 pb-16 px-4">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
              Paso {step + 1} de {totalSteps}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-2">
              {step === 0 && "El Dolor Operativo"}
              {step === 1 && "Tu Stack Actual"}
              {step === 2 && "La Conexión Ideal"}
              {step === 3 && "Tu Objetivo con IA"}
              {step === 4 && "¿Cuándo lo necesitas?"}
              {step === 5 && "Tus Datos de Contacto"}
            </h1>
            <p className="text-zinc-400 text-sm">
              {step === 0 && "¿Qué proceso repetitivo te roba más de 5 horas a la semana?"}
              {step === 1 && "¿Qué herramientas usas hoy? Selecciona todas las que apliquen."}
              {step === 2 && "Si pudieras conectar dos herramientas para que 'hablen' entre sí, ¿cuáles?"}
              {step === 3 && "¿Qué es más importante para tu negocio ahora mismo?"}
              {step === 4 && "¿Esto es urgente o estás explorando opciones?"}
              {step === 5 && "Descarga tu diagnóstico gratuito"}
            </p>
          </div>

          {/* Step content */}
          <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 md:p-8 mb-6">

            {/* Step 0: Pain points */}
            {step === 0 && (
              <div className="space-y-3">
                {painPoints.map((pain) => (
                  <button
                    key={pain}
                    onClick={() => setFormData(f => ({
                      ...f,
                      pain: f.pain.includes(pain) ? f.pain.filter(p => p !== pain) : [...f.pain, pain]
                    }))}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      formData.pain.includes(pain)
                        ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                        : "border-zinc-800 hover:border-zinc-600"
                    }`}
                  >
                    {pain}
                  </button>
                ))}
              </div>
            )}

            {/* Step 1: Tools */}
            {step === 1 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {tools.map((tool) => (
                  <button
                    key={tool}
                    onClick={() => setFormData(f => ({
                      ...f,
                      tools: f.tools.includes(tool) ? f.tools.filter(t => t !== tool) : [...f.tools, tool]
                    }))}
                    className={`p-3 rounded-lg border text-sm transition-all ${
                      formData.tools.includes(tool)
                        ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                        : "border-zinc-800 hover:border-zinc-600"
                    }`}
                  >
                    {tool}
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Connection */}
            {step === 2 && (
              <div>
                <input
                  type="text"
                  value={formData.connection}
                  onChange={(e) => setFormData(f => ({ ...f, connection: e.target.value }))}
                  placeholder="Ej: Google Sheets → Notion, WhatsApp → CRM"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none"
                />
                <p className="text-zinc-500 text-sm mt-3">
                  Describe en pocas palabras qué conexión te gustaría automatizar.
                </p>
              </div>
            )}

            {/* Step 3: Goals */}
            {step === 3 && (
              <div className="space-y-4">
                {goals.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setFormData(f => ({ ...f, goal: g.id }))}
                    className={`w-full text-left p-5 rounded-lg border transition-all ${
                      formData.goal === g.id
                        ? "border-cyan-500 bg-cyan-500/10"
                        : "border-zinc-800 hover:border-zinc-600"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-2xl">{g.icon}</span>
                      <span className="font-semibold">{g.label}</span>
                    </div>
                    <p className="text-zinc-400 text-sm pl-9">{g.desc}</p>
                  </button>
                ))}
              </div>
            )}

            {/* Step 4: Urgency */}
            {step === 4 && (
              <div className="space-y-4">
                {urgency.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => setFormData(f => ({ ...f, urgency: u.id }))}
                    className={`w-full text-left p-5 rounded-lg border transition-all ${
                      formData.urgency === u.id
                        ? "border-cyan-500 bg-cyan-500/10"
                        : "border-zinc-800 hover:border-zinc-600"
                    }`}
                  >
                    <div className="font-semibold mb-1">{u.label}</div>
                    <p className="text-zinc-400 text-sm">{u.desc}</p>
                  </button>
                ))}
              </div>
            )}

            {/* Step 5: Contact info + Budget */}
            {step === 5 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Nombre</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(f => ({ ...f, name: e.target.value }))}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Empresa (opcional)</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData(f => ({ ...f, company: e.target.value }))}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-3">Presupuesto estimado</label>
                  <div className="grid grid-cols-2 gap-3">
                    {budgets.map((b) => (
                      <button
                        key={b.label}
                        onClick={() => setFormData(f => ({ ...f, budget: b.label }))}
                        className={`p-4 rounded-lg border text-left transition-all ${
                          formData.budget === b.label
                            ? "border-cyan-500 bg-cyan-500/10"
                            : "border-zinc-800 hover:border-zinc-600"
                        }`}
                      >
                        <div className="font-semibold text-sm">{b.label}</div>
                        <div className="text-zinc-400 text-xs">{b.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex gap-4">
            {step > 0 && (
              <button
                onClick={() => setStep(s => s - 1)}
                className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 font-semibold rounded-lg transition-colors"
              >
                Atrás
              </button>
            )}
            {step < totalSteps - 1 ? (
              <button
                onClick={() => setStep(s => s + 1)}
                disabled={
                  (step === 0 && formData.pain.length === 0) ||
                  (step === 1 && formData.tools.length === 0) ||
                  (step === 3 && !formData.goal) ||
                  (step === 4 && !formData.urgency)
                }
                className="flex-1 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-zinc-700 disabled:cursor-not-allowed text-black font-semibold rounded-lg transition-colors"
              >
                Siguiente
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!formData.name || !formData.email || !formData.budget || submitting}
                className="flex-1 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-zinc-700 disabled:cursor-not-allowed text-black font-semibold rounded-lg transition-colors"
              >
                {submitting ? "Enviando..." : "Recibir mi diagnóstico →"}
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}