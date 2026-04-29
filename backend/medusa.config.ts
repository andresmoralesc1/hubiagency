import type { MedusaConfig } from "@medusajs/medusa";
import { loaders } from "@medusajs/medusa";
import dotenv from "dotenv";

dotenv.config();

const config: MedusaConfig = {
  projectConfig: {
    workerMode: process.env.MEDUSA_WORKER_MODE === "true"
      ? "worker"
      : "api",
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    storeCors: process.env.CORS_ORIGIN || "http://localhost:3000",
    adminCors: process.env.CORS_ORIGIN || "http://localhost:3000",
    http: {
      port: parseInt(process.env.PORT || "9000", 10),
      compression: {
        enabled: true,
        level: 6,
      },
      bodyParser: {
        json: {
          limit: "5mb",
        },
      },
      rateLimit: {
        enabled: true,
        timeWindow: "1 minute",
        maxRequestsPerWindow: 100,
      },
    },
    jwt: {
      secret: process.env.JWT_SECRET || "change-me-in-production",
      expiresIn: "24h",
    },
    cookieSecret: process.env.COOKIE_SECRET || "change-me-in-production",
    roundRobin: false,
  },
  plugins: [
    {
      resolve: "@medusajs/event-bus-local",
      options: {
        ...(process.env.REDIS_URL
          ? { redisUrl: process.env.REDIS_URL }
          : {}),
      },
    },
    {
      resolve: "@medusajs/cache-inmemory",
      options: {
        redisUrl: process.env.REDIS_URL,
        ttl: 30 * 60 * 1000, // 30 minutes
      },
    },
  ],
  modules: {
    eventBus: {
      resolve: "@medusajs/event-bus-local",
      options: {
        ...(process.env.REDIS_URL
          ? { redisUrl: process.env.REDIS_URL }
          : {}),
      },
    },
    cache: {
      resolve: "@medusajs/cache-inmemory",
      options: {
        redisUrl: process.env.REDIS_URL,
        ttl: 30 * 60 * 1000,
      },
    },
  },
  featureFlags: {
    product_categories: true,
    publishable_api_keys: true,
    metrics: true,
  },
};

export default config;
