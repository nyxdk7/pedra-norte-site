import { CadeiaIntegrada } from "@/components/home/CadeiaIntegrada";
import { Credibilidade } from "@/components/home/Credibilidade";
import { GaleriaOperacoes } from "@/components/home/GaleriaOperacoes";
import { GrupoSosterIndice } from "@/components/home/GrupoSosterIndice";
import { HomeHero } from "@/components/home/HomeHero";
import { PedraNorteDestaque } from "@/components/home/PedraNorteDestaque";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";

// DNA home sequence: cinematic full-bleed → bright verified metrics → asymmetric
// operations narrative → Pedra Norte showcase, alternating dark and light surfaces.
export default function Home() {
  return (
    <main id="conteudo" className="min-h-screen bg-background text-foreground">
      <HomeHero />

      <Credibilidade />

      <CadeiaIntegrada />

      <PedraNorteDestaque />

      <GrupoSosterIndice />

      <GaleriaOperacoes />

      <CtaBanner
        className="pt-16 md:pt-24"
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
