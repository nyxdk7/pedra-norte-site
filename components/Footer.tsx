import Image from "next/image";
import Link from "next/link";

const linksRapidos = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/obras", label: "Obras" },
  { href: "/contato", label: "Contato" },
];

const servicos = [
  "Engenharia civil",
  "Concreto usinado",
  "Pavimentação asfáltica",
  "Usinagem de asfalto",
  "Britas e agregados",
];

export function Footer() {
  return (
    <footer className="border-t border-[#dbe5ff] bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
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
            Empresa voltada para soluções em engenharia civil, atuando com
            estrutura, compromisso e qualidade em projetos, obras e
            fornecimentos.
          </p>
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
            {servicos.map((servico) => (
              <li key={servico} className="text-sm text-slate-300">
                {servico}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-[#8fb1ff]">
            Contato
          </h3>

          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <p>
              <strong className="block text-white">Sede administrativa</strong>
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

      <div className="border-t border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-sm text-slate-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} MSM Industrial LTDA. Todos os direitos
            reservados.
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