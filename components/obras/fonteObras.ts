import { Inter } from "next/font/google";

// Typeface of the works module only (MSM_Obras_Design_DNA_v1: "Inter, Arial, sans-serif").
export const fonteObras = Inter({
  // Portuguese is fully covered by the latin subset (one preloaded file).
  subsets: ["latin"],
  display: "swap",
  variable: "--font-obras",
});
