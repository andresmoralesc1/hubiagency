import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exclude backend from Next.js build
  transpilePackages: [],
};

export default nextConfig;
