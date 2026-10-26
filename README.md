# MSM Industrial / Pedra Norte — site institucional

Site institucional em Next.js 16 (App Router), React 19 e Tailwind CSS 4.

## Como rodar localmente

Pré-requisito: **Git LFS**. Sem ele, os vídeos de origem chegam como
arquivos-ponteiro de texto em vez do conteúdo real.

```bash
git lfs install          # uma vez por máquina
git clone https://github.com/nyxdk7/pedra-norte-site.git
cd pedra-norte-site
git switch davi/redesign-msm
npm ci
npm run dev              # http://localhost:3000
```

Se você já tinha clonado antes de o LFS existir no repositório:

```bash
git lfs install
git lfs pull
```

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

| Pasta | Conteúdo | Armazenamento |
| --- | --- | --- |
| `public/images/` | Fotografias de obras, logos, documentos | Git normal |
| `public/videos/` | Cortes de vídeo usados pelo site (MP4 + WebM, 1280 e 1920, com capa) | Git normal |
| `assets/source-videos/` | Vídeos brutos de drone/câmera, sem recompressão | **Git LFS** |

**Por que `public/` não está em LFS.** A Vercel não busca objetos Git LFS
durante o build. Se a mídia servida pelo site estivesse em LFS, o site
publicado entregaria o arquivo-ponteiro de texto no lugar do vídeo. Por isso
só os brutos — que o site não referencia — ficam em LFS.

### Vídeos de origem

Não são usados pelo site; estão versionados para o acervo e para gerar novos
cortes. Para obtê-los:

```bash
git lfs pull --include="assets/source-videos/*"
```

São ~628 MB. Para clonar sem baixá-los:

```bash
GIT_LFS_SKIP_SMUDGE=1 git clone https://github.com/nyxdk7/pedra-norte-site.git
```

## Estrutura

```
app/                 rotas (App Router)
components/
  home/              hero, história, mapa do ecossistema
  obras/             galeria de obras (fotos e vídeo)
  atuacoes/          painéis diagonais e região de detalhe
  ui/                botões, seções, banners compartilhados
public/              mídias servidas pelo site
assets/source-videos/  vídeos brutos (Git LFS)
```

O arquivo `MSM_Industrial_Design_DNA_Global_v1.json` guarda a referência de
design do projeto (paleta, tipografia, tokens).
