import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
    // Local preview switch: NEXT_IMAGE_UNOPTIMIZED=1 serves the original files (the dev
    // image optimizer intermittently stalls on this Windows machine). Dev server only;
    // builds always optimize.
    unoptimized: process.env.NODE_ENV === "development" && process.env.NEXT_IMAGE_UNOPTIMIZED === "1",
  },

  /* The published site still answers on /sobre, /servicos and /obras/engenharia-rodoviaria.
     This version folded the three into the Home, into Atuações and into Obras, so they are
     sent there for good (308) instead of starting to answer 404 the moment it goes up.
     Served by `next start`; a static export would need the same rules in nginx. */
  async redirects() {
    return [
      { source: "/sobre", destination: "/", permanent: true },
      { source: "/servicos", destination: "/atuacoes", permanent: true },
      { source: "/obras/engenharia-rodoviaria", destination: "/obras", permanent: true },
    ];
  },
};

export default nextConfig;