import { Download, Eye } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Section";

export const ORGANOGRAMA_PDF = "/documentos/organograma-msm-industrial.pdf";

/**
 * The organisational chart, transcribed from the company's own PDF (which stays the
 * official document, offered to read and to download). Units hang from the directorate on
 * whose side of the chart they sit; spelling follows the norm ("Assessoria", "Gerência").
 *
 * On wide screens the top of the tree is drawn as a chart: partners, the compliance
 * officer beside them, a bus down to the two directorates. Below that, and on phones
 * throughout, each directorate reads as an indented list with its connectors.
 */

type Unidade = {
  area: string;
  responsavel?: string;
  setores?: Unidade[];
};

type Diretoria = {
  nome: string;
  responsavel: string;
  unidades: Unidade[];
};

const DIRETORIAS: Diretoria[] = [
  {
    nome: "Diretoria Comercial e de Engenharia",
    responsavel: "Jarbas Soster",
    unidades: [
      { area: "Gerência de Vendas", responsavel: "Antonia da Silva" },
      {
        area: "Gerência de Transporte e Logística",
        responsavel: "Ingrid Karolayne",
        setores: [{ area: "Setor de Mecânica", responsavel: "Leandro Brito" }],
      },
      { area: "Gerência de Compras", responsavel: "Mayke Brito" },
      {
        area: "Gerência de Licitações e Gerenciamento de Contratos",
        responsavel: "Maria Liberdade",
        setores: [{ area: "Licitações", responsavel: "Marcio Almeida" }],
      },
      {
        area: "Produção — Gerência de Engenharia",
        responsavel: "Ivan Lima",
        setores: [
          { area: "Laboratório de Concreto", responsavel: "Giomar Maranguape" },
          {
            area: "Obras e Execução",
            responsavel: "Victor Moreira",
            setores: [{ area: "Setor de Apropriação", responsavel: "Cristiano Sousa" }],
          },
          { area: "Setor de Produção de Betuminosos", responsavel: "Edinaldo" },
        ],
      },
    ],
  },
  {
    nome: "Diretoria Administrativa",
    responsavel: "Leocardio Soster",
    unidades: [
      {
        area: "Contabilidade e Controle Interno",
        setores: [{ area: "Almoxarifado", responsavel: "Daniel Queiroz" }],
      },
      { area: "Assessoria Jurídica", responsavel: "João Gabriel O. Galvão" },
      { area: "Departamento de Tecnologia da Informação", responsavel: "João Pedro" },
      {
        area: "Gerência de Recursos Humanos",
        responsavel: "Tiffany do Nascimento",
        setores: [
          {
            area: "Serviço Especializado em Engenharia de Segurança do Trabalho",
            responsavel: "Jessé e Robson",
          },
        ],
      },
      { area: "Gerência Financeira", responsavel: "Pâmela Martins" },
    ],
  },
];

function Ramo({ unidades, nivel }: { unidades: Unidade[]; nivel: number }) {
  return (
    <ul className={nivel === 0 ? "org-ramo" : "org-ramo org-ramo--setor"}>
      {unidades.map((unidade) => (
        <li key={unidade.area}>
          <div className={nivel === 0 ? "org-no" : "org-no org-no--setor"}>
            <p className="org-cargo">{unidade.area}</p>
            {unidade.responsavel ? <p className="org-nome">{unidade.responsavel}</p> : null}
          </div>
          {unidade.setores ? <Ramo unidades={unidade.setores} nivel={nivel + 1} /> : null}
        </li>
      ))}
    </ul>
  );
}

export function Organograma() {
  return (
    <section
      id="estrutura-organizacional"
      aria-labelledby="organograma-titulo"
      className="scroll-mt-[calc(var(--header-h)+1rem)] border-t border-border bg-white py-16 md:py-24"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow>Governança</Eyebrow>
            <h2
              id="organograma-titulo"
              className="mt-4 text-[length:var(--type-h2)] font-bold leading-[1.06] text-heading"
            >
              Estrutura organizacional
            </h2>
            <p className="mt-5 max-w-[40rem] font-serif text-lg leading-relaxed text-muted-strong">
              Como o grupo se organiza: a diretoria deliberativa, as duas diretorias executivas
              e as gerências e setores que respondem a cada uma.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <a
              href={ORGANOGRAMA_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border-strong bg-white px-6 text-[0.9375rem] font-semibold text-brand transition-colors hover:border-brand hover:bg-surface-subtle"
            >
              <Eye className="h-4 w-4" aria-hidden="true" />
              Visualizar PDF
              <span className="sr-only">(abre em nova aba)</span>
            </a>
            <a
              href={ORGANOGRAMA_PDF}
              download="Organograma - MSM Industrial.pdf"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Baixar PDF
              <span className="text-sm font-medium text-white/75">345 KB</span>
            </a>
          </div>
        </div>

        <div className="org">
          <div className="org-topo">
            <div className="org-no org-no--socios">
              <p className="org-cargo">Sócios administradores</p>
              <p className="org-sub">Diretoria deliberativa</p>
              <p className="org-nome">Belcadio Jarbas Soster</p>
              <p className="org-nome">Leocardio Luiz Soster</p>
            </div>
            <div className="org-no org-no--compliance">
              <p className="org-cargo">Compliance Officer</p>
              <p className="org-nome">Maria Liberdade</p>
            </div>
          </div>

          <div className="org-diretorias">
            {DIRETORIAS.map((diretoria) => (
              <div key={diretoria.nome} className="org-diretoria">
                <div className="org-no org-no--diretoria">
                  <p className="org-cargo">{diretoria.nome}</p>
                  <p className="org-nome">{diretoria.responsavel}</p>
                </div>
                <Ramo unidades={diretoria.unidades} nivel={0} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
