"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Truck } from "lucide-react";

export default function EstruturaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 px-6 pb-20 pt-36 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/home/grupo-estrutura.png"
            alt="Estrutura operacional do Grupo Soster"
            fill
            priority
            quality={100}
            className="object-cover opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-[#143987]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              Estrutura operacional
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Capacidade própria para produzir, transportar, manter e executar.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              A estrutura do grupo conecta frota, máquinas, produção de
              materiais, manutenção, logística, canteiros e abastecimento para
              sustentar obras e operações de diferentes portes.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#143987] shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-[#eaf0ff]"
              >
                Solicitar orçamento
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/atuacoes"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                Ver atuações
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {[
              "Frota de transporte",
              "Máquinas pesadas",
              "Produção de asfalto",
              "Pedreira e agregados",
              "Concreto",
              "Oficina",
              "Borracharia",
              "Canteiros",
              "Abastecimento",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#eaf0ff,transparent_34%),radial-gradient(circle_at_bottom_right,#f8fbff,transparent_35%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="rounded-full border border-[#dbe5ff] bg-[#eaf0ff] px-4 py-2 text-sm font-semibold text-[#143987]">
                Capacidade do grupo
              </span>

              <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Frota de rodotrens preparada para grandes operações logísticas.
              </h2>
            </div>

            <p className="text-lg leading-8 text-slate-600">
              A frota de transporte é uma das bases da operação do grupo,
              garantindo mobilidade para materiais, agregados, insumos e apoio
              direto às frentes de obra.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#dbe5ff] bg-white shadow-xl shadow-[#dbe5ff]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[420px] overflow-hidden bg-slate-950 lg:min-h-[640px]">
                <Image
                  src="/images/estrutura/rodotrens.png"
                  alt="Frota de rodotrens da empresa"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute inset-0 bg-[#143987]/10" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                    Frota pesada
                  </span>

                  <h3 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">
                    37 rodotrens para transporte e apoio às operações.
                  </h3>
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 md:p-10">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wide text-[#143987]">
                      Logística e transporte
                    </span>

                    <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                      Capacidade de transporte para materiais, insumos e suporte
                      operacional.
                    </h3>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#143987] text-white shadow-lg shadow-[#143987]/20">
                    <Truck size={28} strokeWidth={2.2} />
                  </div>
                </div>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Com uma frota composta por 37 rodotrens, a empresa possui
                  capacidade para atender o transporte de materiais em grande
                  volume, apoiando obras, pedreira, produção de insumos,
                  logística entre canteiros e abastecimento das frentes de
                  serviço.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Essa estrutura fortalece a autonomia operacional do grupo,
                  permitindo maior controle sobre o deslocamento de agregados,
                  materiais de produção, equipamentos e recursos necessários
                  para manter as operações em andamento.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contato"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#143987] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#143987]/20 transition hover:-translate-y-0.5 hover:bg-[#0f2c6a]"
                  >
                    Falar sobre logística
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/atuacoes"
                    className="inline-flex items-center justify-center rounded-xl border border-[#dbe5ff] bg-white px-6 py-3 text-sm font-bold text-[#143987] transition hover:-translate-y-0.5 hover:bg-[#eaf0ff]"
                  >
                    Ver atuações
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-dashed border-[#b9caff] bg-[#f8fbff] p-6 text-center">
            <p className="text-sm font-semibold text-slate-600">
              Próxima estrutura a detalhar: máquinas pesadas, produção de
              asfalto, pedreira, concreto, oficina, borracharia, canteiros ou
              pontos de abastecimento.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}