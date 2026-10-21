import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
    // Local preview switch: NEXT_IMAGE_UNOPTIMIZED=1 serves the original files (the dev
    // image optimizer intermittently stalls on this Windows machine). Dev server only;
    // builds always optimize.
    unoptimized: process.env.NODE_ENV === "development" && process.env.NEXT_IMAGE_UNOPTIMIZED === "1",
  },
};

export default nextConfig;