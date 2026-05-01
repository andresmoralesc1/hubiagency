export const storeProducts = [
  {
    id: "automatizacion-leads",
    title: "Automatización de Captación de Leads",
    description: "Workflow completo en n8n para capturar, cualificar y almacenar leads desde múltiples fuentes. Incluye integración con CRM y notificaciones.",
    price: 299,
    currency: "USD",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=format&fit=crop&w=600&q=80",
    category: "automatizacion",
    paymentLinks: {
      paypal: "https://paypal.com/checkout",
      wompi: "https://checkout.wompi.co/xxxx",
      mercadopago: "https://mercadopago.com/xxxx",
      lemonsqueezy: "https://lemonsqueezy.com/xxxx"
    }
  },
  {
    id: "chatbot-atencion",
    title: "Chatbot de Atención al Cliente con IA",
    description: "Agente conversacional inteligente basado en LangChain y OpenAI, desplegado localmente con Ollama.",
    price: 899,
    currency: "USD",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=format&fit=crop&w=600&q=80",
    category: "ia",
    paymentLinks: {
      paypal: "https://paypal.com/checkout",
      wompi: "https://checkout.wompi.co/xxxx",
      mercadopago: "https://mercadopago.com/xxxx",
      lemonsqueezy: "https://lemonsqueezy.com/xxxx"
    }
  },
  {
    id: "pipeline-rag",
    title: "Pipeline de análisis de documentos con RAG",
    description: "Sistema RAG para analizar contratos, facturas y documentos legales con embeddings locales.",
    price: 1199,
    currency: "USD",
    image: "https://images.pexels.com/photos/4223082/pexels-photo-4223082.jpeg?auto=format&fit=crop&w=600&q=80",
    category: "ia",
    paymentLinks: {
      paypal: "https://paypal.com/checkout",
      wompi: "https://checkout.wompi.co/xxxx",
      mercadopago: "https://mercadopago.com/xxxx",
      lemonsqueezy: "https://lemonsqueezy.com/xxxx"
    }
  },
  {
    id: "dashboard-metricas",
    title: "Dashboard de Métricas con Agente IA",
    description: "Agente de IA local que consulta bases de datos y presenta insights en dashboard en tiempo real.",
    price: 199,
    currency: "USD",
    image: "https://images.pexels.com/photos/7567479/pexels-photo-7567479.jpeg?auto=format&fit=crop&w=600&q=80",
    category: "dashboard",
    paymentLinks: {
      paypal: "https://paypal.com/checkout",
      wompi: "https://checkout.wompi.co/xxxx",
      mercadopago: "https://mercadopago.com/xxxx",
      lemonsqueezy: "https://lemonsqueezy.com/xxxx"
    }
  },
  {
    id: "auditoria-ia",
    title: "Auditoría y Estrategia AI",
    description: "Sesión de consultoría estratégica de 2 horas para diseñar roadmap de implementación de IA.",
    price: 399,
    currency: "USD",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=format&fit=crop&w=600&q=80",
    category: "consultoria",
    paymentLinks: {
      paypal: "https://paypal.com/checkout",
      wompi: "https://checkout.wompi.co/xxxx",
      mercadopago: "https://mercadopago.com/xxxx",
      lemonsqueezy: "https://lemonsqueezy.com/xxxx"
    }
  }
];

export type StoreProduct = typeof storeProducts[0];