import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // TypeScript ke strict errors ko build time par ignore karega
    ignoreBuildErrors: true,
  },
  eslint: {
    // ESLint warning/errors ko bhi bypass karega production build me
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;