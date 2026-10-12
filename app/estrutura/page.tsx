import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";

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

export default function EstruturaPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-white text-foreground">
      <PageHero
        eyebrow="Estrutura operacional"
        title="Capacidade própria para produzir, transportar, manter e executar."
        image="/images/home/grupo-estrutura.png"
        imageAlt="Estrutura operacional do Grupo Soster"
        description={
          <p>
            A estrutura do grupo conecta frota, máquinas, produção de
            materiais, manutenção, logística, canteiros e abastecimento para
            sustentar obras e operações de diferentes portes.
          </p>
        }
        actions={
          <>
            <ButtonLink href="/contato" variant="light" size="lg">
              Solicitar orçamento
              <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/atuacoes" variant="outlineLight" size="lg">
              Ver atuações
            </ButtonLink>
          </>
        }
      >
        <ul
          aria-label="Recursos da estrutura"
          className="mt-12 grid grid-cols-2 border-t border-white/20 sm:grid-cols-3 xl:grid-cols-9"
        >
          {recursos.map((item) => (
            <li
              key={item}
              className="border-b border-white/15 py-4 pr-4 text-sm font-semibold text-white xl:border-b-0 xl:border-r xl:px-3 xl:first:pl-0 xl:last:border-r-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </PageHero>
    </main>
  );
}
