import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { siteContact } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contato | MSM Industrial e Pedra Norte",
  description:
    "Canais oficiais da MSM Industrial e Pedra Norte: WhatsApp, e-mail e Instagram.",
};

// Vetores das marcas WhatsApp e Instagram reproduzidos da biblioteca
// Simple Icons (simple-icons/simple-icons), disponibilizada sob CC0 1.0.
// SVGs locais: nenhuma nova dependencia e nenhum carregamento por CDN.
function WhatsAppLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function InstagramLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
    </svg>
  );
}

const canais = [
  {
    titulo: "WhatsApp",
    identificacao: siteContact.whatsappDisplay,
    descricao: "Converse com nossa equipe de atendimento comercial.",
    acao: "Iniciar conversa",
    href: siteContact.whatsappUrl,
    externo: true,
    Icone: WhatsAppLogo,
    corIcone: "bg-[#25D366]",
    corBarra: "bg-[#25D366]",
    corAcao: "text-[#137b45]",
    corHover: "group-hover:text-[#137b45]",
  },
  {
    titulo: "E-mail",
    identificacao: siteContact.email,
    descricao: "Envie propostas, solicitações e outras informações.",
    acao: "Enviar e-mail",
    href: `mailto:${siteContact.email}`,
    externo: false,
    Icone: Mail,
    corIcone: "bg-[#164b97]",
    corBarra: "bg-[#164b97]",
    corAcao: "text-[#164b97]",
    corHover: "group-hover:text-[#164b97]",
  },
  {
    titulo: "Instagram",
    identificacao: "@pedranorte1",
    descricao: "Acompanhe os projetos, obras e novidades da Pedra Norte.",
    acao: "Visitar perfil",
    href: "https://www.instagram.com/pedranorte1/",
    externo: true,
    Icone: InstagramLogo,
    corIcone: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4]",
    corBarra: "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#515BD4]",
    corAcao: "text-[#ae2879]",
    corHover: "group-hover:text-[#ae2879]",
  },
];

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-[#f0f4fa] pt-24 text-slate-950">
      <section className="relative isolate overflow-hidden bg-[#0c2855] px-5 pb-32 pt-16 text-white sm:px-6 sm:pb-36 sm:pt-20 md:pt-24">
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 85% 25%, rgba(66,140,228,0.28), transparent 44%), linear-gradient(115deg, #091c3d 0%, #11366c 58%, #16457f 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-7 h-[3px] w-12 bg-[#6cb8ff]" aria-hidden="true" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Entre em contato
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#dce9ff] sm:text-lg">
            Estamos à disposição para atender você. Escolha o canal de sua
            preferência para falar diretamente com a MSM Industrial e Pedra Norte.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-20 max-w-5xl px-5 pb-20 sm:px-6 md:pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {canais.map((canal) => {
            const Icone = canal.Icone;
            return (
              <a
                key={canal.titulo}
                href={canal.href}
                target={canal.externo ? "_blank" : undefined}
                rel={canal.externo ? "noopener noreferrer" : undefined}
                aria-label={`${canal.titulo}: ${canal.identificacao}`}
                className="group relative flex min-h-[290px] flex-col overflow-hidden rounded-lg border border-[#d9e4f2] bg-white px-6 pb-6 pt-8 shadow-[0_12px_30px_rgba(10,35,77,0.10)] transition-all duration-200 hover:-translate-y-1 hover:border-[#b9cce6] hover:shadow-[0_20px_36px_rgba(10,35,77,0.15)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#6cb8ff] motion-reduce:transform-none sm:px-7"
              >
                <span className={`absolute inset-x-0 top-0 h-1.5 ${canal.corBarra}`} aria-hidden="true" />
                <div className="flex items-start justify-between gap-3">
                  <span className={`flex h-16 w-16 items-center justify-center rounded-lg text-white shadow-sm ${canal.corIcone}`}>
                    <Icone className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className={`h-5 w-5 text-slate-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${canal.corHover}`}
                    aria-hidden="true"
                  />
                </div>

                <h2 className="mt-6 text-xl font-bold tracking-tight text-[#0d2449]">
                  {canal.titulo}
                </h2>
                <p className="mt-1.5 break-all text-[15px] font-semibold text-slate-700">
                  {canal.identificacao}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {canal.descricao}
                </p>
                <div className="mt-auto pt-6">
                  <span className={`inline-flex items-center gap-2 border-b border-current pb-1 text-sm font-bold ${canal.corAcao}`}>
                    {canal.acao}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-11 flex items-center justify-center gap-2 text-center text-sm font-medium text-[#536783]">
          <MapPin className="h-4 w-4 shrink-0 text-[#164b97]" aria-hidden="true" />
          <span>{siteContact.location} · Brasil</span>
        </div>
      </section>
    </main>
  );
}
