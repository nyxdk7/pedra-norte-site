"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { buttonClasses } from "@/components/ui/Button";

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
  const [rolouPagina, setRolouPagina] = useState(false);
  const botaoMenuRef = useRef<HTMLButtonElement>(null);

  function fecharMenu() {
    setMenuAberto(false);
  }

  useEffect(() => {
    function verificarScroll() {
      setRolouPagina(window.scrollY > 8);
    }

    verificarScroll();

    window.addEventListener("scroll", verificarScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", verificarScroll);
    };
  }, []);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[var(--header-h)] border-b transition-[box-shadow,border-color] duration-300 ${
        rolouPagina || menuAberto
          ? "border-border shadow-brand-soft"
          : "border-transparent"
      }`}
    >
      {/* Blur lives on a child layer: backdrop-filter on <header> itself would make it the
          containing block of the fixed menu backdrop below and collapse it to 0px. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-white/95 backdrop-blur-xl" />
      <div className="container-msm relative z-20 flex h-full items-center justify-between gap-6">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={fecharMenu}
          aria-label="MSM Industrial — página inicial"
        >
          <Image
            src="/images/logo-letras-pretas.png"
            alt="Logo MSM Industrial LTDA"
            width={260}
            height={100}
            priority
            className="h-auto w-[140px] object-contain md:w-[158px]"
          />
        </Link>

        <nav className="hidden h-full xl:block" aria-label="Navegação principal">
          <ul className="flex h-full items-center gap-1">
            {links.map((link) => {
              const ativo = linkAtivo(link.href);

              return (
                <li key={link.href} className="h-full">
                  <Link
                    href={link.href}
                    aria-current={ativo ? "page" : undefined}
                    className={`relative flex h-full items-center px-3.5 text-[0.9375rem] font-medium transition-colors after:absolute after:inset-x-3.5 after:bottom-0 after:h-0.5 after:rounded-full after:transition-colors ${
                      ativo
                        ? "text-heading after:bg-accent"
                        : "text-muted-strong after:bg-transparent hover:text-brand hover:after:bg-brand-soft"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Wrapper owns visibility: buttonClasses already sets `display`. */}
        <div className="hidden xl:block">
          <Link
            href="/contato"
            aria-current={pathname.startsWith("/contato") ? "page" : undefined}
            className={buttonClasses("primary", "md")}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-control border border-border text-brand transition-colors hover:border-brand hover:bg-surface-subtle xl:hidden"
        >
          {menuAberto ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <button
        type="button"
        aria-label="Fechar menu"
        tabIndex={-1}
        onClick={fecharMenu}
        className={`fixed inset-x-0 bottom-0 top-[var(--header-h)] z-0 bg-neutral-950/40 transition-opacity duration-300 xl:hidden ${
          menuAberto ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="menu-mobile"
        className={`absolute inset-x-0 top-full z-10 border-b border-border bg-white shadow-brand-soft transition-[opacity,transform,visibility] duration-300 xl:hidden ${
          menuAberto
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav
          className="container-msm max-h-[calc(100dvh-var(--header-h))] overflow-y-auto py-3"
          aria-label="Navegação mobile"
        >
          <ul className="divide-y divide-border">
            {links.map((link) => {
              const ativo = linkAtivo(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={fecharMenu}
                    aria-current={ativo ? "page" : undefined}
                    className={`flex min-h-12 items-center justify-between py-3 text-base font-medium transition-colors ${
                      ativo ? "text-brand" : "text-foreground hover:text-brand"
                    }`}
                  >
                    {link.label}
                    {ativo && (
                      <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-accent" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contato"
            onClick={fecharMenu}
            className={buttonClasses("primary", "lg", "mb-2 mt-4 w-full")}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Fale conosco
          </Link>
        </nav>
      </div>
    </header>
  );
}
