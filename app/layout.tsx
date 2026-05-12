import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MSM Industrial | Pedra Norte",
    template: "%s | MSM Industrial",
  },
  description:
    "Site institucional da MSM Industrial LTDA e Pedra Norte, grupo com atuação em engenharia civil, infraestrutura, pavimentação, concreto usinado, mineração, agregados, pré-moldados e locação de máquinas no Acre.",
  keywords: [
    "MSM Industrial",
    "Pedra Norte",
    "Grupo Soster",
    "engenharia civil",
    "infraestrutura",
    "pavimentação",
    "concreto usinado",
    "agregados",
    "pedreira",
    "mineração",
    "pré-moldados",
    "locação de máquinas",
    "Rio Branco",
    "Acre",
  ],
  authors: [
    {
      name: "MSM Industrial LTDA",
    },
  ],
  creator: "João Pedro",
  publisher: "MSM Industrial LTDA",
  metadataBase: new URL("https://msmindustrial.com.br"),
  openGraph: {
    title: "MSM Industrial | Pedra Norte",
    description:
      "Grupo com estrutura integrada para obras de infraestrutura, pavimentação, concreto usinado, mineração, agregados, pré-moldados e locação de máquinas.",
    url: "https://msmindustrial.com.br",
    siteName: "MSM Industrial | Pedra Norte",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/home/hero-obras-acre.png",
        width: 1200,
        height: 630,
        alt: "MSM Industrial e Pedra Norte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MSM Industrial | Pedra Norte",
    description:
      "Estrutura integrada para grandes obras de infraestrutura, pavimentação, mineração, agregados e construção civil.",
    images: ["/images/home/hero-obras-acre.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}