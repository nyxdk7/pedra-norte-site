import { ArrowDown, ArrowUpRight, Download, FileText, Mail, Network, ShieldCheck } from "lucide-react";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Section";
import { ORGANOGRAMA_PDF, Organograma } from "@/components/integridade/Organograma";

const CANAL = "https://sgcompliance.net/sg/m-s-m-edificacoes-e-terraplanagem/";
const CANAL_VISIVEL = "sgcompliance.net/sg/m-s-m-edificacoes-e-terraplanagem";
const OUVIDORIA = "msm@msmind.com.br";

/** The route a report travels, as the programme itself describes it. Nothing here is
 *  promised that the company has not already put in writing. */
const etapas = [
  {
    nome: "Relato",
    texto: "Você registra a manifestação na plataforma do canal ou pelo e-mail da Ouvidoria.",
  },
  {
    nome: "Recebimento",
    texto:
      "O relato chega ao Comitê de Integridade e Ética (CIE) do Grupo M. S. M., pelo canal de Ouvidoria.",
  },
  {
    nome: "Apuração",
    texto: "O CIE conduz a apuração interna do que foi relatado.",
  },
];

type Acao = { rotulo: string; href: string; externo?: boolean; baixar?: boolean };

/** The programme's three pieces, each with what it is and where it opens. */
const documentos: Array<{
  titulo: string;
  tipo: string;
  detalhe: string;
  icone: typeof FileText;
  acoes: Acao[];
}> = [
  {
    titulo: "Código de Conduta e Ética",
    tipo: "Documento institucional",
    detalhe: "Princípios e regras de conduta do grupo, em 14 páginas.",
    icone: FileText,
    acoes: [{ rotulo: "Ler o documento", href: "/integridade/codigo-de-etica" }],
  },
  {
    titulo: "Canal de Integridade",
    tipo: "Plataforma externa",
    detalhe: "Relatos, dúvidas e manifestações com segurança e confidencialidade.",
    icone: ShieldCheck,
    acoes: [{ rotulo: "Abrir o canal", href: CANAL, externo: true }],
  },
  {
    titulo: "Estrutura Organizacional",
    tipo: "Organograma",
    detalhe: "Diretorias, gerências e setores do grupo, com os responsáveis por cada um.",
    icone: Network,
    acoes: [
      { rotulo: "Ver organograma", href: "#estrutura-organizacional" },
      { rotulo: "Baixar PDF", href: ORGANOGRAMA_PDF, baixar: true },
    ],
  },
];

export default function IntegridadePage() {
  return (
    <main id="conteudo" className="min-h-screen bg-background text-foreground">
      {/* Opening: dark like the rest of the site, textured with the project's own line-art */}
      <section aria-labelledby="integridade-titulo" className="on-dark integ-abertura">
        <Container className="pb-16 pt-[calc(var(--header-h)+3.5rem)] md:pb-24 md:pt-[calc(var(--header-h)+5rem)]">
          <p className="hero-marcador animate-fade-up flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            <span aria-hidden="true" className="h-px w-10 bg-white/70" />
            Programa de Integridade
          </p>

          <h1 id="integridade-titulo" className="hero-title animate-fade-up anim-delay-1 mt-6 text-white">
            Integridade MSM
          </h1>

          <p className="animate-fade-up anim-delay-1 mt-6 max-w-[42rem] font-serif text-[length:var(--type-lead)] leading-[1.55] text-on-dark-muted">
            O Grupo <span className="font-semibold text-white">M. S. M. INDUSTRIAL</span> atua
            com foco em transparência, ética e integridade nas atividades desenvolvidas e
            realizadas, fortalecendo sua relação com colaboradores, parceiros, sociedade e
            Poder Público.
          </p>

          <div className="animate-fade-up anim-delay-2 mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={CANAL} variant="signal" size="lg">
              Registrar um relato
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/integridade/codigo-de-etica" variant="glass" size="lg">
              Ler o Código de Conduta
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* The programme, and who answers for it */}
      <section aria-labelledby="programa-titulo" className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-16">
            <div className="max-w-[44rem]">
              <Eyebrow>Integridade corporativa — Compliance</Eyebrow>

              <h2
                id="programa-titulo"
                className="mt-4 text-[length:var(--type-h2)] font-bold leading-[1.06] text-heading"
              >
                Ética, transparência e responsabilidade nas relações.
              </h2>

              <div className="mt-6 space-y-5 font-serif text-lg leading-relaxed text-muted-strong">
                <p>
                  No Grupo{" "}
                  <span className="font-semibold text-brand">M. S. M. INDUSTRIAL</span>,
                  acreditamos que o sucesso sustentável só é possível quando construído sobre
                  uma base sólida de ética, transparência e conformidade. Nosso compromisso com
                  a integridade vai além do cumprimento de leis e regulamentos, refletindo a
                  nossa cultura e a forma como nos relacionamos com colaboradores, clientes,
                  parceiros, Poderes Públicos e com toda a sociedade.
                </p>

                <p>
                  O nosso <span className="font-semibold text-brand">Programa de Integridade</span>{" "}
                  é o conjunto de mecanismos e diretrizes que guiam as decisões diárias,
                  garantindo um ambiente de trabalho seguro, justo e alinhado aos padrões éticos
                  do mercado.
                </p>
              </div>
            </div>

            {/* Governance: two names, each with what it answers for */}
            <aside className="h-fit rounded-panel border border-border border-t-2 border-t-accent bg-white p-6 shadow-brand-soft md:p-7">
              <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-brand">
                Quem conduz o programa
              </h3>

              <dl className="mt-5 space-y-5">
                <div>
                  <dt className="font-bold text-heading">Compliance Officer</dt>
                  <dd className="mt-1 text-[0.9375rem] leading-relaxed text-muted-strong">
                    Administra o programa de Compliance do Grupo M. S. M.
                  </dd>
                </div>

                <div className="border-t border-border pt-5">
                  <dt className="font-bold text-heading">
                    Comitê de Integridade e Ética (CIE)
                  </dt>
                  <dd className="mt-1 text-[0.9375rem] leading-relaxed text-muted-strong">
                    Responsável pelas apurações internas dos relatos recebidos por meio do canal
                    de Ouvidoria.
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </section>

      {/* The channel: the one action this page exists for, beside the route a report takes */}
      <section aria-labelledby="canal-titulo" className="pb-16 md:pb-24">
        <Container>
          <div className="on-dark relative isolate overflow-hidden rounded-panel bg-[linear-gradient(150deg,var(--blue-800)_0%,var(--ink-950)_78%)] px-6 py-10 md:px-12 md:py-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <Eyebrow onDark>Canal de Integridade</Eyebrow>

                <h2
                  id="canal-titulo"
                  className="mt-4 text-[length:var(--type-h2)] font-bold leading-[1.06] text-white"
                >
                  Relate com segurança e confidencialidade.
                </h2>

                <p className="mt-4 max-w-[34rem] font-serif text-lg leading-relaxed text-blue-100">
                  Canal seguro e confidencial para o envio de relatos, dúvidas e manifestações
                  relacionadas à ética e à integridade.
                </p>

                <ul className="mt-8 grid gap-3">
                  <li>
                    <a
                      href={CANAL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="integ-canal-link group"
                    >
                      <ShieldCheck
                        className="h-6 w-6 shrink-0 text-accent"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                      <span className="min-w-0 flex-1">
                        <strong>Plataforma do canal</strong>
                        <span className="endereco">{CANAL_VISIVEL}</span>
                      </span>
                      <ArrowUpRight
                        className="h-5 w-5 shrink-0 text-blue-100 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                      <span className="sr-only">(abre em nova aba)</span>
                    </a>
                  </li>

                  <li>
                    <a href={`mailto:${OUVIDORIA}`} className="integ-canal-link group">
                      <Mail
                        className="h-6 w-6 shrink-0 text-accent"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                      <span className="min-w-0 flex-1">
                        <strong>E-mail da Ouvidoria</strong>
                        <span className="endereco">{OUVIDORIA}</span>
                      </span>
                      <ArrowUpRight
                        className="h-5 w-5 shrink-0 text-blue-100 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-blue-100">
                  O caminho de um relato
                </h3>

                <ol className="integ-fluxo mt-5">
                  {etapas.map((etapa) => (
                    <li key={etapa.nome}>
                      <dl>
                        <dt>{etapa.nome}</dt>
                        <dd>{etapa.texto}</dd>
                      </dl>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Documents that open */}
      <section aria-labelledby="documentos-titulo" className="pb-16 md:pb-24">
        <Container>
          <div className="max-w-[44rem]">
            <Eyebrow>Transparência</Eyebrow>
            <h2
              id="documentos-titulo"
              className="mt-4 text-[length:var(--type-h2)] font-bold leading-[1.06] text-heading"
            >
              Diretrizes e documentos
            </h2>
            <p className="mt-5 font-serif text-lg leading-relaxed text-muted-strong">
              Para nós, a transparência é fundamental. Abaixo estão os documentos que norteiam
              a nossa conduta e fundamentam a governança corporativa do grupo.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
            {documentos.map((documento) => {
              const Icone = documento.icone;

              return (
                <li
                  key={documento.titulo}
                  className="flex flex-col rounded-panel border border-border border-t-2 border-t-brand bg-white p-6 md:p-7"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
                    <Icone size={24} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-sm font-semibold text-muted">{documento.tipo}</p>
                  <h3 className="mt-1 text-xl font-bold leading-snug text-heading">{documento.titulo}</h3>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-muted-strong">
                    {documento.detalhe}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 border-t border-border pt-4">
                    {documento.acoes.map((acao) => (
                      <a
                        key={acao.rotulo}
                        href={acao.href}
                        target={acao.externo ? "_blank" : undefined}
                        rel={acao.externo ? "noopener noreferrer" : undefined}
                        download={acao.baixar ? "Organograma - MSM Industrial.pdf" : undefined}
                        className="group inline-flex min-h-11 items-center gap-1.5 text-[0.9375rem] font-semibold text-brand hover:text-brand-hover"
                      >
                        {acao.rotulo}
                        {acao.baixar ? (
                          <Download className="h-4 w-4" aria-hidden="true" />
                        ) : acao.href.startsWith("#") ? (
                          <ArrowDown className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <ArrowUpRight
                            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        )}
                        {acao.externo ? <span className="sr-only">(abre em nova aba)</span> : null}
                      </a>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <Organograma />

      <CtaBanner
        eyebrow="Integridade MSM"
        title="Compromisso com transparência, integridade e ética empresarial."
        description="O Programa de Integridade MSM reúne diretrizes, canais e documentos institucionais voltados ao fortalecimento das boas práticas corporativas e da responsabilidade nas relações empresariais."
        actions={
          <ButtonLink href={CANAL} variant="light" size="lg">
            Acessar o canal
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        }
      />
    </main>
  );
}
