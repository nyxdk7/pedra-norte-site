"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { buttonClasses } from "@/components/ui/Button";
import { siteContact } from "@/lib/site-config";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/estrutura", label: "Estrutura" },
  { href: "/atuacoes", label: "Atuações" },
  { href: "/servicos", label: "Serviços" },
  { href: "/obras", label: "Obras" },
  { href: "/integridade", label: "Integridade" },
];

export function Header() {
  const pathname = usePathname();
  const [menuAberto, setMenuAberto] = useState(false);
  // "media" while the capsule floats over the dark opening band, "solid" over content.
  const [sobreConteudo, setSobreConteudo] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const botaoMenuRef = useRef<HTMLButtonElement>(null);

  function fecharMenu() {
    setMenuAberto(false);
  }

  useEffect(() => {
    // Every page opens with a dark band (home hero or PageHero): stay frosted until it
    // scrolls away. Its height is measured on resize only, never inside the scroll handler.
    const abertura = document.querySelector<HTMLElement>("main > section:first-of-type");
    let limite = 8;

    function verificarScroll() {
      setSobreConteudo(window.scrollY > limite);
    }

    function medirAbertura() {
      limite = Math.max(abertura ? abertura.offsetHeight - 88 : 8, 8);
      verificarScroll();
    }

    const observador = abertura ? new ResizeObserver(medirAbertura) : null;
    if (abertura) observador?.observe(abertura);
    medirAbertura();

    window.addEventListener("scroll", verificarScroll, { passive: true });

    return () => {
      observador?.disconnect();
      window.removeEventListener("scroll", verificarScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (!menuAberto) return;

    // While the menu is open, everything outside the header is inert: focus cannot
    // wander into the page hidden behind the backdrop.
    const foraDoHeader = Array.from(document.body.children).filter(
      (elemento) => elemento !== headerRef.current
    );
    foraDoHeader.forEach((elemento) => elemento.setAttribute("inert", ""));

    return () => {
      foraDoHeader.forEach((elemento) => elemento.removeAttribute("inert"));
    };
  }, [menuAberto]);

  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";

    function fecharComEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && menuAberto) {
        setMenuAberto(false);
        botaoMenuRef.current?.focus();
      }
    }

    document.addEventListener("keydown", fecharComEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", fecharComEscape);
    };
  }, [menuAberto]);

  function linkAtivo(href: string) {
    return href === "/" ? pathname === href : pathname.startsWith(href);
  }

  const solido = sobreConteudo || menuAberto;

  return (
    // The header box itself lets clicks through; only the capsule, the open menu and its
    // backdrop take pointer events.
    <header ref={headerRef} className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-2 md:pt-3">
      <div className="container-msm relative z-20">
        <div
          data-tone={solido ? "solid" : "media"}
          className="header-capsule pointer-events-auto relative -mx-2 flex h-14 items-center justify-between gap-3 rounded-full border p-1.5 md:-mx-3 md:h-[4.25rem] md:p-2"
        >
          {/* Blur lives on a child layer: backdrop-filter on an ancestor would become the
              containing block of the fixed menu backdrop below and collapse it. */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 rounded-full backdrop-blur-md backdrop-saturate-150" />

          <Link
            href="/"
            onClick={fecharMenu}
            aria-label="MSM Industrial, página inicial"
            className="focus-media flex h-full shrink-0 items-center rounded-full bg-white px-4 md:px-5"
          >
            <BrandLogo priority className="[--logo-h:2rem] md:[--logo-h:2.5rem]" />
          </Link>

          <nav className="hidden xl:block" aria-label="Navegação principal">
            <ul
              className={`flex items-center gap-0.5 rounded-full p-1 transition-colors duration-300 ${
                solido ? "bg-brita-100" : "bg-white"
              }`}
            >
              {links.map((link) => {
                const ativo = linkAtivo(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={ativo ? "page" : undefined}
                      className={`flex h-10 items-center rounded-full px-3.5 text-[0.9375rem] font-semibold transition-colors ${
                        ativo
                          ? "bg-brand text-white"
                          : "text-steel hover:bg-ink/[0.06] hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex h-full items-center gap-2">
            {/* Wrapper owns visibility: buttonClasses already sets `display`. */}
            <div className="hidden h-full sm:block">
              <Link
                href="/contato"
                onClick={fecharMenu}
                aria-current={pathname.startsWith("/contato") ? "page" : undefined}
                className={buttonClasses("signal", "md", "focus-media h-full px-6")}
              >
                Fale conosco
              </Link>
            </div>

            <button
              ref={botaoMenuRef}
              type="button"
              onClick={() => setMenuAberto(!menuAberto)}
              aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuAberto}
              aria-controls="menu-mobile"
              className="focus-media grid aspect-square h-full place-items-center rounded-full bg-white text-ink transition-colors hover:bg-brita-100 xl:hidden"
            >
              {menuAberto ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Fechar menu"
        tabIndex={-1}
        onClick={fecharMenu}
        className={`fixed inset-0 z-0 bg-ink-deep/50 transition-opacity duration-300 xl:hidden ${
          menuAberto ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="menu-mobile"
        className={`container-msm absolute inset-x-0 top-full z-10 mt-2 transition-[opacity,transform,visibility] duration-300 xl:hidden ${
          menuAberto
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav
          aria-label="Navegação mobile"
          className="on-dark -mx-2 max-h-[calc(100dvh-var(--header-h)-1.5rem)] overflow-y-auto rounded-[1.75rem] bg-ink p-3 text-white shadow-brand-soft md:-mx-3"
        >
          <ul>
            {links.map((link) => {
              const ativo = linkAtivo(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={fecharMenu}
                    aria-current={ativo ? "page" : undefined}
                    className={`flex min-h-13 items-center justify-between rounded-2xl px-4 text-xl font-semibold tracking-tight transition-colors ${
                      ativo ? "bg-white/10 text-white" : "text-on-dark-muted hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {ativo && <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-3 grid gap-2 border-t border-white/10 px-1 pt-4">
            <Link
              href="/contato"
              onClick={fecharMenu}
              className={buttonClasses("signal", "lg", "w-full")}
            >
              Fale conosco
            </Link>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={siteContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses("outlineLight", "md", "w-full")}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
              <a href={`mailto:${siteContact.email}`} className={buttonClasses("outlineLight", "md", "w-full")}>
                <Mail className="h-4 w-4" aria-hidden="true" />
                E-mail
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
