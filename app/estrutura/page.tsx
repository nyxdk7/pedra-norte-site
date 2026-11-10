import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { CentralOperacoes } from "@/components/estrutura/CentralOperacoes";
import { PageHero } from "@/components/ui/PageHero";

// Background footage of the hero: 44.9 s of the group's own plant and fleet
// (excavators loading, the Ammann asphalt plant, the drill rig, the Pedra Norte
// trucks), from the HLG source in assets/source-videos — tone-mapped to SDR on the
// way in, so browsers do not show it washed out.
const VIDEO_HERO = "/videos/estrutura/estrutura-operacional";

export default function EstruturaPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-background text-foreground">
      <PageHero
        eyebrow="Estrutura operacional"
        title="Capacidade própria para produzir, transportar, manter e executar."
        image={`${VIDEO_HERO}-capa.jpg`}
        video={VIDEO_HERO}
        imageAlt="Escavadeira carregando um caminhão fora-de-estrada na frente de lavra da pedreira"
        // 16:9 source: the cover crop is driven by height once the box is taller than that.
        imageSizes="(max-aspect-ratio: 16/9) 178vh, 100vw"
        actions={
          <>
            <ButtonLink href="/contato" variant="signal" size="lg">
              Solicitar orçamento
              <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/atuacoes" variant="glass" size="lg">
              Ver atuações
            </ButtonLink>
          </>
        }
      />

      {/* The resources as the real chain, in photographs, on a full-bleed band. */}
      <section aria-labelledby="recursos-titulo" className="on-dark central-faixa">
        <div className="central-faixa-interno">
          <div>
            <p className="text-[0.9375rem] font-semibold text-accent">Recursos da estrutura</p>
            <h2
              id="recursos-titulo"
              className="mt-3 text-[length:var(--type-h2)] font-bold leading-[1.06] text-white"
            >
              Um ecossistema de soluções integradas.
            </h2>
          </div>
          <div className="mt-10 md:mt-12">
            <CentralOperacoes />
          </div>
        </div>
      </section>
    </main>
  );
}
