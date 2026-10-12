import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui/Section";
import { empresasCarousel } from "./data";

/**
 * Group companies as an editorial index (DNA: avoid card walls). Every company and
 * description from the former carousel is kept; hairlines replace boxes.
 */
export function GrupoSosterIndice() {
  return (
    <section aria-labelledby="grupo-titulo" className="bg-background py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              <SectionHeading
                id="grupo-titulo"
                eyebrow="Grupo Soster"
                title="Empresas que fazem parte do grupo Soster."
                description="Um conjunto de empresas e parceiros integrados que fortalece a atuação do grupo em infraestrutura, pavimentação, mineração, construção civil, pré-moldados, máquinas e fornecimento de materiais."
              />
            </div>
          </div>

          <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {empresasCarousel.map((empresa) => (
              <li key={empresa.nome} className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-5 border-t border-border py-7">
                <div className="flex h-16 items-start">
                  <Image
                    src={empresa.imagem}
                    alt={"Logo " + empresa.nome}
                    width={235}
                    height={110}
                    sizes="104px"
                    className="h-auto max-h-16 w-auto max-w-full object-contain object-left"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand">{empresa.atuacao}</p>
                  <h3 className="mt-1 text-lg font-bold leading-snug text-heading">{empresa.nome}</h3>
                  <p className="mt-2 font-serif text-[0.9375rem] leading-relaxed text-muted-strong">
                    {empresa.descricao}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
