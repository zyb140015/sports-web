import type { NextConfig } from "next";

import { basePath } from "./src/lib/base-path";

const nextConfig: NextConfig = {
  basePath,
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
