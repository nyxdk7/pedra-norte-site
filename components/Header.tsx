"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/estrutura", label: "Estrutura" },
  { href: "/atuacoes", label: "Atuações" },
  { href: "/galeria", label: "Galeria" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
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

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b border-[#dbe5ff] bg-white/90 backdrop-blur-xl transition-all duration-300 ${
        rolouPagina || menuAberto
          ? "shadow-md shadow-slate-900/10"
          : "shadow-sm shadow-slate-900/5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          rolouPagina ? "py-2.5" : "py-3"
        }`}
      >
        <Link href="/" className="flex items-center" onClick={fecharMenu}>
          <Image
            src="/images/logo-letras-pretas.png"
            alt="Logo MSM Industrial LTDA"
            width={260}
            height={100}
            priority
            className={`h-auto object-contain transition-all duration-300 ${
              rolouPagina ? "w-[138px] md:w-[175px]" : "w-[145px] md:w-[185px]"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-bold text-slate-700 transition after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[#143987] after:transition-all hover:text-[#143987] hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contato"
          className="hidden rounded-xl bg-[#143987] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#143987]/20 transition hover:-translate-y-0.5 hover:bg-[#0f2c6a] lg:inline-flex"
        >
          Solicitar orçamento
        </Link>

        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#dbe5ff] bg-white text-[#143987] shadow-sm transition hover:bg-[#eaf0ff] lg:hidden"
        >
          {menuAberto ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[#dbe5ff] bg-white/95 shadow-lg backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuAberto ? "max-h-[620px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={fecharMenu}
              className="rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-[#eaf0ff] hover:text-[#143987]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contato"
            onClick={fecharMenu}
            className="mt-3 rounded-xl bg-[#143987] px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-[#143987]/20 transition hover:bg-[#0f2c6a]"
          >
            Solicitar orçamento
          </Link>
        </nav>
      </div>
    </header>
  );
}