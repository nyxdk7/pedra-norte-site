import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteContact } from "@/lib/site-config";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { HoraLocal } from "@/components/ui/HoraLocal";
import { buttonClasses } from "@/components/ui/Button";

/**
 * Institutional footer in three bands: a service strip that puts the brand, the
 * invitation and the direct channels within reach; a four-column directory under it;
 * and a legal bar to close. Light, so the dark pages end on a clean edge.
 */

const navegacao = [
  { href: "/", label: "Início" },
  { href: "/estrutura", label: "Estrutura" },
  { href: "/atuacoes", label: "Atuações" },
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

export function Footer() {
  return (
    <footer className="rodape">
      <div className="rodape-servico">
        <div className="container-msm rodape-servico-grade">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label="MSM Industrial — página inicial">
              <BrandLogo className="[--logo-h:2.5rem]" />
            </Link>
            <p className="rodape-descritor">
              Engenharia, pavimentação, mineração e estrutura própria para
              grandes obras no Acre.
            </p>
          </div>

          <div className="rodape-chamada">
            <p className="rodape-chamada-texto">Conte o que a sua obra precisa</p>
            <a
              href={siteContact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses("primary", "md")}
            >
              Fale conosco
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <ul className="rodape-canais">
            <li>
              <a
                href={siteContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rodape-canal"
              >
                <span aria-hidden="true" className="rodape-canal-icone">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <strong>WhatsApp</strong>
                  {siteContact.whatsappDisplay}
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${siteContact.email}`} className="rodape-canal">
                <span aria-hidden="true" className="rodape-canal-icone">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <strong>E-mail</strong>
                  {siteContact.email}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="rodape-diretorio">
        <div className="container-msm rodape-grade">
          <nav aria-label="Navegação do rodapé">
            <h2 className="rodape-titulo">Conheça a MSM</h2>
            <ul className="rodape-lista">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="rodape-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="rodape-titulo">Atuação</h2>
            <ul className="rodape-lista rodape-lista-texto">
              {areasAtuacao.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="rodape-titulo">Atendimento</h2>
            <ul className="rodape-lista">
              <li className="rodape-lista-texto">{siteContact.location}</li>
              <li>
                <a
                  href={siteContact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rodape-link rodape-link-icone"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Como chegar
                </a>
              </li>
              <li>
                <a
                  href={siteContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rodape-link"
                >
                  {siteContact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteContact.email}`} className="rodape-link break-all">
                  {siteContact.email}
                </a>
              </li>
              <li className="rodape-lista-texto">
                <HoraLocal />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rodape-legal">
        <div className="container-msm rodape-legal-grade">
          <ul className="rodape-legal-links">
            <li>
              <Link href="/integridade" className="rodape-legal-link">
                Canal de Integridade
              </Link>
            </li>
          </ul>

          <p>
            © {new Date().getFullYear()} MSM Industrial LTDA / Pedra Norte.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
