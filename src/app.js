const express = require("express");
const siteRoutes = require("./routes/siteRoutes");

const app = express();

app.use(siteRoutes);

app.use((req, res) => {
  res.status(404).send("<h1>404 - Página não encontrada</h1>");
});

module.exports = app;
