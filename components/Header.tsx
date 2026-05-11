"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/obras", label: "Obras" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#dbe5ff] bg-white/75 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center" onClick={fecharMenu}>
          <Image
            src="/images/logo-letras-pretas.png"
            alt="Logo MSM Industrial LTDA"
            width={260}
            height={100}
            priority
            className="h-auto w-[145px] object-contain md:w-[185px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-bold text-slate-700 transition hover:text-[#143987] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[#143987] after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contato"
          className="hidden rounded-xl bg-[#143987] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#143987]/20 transition hover:-translate-y-0.5 hover:bg-[#0f2c6a] md:inline-flex"
        >
          Solicitar orçamento
        </Link>

        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#dbe5ff] bg-white text-[#143987] shadow-sm transition hover:bg-[#eaf0ff] md:hidden"
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

      {menuAberto && (
        <div className="border-t border-[#dbe5ff] bg-white/95 px-6 py-5 shadow-lg backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
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
      )}
    </header>
  );
}