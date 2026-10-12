import { CapacidadeOperacional } from "@/components/home/CapacidadeOperacional";
import { EmpresasCarousel } from "@/components/home/EmpresasCarousel";
import { GaleriaOperacoes } from "@/components/home/GaleriaOperacoes";
import { HomeHero } from "@/components/home/HomeHero";
import { PedraNorteDestaque } from "@/components/home/PedraNorteDestaque";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";

export default function Home() {
  return (
    <main id="conteudo" className="min-h-screen bg-white text-foreground">
      <HomeHero />

      <CapacidadeOperacional />

      <GaleriaOperacoes />

      <EmpresasCarousel />

      <PedraNorteDestaque />

      <CtaBanner
        eyebrow="Atendimento institucional"
        title="Precisa de estrutura para sua obra?"
        description="Fale com o Grupo Soster e conheça as soluções da MSM Industrial, Pedra Norte e empresas integradas para infraestrutura, fornecimento de materiais e execução em campo."
        actions={
          <>
            <ButtonLink href="/contato" variant="light" size="lg">
              Fale conosco
            </ButtonLink>
            <ButtonLink href="/atuacoes" variant="outlineLight" size="lg">
              Ver atuações
            </ButtonLink>
          </>
        }
      />
    </main>
  );
}
