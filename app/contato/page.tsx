import type { Metadata } from "next";
import {
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { siteContact } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Eyebrow } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a MSM Industrial pelo WhatsApp ou e-mail e consulte nossa localização em Rio Branco, Acre.",
};

const cartao =
  "group flex flex-col rounded-card border border-border bg-white p-6 transition-colors hover:border-brand md:p-7";
const rotulo = "mt-6 block text-sm font-semibold text-muted";
const acao = "mt-auto flex items-center gap-2 pt-4 text-sm font-semibold text-brand";

export default function ContatoPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-background text-foreground">
      <PageHero
        variante="sereno"
        eyebrow="Canais oficiais"
        title="Vamos conversar?"
        description={
          <p>
            Nossa equipe está disponível para atender solicitações comerciais,
            dúvidas e novas oportunidades.
          </p>
        }
        actions={
          <ButtonLink href={siteContact.whatsappUrl} variant="primary" size="lg">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Falar com nossa equipe
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ButtonLink>
        }
      />

      <section aria-label="Canais de contato" className="py-12 md:py-16">
        <Container>
          <ul className="grid gap-4 md:grid-cols-3 md:gap-5">
            <li className="flex">
              <a
                href={siteContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cartao} w-full hover:border-whatsapp`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-control bg-whatsapp text-white">
                  <MessageCircle className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={rotulo}>WhatsApp</span>
                <strong className="mt-1 block text-xl font-semibold text-heading">
                  {siteContact.whatsappDisplay}
                </strong>
                <span className={acao}>
                  Iniciar conversa
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </li>

            <li className="flex">
              <a href={`mailto:${siteContact.email}`} className={`${cartao} w-full`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-control bg-brand text-white">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={rotulo}>E-mail</span>
                <strong className="mt-1 block break-all text-xl font-semibold text-heading">
                  {siteContact.email}
                </strong>
                <span className={acao}>
                  Enviar e-mail
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </li>

            <li className="flex">
              <a
                href={siteContact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cartao} w-full`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-control bg-brand text-white">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={rotulo}>Localização</span>
                <strong className="mt-1 block text-xl font-semibold text-heading">
                  {siteContact.location}
                </strong>
                <span className={acao}>
                  Abrir no Google Maps
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </li>
          </ul>

          <div className="mt-8 overflow-hidden rounded-panel border border-border bg-white">
            <div className="flex flex-col justify-between gap-5 border-b border-border p-6 sm:flex-row sm:items-center md:p-8">
              <div>
                <Eyebrow>Onde estamos</Eyebrow>
                <h2 className="mt-2 text-2xl font-bold text-heading md:text-3xl">
                  {siteContact.location}
                </h2>
              </div>

              <ButtonLink href={siteContact.mapUrl} variant="secondary">
                Ver rota
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>

            <div className="h-[360px] bg-neutral-100 md:h-[480px]">
              <iframe
                title="Localização da MSM Industrial em Rio Branco"
                src={siteContact.mapEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
