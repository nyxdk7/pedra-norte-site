import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Section";

export function HomeHero() {
  return (
    <section
      aria-labelledby="hero-titulo"
      className="on-dark relative isolate flex min-h-[min(100svh,58rem)] flex-col overflow-hidden bg-neutral-950 pt-[var(--header-h)] text-white"
    >
      <Image
        src="/images/home/hero-obras-acre.png"
        alt="Obra de infraestrutura do Grupo Soster"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="-z-20 object-cover object-[60%_center]"
      />
      <div aria-hidden="true" className="scrim-hero absolute inset-0 -z-10" />
      <div aria-hidden="true" className="bg-survey-grid absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(90deg,black,transparent_70%)]" />

      <Container className="flex flex-1 flex-col justify-center py-12 md:py-14">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <Eyebrow onDark>MSM Industrial / Pedra Norte</Eyebrow>
          </div>

          <h1
            id="hero-titulo"
            className="animate-fade-up anim-delay-1 mt-5 text-[2.5rem] font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[4.5rem]"
          >
            Engenharia, pavimentação, mineração e obras para grandes estruturas
          </h1>

          <p className="animate-fade-up anim-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-white md:text-xl">
            O Grupo Soster reúne empresas especializadas em infraestrutura,
            pavimentação, mineração, concreto usinado, pré-moldados e locação
            de máquinas, com atuação integrada para obras públicas e privadas
            no Acre.
          </p>

          <div className="animate-fade-up anim-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/sobre" variant="light" size="lg">
              Conheça o grupo
            </ButtonLink>
            <ButtonLink href="/atuacoes" variant="outlineLight" size="lg">
              Ver áreas de atuação
            </ButtonLink>
          </div>
        </div>
      </Container>

      {/* Spec strip: the group's credentials as a ruled data row */}
      <Container className="pb-6 md:pb-8">
        <div aria-hidden="true" className="animate-rule-grow anim-delay-4 h-px bg-white/25" />
        <dl className="animate-fade-up anim-delay-4 grid grid-cols-2 gap-6 pt-5 sm:max-w-xl">
          <div>
            <dt className="sr-only">Tempo de atuação</dt>
            <dd className="font-display text-3xl font-bold md:text-4xl">+40</dd>
            <dd className="mt-1 text-sm text-on-dark-muted">Anos de atuação</dd>
          </div>
          <div>
            <dt className="sr-only">Região</dt>
            <dd className="flex items-center gap-3 font-display text-3xl font-bold md:text-4xl">
              AC
              <Image
                src="/images/home/bandeira-acre.png"
                alt="Bandeira do Acre"
                width={42}
                height={28}
                className="h-6 w-9 rounded-[3px] object-cover ring-1 ring-white/30 md:h-7 md:w-[2.625rem]"
              />
            </dd>
            <dd className="mt-1 text-sm text-on-dark-muted">Forte atuação regional</dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}
