function renderHtml(title, heading, content) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <style>
      body { font-family: Arial, sans-serif; margin: 2rem; }
      h1 { color: #1f2937; }
      a { margin-right: 1rem; }
    </style>
  </head>
  <body>
    <nav>
      <a href="/">Início</a>
      <a href="/sobre">Sobre</a>
      <a href="/contato">Contato</a>
    </nav>
    <main>
      <h1>${heading}</h1>
      <p>${content}</p>
    </main>
  </body>
</html>`;
}

function home(req, res) {
  res.status(200).send(
    renderHtml(
      "Página Inicial",
      "Bem-vindo(a)!",
      "Esta é a rota principal da aplicação Node.js com modelo request-response."
    )
  );
}

function about(req, res) {
  res.status(200).send(
    renderHtml(
      "Sobre",
      "Sobre o Projeto",
      "Projeto acadêmico com Express, controllers e respostas HTML em múltiplas rotas."
    )
  );
}

function contact(req, res) {
  res.status(200).send(
    renderHtml(
      "Contato",
      "Fale Conosco",
      "Entre em contato pelo e-mail: exemplo@faculdade.com"
    )
  );
}

module.exports = {
  home,
  about,
  contact,
};
