import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exclude backend from Next.js build
  transpilePackages: [],

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // Experimental performance features
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
