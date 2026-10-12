import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, MessageCircle } from "lucide-react";
import { siteContact } from "@/lib/site-config";
import { buttonClasses } from "@/components/ui/Button";

const linksRapidos = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/estrutura", label: "Estrutura" },
  { href: "/atuacoes", label: "Atuações" },
  { href: "/servicos", label: "Serviços" },
  { href: "/obras", label: "Obras" },
  { href: "/integridade", label: "Integridade" },
  { href: "/contato", label: "Contato" },
];

const areasAtuacao = [
  "Engenharia civil",
  "Pavimentação asfáltica",
  "Usinagem de asfalto",
  "Concreto usinado",
  "Britas e agregados",
  "Mineração",
  "Pré-moldados",
  "Locação de máquinas",
];

const empresasGrupo = [
  "MSM Industrial",
  "Pedra Norte",
  "Construtora Santa Maria",
  "Auto Posto Correntão",
  "Pré Molde",
  "Tratorron",
];

const diferenciais = [
  {
    titulo: "Estrutura própria",
    texto: "Integração entre produção, frota, equipe e execução em campo.",
  },
  {
    titulo: "Atuação regional",
    texto: "Presença forte em obras e fornecimentos no Acre.",
  },
];

const tituloColuna = "font-display text-sm font-semibold text-white";
const linkRodape = "text-sm text-on-dark-subtle transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="on-dark relative isolate overflow-hidden bg-surface-strong text-white">
      <div aria-hidden="true" className="bg-survey-grid absolute inset-0 -z-10 opacity-50" />

      <div className="container-msm grid gap-12 py-14 md:py-20 lg:grid-cols-[1.3fr_2fr] lg:gap-16">
        <div>
          {/* The logo's blue lettering needs a light plate to stay legible on navy. */}
          <Link
            href="/"
            className="inline-flex items-center rounded-card bg-white px-5 py-3"
            aria-label="MSM Industrial — página inicial"
          >
            <Image
              src="/images/logo-letras-pretas.png"
              alt="Logo MSM Industrial LTDA"
              width={260}
              height={100}
              className="h-auto w-[160px] object-contain"
            />
          </Link>

          <p className="mt-6 max-w-sm leading-relaxed text-on-dark-muted">
            Grupo com atuação integrada em engenharia civil, infraestrutura,
            pavimentação, concreto usinado, mineração, agregados,
            pré-moldados e locação de máquinas.
          </p>

          <dl className="mt-8 grid max-w-md gap-5 border-t border-on-dark-border pt-6 sm:grid-cols-2">
            {diferenciais.map((item) => (
              <div key={item.titulo}>
                <dt className="flex items-center gap-2 text-sm font-semibold text-white">
                  <span aria-hidden="true" className="h-0.5 w-4 rounded-full bg-accent" />
                  {item.titulo}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-on-dark-subtle">{item.texto}</dd>
              </div>
            ))}
          </dl>

          <a
            href={siteContact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses("light", "md", "mt-8")}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Fale conosco
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[0.8fr_1fr_1.2fr]">
          <nav aria-label="Links rápidos">
            <h2 className={tituloColuna}>Links rápidos</h2>
            <ul className="mt-5 space-y-3">
              {linksRapidos.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkRodape}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={tituloColuna}>Atuação</h2>
            <ul className="mt-5 space-y-3">
              {areasAtuacao.map((area) => (
                <li key={area} className="text-sm text-on-dark-subtle">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h2 className={tituloColuna}>Grupo Soster</h2>
            <ul className="mt-5 space-y-3">
              {empresasGrupo.map((empresa) => (
                <li key={empresa} className="text-sm text-on-dark-subtle">
                  {empresa}
                </li>
              ))}
            </ul>

            <h2 className={`${tituloColuna} mt-10`}>Contato</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  <strong className="block font-semibold text-white">Sede administrativa</strong>
                  <span className="text-on-dark-subtle">{siteContact.location}</span>
                </span>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  <strong className="block font-semibold text-white">WhatsApp</strong>
                  <a
                    href={siteContact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkRodape}
                  >
                    {siteContact.whatsappDisplay}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="min-w-0">
                  <strong className="block font-semibold text-white">E-mail</strong>
                  <a href={`mailto:${siteContact.email}`} className={`${linkRodape} break-all`}>
                    {siteContact.email}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-on-dark-border">
        <div className="container-msm flex flex-col items-center justify-between gap-2 py-5 text-center text-sm text-on-dark-subtle md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} MSM Industrial LTDA / Pedra Norte.
            Todos os direitos reservados.
          </p>

          <p>
            Desenvolvido por{" "}
            <span className="font-semibold text-on-dark-muted">João Pedro</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
