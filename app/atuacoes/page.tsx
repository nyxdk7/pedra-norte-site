import type { Metadata } from "next";
import Image from "next/image";
import { GaleriaAtuacoes } from "@/components/GaleriaAtuacoes";

export const metadata: Metadata = {
  title: "Áreas de atuação | MSM Industrial | Pedra Norte",
  description:
    "Conheça as áreas de atuação da MSM Industrial e Pedra Norte, com destaque para pavimentação asfáltica, concreto usinado e edificações.",
};

const frentes = [

  {
    id: "pavimentacao-asfaltica",
    titulo: "Pavimentação asfáltica",
    descricao:
      "A pavimentação asfáltica reúne planejamento, equipamentos e equipes especializadas para a implantação, recuperação e melhoria de vias urbanas e rodoviárias. Com estrutura operacional e suporte em campo, o grupo atua nas diferentes etapas da execução, da preparação da base à aplicação e ao acabamento do revestimento asfáltico.",
    fotos: [
      "/images/atuacoes/pavimentacao/pavimentacao-1.jpg",
      "/images/atuacoes/pavimentacao/pavimentacao-2.jpg",
      "/images/atuacoes/pavimentacao/pavimentacao-3.jpg",
    ],
  },
  {
    id: "concreto-usinado-edificacoes",
    titulo: "Concreto usinado / edificações",
    descricao:
      "O fornecimento de concreto usinado e o apoio a edificações unem central produtiva, logística própria e acompanhamento técnico para atender obras com agilidade, controle de qualidade e eficiência na entrega. A atuação contempla desde o abastecimento em campo até aplicações estruturais, fundações e serviços construtivos que exigem regularidade no traço, produtividade e confiabilidade operacional.",
    fotos: [
      "/images/atuacoes/concreto-usinado/concreto-1.jpg",
      "/images/atuacoes/concreto-usinado/concreto-2.jpg",
      "/images/atuacoes/concreto-usinado/concreto-3.jpg",
    ],
  },
];

export default function AtuacoesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section
        aria-label="Introdução às áreas de atuação"
        className="relative isolate overflow-hidden bg-slate-950 px-5 pb-14 pt-32 text-white sm:px-8 md:pb-16 md:pt-36"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/atuacoes/pavimentacao/pavimentacao.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-[#143987]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Da mineração à construção, soluções que impulsionam o desenvolvimento
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            O Grupo Soster reúne frentes de atuação em pavimentação, extração
            de minérios, pré-moldados e edificações, conectando estrutura
            própria, experiência operacional e execução em campo.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8 md:pb-24 md:pt-12">
        {frentes.map((frente) => (
          <section
            key={frente.id}
            id={frente.id}
            aria-labelledby={`${frente.id}-titulo`}
            className="scroll-mt-32 mb-14 border-b border-slate-200 pb-14 last:mb-0 last:border-b-0 last:pb-0 md:mb-20 md:last:mb-0 md:pb-20"
          >
            <div className="max-w-4xl">
              <h2
                id={`${frente.id}-titulo`}
                className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-[2.5rem]"
              >
                {frente.titulo}
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 md:text-[17px] md:leading-8">
                {frente.descricao}
              </p>
            </div>

            <div className="mt-10">
              <GaleriaAtuacoes fotos={frente.fotos} titulo={frente.titulo} />
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
