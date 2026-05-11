import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "MSM Industrial LTDA | Soluções em Engenharia Civil",
  description:
    "Site institucional da MSM Industrial LTDA, empresa de engenharia civil, infraestrutura, concreto usinado, pavimentação e fornecimento de agregados.",
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