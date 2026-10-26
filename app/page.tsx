import { HomeHero } from "@/components/home/HomeHero";
import { MapaEcossistema } from "@/components/home/MapaEcossistema";
import { NossaHistoria } from "@/components/home/NossaHistoria";

// Home sequence: video hero → company history → map of companies, solutions and cases.
export default function Home() {
  return (
    <main id="conteudo" className="min-h-screen bg-background text-foreground">
      <HomeHero />

      <NossaHistoria />

      <MapaEcossistema />
    </main>
  );
}
