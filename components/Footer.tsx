import Image from "next/image";
import Link from "next/link";

const linksRapidos = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/empresas", label: "Empresas" },
  { href: "/servicos", label: "Serviços" },
  { href: "/obras", label: "Obras" },
  { href: "/galeria", label: "Galeria" },
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

const empresasGrupo = [
  "MSM Industrial",
  "Pedra Norte",
  "Construtora Santa Maria",
  "Auto Posto Correntão",
  "Pré Molde",
  "Tratorron",
];

export function Footer() {
  return (
    <footer className="border-t border-[#dbe5ff] bg-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#143987]/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#8fb1ff]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.9fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/logo-letras-brancas.png"
                alt="Logo MSM Industrial LTDA"
                width={260}
                height={90}
                className="h-auto w-[190px] object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-slate-300">
              Grupo com atuação integrada em engenharia civil, infraestrutura,
              pavimentação, concreto usinado, mineração, agregados,
              pré-moldados e locação de máquinas.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#143987] text-sm font-bold text-white">
                  ✓
                </span>

                <p className="mt-3 text-sm font-bold text-white">
                  Estrutura própria
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Integração entre produção, frota, equipe e execução em campo.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#143987] text-sm font-bold text-white">
                  AC
                </span>

                <p className="mt-3 text-sm font-bold text-white">
                  Atuação regional
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Presença forte em obras e fornecimentos no Acre.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#8fb1ff]">
              Links rápidos
            </h3>

            <ul className="mt-5 space-y-3">
              {linksRapidos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-slate-300 transition hover:text-[#8fb1ff]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#8fb1ff]">
              Atuação
            </h3>

            <ul className="mt-5 space-y-3">
              {areasAtuacao.map((area) => (
                <li key={area} className="text-sm text-slate-300">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#8fb1ff]">
              Grupo Soster
            </h3>

            <ul className="mt-5 space-y-3">
              {empresasGrupo.map((empresa) => (
                <li key={empresa} className="text-sm text-slate-300">
                  {empresa}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-[#8fb1ff]">
                Contato
              </h3>

              <div className="mt-4 space-y-4 text-sm text-slate-300">
                <p>
                  <strong className="block text-white">
                    Sede administrativa
                  </strong>
                  Rio Branco - Acre
                </p>

                <p>
                  <strong className="block text-white">Telefone</strong>
                  (68) 99999-9999
                </p>

                <p>
                  <strong className="block text-white">E-mail</strong>
                  contato@empresa.com.br
                </p>
              </div>

              <Link
                href="/contato"
                className="mt-6 inline-flex rounded-xl bg-[#143987] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#143987]/20 transition hover:-translate-y-0.5 hover:bg-[#0f2c6a]"
              >
                Fale conosco
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-sm text-slate-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} MSM Industrial LTDA / Pedra Norte.
            Todos os direitos reservados.
          </p>

          <p>
            Desenvolvido por{" "}
            <span className="font-semibold text-[#8fb1ff]">João Pedro</span>
          </p>
        </div>
      </div>
    </footer>
  );
}