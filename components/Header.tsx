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
    <header className="fixed left-0 top-0 z-50 w-full border-b border-sky-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={fecharMenu}>
          <Image
            src="/images/logo-pedra-norte.png"
            alt="Logo Pedra Norte"
            width={46}
            height={46}
            priority
          />

          <div className="leading-tight">
            <strong className="block text-base font-bold text-slate-950">
              Pedra Norte
            </strong>
            <span className="text-xs font-medium text-sky-600">
              Engenharia e Infraestrutura
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-sky-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contato"
          className="hidden rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-600 md:inline-flex"
        >
          Solicitar orçamento
        </Link>

        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-sky-100 bg-white text-slate-800 shadow-sm transition hover:bg-sky-50 md:hidden"
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
        <div className="border-t border-sky-100 bg-white px-6 py-5 shadow-lg md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={fecharMenu}
                className="rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-600"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contato"
              onClick={fecharMenu}
              className="mt-3 rounded-xl bg-sky-500 px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-600"
            >
              Solicitar orçamento
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}