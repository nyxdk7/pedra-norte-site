import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function PaginaNaoEncontrada() {
  return (
    <main id="conteudo" className="min-h-screen bg-background text-foreground">
      <PageHero
        variante="sereno"
        eyebrow="Erro 404"
        title="Página não encontrada."
        description={
          <p>
            O endereço acessado não existe ou foi alterado. Use o menu ou
            volte para a página inicial.
          </p>
        }
        actions={
          <>
            <ButtonLink href="/" variant="primary" size="lg">
              Voltar para o início
            </ButtonLink>
            <ButtonLink href="/contato" variant="secondary" size="lg">
              Fale conosco
            </ButtonLink>
          </>
        }
      />
    </main>
  );
}
