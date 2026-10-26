# MSM Industrial / Pedra Norte — site institucional

Site institucional em Next.js 16 (App Router), React 19 e Tailwind CSS 4.

## Como rodar localmente

```bash
git clone https://github.com/nyxdk7/pedra-norte-site.git
cd pedra-norte-site
git switch davi/redesign-msm
npm ci
npm run dev              # http://localhost:3000
```

Não é preciso Git LFS: todas as mídias que o site usa estão versionadas
normalmente.

### Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento na porta 3000 |
| `npm run build` | Build de produção |
| `npm start` | Serve o build de produção |
| `npm run lint` | ESLint |

No Windows há o atalho `abrir-site.bat`: dois cliques pelo Explorador sobem o
site e abrem o navegador. Rodar por ali (e não pelo terminal do editor) faz o
servidor continuar de pé quando o editor fecha.

## Onde ficam as mídias

| Pasta | Conteúdo | No Git? |
| --- | --- | --- |
| `public/images/` | Fotografias de obras, logos, documentos | Sim |
| `public/videos/` | Cortes usados pelo site (MP4 + WebM, 1280 e 1920, com capa) | Sim |
| `assets/source-videos/` | Vídeos brutos de drone/câmera | **Não** — ver abaixo |

Tudo que o site serve está no repositório: basta clonar e rodar.

### Vídeos brutos de origem

Os arquivos originais de drone e câmera (~628 MB, três arquivos entre 189 e
223 MB) **não estão no Git**. Cada um ultrapassa o limite rígido de 100 MB por
arquivo do GitHub, e colocá-los em Git LFS consumiria a cota de armazenamento
e de banda da conta dona do repositório.

Eles são entregues fora do Git (OneDrive, Drive ou disco) e devem ser
colocados em `assets/source-videos/`, que já está no `.gitignore`. O site **não
depende deles** — os cortes prontos estão em `public/videos/`.

## Estrutura

```
app/                 rotas (App Router)
components/
  home/              hero, história, mapa do ecossistema
  obras/             galeria de obras (fotos e vídeo)
  atuacoes/          painéis diagonais e região de detalhe
  ui/                botões, seções, banners compartilhados
public/              mídias servidas pelo site
assets/source-videos/  vídeos brutos (fora do Git)
```

O arquivo `MSM_Industrial_Design_DNA_Global_v1.json` guarda a referência de
design do projeto (paleta, tipografia, tokens).
