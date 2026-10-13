import Image from "next/image";
import Link from "next/link";
import { siteContact } from "@/lib/site-config";
import styles from "./FooterEffects.module.css";

export function Footer() {
  return (
    <footer className={`border-t border-white/10 bg-slate-950 text-white ${styles.footerShell}`}>
      <div className={styles.lightRail} aria-hidden="true">
        <span className={styles.lightBeam} />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-10 py-12 md:flex-row md:items-start md:gap-16 md:py-14">
          <Link href="/" className={`inline-flex w-fit items-center ${styles.brandLink}`} aria-label="Voltar ao início">
            <Image
              src="/images/logo-letras-brancas.png"
              alt="MSM Industrial"
              width={260}
              height={90}
              className={`h-auto w-[190px] object-contain ${styles.brandLogo}`}
            />
          </Link>

          <div className="md:text-right">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Contato
            </h2>

            <div className="mt-4 flex flex-col gap-2.5 text-sm leading-6 text-slate-300">
              <a
                href={siteContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-fit transition-colors hover:text-white md:ml-auto ${styles.contactLink}`}
              >
                {siteContact.whatsappDisplay}
              </a>
              <a
                href={`mailto:${siteContact.email}`}
                className={`w-fit transition-colors hover:text-white md:ml-auto ${styles.contactLink}`}
              >
                {siteContact.email}
              </a>
              <span className="text-slate-400">{siteContact.location}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-5 text-xs leading-5 text-slate-400 md:flex-row md:items-center md:justify-between md:gap-8">
          <p>
            © {new Date().getFullYear()} MSM Industrial LTDA / Pedra Norte. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por <span className="font-medium text-slate-300">João Pedro</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
