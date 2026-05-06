"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ShinyButton } from "@/components/ui/shiny-button";
import { toast, ToastContainer } from "@/components/ui/toast";
import { X, CheckCircle } from "lucide-react";

const tools = [
  "Google Sheets", "Excel", "Office 365", "Google Workspace",
  "Notion", "Trello", "Asana", "Monday.com", "Jira", "ClickUp",
  "CRM (HubSpot, Salesforce)", "Zoho", "Pipeline", "Bitrix24",
  "Slack", "WhatsApp", "Telegram", "Discord", "Email",
  "Instagram", "Facebook", "Twitter/X", "LinkedIn", "TikTok",
  "Shopify", "WooCommerce", "Stripe", "PayPal", "MercadoPago",
  "SAP", "Dynamics", "Mailchimp", "HubSpot Marketing"
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
  { min: 100, max: 500, label: "$100 - $500", desc: "Automatización simple" },
  { min: 500, max: 2000, label: "$500 - $2,000", desc: "Automatización puntual" },
  { min: 2000, max: 5000, label: "$2,000 - $5,000", desc: "Proyecto completo" },
  { min: 5000, max: 15000, label: "$5,000 - $15,000", desc: "Solución integral" },
  { min: 15000, max: 50000, label: "$15,000+", desc: "Transformación digital" }
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function BriefForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "", email: "", company: "",
    pain: [] as string[],
    tools: [] as string[],
    connection: "", otherTool: "", goal: "", urgency: "", budget: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, [step]);

  const totalSteps = 6;

  const canProceed = () => {
    switch (step) {
      case 0: return formData.pain.length > 0;
      case 1: return formData.tools.length > 0;
      case 2: return formData.connection.trim().length > 0;
      case 3: return !!formData.goal;
      case 4: return !!formData.urgency;
      case 5: return formData.name.trim().length > 0 && isValidEmail(formData.email) && !!formData.budget;
      default: return false;
    }
  };

  const getFieldError = () => {
    if (step === 2 && !formData.connection.trim()) return "Describe al menos una conexión";
    if (step === 5) {
      if (!formData.name.trim()) return "El nombre es requerido";
      if (!formData.email.trim()) return "El email es requerido";
      if (!isValidEmail(formData.email)) return "Ingresa un email válido";
      if (!formData.budget) return "Selecciona un presupuesto";
    }
    return null;
  };

  const handleSubmit = async () => {
    const fieldError = getFieldError();
    if (fieldError) {
      toast(fieldError, "error");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "brief-form",
          tools: formData.otherTool
            ? [...formData.tools, formData.otherTool]
            : formData.tools
        })
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        toast("Error al enviar. Intenta de nuevo.", "error");
      }
    } catch {
      toast("Error de conexión. Intenta de nuevo.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleNext = () => {
    const fieldError = getFieldError();
    if (fieldError) {
      toast(fieldError, "error");
      return;
    }
    if (step < totalSteps - 1) {
      setStep(s => s + 1);
    }
  };

  if (submitted) {
    return (
      <>
        <Header />
        <ToastContainer />
        <main className="min-h-screen bg-black text-white pt-24 pb-16 px-8">
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
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <ToastContainer />

      <main className="min-h-screen bg-black text-white pt-24 pb-16 px-4">
        <div className="max-w-xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-zinc-500 mb-2">
              <span>Paso {step + 1} de {totalSteps}</span>
              <span>{Math.round(((step + 1) / totalSteps) * 100)}%</span>
            </div>
            <div className="h-2 bg-zinc-900 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-500 transition-all duration-300"
                style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
              />
            </div>
            {/* Step indicators */}
            <div className="flex justify-between mt-2">
              {Array.from({ length: totalSteps }, (_, i) => (
                <button
                  key={i}
                  onClick={() => i < step && setStep(i)}
                  className={`w-6 h-6 rounded-full text-xs font-bold transition-all ${
                    i < step
                      ? "bg-cyan-500 text-black cursor-pointer hover:bg-cyan-400"
                      : i === step
                      ? "bg-cyan-500 text-black"
                      : "bg-zinc-800 text-zinc-500"
                  }`}
                  aria-label={`Ir a paso ${i + 1}`}
                >
                  {i < step ? <CheckCircle className="w-4 h-4 mx-auto" /> : i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-6">
            <h1 ref={headingRef} tabIndex={-1} className="text-2xl md:text-3xl font-bold mb-2">
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

            {step === 0 && (
              <div className="space-y-3" role="group" aria-label="Puntos de dolor">
                {painPoints.map((pain) => (
                  <button
                    key={pain}
                    onClick={() => setFormData(f => ({
                      ...f,
                      pain: f.pain.includes(pain) ? f.pain.filter(p => p !== pain) : [...f.pain, pain]
                    }))}
                    aria-pressed={formData.pain.includes(pain)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      formData.pain.includes(pain)
                        ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                        : "border-zinc-800 hover:border-zinc-600"
                    }`}
                  >
                    {formData.pain.includes(pain) && <CheckCircle className="w-4 h-4 inline mr-2" />}
                    {pain}
                  </button>
                ))}
              </div>
            )}

            {step === 1 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3" role="group" aria-label="Herramientas">
                {tools.map((tool) => (
                  <button
                    key={tool}
                    onClick={() => setFormData(f => ({
                      ...f,
                      tools: f.tools.includes(tool) ? f.tools.filter(t => t !== tool) : [...f.tools, tool]
                    }))}
                    aria-pressed={formData.tools.includes(tool)}
                    className={`p-3 rounded-lg border text-sm transition-all ${
                      formData.tools.includes(tool)
                        ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                        : "border-zinc-800 hover:border-zinc-600"
                    }`}
                  >
                    {formData.tools.includes(tool) && <CheckCircle className="w-3 h-3 inline mr-1" />
}
                    {tool}
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="connection" className="block text-sm text-zinc-400 mb-2">
                    ¿Qué herramientas quieres conectar?
                  </label>
                  <input
                    id="connection"
                    type="text"
                    value={formData.connection}
                    onChange={(e) => setFormData(f => ({ ...f, connection: e.target.value }))}
                    placeholder="Ej: Google Sheets → Notion, WhatsApp → CRM"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none"
                    aria-describedby="connection-hint"
                  />
                  <p id="connection-hint" className="text-zinc-600 text-xs mt-1">
                    Describe el flujo ideal: qué sale de una herramienta y entra en otra
                  </p>
                </div>
                <div>
                  <label htmlFor="otherTool" className="block text-sm text-zinc-400 mb-2">
                    ¿No encuentras tu herramienta?
                  </label>
                  <input
                    id="otherTool"
                    type="text"
                    value={formData.otherTool}
                    onChange={(e) => setFormData(f => ({ ...f, otherTool: e.target.value }))}
                    placeholder="Ej: Airtable, Pipedrive, Shopify..."
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4" role="group" aria-label="Objetivos">
                {goals.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setFormData(f => ({ ...f, goal: g.id }))}
                    aria-pressed={formData.goal === g.id}
                    className={`w-full text-left p-5 rounded-lg border transition-all ${
                      formData.goal === g.id
                        ? "border-cyan-500 bg-cyan-500/10"
                        : "border-zinc-800 hover:border-zinc-600"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-2xl">{g.icon}</span>
                      <span className="font-semibold">{g.label}</span>
                      {formData.goal === g.id && <CheckCircle className="w-4 h-4 ml-auto text-cyan-400" />}
                    </div>
                    <p className="text-zinc-400 text-sm pl-9">{g.desc}</p>
                  </button>
                ))}
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4" role="group" aria-label="Urgencia">
                {urgency.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => setFormData(f => ({ ...f, urgency: u.id }))}
                    aria-pressed={formData.urgency === u.id}
                    className={`w-full text-left p-5 rounded-lg border transition-all ${
                      formData.urgency === u.id
                        ? "border-cyan-500 bg-cyan-500/10"
                        : "border-zinc-800 hover:border-zinc-600"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-semibold">{u.label}</span>
                      {formData.urgency === u.id && <CheckCircle className="w-4 h-4 ml-auto text-cyan-400" />}
                    </div>
                    <p className="text-zinc-400 text-sm">{u.desc}</p>
                  </button>
                ))}
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-zinc-400 mb-2">Nombre *</label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(f => ({ ...f, name: e.target.value }))}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                      placeholder="tu nombre"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">Email *</label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(f => ({ ...f, email: e.target.value }))}
                      onBlur={() => setEmailTouched(true)}
                      className={`w-full bg-zinc-900 border rounded-lg px-4 py-3 text-white focus:outline-none ${
                        formData.email && emailTouched && !isValidEmail(formData.email)
                          ? "border-red-500 focus:border-red-500"
                          : "border-zinc-700 focus:border-cyan-500"
                      }`}
                      placeholder="tu@email.com"
                      aria-required="true"
                      aria-invalid={formData.email && emailTouched ? !isValidEmail(formData.email) : false}
                    />
                    {formData.email && emailTouched && !isValidEmail(formData.email) && (
                      <p className="text-red-400 text-xs mt-1">Email inválido</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm text-zinc-400 mb-2">Empresa (opcional)</label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData(f => ({ ...f, company: e.target.value }))}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-3">Presupuesto estimado *</label>
                  <div className="grid grid-cols-2 gap-3" role="group" aria-label="Presupuesto">
                    {budgets.map((b) => (
                      <button
                        key={b.label}
                        onClick={() => setFormData(f => ({ ...f, budget: b.label }))}
                        aria-pressed={formData.budget === b.label}
                        className={`p-4 rounded-lg border text-left transition-all ${
                          formData.budget === b.label
                            ? "border-cyan-500 bg-cyan-500/10"
                            : "border-zinc-800 hover:border-zinc-600"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm">{b.label}</span>
                          {formData.budget === b.label && <CheckCircle className="w-4 h-4 text-cyan-400" />}
                        </div>
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
            {step > 0 ? (
              <button
                onClick={() => setStep(s => s - 1)}
                aria-label="Paso anterior"
                className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 font-semibold rounded-lg transition-colors"
              >
                ← Atrás
              </button>
            ) : (
              <Link
                href="/"
                className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 font-semibold rounded-lg transition-colors"
              >
                ← Inicio
              </Link>
            )}
            {step < totalSteps - 1 ? (
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex-1 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed text-black font-semibold rounded-lg transition-all"
              >
                Siguiente →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed() || submitting}
                className="flex-1 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed text-black font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>Recibir mi diagnóstico →</>
                )}
              </button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}