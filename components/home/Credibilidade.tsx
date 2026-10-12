import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { casosSucesso, indicadoresGrupo } from "./data";

/** Credentials band directly under the hero: documented figures, then the institutions served. */
export function Credibilidade() {
  return (
    <section aria-labelledby="credibilidade-titulo" className="bg-background">
      <h2 id="credibilidade-titulo" className="sr-only">
        Trajetória e casos de sucesso
      </h2>

      <Container>
        <div className="grid border-b border-border lg:grid-cols-[minmax(0,3fr)_minmax(0,1.15fr)]">
          <dl className="grid md:grid-cols-3">
            {indicadoresGrupo.map((item) => (
              <div
                key={item.rotulo}
                className="flex items-baseline justify-between gap-6 border-b border-border py-5 last:border-b-0 md:flex-col-reverse md:items-start md:justify-end md:gap-2 md:border-b-0 md:border-l md:px-8 md:py-10 md:first:border-l-0 md:first:pl-0 lg:flex-col lg:gap-5 lg:pb-12 lg:pt-8"
              >
                <dt className="text-[0.9375rem] font-semibold text-muted-strong">{item.rotulo}</dt>
                <dd className="font-serif text-[length:var(--type-figure)] leading-none tracking-[-0.02em] text-heading tabular-nums">
                  {item.valor}
                </dd>
              </div>
            ))}
          </dl>

          <div className="hidden border-l border-border px-8 pb-12 pt-8 lg:flex lg:flex-col lg:justify-between">
            <p className="font-serif text-lg leading-snug text-heading">
              Confiança de instituições e parceiros estratégicos.
            </p>
            <Link
              href="/obras"
              className="group mt-4 inline-flex items-center gap-2 self-start text-[0.9375rem] font-semibold text-brand"
            >
              Ver obras e projetos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5 py-8 md:flex-row md:items-center md:gap-10 md:py-10">
          <p className="shrink-0 text-[0.9375rem] font-semibold text-muted-strong md:w-40">Casos de sucesso</p>
          <ul className="grid flex-1 grid-cols-3 items-center gap-x-6 gap-y-6 sm:grid-cols-5 md:gap-x-10">
            {casosSucesso.map((caso) => (
              <li key={caso.nome} className="flex h-14 items-center justify-center md:h-16">
                <Image
                  src={caso.imagem}
                  alt={caso.nome}
                  width={180}
                  height={90}
                  sizes="160px"
                  className="max-h-full w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Below lg the side column is hidden; keep its way into the projects page. */}
        <div className="pb-8 lg:hidden">
          <Link
            href="/obras"
            className="group inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand"
          >
            Ver obras e projetos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
