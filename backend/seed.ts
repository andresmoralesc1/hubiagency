import { Migrations } from "@medusajs/medusa/cli";
import {
  Product,
  ProductCategory,
  ShippingProfile,
  ProductVariant,
} from "@medusajs/medusa";

async function seed() {
  const app = await Migrations.createRunner({});
  const manager = app.get("manager");

  console.log("[Seed] Starting HubIAgency seed...");

  // ====================
  // CATEGORIES
  // ====================
  const categories = [
    {
      name: "Automatización con n8n",
      description:
        "Workflows de automatización inteligente utilizando n8n para optimizar procesos de negocio",
      handle: "automatizacion-n8n",
    },
    {
      name: "Despliegue de Agentes Locales",
      description:
        "Implementación y despliegue de agentes de IA localmente con Ollama, LangChain y modelos open source",
      handle: "agentes-locales",
    },
    {
      name: "Consultoría Estratégica AI",
      description:
        "Asesoramiento experto en estrategia de inteligencia artificial para transformación digital",
      handle: "consultoria-ai",
    },
  ];

  const categoryRepo = manager.getRepository(ProductCategory);
  const createdCategories: ProductCategory[] = [];

  for (const cat of categories) {
    const existing = await categoryRepo.findOne({
      where: { handle: cat.handle },
    });

    if (!existing) {
      const newCategory = categoryRepo.create(cat);
      const saved = await manager.save(newCategory);
      createdCategories.push(saved);
      console.log(`[Seed] Created category: ${cat.name}`);
    } else {
      createdCategories.push(existing);
      console.log(`[Seed] Category exists: ${cat.name}`);
    }
  }

  // ====================
  // SHIPPING PROFILE (Digital products = no shipping)
  // ====================
  const shippingProfileRepo = manager.getRepository(ShippingProfile);
  let defaultProfile = await shippingProfileRepo.findOne({
    where: { name: "default" },
  });

  if (!defaultProfile) {
    defaultProfile = shippingProfileRepo.create({
      name: "default",
      type: "default",
    });
    await manager.save(defaultProfile);
    console.log("[Seed] Created default shipping profile");
  }

  // ====================
  // DIGITAL PRODUCTS (No sizes/weights - digital services)
  // ====================
  const products = [
    {
      title: "Automatización de Captación de Leads",
      description:
        "Workflow completo en n8n para capturar, cualificar y almacenar leads desde múltiples fuentes. Incluye integración con CRM y notificaciones.",
      handle: "automatizacion-captacion-leads",
      status: "published" as const,
      is_giftcard: false,
      discountable: true,
      metadata: {
        service_type: "n8n_automation",
        delivery_time: "3-5 días",
      },
      variants: [
        {
          title: "Plan Básico",
          prices: [{ currency_code: "usd", amount: 29900 }],
          inventory_quantity: 999,
        },
        {
          title: "Plan Profesional",
          prices: [{ currency_code: "usd", amount: 59900 }],
          inventory_quantity: 999,
        },
      ],
    },
    {
      title: "Chatbot de Atención al Cliente con IA",
      description:
        "Agente conversacional inteligente basado en LangChain y OpenAI, desplegado localmente con Ollama.",
      handle: "chatbot-atencion-cliente",
      status: "published" as const,
      is_giftcard: false,
      discountable: true,
      metadata: {
        service_type: "ai_agent",
        delivery_time: "7-10 días",
      },
      variants: [
        {
          title: "Versión Standard",
          prices: [{ currency_code: "usd", amount: 89900 }],
          inventory_quantity: 999,
        },
        {
          title: "Versión Enterprise",
          prices: [{ currency_code: "usd", amount: 149900 }],
          inventory_quantity: 999,
        },
      ],
    },
    {
      title: "Pipeline de análisis de documentos con RAG",
      description:
        "Sistema RAG para analizar contratos, facturas y documentos legales con embeddings locales.",
      handle: "pipeline-rag-documentos",
      status: "published" as const,
      is_giftcard: false,
      discountable: false,
      metadata: {
        service_type: "rag_pipeline",
        delivery_time: "5-7 días",
      },
      variants: [
        {
          title: "Implementación Completa",
          prices: [{ currency_code: "usd", amount: 119900 }],
          inventory_quantity: 999,
        },
      ],
    },
    {
      title: "Dashboard de Métricas con Agente IA",
      description:
        "Agente de IA local que consulta bases de datos y presenta insights en dashboard en tiempo real.",
      handle: "dashboard-metricas-ia",
      status: "published" as const,
      is_giftcard: false,
      discountable: true,
      metadata: {
        service_type: "ai_dashboard",
        delivery_time: "5-7 días",
      },
      variants: [
        {
          title: "Plan Mensual",
          prices: [{ currency_code: "usd", amount: 19900 }],
          inventory_quantity: 999,
        },
        {
          title: "Plan Anual",
          prices: [{ currency_code: "usd", amount: 179900 }],
          inventory_quantity: 999,
        },
      ],
    },
    {
      title: "Auditoría y Estrategia AI",
      description:
        "Sesión de consultoría estratégica de 2 horas para diseñar roadmap de implementación de IA.",
      handle: "auditoria-estrategia-ai",
      status: "published" as const,
      is_giftcard: false,
      discountable: false,
      metadata: {
        service_type: "consulting",
        delivery_time: "Incluido",
      },
      variants: [
        {
          title: "Sesión Única",
          prices: [{ currency_code: "usd", amount: 39900 }],
          inventory_quantity: 999,
        },
        {
          title: "Paquete 3 Sesiones",
          prices: [{ currency_code: "usd", amount: 99900 }],
          inventory_quantity: 999,
        },
      ],
    },
  ];

  const productRepo = manager.getRepository(Product);

  for (let i = 0; i < products.length; i++) {
    const productData = products[i];
    const existing = await productRepo.findOne({
      where: { handle: productData.handle },
    });

    if (!existing) {
      const product = productRepo.create({
        title: productData.title,
        description: productData.description,
        handle: productData.handle,
        status: productData.status,
        is_giftcard: productData.is_giftcard,
        discountable: productData.discountable,
        metadata: productData.metadata,
        shipping_profile_id: defaultProfile.id,
      });

      const saved = await manager.save(product);

      // Create variants
      const variantRepo = manager.getRepository(ProductVariant);
      for (const variantData of productData.variants) {
        const variant = variantRepo.create({
          ...variantData,
          product_id: saved.id,
        });
        await manager.save(variant);
      }

      // Link to category
      saved.categories = [createdCategories[i % createdCategories.length]];
      await manager.save(saved);

      console.log(`[Seed] Created product: ${productData.title}`);
    } else {
      console.log(`[Seed] Product exists: ${productData.title}`);
    }
  }

  console.log("[Seed] HubIAgency seed completed!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("[Seed] Error:", err);
  process.exit(1);
});
