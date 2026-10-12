import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Section";

const recursos = [
  "Frota de transporte",
  "Máquinas pesadas",
  "Produção de asfalto",
  "Pedreira e agregados",
  "Concreto",
  "Oficina",
  "Borracharia",
  "Canteiros",
  "Abastecimento",
];

// Real photographs of the group's equipment and facilities (DNA: immersive, photo-led).
const fotos = [
  {
    src: "/images/galeria/home11.jpeg",
    alt: "Carregadeira diante da planta de britagem",
    classe: "aspect-[4/3] md:col-span-7 md:row-span-2 md:aspect-auto",
    sizes: "(max-width: 768px) 100vw, 58vw",
  },
  {
    src: "/images/atuacoes/pre-moldados/pre-moldados2.png",
    alt: "Pátio de peças pré-moldadas de concreto com tubos de drenagem",
    classe: "aspect-[16/10] md:col-span-5",
    sizes: "(max-width: 768px) 100vw, 42vw",
  },
  {
    src: "/images/atuacoes/edificacoes/edificacoes3.png",
    alt: "Caminhão betoneira e bomba de concreto em obra de edificação",
    classe: "aspect-[16/10] md:col-span-5",
    sizes: "(max-width: 768px) 100vw, 42vw",
  },
  {
    src: "/images/galeria/home14.jpeg",
    alt: "Vista da planta de britagem com correias transportadoras e pilhas de agregado",
    classe: "aspect-[16/9] md:col-span-8",
    sizes: "(max-width: 768px) 100vw, 66vw",
  },
  {
    src: "/images/galeria/home2.png",
    alt: "Caminhão-pipa e motoniveladora em obra de terraplenagem",
    classe: "aspect-[4/3] md:col-span-4 md:aspect-auto",
    sizes: "(max-width: 768px) 100vw, 34vw",
  },
];

export default function EstruturaPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-background text-foreground">
      <PageHero
        eyebrow="Estrutura operacional"
        title="Capacidade própria para produzir, transportar, manter e executar."
        image="/images/atuacoes/extracao-minerios/pedreira (3).jpeg"
        imageAlt="Correias transportadoras e estruturas da pedreira"
        imagePosition="object-[60%_center]"
        legenda="Correias transportadoras e estruturas da pedreira"
        description={
          <p>
            A estrutura do grupo conecta frota, máquinas, produção de
            materiais, manutenção, logística, canteiros e abastecimento para
            sustentar obras e operações de diferentes portes.
          </p>
        }
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

      {/* Technical inventory: the resources as a ruled 3 × 3 schedule */}
      <section aria-labelledby="recursos-titulo" className="bg-background py-16 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <h2
              id="recursos-titulo"
              className="flex items-center gap-3 text-[0.9375rem] font-semibold text-muted-strong lg:col-span-3 lg:items-start lg:pt-5"
            >
              <span aria-hidden="true" className="h-px w-8 bg-accent lg:mt-2.5" />
              Recursos da estrutura
            </h2>
            <ul className="grid grid-cols-2 border-t border-border sm:grid-cols-3 lg:col-span-9">
              {recursos.map((item) => (
                <li
                  key={item}
                  className="border-b border-border py-5 pr-4 text-lg font-bold leading-snug text-heading md:py-7 md:text-xl"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Photo-led mosaic of the real equipment and plants */}
      <section aria-labelledby="fotos-estrutura-titulo" className="bg-brita-100 py-16 md:py-24">
        <h2 id="fotos-estrutura-titulo" className="sr-only">
          Fotos da estrutura operacional
        </h2>
        <Container>
          <ul className="grid gap-4 md:grid-cols-12 md:gap-5">
            {fotos.map((foto) => (
              <li key={foto.src} className={`relative overflow-hidden rounded-card bg-ink/10 ${foto.classe}`}>
                <Image src={foto.src} alt={foto.alt} fill sizes={foto.sizes} className="object-cover" />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}
