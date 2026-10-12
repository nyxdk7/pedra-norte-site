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
    <main id="conteudo" className="min-h-screen bg-white text-foreground">
      <PageHero
        eyebrow="Programa de Integridade"
        title="Integridade MSM"
        description={
          <p>
            O Grupo{" "}
            <span className="font-semibold text-white">
              M. S. M. INDUSTRIAL
            </span>{" "}
            atua com foco em transparência, ética e integridade nas atividades
            desenvolvidas e realizadas, fortalecendo sua relação com
            colaboradores, parceiros, sociedade e Poder Público.
          </p>
        }
      >
        <div className="mt-12 max-w-3xl border-l-2 border-accent pl-6">
          <p className="text-sm font-semibold text-on-dark-muted">
            Compromisso institucional
          </p>

          <h2 className="mt-2 text-2xl font-bold leading-tight md:text-3xl">
            Ética, transparência e responsabilidade nas relações.
          </h2>

          <p className="mt-3 leading-relaxed text-on-dark-muted">
            O Programa de Integridade Corporativa da MSM promove valores
            positivos no ambiente empresarial e orienta boas práticas no
            relacionamento com o Poder Público, parceiros e sociedade.
          </p>
        </div>
      </PageHero>

      <section aria-labelledby="compliance-titulo" className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Integridade Corporativa — Compliance</Eyebrow>

            <h2
              id="compliance-titulo"
              className="mt-4 text-[length:var(--type-h2)] font-bold leading-[1.06] text-heading"
            >
              Compliance - Integridade, ética empresarial.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-strong">
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

            <p className="mt-3 text-lg leading-relaxed text-muted-strong">
              Para nós, a transparência é fundamental. Abaixo, você tem
              acesso aos principais documentos que norteiam a nossa conduta e
              fundamentam a nossa governança corporativa. Convidamos você a
              conhecer as nossas políticas.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {documentosIntegridade.map((documento) => {
              const Icone = documento.icone;
              const externo = documento.href.startsWith("http");

              return (
                <li key={documento.titulo}>
                  <Link
                    href={documento.href}
                    target={externo ? "_blank" : undefined}
                    rel={externo ? "noopener noreferrer" : undefined}
                    className="group flex h-full items-center gap-4 rounded-card border border-border bg-white p-5 transition-colors hover:border-brand hover:bg-surface-subtle"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-control bg-brand text-white">
                      <Icone size={24} strokeWidth={1.8} aria-hidden="true" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold leading-snug text-heading">
                        {documento.titulo}
                      </span>
                      <span className="mt-0.5 block text-sm text-brand">
                        Acessar
                        {externo ? <span className="sr-only"> (abre em nova aba)</span> : null}
                      </span>
                    </span>

                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-brand"
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
        eyebrow="Integridade MSM"
        title="Compromisso com transparência, integridade e ética empresarial."
        description="O Programa de Integridade MSM reúne diretrizes, canais e documentos institucionais voltados ao fortalecimento das boas práticas corporativas e da responsabilidade nas relações empresariais."
      />
    </main>
  );
}
