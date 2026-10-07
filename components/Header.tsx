"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

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

  function fecharMenu() {
    setMenuAberto(false);
  }

  useEffect(() => {
    function verificarScroll() {
      setRolouPagina(window.scrollY > 20);
    }

    verificarScroll();

    window.addEventListener("scroll", verificarScroll);

    return () => {
      window.removeEventListener("scroll", verificarScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";

    function fecharComEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuAberto(false);
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
      className={`fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-2xl transition-all duration-300 ${
        rolouPagina || menuAberto
          ? "shadow-[0_12px_35px_rgba(15,23,42,0.10)]"
          : "shadow-sm shadow-slate-900/5"
      }`}
    >
      <div
        className={`relative z-20 mx-auto flex max-w-[1400px] items-center justify-between gap-5 px-5 transition-all duration-300 md:px-8 ${
          rolouPagina ? "py-2" : "py-3"
        }`}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-xl outline-none focus-visible:ring-4 focus-visible:ring-[#143987]/20"
          onClick={fecharMenu}
          aria-label="Ir para a página inicial"
        >
          <Image
            src="/images/logo-letras-pretas.png"
            alt="Logo MSM Industrial LTDA"
            width={260}
            height={100}
            priority
            className={`h-auto object-contain transition-all duration-300 ${
              rolouPagina ? "w-[136px] md:w-[164px]" : "w-[145px] md:w-[176px]"
            }`}
          />
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-1.5 shadow-inner shadow-slate-900/[0.03] xl:flex"
          aria-label="Navegação principal"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={linkAtivo(link.href) ? "page" : undefined}
              className={`rounded-xl px-3.5 py-2 text-[13px] font-bold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#143987]/15 ${
                linkAtivo(link.href)
                  ? "bg-[#143987] text-white shadow-md shadow-[#143987]/20"
                  : "text-slate-600 hover:bg-white hover:text-[#143987] hover:shadow-sm"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contato"
          aria-current={pathname.startsWith("/contato") ? "page" : undefined}
          className="group hidden items-center gap-2 rounded-xl bg-gradient-to-br from-[#1d4da5] to-[#0f2c6a] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-[#143987]/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#143987]/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#143987]/20 xl:inline-flex"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Fale conosco
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </Link>

        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#143987] shadow-sm transition hover:border-[#b8c9ee] hover:bg-[#edf3ff] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#143987]/15 xl:hidden"
        >
          {menuAberto ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <button
        type="button"
        aria-label="Fechar menu"
        tabIndex={menuAberto ? 0 : -1}
        onClick={fecharMenu}
        className={`fixed inset-0 top-[76px] z-0 bg-slate-950/35 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          menuAberto ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="menu-mobile"
        className={`absolute left-4 right-4 top-[calc(100%+10px)] z-10 overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-2xl shadow-slate-950/20 backdrop-blur-2xl transition-all duration-300 xl:hidden ${
          menuAberto
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav
          className="mx-auto grid max-h-[calc(100vh-110px)] gap-1 overflow-y-auto p-3"
          aria-label="Navegação mobile"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={fecharMenu}
              aria-current={linkAtivo(link.href) ? "page" : undefined}
              className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-bold transition ${
                linkAtivo(link.href)
                  ? "bg-[#edf3ff] text-[#143987]"
                  : "text-slate-700 hover:bg-slate-50 hover:text-[#143987]"
              }`}
            >
              {link.label}
              {linkAtivo(link.href) && (
                <span className="h-2 w-2 rounded-full bg-[#143987]" />
              )}
            </Link>
          ))}

          <Link
            href="/contato"
            onClick={fecharMenu}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#1d4da5] to-[#0f2c6a] px-5 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-[#143987]/20 transition hover:shadow-xl"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Fale conosco
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
