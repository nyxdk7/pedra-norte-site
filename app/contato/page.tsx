import type { Metadata } from "next";
import {
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { siteContact } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a MSM Industrial pelo WhatsApp ou e-mail e consulte nossa localização em Rio Branco, Acre.",
};

export default function ContatoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 pt-20 text-slate-950">
      <section className="relative isolate overflow-hidden bg-slate-950 px-6 py-20 text-white md:py-28">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,#07101f_0%,#0c1c36_52%,#123b78_100%)]" />
        <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[#4f82dc]/25 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-[#143987]/30 blur-3xl" />

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#c8d8ff] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#7ba4ff]" />
              Canais oficiais
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Vamos conversar?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Nossa equipe está disponível para atender solicitações comerciais,
              dúvidas e novas oportunidades.
            </p>
          </div>

          <a
            href={siteContact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-white px-6 font-bold text-[#143987] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#edf3ff] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Falar com nossa equipe
            <ArrowRight
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </section>

      <section className="relative px-6 pb-20 pt-12 md:pb-28 md:pt-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <a
            href={siteContact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-slate-900/[0.07] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-500/15"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition group-hover:bg-green-500 group-hover:text-white">
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="mt-6 block text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
              WhatsApp
            </span>
            <strong className="mt-2 block text-xl text-slate-950">
              {siteContact.whatsappDisplay}
            </strong>
            <span className="mt-4 flex items-center gap-2 text-sm font-bold text-[#143987]">
              Iniciar conversa
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>

          <a
            href={`mailto:${siteContact.email}`}
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#cbd9f6] hover:shadow-xl hover:shadow-slate-900/[0.07] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#143987]/15"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf3ff] text-[#143987] transition group-hover:bg-[#143987] group-hover:text-white">
              <Mail className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="mt-6 block text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
              E-mail
            </span>
            <strong className="mt-2 block break-all text-xl text-slate-950">
              {siteContact.email}
            </strong>
            <span className="mt-4 flex items-center gap-2 text-sm font-bold text-[#143987]">
              Enviar e-mail
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>

          <a
            href={siteContact.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#cbd9f6] hover:shadow-xl hover:shadow-slate-900/[0.07] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#143987]/15"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf3ff] text-[#143987] transition group-hover:bg-[#143987] group-hover:text-white">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="mt-6 block text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
              Localização
            </span>
            <strong className="mt-2 block text-xl text-slate-950">
              {siteContact.location}
            </strong>
            <span className="mt-4 flex items-center gap-2 text-sm font-bold text-[#143987]">
              Abrir no Google Maps
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/[0.07]">
          <div className="flex flex-col justify-between gap-5 border-b border-slate-200 p-7 sm:flex-row sm:items-center md:p-9">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#143987]">
                Onde estamos
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                {siteContact.location}
              </h2>
            </div>

            <a
              href={siteContact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-[#b8c9ee] hover:bg-[#edf3ff] hover:text-[#143987]"
            >
              Ver rota
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="h-[360px] bg-slate-100 md:h-[480px]">
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
      </section>
    </main>
  );
}
