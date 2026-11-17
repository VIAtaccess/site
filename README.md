# t-access

Site institucional e ranking de acessibilidade, em HTML estático, para publicar na Locaweb.

- `dist/` — raiz de `taccess.com.br`
- `dist/ranking/` — raiz do subdomínio `ranking.taccess.com.br`

## Publicar na Locaweb

1. `npm install` e `npm run build`
2. No painel da Locaweb, envie o conteúdo de `dist/` (sem a pasta `ranking`) para o diretório do domínio principal.
3. Crie o subdomínio `ranking.taccess.com.br` e aponte para uma pasta própria.
4. Envie o conteúdo de `dist/ranking/` para essa pasta.
5. Copie `contato.config.example.php` para `contato.config.php` nas duas pastas e troque pelo e-mail que deve receber os pedidos. Esse arquivo não entra no git.

O formulário usa `contato.php` e a função `mail` da hospedagem.

## Local

Node.js 20+.

```bash
npm install
npm run dev
```

Abre em `http://127.0.0.1:43147`. O ranking fica em `http://127.0.0.1:43147/ranking/`.
