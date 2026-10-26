"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useSyncExternalStore, type KeyboardEvent } from "react";
import { Container } from "@/components/ui/Section";
import {
  casosSucesso,
  empresasCarousel,
  servicosPrincipais,
  solucoesEcossistema,
  solucoesPorEmpresa,
} from "./data";

const consultaVertical = "(min-width: 1024px)";

function assinarVertical(aoMudar: () => void) {
  const media = window.matchMedia(consultaVertical);
  media.addEventListener("change", aoMudar);
  return () => media.removeEventListener("change", aoMudar);
}

function slug(texto: string) {
  return texto.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^a-zA-Z]+/g, "-").toLowerCase();
}

function descricaoDaSolucao(titulo: string) {
  return servicosPrincipais.find((item) => item.titulo === titulo)?.descricao;
}

/**
 * Ecosystem map on a light drawing surface: companies (tabs) → the selected company and
 * the solutions it delivers → Grupo Soster → success cases. Company–client pairs are not
 * documented, so cases connect to the group, never to a single company.
 */
export function MapaEcossistema() {
  const [ativa, setAtiva] = useState(0);
  const abasRef = useRef<Array<HTMLButtonElement | null>>([]);
  // The tab list is a column from 1024px and a horizontal scroller below.
  const vertical = useSyncExternalStore(
    assinarVertical,
    () => window.matchMedia(consultaVertical).matches,
    () => true,
  );

  function selecionar(indice: number) {
    setAtiva(indice);
    const aba = abasRef.current[indice];
    const lista = aba?.parentElement;
    if (aba && lista && lista.scrollWidth > lista.clientWidth) {
      const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      lista.scrollTo({ left: aba.offsetLeft - lista.offsetLeft - 16, behavior: reduzir ? "auto" : "smooth" });
    }
  }

  function navegar(evento: KeyboardEvent<HTMLButtonElement>, indice: number) {
    const total = empresasCarousel.length;
    const destino = {
      ArrowDown: (indice + 1) % total,
      ArrowRight: (indice + 1) % total,
      ArrowUp: (indice - 1 + total) % total,
      ArrowLeft: (indice - 1 + total) % total,
      Home: 0,
      End: total - 1,
    }[evento.key];

    if (destino === undefined) return;
    evento.preventDefault();
    selecionar(destino);
    abasRef.current[destino]?.focus({ preventScroll: true });
  }

  return (
    <section aria-labelledby="grupo-titulo" className="eco-prancha bg-brita-100 py-20 md:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              <span aria-hidden="true" className="h-px w-10 bg-accent" />
              Grupo Soster
            </p>
            <h2
              id="grupo-titulo"
              className="mt-5 text-[length:var(--type-h2)] font-semibold leading-[1.06] tracking-[-0.025em] text-heading"
            >
              Empresas que fazem parte do grupo Soster.
            </h2>
          </div>
          <p className="font-serif text-lg leading-relaxed text-muted-strong lg:col-span-5">
            Um conjunto de empresas e parceiros integrados que fortalece a
            atuação do grupo em infraestrutura, pavimentação, mineração,
            construção civil, pré-moldados, máquinas e fornecimento de
            materiais.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-12 lg:gap-0">
          {/* 1 · Companies */}
          <div className="lg:col-span-4 lg:pr-10">
            <p className="eco-etapa">Empresas</p>
            <div
              role="tablist"
              aria-label="Empresas do Grupo Soster"
              aria-orientation={vertical ? "vertical" : "horizontal"}
              className="mt-4 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0"
            >
              {empresasCarousel.map((empresa, indice) => {
                const selecionada = indice === ativa;

                return (
                  <button
                    key={empresa.nome}
                    ref={(elemento) => {
                      abasRef.current[indice] = elemento;
                    }}
                    type="button"
                    role="tab"
                    id={`aba-${slug(empresa.nome)}`}
                    aria-selected={selecionada}
                    aria-controls={`painel-${slug(empresa.nome)}`}
                    tabIndex={selecionada ? 0 : -1}
                    onClick={() => selecionar(indice)}
                    onKeyDown={(evento) => navegar(evento, indice)}
                    className={`eco-aba relative flex min-h-14 shrink-0 items-center gap-3 rounded-xl border px-3 py-2 text-left transition-colors duration-200 ${
                      selecionada
                        ? "border-brand bg-white shadow-brand-soft"
                        : "border-transparent hover:border-border-strong hover:bg-white/60"
                    }`}
                    data-ativa={selecionada || undefined}
                  >
                    <span className="relative h-9 w-14 shrink-0">
                      <Image src={empresa.imagem} alt="" fill sizes="56px" className="object-contain" />
                    </span>
                    <span className="min-w-0">
                      <span className="block whitespace-nowrap text-sm font-bold text-heading">{empresa.nome}</span>
                      <span className="block whitespace-nowrap text-xs font-semibold text-muted-strong">{empresa.atuacao}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2 · Selected company and its solutions */}
          <div className="eco-coluna-meio lg:col-span-5 lg:px-10">
            <p className="eco-etapa">Soluções</p>
            {empresasCarousel.map((empresa, indice) => {
              const solucoes = solucoesEcossistema.filter((solucao) =>
                (solucoesPorEmpresa[empresa.nome] ?? []).includes(solucao.id)
              );

              return (
                <div
                  key={empresa.nome}
                  role="tabpanel"
                  id={`painel-${slug(empresa.nome)}`}
                  aria-labelledby={`aba-${slug(empresa.nome)}`}
                  hidden={indice !== ativa}
                  tabIndex={0}
                  className="eco-painel mt-4 rounded-2xl border border-border bg-white p-6 md:p-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="relative h-14 w-24 shrink-0">
                      <Image src={empresa.imagem} alt={`Logo ${empresa.nome}`} fill sizes="96px" className="object-contain object-left" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-brand">{empresa.atuacao}</p>
                      <h3 className="text-xl font-bold leading-tight text-heading">{empresa.nome}</h3>
                    </div>
                  </div>
                  <p className="mt-4 font-serif text-[0.9375rem] leading-relaxed text-muted-strong">{empresa.descricao}</p>

                  {solucoes.length ? (
                  <ul className="mt-6 divide-y divide-border border-t border-border">
                    {solucoes.map((solucao) => {
                      const descricao = descricaoDaSolucao(solucao.titulo);

                      return (
                        <li key={solucao.id} className="py-4">
                          {solucao.href ? (
                            <Link
                              href={solucao.href}
                              className="group inline-flex items-center gap-2 text-[0.9375rem] font-bold text-heading hover:text-brand"
                            >
                              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                              {solucao.titulo}
                              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                            </Link>
                          ) : (
                            <p className="inline-flex items-center gap-2 text-[0.9375rem] font-bold text-heading">
                              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                              {solucao.titulo}
                            </p>
                          )}
                          {descricao ? (
                            <p className="mt-1.5 pl-3.5 text-sm leading-relaxed text-muted-strong">{descricao}</p>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                  ) : null}
                </div>
              );
            })}
          </div>

          {/* 3 · Group hub → success cases */}
          <div className="lg:col-span-3 lg:pl-10">
            <p className="eco-etapa">Casos de sucesso</p>
            <div className="eco-hub mt-4 rounded-2xl bg-ink p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/85">Projetos e fornecimentos para</p>
              <p className="mt-1 text-lg font-bold">Órgãos e instituições</p>
            </div>
            <ul className="eco-casos relative mt-3 space-y-2 pl-6">
              {casosSucesso.map((caso) => (
                <li key={caso.nome} className="eco-caso relative flex items-center gap-3 rounded-xl border border-border bg-white px-3 py-2">
                  <span className="relative h-9 w-12 shrink-0">
                    <Image src={caso.imagem} alt="" fill sizes="48px" className="object-contain" />
                  </span>
                  <span className="text-sm font-semibold text-heading">{caso.nome}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/obras"
              className="group mt-5 inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-semibold text-brand"
            >
              Ver obras e projetos
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

      </Container>
    </section>
  );
}
