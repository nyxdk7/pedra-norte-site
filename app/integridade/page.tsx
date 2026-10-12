import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  FileCheck2,
  MessagesSquare,
  Network,
  ShieldCheck,
} from "lucide-react";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Eyebrow } from "@/components/ui/Section";

const documentosIntegridade = [
  {
    titulo: "Código de Conduta e Ética",
    href: "/integridade/codigo-de-etica",
    icone: ShieldCheck,
  },
  {
    titulo: "Canal de denúncias",
    href: "https://sgcompliance.net/sg/m-s-m-edificacoes-e-terraplanagem/",
    icone: MessagesSquare,
  },
  {
    titulo: "Políticas de Ética e Integridade",
    href: "#",
    icone: FileCheck2,
  },
  {
    titulo: "Glossário de compliance",
    href: "#",
    icone: BookOpen,
  },
  {
    titulo: "Política de gestão integrada",
    href: "#",
    icone: Building2,
  },
  {
    titulo: "Estrutura Organizacional",
    href: "#",
    icone: Network,
  },
];

const destaque = "font-semibold text-brand";
const linkTexto =
  "font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-brand";

export default function IntegridadePage() {
  return (
    <main id="conteudo" className="min-h-screen bg-background text-foreground">
      <PageHero
        variante="sereno"
        eyebrow="Programa de Integridade"
        title="Integridade MSM"
        description={
          <p>
            O Grupo{" "}
            <span className="font-semibold text-heading">
              M. S. M. INDUSTRIAL
            </span>{" "}
            atua com foco em transparência, ética e integridade nas atividades
            desenvolvidas e realizadas, fortalecendo sua relação com
            colaboradores, parceiros, sociedade e Poder Público.
          </p>
        }
      >
        <div className="mt-12 max-w-3xl border-l-2 border-accent pl-6 md:mt-16">
          <p className="text-sm font-semibold text-brand">
            Compromisso institucional
          </p>

          <h2 className="mt-2 text-2xl font-bold leading-tight text-heading md:text-3xl">
            Ética, transparência e responsabilidade nas relações.
          </h2>

          <p className="mt-3 font-serif text-lg leading-relaxed text-muted-strong">
            O Programa de Integridade Corporativa da MSM promove valores
            positivos no ambiente empresarial e orienta boas práticas no
            relacionamento com o Poder Público, parceiros e sociedade.
          </p>
        </div>
      </PageHero>

      <section aria-labelledby="compliance-titulo" className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Integridade Corporativa — Compliance</Eyebrow>

            <h2
              id="compliance-titulo"
              className="mt-4 text-[length:var(--type-h2)] font-bold leading-[1.06] text-heading"
            >
              Compliance - Integridade, ética empresarial.
            </h2>

            <div className="mt-6 space-y-5 font-serif text-lg leading-relaxed text-muted-strong">
              <p>
                O Grupo{" "}
                <span className={destaque}>
                  M. S. M. INDUSTRIAL
                </span>
                , acreditamos que o sucesso sustentável só é possível quando
                construído sobre uma base sólida de ética, transparência e
                conformidade. Nosso compromisso com a integridade vai além do
                cumprimento de leis e regulamentos, refletindo a nossa cultura e
                a forma como nos relacionamos com nossos colaboradores, clientes,
                parceiros, Poderes Públicos e com toda a sociedade.
              </p>

              <p>
                O nosso{" "}
                <span className={destaque}>
                  Programa de Integridade
                </span>{" "}
                é o conjunto de mecanismos e diretrizes que guiam as nossas
                decisões diárias, garantindo um ambiente de trabalho seguro,
                justo e alinhado aos padrões éticos do mercado.
              </p>

              <p>
                O programa de Compliance é administrado por nossa Compliance
                Officer em conjunto com o{" "}
                <span className={destaque}>
                  Comitê de Integridade e Ética (CIE)
                </span>{" "}
                do Grupo M. S. M., responsável pelas apurações internas
                recebidas por meio do seu canal de Ouvidoria.
              </p>

              <p>
                O{" "}
                <span className={destaque}>
                  CIE/M. S. M.
                </span>{" "}
                pode ser contatado por seus canais de denúncias no link{" "}
                <Link
                  href="https://sgcompliance.net/sg/m-s-m-edificacoes-e-terraplanagem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkTexto} break-words`}
                >
                  sgcompliance.net/sg/m-s-m-edificacoes-e-terraplanagem
                </Link>{" "}
                e pelo e-mail da Ouvidoria{" "}
                <a href="mailto:msm@msmind.com.br" className={linkTexto}>
                  msm@msmind.com.br
                </a>
                .
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-3xl">
            <h3 className="text-2xl font-bold text-heading">
              Nossas Diretrizes e Documentos
            </h3>

            <p className="mt-3 font-serif text-lg leading-relaxed text-muted-strong">
              Para nós, a transparência é fundamental. Abaixo, você tem
              acesso aos principais documentos que norteiam a nossa conduta e
              fundamentam a nossa governança corporativa. Convidamos você a
              conhecer as nossas políticas.
            </p>
          </div>

          {/* Document disclosures as a ruled index (DNA: clear document links) */}
          <ul className="mt-10 grid gap-x-10 border-b border-border md:grid-cols-2">
            {documentosIntegridade.map((documento) => {
              const Icone = documento.icone;
              const externo = documento.href.startsWith("http");

              return (
                <li key={documento.titulo} className="border-t border-border">
                  <Link
                    href={documento.href}
                    target={externo ? "_blank" : undefined}
                    rel={externo ? "noopener noreferrer" : undefined}
                    className="group flex min-h-20 items-center gap-5 py-5 transition-colors"
                  >
                    <Icone
                      size={26}
                      strokeWidth={1.6}
                      aria-hidden="true"
                      className="shrink-0 text-brand"
                    />

                    <span className="min-w-0 flex-1">
                      <span className="block text-lg font-bold leading-snug text-heading transition-colors group-hover:text-brand">
                        {documento.titulo}
                      </span>
                      <span className="mt-0.5 block text-sm font-semibold text-brand">
                        Acessar
                        {externo ? <span className="sr-only"> (abre em nova aba)</span> : null}
                      </span>
                    </span>

                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-muted transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <CtaBanner
        className="pt-4"
        eyebrow="Integridade MSM"
        title="Compromisso com transparência, integridade e ética empresarial."
        description="O Programa de Integridade MSM reúne diretrizes, canais e documentos institucionais voltados ao fortalecimento das boas práticas corporativas e da responsabilidade nas relações empresariais."
      />
    </main>
  );
}
