import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { casosSucesso } from "./data";

/** Trust band under the hero: the institutions served (the figures now sit on the hero photo). */
export function Credibilidade() {
  return (
    <section id="credibilidade" aria-labelledby="credibilidade-titulo" className="bg-background">
      <Container>
        <div className="grid gap-8 border-b border-border py-10 md:py-14 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-4">
            <p className="text-[0.9375rem] font-semibold text-brand">Casos de sucesso</p>
            <h2
              id="credibilidade-titulo"
              className="mt-2 font-serif text-xl leading-snug text-heading md:text-2xl"
            >
              Confiança de instituições e parceiros estratégicos.
            </h2>
            <Link
              href="/obras"
              className="group mt-4 inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-semibold text-brand"
            >
              Ver obras e projetos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>

          <ul className="grid grid-cols-3 items-center gap-x-6 gap-y-6 sm:grid-cols-5 md:gap-x-10 lg:col-span-8">
            {casosSucesso.map((caso) => (
              <li key={caso.nome} className="relative h-14 md:h-16">
                <Image src={caso.imagem} alt={caso.nome} fill sizes="160px" className="object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
