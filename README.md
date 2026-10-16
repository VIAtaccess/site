# t-access — DevSecOps & QA Accessibility Infrastructure

Landing executiva da t-access: blindagem jurídica contra TACs e passivos da LBI, validador VIA, laudos periciais SHA-256, ABNT NBR 17255 e WCAG 2.2.

Repositório: [github.com/VIAtaccess/site](https://github.com/VIAtaccess/site)

O GitHub Pages publica em [viataccess.github.io/site](https://viataccess.github.io/site/) a cada push em `main`.

## Rodar localmente

Pré-requisito: Node.js 20+.

```bash
npm install
npm run dev
```

Abre em `http://127.0.0.1:43147`.

Build de produção:

```bash
npm run build
npm start
```

O servidor escuta em `PORT` (padrão `43147`) e responde `ok` em `/healthz`.

## Deploy no Railway

O repositório já inclui `Dockerfile`, `Caddyfile` e `railway.json`.

1. Instale a CLI: `npm i -g @railway/cli`
2. Autentique: `railway login` (ou exporte `RAILWAY_TOKEN`)
3. No diretório do projeto:

```bash
railway init
railway up
railway domain
```

A partir do [dashboard](https://railway.app/new), conecte o repositório Git e o Railway usa o Dockerfile automaticamente.

Variável opcional: `PORT` (Railway injeta sozinho).
