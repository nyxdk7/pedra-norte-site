import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
    // Local preview switch: NEXT_IMAGE_UNOPTIMIZED=1 serves the original files (the dev
    // image optimizer intermittently stalls on this Windows machine). Dev server only;
    // builds always optimize.
    unoptimized: process.env.NODE_ENV === "development" && process.env.NEXT_IMAGE_UNOPTIMIZED === "1",
  },

  /* The published site still answers on /sobre and /servicos, and both are indexed. The
     redesign folded them into the Home and into Atuações, so they are sent there for good
     (308) instead of starting to answer 404 the moment this version goes up. Served by
     `next start`; a static export would need the same rules in nginx. */
  async redirects() {
    return [
      { source: "/sobre", destination: "/", permanent: true },
      { source: "/servicos", destination: "/atuacoes", permanent: true },
    ];
  },
};

export default nextConfig;