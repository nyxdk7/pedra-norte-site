import type { Metadata } from "next";
import { Overpass, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";
import "./globals.css";
import IntegrityPopup from "@/components/IntegrityPopup";

export const metadata: Metadata = {
  title: {
    default: "MSM Industrial | Pedra Norte | Grupo Soster",
    template: "%s | MSM Industrial",
  },
  description:
    "Site institucional da MSM Industrial LTDA, Pedra Norte e Grupo Soster. Engenharia civil, infraestrutura, pavimentação, concreto usinado, mineração, agregados, pré-moldados e locação de máquinas no Acre.",
  keywords: [
    "MSM Industrial",
    "Pedra Norte",
    "Grupo Soster",
    "MSM Industrial LTDA",
    "engenharia civil no Acre",
    "infraestrutura no Acre",
    "pavimentação no Acre",
    "concreto usinado no Acre",
    "agregados no Acre",
    "pedreira no Acre",
    "mineração no Acre",
    "pré-moldados no Acre",
    "locação de máquinas no Acre",
    "obras rodoviárias",
    "Rio Branco Acre",
  ],
  authors: [
    {
      name: "MSM Industrial LTDA",
    },
  ],
  creator: "MSM Industrial LTDA",
  publisher: "MSM Industrial LTDA",
  metadataBase: new URL("https://msmind.com.br"),
  alternates: {
    canonical: "https://msmind.com.br",
  },
  openGraph: {
    title: "MSM Industrial | Pedra Norte | Grupo Soster",
    description:
      "Grupo com estrutura integrada para obras de infraestrutura, pavimentação, concreto usinado, mineração, agregados, pré-moldados e locação de máquinas no Acre.",
    url: "https://msmind.com.br",
    siteName: "MSM Industrial | Pedra Norte",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/home/hero-obras-acre.png",
        width: 1200,
        height: 630,
        alt: "MSM Industrial, Pedra Norte e Grupo Soster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MSM Industrial | Pedra Norte | Grupo Soster",
    description:
      "Estrutura integrada para grandes obras de infraestrutura, pavimentação, mineração, agregados e construção civil no Acre.",
    images: ["/images/home/hero-obras-acre.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

// Interface and headings: Overpass descends from Highway Gothic, the road-sign
// lettering of the highways the group paves.
const overpass = Overpass({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-overpass",
});

// Editorial text (leads, long paragraphs, large figures).
const sourceSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-source-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${overpass.variable} ${sourceSerif.variable}`}>
      <body>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <IntegrityPopup />
        <Header />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}