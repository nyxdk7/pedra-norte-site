import Image from "next/image";
import { Overpass, Source_Serif_4 } from "next/font/google";
import styles from "./NossaHistoriaRedesign.module.css";

// Mesmas fontes usadas pela seção Nossa História no redesign do Davi.
// Isoladas neste componente: não alteram a tipografia nem o layout do site principal.
const fonteInterface = Overpass({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--pn-historia-overpass",
});
const fonteEditorial = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--pn-historia-source-serif",
});

const historiaFotos = [
  {
    foto: "/images/home/historia/waldomiro-soster-caminhao.jpg",
    alt: "Waldomiro Soster em frente ao seu caminhão Mercedes-Benz, ao lado de uma pilha de madeira serrada",
    legenda: "Waldomiro Soster, patriarca da família e idealizador da Pedra Norte.",
    proporcao: "1104/676",
  },
  {
    foto: "/images/home/historia/abertura-estrada-floresta.jpg",
    alt: "Motoniveladoras, scrapers e pá carregadeira na terraplenagem de uma estrada de terra aberta em meio à floresta amazônica",
    legenda: "Frente de terraplenagem na abertura de estrada em meio à floresta.",
    proporcao: "1078/713",
  },
  {
    foto: "/images/home/historia/assinatura-br-364.webp",
    alt: "Cinco homens lado a lado seguram o documento assinado das ordens de serviço da BR-364 durante a cerimônia",
    legenda: "Assinatura das ordens de serviço da BR-364/AC, em Rio Branco.",
    proporcao: "1920/1080",
  },
  {
    foto: "/images/home/historia/novas-carregadeiras-komatsu.jpg",
    alt: "Dois homens seguram uma chave simbólica da Komatsu entre duas pás carregadeiras amarelas na pedreira, com pilhas de brita ao fundo",
    legenda: "Entrega das novas pás carregadeiras Komatsu WA500 e WA470 na pedreira.",
    proporcao: "1280/591",
  },
] as const;

const historiaAbertura =
  "Uma das maiores empresas de mineração da região amazônica, a Pedra Norte nasceu da determinação e da força de vontade de uma família catarinense que escolheu, há mais de 40 anos, o Acre para viver, gerar empregos e contribuir com a economia local.";

const historiaParagrafos = [
  "Inspirada pela visão de Waldomiro Soster, patriarca da família, a empresa iniciou suas atividades em 1986, ainda sob outra proposta de atuação, mas com o mesmo compromisso de fortalecer o desenvolvimento do Acre.",
  "Naquela primeira iniciativa já estava a origem do que hoje é a Pedra Norte. Mais do que uma mineradora que fornece produtos, a empresa agrega valor por meio de uma ampla gama de serviços, reúne centenas de colaboradores e atende clientes de diferentes regiões do país.",
  "Com uma atuação diversificada, a Pedra Norte mantém sua unidade de mineração em Rondônia e sua sede administrativa em Rio Branco, capital do Acre.",
  "Além da mineração, sua principal atividade, a empresa também fornece produtos e insumos para a construção civil e a infraestrutura, como concreto usinado, pó de brita e outros materiais derivados de sua produção mineral.",
  "Conduzida por um grupo familiar tão sólido quanto sua trajetória, a Pedra Norte conta em sua gestão com o idealizador Waldomiro Soster, seus filhos e netos.",
];

const historiaContinua = [
  "Em 8 de agosto de 2025, em Rio Branco, Jarbas Soster, diretor de expansão, assinou as ordens de serviço para a manutenção e recuperação da BR-364/AC — 286,7 quilômetros divididos em quatro lotes de obras. A cerimônia reuniu o presidente Luiz Inácio Lula da Silva, o ministro dos Transportes, Renan Filho, e o diretor de Infraestrutura Rodoviária do DNIT, Fábio Nunes.",
  "A BR-364 é a única ligação rodoviária entre Rio Branco e Cruzeiro do Sul: é por ela que passam o abastecimento, a produção e as pessoas de boa parte do estado. Estar na recuperação desse trecho é estar na obra que mais pesa no desenvolvimento do Acre.",
  "Ainda em 2025, Dantas Soster, diretor de operações, ampliou o parque de máquinas da MSM Industrial/Pedra Norte com novos equipamentos pesados, fortalecendo a capacidade produtiva e a eficiência da pedreira.",
  "O investimento representa um avanço estratégico na estrutura operacional da empresa, consolidando sua capacidade técnica para atender grandes obras de infraestrutura e contribuir para o desenvolvimento da região.",
];


/**
 * Reprodução fiel do componente NossaHistoria.tsx da branch davi/redesign-msm,
 * com suas proporções, tipografia e comportamento responsivo isolados em CSS Module.
 * Sem alinhamentos artificiais entre fotos e parágrafos.
 */
export function NossaHistoriaRedesign() {
  return (
    <section
      id="historia"
      aria-labelledby="historia-titulo"
      className={`${styles.secao} ${fonteInterface.variable} ${fonteEditorial.variable}`}
    >
      <div className={styles.container}>
        <div className={styles.introducao}>
          <p className={styles.sobretitulo}>Nossa história</p>
          <h2 id="historia-titulo" className={styles.titulo}>
            Uma família catarinense que escolheu o Acre.
          </h2>
          <p lang="pt-BR" className={styles.abertura}>
            {historiaAbertura}
          </p>
        </div>

        <div className={styles.grade}>
          {/* Arquivo fotográfico do redesign: 4 fotografias em suas proporções originais */}
          <div className={styles.fotos}>
            {historiaFotos.map((retrato) => (
              <figure key={retrato.foto}>
                <div className={styles.moldura} style={{ aspectRatio: retrato.proporcao }}>
                  <Image
                    src={retrato.foto}
                    alt={retrato.alt}
                    fill
                    sizes="(max-width: 1023px) calc(100vw - 2 * var(--gutter)), min(42vw, 620px)"
                    className="object-cover"
                  />
                </div>
                <figcaption className={styles.legenda}>
                  <span aria-hidden="true" className={styles.traco} />
                  {retrato.legenda}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className={styles.colunaTexto}>
            <div lang="pt-BR" className={styles.prosa}>
              {historiaParagrafos.map((paragrafo) => (
                <p key={paragrafo.slice(0, 32)}>{paragrafo}</p>
              ))}
            </div>

            <div lang="pt-BR" className={styles.continua}>
              <p className={styles.rotuloContinua}>
                <span aria-hidden="true" className={styles.traco} />
                A história continua
              </p>
              <div className={styles.prosa}>
                {historiaContinua.map((paragrafo) => (
                  <p key={paragrafo.slice(0, 32)}>{paragrafo}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
