"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Factory,
  Hammer,
  LucideIcon,
  Mountain,
  Route,
  Truck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const empresasGrupo = [
  {
    nome: "MSM Industrial",
    imagem: "/images/grupo/msm-logo.png",
    atuacao: "Pavimentação",
    descricao:
      "Empresa principal do grupo, com atuação em pavimentação, obras rodoviárias, infraestrutura e usinagem de asfalto.",
  },
  {
    nome: "Pedra Norte",
    imagem: "/images/grupo/pedra-norte-logo.png",
    atuacao: "Agregados",
    descricao:
      "Pedreira responsável pela produção e fornecimento de agregados minerais para obras e infraestrutura.",
  },
  {
    nome: "Construtora Santa Maria",
    imagem: "/images/grupo/construtora-santamaria.png",
    atuacao: "Construção civil",
    descricao:
      "Construtora voltada à execução de obras civis, projetos estruturais e soluções construtivas.",
  },
  {
    nome: "Auto Posto Correntão",
    imagem: "/images/grupo/correntao-logo.png",
    atuacao: "Apoio operacional",
    descricao:
      "Marca integrada ao grupo, contribuindo com suporte operacional, logística e estrutura de apoio.",
  },
  {
    nome: "Pré Molde",
    imagem: "/images/grupo/pre-molde-logo.png",
    atuacao: "Pré-moldados",
    descricao:
      "Produção de peças pré-moldadas de cimento para obras, drenagem, urbanização e infraestrutura.",
  },
  {
    nome: "Tratorron",
    imagem: "/images/grupo/tratorron-logo.png",
    atuacao: "Máquinas",
    descricao:
      "Locação de máquinas e equipamentos pesados para apoio operacional em obras de grande porte.",
  },
];

const outrosParceiros = [
  {
    nome: "Comercial da Construção",
    imagem: "/images/parceiros/comercial-construcao.png",
  },
  {
    nome: "MW Materiais",
    imagem: "/images/parceiros/mw-materiais.png",
  },
  {
    nome: "Santa Maria",
    imagem: "/images/parceiros/santa-maria.png",
  },
];

const estruturaCards = [
  "Produção própria de insumos",
  "Máquinas e equipamentos",
  "Equipe operacional",
  "Experiência em infraestrutura",
];

const servicosPrincipais: Array<{
  titulo: string;
  descricao: string;
  detalhe: string;
  icone: LucideIcon;
}> = [
  {
    titulo: "Pavimentação asfáltica",
    descricao:
      "Execução de obras de pavimentação com estrutura operacional, equipe técnica e suporte de máquinas.",
    detalhe: "Infraestrutura rodoviária",
    icone: Route,
  },
  {
    titulo: "Concreto usinado",
    descricao:
      "Produção e fornecimento de concreto usinado para obras civis, industriais e estruturais.",
    detalhe: "Fornecimento técnico",
    icone: Building2,
  },
  {
    titulo: "Britas e agregados",
    descricao:
      "Produção de agregados minerais para obras, pavimentação, drenagem e construção civil.",
    detalhe: "Pedra Norte",
    icone: Mountain,
  },
  {
    titulo: "Usinagem de asfalto",
    descricao:
      "Produção de massa asfáltica para aplicação em obras urbanas, rodoviárias e industriais.",
    detalhe: "Produção própria",
    icone: Factory,
  },
  {
    titulo: "Pré-moldados",
    descricao:
      "Soluções em peças pré-moldadas de concreto para drenagem, urbanização e infraestrutura.",
    detalhe: "Peças de concreto",
    icone: Hammer,
  },
  {
    titulo: "Locação de máquinas",
    descricao:
      "Disponibilização de máquinas e equipamentos pesados para apoio em obras e operações.",
    detalhe: "Frota operacional",
    icone: Truck,
  },
];

const areasLicitacao = [
  "Pavimentação asfáltica",
  "Produção de agregados",
  "Locação de máquinas",
  "Pré-moldados de cimento",
  "Construção civil",
  "Apoio operacional",
];

const galeriaImagens = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  imagem: `/images/galeria/operacao-${i + 1}.png`,
}));

const galeriaSlots = [
  {
    titulo: "Operação em campo",
    descricao: "Máquinas e equipes atuando em obras de infraestrutura.",
    destaque: true,
  },
  {
    titulo: "Frota e logística",
    descricao: "Suporte operacional para transporte e execução.",
    destaque: false,
  },
  {
    titulo: "Estrutura pesada",
    descricao: "Equipamentos preparados para obras de grande porte.",
    destaque: false,
  },
  {
    titulo: "Execução rodoviária",
    descricao: "Atuação em infraestrutura e pavimentação.",
    destaque: true,
  },
  {
    titulo: "Produção e suporte",
    descricao: "Integração entre insumos, máquinas e operação.",
    destaque: false,
  },
  {
    titulo: "Presença regional",
    descricao: "Estrutura voltada ao desenvolvimento do Acre.",
    destaque: false,
  },
];

function embaralharArray<T>(array: T[]) {
  const novoArray = [...array];

  for (let i = novoArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [novoArray[i], novoArray[j]] = [novoArray[j], novoArray[i]];
  }

  return novoArray;
}

function imagensIniciais() {
  return galeriaImagens.slice(0, galeriaSlots.length);
}

function sortearImagens() {
  return embaralharArray(galeriaImagens).slice(0, galeriaSlots.length);
}

function escolherImagemUnica(
  imagensAtuais: typeof galeriaImagens,
  indexAtual: number
) {
  const imagensEmUso = new Set(
    imagensAtuais
      .filter((_, index) => index !== indexAtual)
      .map((imagem) => imagem.id)
  );

  const imagensDisponiveis = galeriaImagens.filter(
    (imagem) =>
      !imagensEmUso.has(imagem.id) &&
      imagem.id !== imagensAtuais[indexAtual]?.id
  );

  if (imagensDisponiveis.length === 0) {
    return galeriaImagens[Math.floor(Math.random() * galeriaImagens.length)];
  }

  return imagensDisponiveis[
    Math.floor(Math.random() * imagensDisponiveis.length)
  ];
}

function GaleriaOperacoes() {
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  const [visiveis, setVisiveis] = useState<boolean[]>(
    Array(galeriaSlots.length).fill(false)
  );

  const [imagensAtuais, setImagensAtuais] = useState(imagensIniciais());

  const [cardsTrocando, setCardsTrocando] = useState<boolean[]>(
    Array(galeriaSlots.length).fill(false)
  );

  useEffect(() => {
    setImagensAtuais(sortearImagens());
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));

          if (entry.isIntersecting) {
            setVisiveis((prev) => {
              const novo = [...prev];
              novo[index] = true;
              return novo;
            });
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timeouts: Array<ReturnType<typeof setTimeout>> = [];
    const intervals: Array<ReturnType<typeof setInterval>> = [];

    function trocarCard(index: number) {
      setCardsTrocando((prev) => {
        const novo = [...prev];
        novo[index] = true;
        return novo;
      });

      const timeoutTroca = setTimeout(() => {
        setImagensAtuais((prev) => {
          const novo = [...prev];
          novo[index] = escolherImagemUnica(prev, index);
          return novo;
        });

        setCardsTrocando((prev) => {
          const novo = [...prev];
          novo[index] = false;
          return novo;
        });
      }, 650);

      timeouts.push(timeoutTroca);
    }

    galeriaSlots.forEach((_, index) => {
      const atrasoInicial = 2500 + index * 1800;

      const timeoutInicial = setTimeout(() => {
        trocarCard(index);

        const intervalo = setInterval(() => {
          trocarCard(index);
        }, 14000 + index * 900);

        intervals.push(intervalo);
      }, atrasoInicial);

      timeouts.push(timeoutInicial);
    });

    return () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left,#eaf0ff,transparent_32%),radial-gradient(circle_at_right,#f8fbff,transparent_35%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="rounded-full border border-[#dbe5ff] bg-[#eaf0ff] px-4 py-2 text-sm font-semibold text-[#143987]">
            Operação em campo
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Frota, equipamentos e estrutura que movimentam grandes obras.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Uma amostra da operação do grupo em campo, reunindo máquinas,
            transporte, equipes e estrutura própria para atender obras de
            infraestrutura com eficiência.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[260px] gap-5 md:grid-cols-4">
          {galeriaSlots.map((foto, index) => (
            <div
              key={`${foto.titulo}-${index}`}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              data-index={index}
              className={`group relative overflow-hidden rounded-[2rem] border border-[#dbe5ff] bg-slate-900 shadow-sm shadow-[#dbe5ff] transition-all duration-700 ease-out ${
                foto.destaque ? "md:col-span-2 md:row-span-2" : "md:col-span-1"
              } ${
                visiveis[index]
                  ? "translate-y-0 opacity-100 blur-0"
                  : "translate-y-12 opacity-0 blur-sm"
              }`}
              style={{
                transitionDelay: `${index * 90}ms`,
              }}
            >
              <Image
                src={
                  imagensAtuais[index]?.imagem ||
                  "/images/galeria/operacao-1.png"
                }
                alt={foto.titulo}
                fill
                quality={100}
                sizes={
                  foto.destaque
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 100vw, 25vw"
                }
                className={`object-cover transition-all duration-700 ease-in-out group-hover:scale-110 ${
                  cardsTrocando[index]
                    ? "scale-105 opacity-35"
                    : "scale-100 opacity-100"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute inset-0 bg-[#143987]/0 transition duration-500 group-hover:bg-[#143987]/20" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="translate-y-2 transition duration-500 group-hover:translate-y-0">
                  <h3 className="text-xl font-bold">{foto.titulo}</h3>

                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-6 text-slate-200 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                    {foto.descricao}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative min-h-screen overflow-hidden pt-28">
        <Image
          src="/images/home/hero-obras-acre.png"
          alt="Obra de infraestrutura do Grupo Soster"
          fill
          priority
          quality={100}
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-[#143987]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-6 py-20">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              MSM Industrial / Pedra Norte
            </span>

            <h1 className="mt-6 max-w-5xl text-4xl font-bold tracking-tight text-white md:text-7xl">
              Engenharia, pavimentação, agregados e estrutura para grandes
              obras.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              O Grupo Soster reúne empresas especializadas em infraestrutura,
              pavimentação, mineração, concreto usinado, pré-moldados e locação
              de máquinas, com atuação integrada para obras públicas e privadas
              no Acre.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/sobre"
                className="rounded-xl bg-white px-6 py-3 font-bold text-[#143987] shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-[#eaf0ff]"
              >
                Conheça o grupo
              </Link>

              <Link
                href="/servicos"
                className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                Ver áreas de atuação
              </Link>
            </div>

            <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <strong className="block text-3xl font-bold text-white">
                  +40
                </strong>
                <span className="mt-1 block text-sm text-slate-200">
                  Anos de atuação
                </span>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <strong className="block text-3xl font-bold text-white">
                  6
                </strong>
                <span className="mt-1 block text-sm text-slate-200">
                  Empresas integradas
                </span>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <Image
                  src="/images/home/bandeira-acre.png"
                  alt="Bandeira do Acre"
                  fill
                  quality={100}
                  className="object-cover opacity-25"
                />

                <div className="absolute inset-0 bg-slate-950/25" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-slate-950/25 to-transparent" />

                <div className="relative z-10">
                  <strong className="block text-3xl font-bold text-white">
                    AC
                  </strong>
                  <span className="mt-1 block text-sm text-slate-100">
                    Forte atuação regional
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estrutura integrada */}
      <section className="relative overflow-hidden bg-white px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#eaf0ff,transparent_35%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="rounded-full border border-[#dbe5ff] bg-[#eaf0ff] px-4 py-2 text-sm font-semibold text-[#143987]">
              Estrutura integrada
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Uma cadeia operacional completa para atender obras públicas e
              privadas.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              O Grupo Soster atua de forma integrada, reunindo pedreira,
              usinagem, pavimentação, construção civil, pré-moldados e locação
              de máquinas. Essa estrutura permite maior controle, eficiência e
              capacidade operacional nas obras.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {estruturaCards.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#dbe5ff] bg-white p-6 shadow-sm shadow-[#dbe5ff] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#dbe5ff]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#143987] font-bold text-white">
                  ✓
                </span>

                <p className="mt-5 font-bold text-slate-900">{item}</p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Parte essencial da capacidade operacional do grupo para
                  atender obras de diferentes portes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços principais com ícones */}
      <section className="relative overflow-hidden bg-white px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#eaf0ff,transparent_34%),radial-gradient(circle_at_bottom_right,#f8fbff,transparent_35%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="rounded-full border border-[#dbe5ff] bg-[#eaf0ff] px-4 py-2 text-sm font-semibold text-[#143987]">
                Serviços principais
              </span>

              <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Soluções completas para infraestrutura, construção e operação em
                campo.
              </h2>
            </div>

            <p className="text-lg leading-8 text-slate-600">
              A MSM Industrial e a Pedra Norte atuam de forma integrada,
              reunindo produção de insumos, fornecimento técnico, frota
              operacional e execução de obras para atender demandas públicas e
              privadas.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {servicosPrincipais.map((servico, index) => {
              const Icone = servico.icone;

              return (
                <article
                  key={servico.titulo}
                  className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-[#dbe5ff] bg-white p-6 shadow-sm shadow-[#dbe5ff] transition duration-300 hover:-translate-y-1 hover:border-[#143987]/30 hover:bg-[#143987] hover:shadow-xl hover:shadow-[#dbe5ff]"
                >
                  <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#eaf0ff] transition duration-500 group-hover:bg-white/10" />
                  <div className="absolute bottom-0 right-0 translate-x-8 translate-y-8 text-[#eaf0ff] opacity-60 transition duration-500 group-hover:text-white/10 group-hover:opacity-100">
                    <Icone size={180} strokeWidth={1.2} />
                  </div>

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#143987] text-white shadow-lg shadow-[#143987]/20 transition duration-300 group-hover:bg-white group-hover:text-[#143987]">
                        <Icone size={28} strokeWidth={2.2} />
                      </div>

                      <span className="text-5xl font-black text-[#eaf0ff] transition duration-300 group-hover:text-white/15">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <span className="mt-8 inline-flex w-fit rounded-full bg-[#eaf0ff] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#143987] transition duration-300 group-hover:bg-white/15 group-hover:text-white">
                      {servico.detalhe}
                    </span>

                    <h3 className="mt-5 text-2xl font-bold text-slate-950 transition duration-300 group-hover:text-white">
                      {servico.titulo}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600 transition duration-300 group-hover:text-white/85">
                      {servico.descricao}
                    </p>

                    <div className="mt-auto pt-7">
                      <div className="h-1 w-14 rounded-full bg-[#143987] transition-all duration-300 group-hover:w-24 group-hover:bg-white" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 rounded-[2rem] border border-[#dbe5ff] bg-[#143987] p-8 text-white shadow-xl shadow-[#dbe5ff] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h3 className="text-2xl font-bold md:text-3xl">
                  Estrutura preparada para atender obras de diferentes portes.
                </h3>

                <p className="mt-3 max-w-3xl leading-7 text-white/85">
                  Do fornecimento de materiais à execução em campo, o grupo
                  conta com empresas, equipamentos e equipes que fortalecem a
                  capacidade operacional em infraestrutura.
                </p>
              </div>

              <Link
                href="/servicos"
                className="inline-flex justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#143987] shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-[#eaf0ff]"
              >
                Conhecer serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GaleriaOperacoes />

      {/* Grupo Soster */}
      <section className="bg-[#eaf0ff]/70 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full border border-[#dbe5ff] bg-white px-4 py-2 text-sm font-semibold text-[#143987]">
              Grupo Soster
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Empresas que fazem parte do grupo Soster.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
              Um conjunto de empresas integradas que fortalece a atuação do
              grupo em infraestrutura, pavimentação, mineração, construção
              civil, pré-moldados e máquinas.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {empresasGrupo.map((empresa) => (
              <article
                key={empresa.nome}
                className="group relative min-h-[210px] overflow-hidden rounded-3xl border border-[#dbe5ff] bg-white p-6 shadow-sm shadow-[#dbe5ff] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#dbe5ff]"
              >
                <div className="flex h-28 items-center justify-center rounded-2xl bg-slate-50 p-4 transition duration-300 group-hover:scale-95">
                  <Image
                    src={empresa.imagem}
                    alt={`Logo ${empresa.nome}`}
                    width={220}
                    height={90}
                    quality={100}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>

                <div className="mt-5 text-center">
                  <h3 className="text-xl font-bold text-slate-950">
                    {empresa.nome}
                  </h3>

                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-[#143987]">
                    {empresa.atuacao}
                  </p>
                </div>

                <div className="absolute inset-0 flex translate-y-full flex-col justify-end bg-gradient-to-t from-[#143987] via-[#143987]/95 to-[#143987]/80 p-6 text-white transition duration-500 group-hover:translate-y-0">
                  <span className="text-xs font-bold uppercase tracking-wide text-white/70">
                    Grupo Soster
                  </span>

                  <h3 className="mt-2 text-2xl font-bold">{empresa.nome}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/90">
                    {empresa.descricao}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 border-t border-[#dbe5ff] pt-10">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-wide text-[#143987]">
                Outros parceiros
              </span>

              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Parceiros comerciais e operacionais que complementam a rede de
                apoio e relacionamento do Grupo Soster.
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-3">
              {outrosParceiros.map((parceiro) => (
                <div
                  key={parceiro.nome}
                  className="flex h-36 items-center justify-center rounded-3xl border border-[#dbe5ff] bg-white/80 p-6 shadow-sm shadow-[#dbe5ff] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-[#dbe5ff]"
                >
                  <Image
                    src={parceiro.imagem}
                    alt={parceiro.nome}
                    width={230}
                    height={120}
                    quality={100}
                    className="max-h-24 w-auto object-contain opacity-85 transition duration-300 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operação em campo */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-[#dbe5ff] shadow-2xl shadow-[#dbe5ff]">
            <Image
              src="/images/home/grupo-estrutura.png"
              alt="Escavadeira carregando caminhão da Pedra Norte"
              fill
              quality={100}
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

            <div className="relative z-10 flex min-h-[560px] items-end px-6 py-8 md:items-center md:px-12 lg:px-16">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  Operação em campo
                </span>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
                  Da pedreira à execução, o grupo atua com estrutura própria em
                  cada etapa da obra.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-200">
                  A integração entre empresas do grupo fortalece a logística, o
                  fornecimento de insumos, o uso de equipamentos e a execução em
                  campo, garantindo mais controle e eficiência operacional.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {["Pedreira", "Máquinas", "Execução"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur"
                    >
                      <strong className="block text-lg font-bold">
                        {item}
                      </strong>

                      <span className="mt-1 block text-sm text-slate-200">
                        Estrutura integrada
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/obras"
                  className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-[#143987] shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-[#eaf0ff]"
                >
                  Ver obras e atuação
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacidade */}
      <section className="bg-white px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 rounded-3xl border border-[#dbe5ff] bg-slate-950 p-8 text-white shadow-2xl shadow-[#dbe5ff] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <div>
              <span className="text-sm font-bold uppercase tracking-wide text-[#8fb1ff]">
                Capacidade para licitações
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Estrutura para atender contratos públicos e grandes obras.
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                A atuação integrada do grupo fortalece a capacidade técnica,
                operacional e logística para participação em obras públicas,
                especialmente em infraestrutura rodoviária e pavimentação.
              </p>

              <Link
                href="/obras"
                className="mt-8 inline-flex rounded-xl bg-[#143987] px-6 py-3 font-bold text-white shadow-lg shadow-[#143987]/20 transition hover:-translate-y-0.5 hover:bg-[#0f2c6a]"
              >
                Ver obras e atuação
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {areasLicitacao.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5"
                >
                  <p className="font-bold text-white">{item}</p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Área estratégica dentro da estrutura operacional do grupo.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#143987] p-8 text-white shadow-2xl shadow-[#dbe5ff] md:p-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#8fb1ff]/20 blur-3xl" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-wide text-white/70">
                  Atendimento institucional
                </span>

                <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
                  Precisa de estrutura para sua obra?
                </h2>

                <p className="mt-4 max-w-3xl text-lg leading-8 text-white/85">
                  Fale com o Grupo Soster e conheça as soluções da MSM
                  Industrial, Pedra Norte e empresas integradas para
                  infraestrutura, fornecimento de materiais e execução em campo.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contato"
                  className="inline-flex justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#143987] shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-[#eaf0ff]"
                >
                  Fale conosco
                </Link>

                <Link
                  href="/servicos"
                  className="inline-flex justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
                >
                  Ver serviços
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}