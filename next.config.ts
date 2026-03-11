import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['stripe'],
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
