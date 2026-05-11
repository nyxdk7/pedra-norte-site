import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pedra Norte | Engenharia e Infraestrutura",
  description:
    "Site institucional da Pedra Norte, empresa de mineração, engenharia, infraestrutura, concreto usinado e fornecimento de agregados.",
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