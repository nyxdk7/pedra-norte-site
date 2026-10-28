"use client";

import { NossaHistoriaRedesign } from "@/components/NossaHistoriaRedesign";
import Image from "next/image";
import Link from "next/link";
import { MapaAtuacaoAcre } from "@/components/MapaAtuacaoAcre";
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

import { HomeHeroRedesign } from "@/components/HomeHeroRedesign";
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
    atuacao: "Minerais e agregados",
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
  {
    nome: "Comercial da Construção",
    imagem: "/images/parceiros/comercial-construcao.png",
    atuacao: "Materiais de construção",
    descricao:
      "Fornecedor de materiais de construção, complementando a rede de apoio comercial e operacional do grupo.",
  },
  {
    nome: "MW Materiais",
    imagem: "/images/parceiros/mw-materiais.png",
    atuacao: "Materiais de construção",
    descricao:
      "Fornecedor parceiro em materiais para construção, apoiando demandas de obras, manutenção e operação.",
  },
];


const outrosParceiros = [
  {
    nome: "Santa Maria",
    imagem: "/images/parceiros/santa-maria.png",
  },
];

const servicosPrincipais: Array<{
  titulo: string;
  descricao: string;
  detalhe: string;
  empresa: string;
  operacional: string;
  icone: LucideIcon;
}> = [
  {
    titulo: "Pavimentação asfáltica",
    descricao:
      "Execução de obras urbanas e rodoviárias com equipe técnica, frota operacional e suporte de usinagem.",
    detalhe: "Infraestrutura rodoviária",
    empresa: "MSM Industrial",
    operacional: "Obras urbanas e rodoviárias",
    icone: Route,
  },
  {
    titulo: "Concreto usinado",
    descricao:
      "Produção e fornecimento de concreto usinado para obras civis, industriais e estruturais.",
    detalhe: "Fornecimento técnico",
    empresa: "MSM Industrial",
    operacional: "Controle de produção e entrega",
    icone: Building2,
  },
  {
    titulo: "Britas e agregados",
    descricao:
      "Produção de agregados minerais para pavimentação, drenagem, construção civil e infraestrutura.",
    detalhe: "Produção própria",
    empresa: "Pedra Norte",
    operacional: "Insumos para grandes obras",
    icone: Mountain,
  },
  {
    titulo: "Usinagem de asfalto",
    descricao:
      "Produção de massa asfáltica para aplicação em obras públicas, privadas, urbanas e rodoviárias.",
    detalhe: "Produção industrial",
    empresa: "MSM Industrial",
    operacional: "Apoio direto à pavimentação",
    icone: Factory,
  },
  {
    titulo: "Pré-moldados",
    descricao:
      "Soluções em peças pré-moldadas de concreto para drenagem, urbanização e infraestrutura.",
    detalhe: "Peças de concreto",
    empresa: "Pré Molde",
    operacional: "Drenagem e urbanização",
    icone: Hammer,
  },
  {
    titulo: "Locação de máquinas",
    descricao:
      "Disponibilização de máquinas e equipamentos pesados para apoio operacional em obras de diferentes portes.",
    detalhe: "Frota pesada",
    empresa: "Tratorron",
    operacional: "Máquinas para operação em campo",
    icone: Truck,
  },
];

const galeriaImagens = [
  { id: 1, imagem: "/images/galeria/home.png" },
  { id: 2, imagem: "/images/galeria/home2.png" },
  { id: 3, imagem: "/images/galeria/home3.png" },
  { id: 4, imagem: "/images/galeria/home4.png" },
  { id: 5, imagem: "/images/galeria/home5.png" },
  { id: 6, imagem: "/images/galeria/home6.png" },
  { id: 7, imagem: "/images/galeria/home7.png" },
  { id: 8, imagem: "/images/galeria/home8.png" },
  { id: 9, imagem: "/images/galeria/home9.png" },
  { id: 10, imagem: "/images/galeria/home10.png" },
  { id: 11, imagem: "/images/galeria/home11.jpeg" },
  { id: 12, imagem: "/images/galeria/home12.jpeg" },
  { id: 13, imagem: "/images/galeria/home13.jpeg" },
  { id: 14, imagem: "/images/galeria/home14.jpeg" },
  { id: 15, imagem: "/images/galeria/operacao-1.png" },
  { id: 16, imagem: "/images/galeria/operacao-2.png" },
  { id: 17, imagem: "/images/galeria/operacao-3.png" },
  { id: 18, imagem: "/images/galeria/operacao-4.png" },
  { id: 19, imagem: "/images/galeria/operacao-5.png" },
  { id: 20, imagem: "/images/galeria/operacao-6.png" },
  { id: 21, imagem: "/images/galeria/operacao-7.png" },
  { id: 22, imagem: "/images/galeria/operacao-8.png" },
  { id: 23, imagem: "/images/galeria/operacao-9.png" },
  { id: 24, imagem: "/images/galeria/operacao-10.png" },
  { id: 25, imagem: "/images/galeria/operacao-11.png" },
  { id: 26, imagem: "/images/galeria/operacao-12.png" },
  { id: 27, imagem: "/images/galeria/operacao-13.png" },
  { id: 28, imagem: "/images/galeria/operacao-14.png" },
  { id: 29, imagem: "/images/galeria/operacao-15.png" },
  { id: 30, imagem: "/images/galeria/operacao-16.png" },
  { id: 31, imagem: "/images/galeria/operacao-17.png" },
  { id: 32, imagem: "/images/galeria/operacao-18.png" },
  { id: 33, imagem: "/images/galeria/operacao-19.png" },
  { id: 34, imagem: "/images/galeria/operacao-20.png" },
];

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


const empresasCarousel = [
  ...empresasGrupo,
  ...outrosParceiros.map((parceiro) => ({
    ...parceiro,
    atuacao: "Parceiro estratégico",
    descricao:
      "Parceiro comercial e operacional que complementa a rede de apoio e relacionamento do Grupo Soster.",
  })),
];




function EmpresasCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const empresasLoop = [
    ...empresasCarousel,
    ...empresasCarousel,
    ...empresasCarousel,
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Tres copias permitem rolagem automatica continua sem saltos visiveis.
    let larguraCiclo = 0;
    let posicaoExata = 0;
    let ultimoFrame = 0;
    let frameId = 0;

    function medir() {
      const cards = carousel!.querySelectorAll<HTMLElement>("[data-empresa-card]");
      if (cards.length <= empresasCarousel.length) return;

      const novaLargura =
        cards[empresasCarousel.length].offsetLeft - cards[0].offsetLeft;
      if (novaLargura <= 0) return;

      if (larguraCiclo === 0) {
        posicaoExata = novaLargura;
      } else if (Math.abs(novaLargura - larguraCiclo) > 0.5) {
        const progresso = (posicaoExata - larguraCiclo) / larguraCiclo;
        posicaoExata = novaLargura * (1 + progresso);
      } else {
        return;
      }

      larguraCiclo = novaLargura;
      carousel!.scrollLeft = posicaoExata;
    }

    medir();
    const observador = new ResizeObserver(medir);
    observador.observe(carousel);
    const primeiroCard = carousel.querySelector<HTMLElement>("[data-empresa-card]");
    if (primeiroCard) observador.observe(primeiroCard);

    function animar(tempo: number) {
      const delta = ultimoFrame ? Math.min(tempo - ultimoFrame, 60) : 0;
      ultimoFrame = tempo;

      if (!larguraCiclo) medir();

      if (larguraCiclo && !document.hidden) {
        // Mantem os pixels fracionarios para uma passagem suave e ininterrupta.
        posicaoExata += (delta / 1000) * 55; // 55 px/segundo

        if (posicaoExata >= larguraCiclo * 2) {
          posicaoExata -= larguraCiclo;
        } else if (posicaoExata < larguraCiclo) {
          posicaoExata += larguraCiclo;
        }

        carousel!.scrollLeft = posicaoExata;
      }

      frameId = window.requestAnimationFrame(animar);
    }

    frameId = window.requestAnimationFrame(animar);
    return () => {
      window.cancelAnimationFrame(frameId);
      observador.disconnect();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20">
      <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-[#eaf0ff] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-[#f3f6ff] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-[#cbdcff] bg-white px-5 py-2 text-sm font-bold text-[#0b3b91] shadow-sm">
              Grupo Soster
            </span>

            <h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-[#050a1f] md:text-5xl">
              Empresas que fazem parte do grupo Soster.
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[#365074] md:text-lg">
              Um conjunto de empresas e parceiros integrados que fortalece a
              atuação do grupo em infraestrutura, pavimentação, mineração,
              construção civil, pré-moldados, máquinas e fornecimento de
              materiais.
            </p>
          </div>

        </div>

        <div className="relative mt-10">
          <div
            ref={carouselRef}
            aria-label="Empresas e parceiros do Grupo Soster em movimento automatico"
            className="pointer-events-none flex touch-pan-y gap-5 overflow-x-hidden pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {empresasLoop.map((empresa, index) => (
              <article
                key={empresa.nome + "-" + index}
                data-empresa-card
                className="group flex h-[315px] min-w-[280px] flex-col overflow-hidden rounded-[1.75rem] border border-[#dbe5ff] bg-white p-5 shadow-sm shadow-[#dbe5ff] transition duration-300 hover:-translate-y-1 hover:border-[#8fb1ff] hover:shadow-xl sm:min-w-[325px] lg:min-w-[350px]"
              >
                <div className="flex h-28 shrink-0 items-center justify-center rounded-[1.35rem] bg-[#f7faff] p-6">
                  <Image
                    src={empresa.imagem}
                    alt={"Logo " + empresa.nome}
                    width={235}
                    height={110}
                    quality={100}
                    className="max-h-20 w-auto object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex min-h-0 flex-1 flex-col pt-5">
                  <p
                    className="min-h-[16px] overflow-hidden text-[11px] font-extrabold uppercase leading-4 tracking-[0.2em] text-[#0b3b91]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {empresa.atuacao}
                  </p>

                  <h3
                    className="mt-3 min-h-[56px] overflow-hidden text-[22px] font-bold leading-7 text-[#050a1f]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {empresa.nome}
                  </h3>

                  <p
                    className="mt-2 overflow-hidden text-sm leading-6 text-[#50627f]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {empresa.descricao}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




function GaleriaOperacoes() {
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  const [visiveis, setVisiveis] = useState<boolean[]>(
    Array(galeriaSlots.length).fill(false)
  );

  const [imagensAtuais, setImagensAtuais] = useState(imagensIniciais);

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
                className={`object-cover object-center transition-all duration-700 ease-in-out group-hover:scale-110 ${
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
      <HomeHeroRedesign />


      {/* Nossa história */}
      <NossaHistoriaRedesign />

      {/* Mapa animado do corredor de atuação no Acre */}
      <MapaAtuacaoAcre />

      {/* Grupo Soster */}
      <EmpresasCarousel />








    </main>
  );
}
