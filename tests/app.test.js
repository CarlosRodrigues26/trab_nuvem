const request = require("supertest");
const app = require("../src/app");

describe("Rotas principais", () => {
  test("GET / deve retornar HTML com status 200", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("<h1>Bem-vindo(a)!</h1>");
    expect(response.text).toContain("<html");
  });

  test("GET /sobre deve retornar HTML com status 200", async () => {
    const response = await request(app).get("/sobre");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("<h1>Sobre o Projeto</h1>");
  });

  test("GET /contato deve retornar HTML com status 200", async () => {
    const response = await request(app).get("/contato");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("<h1>Fale Conosco</h1>");
  });

  test("rota inexistente deve retornar 404", async () => {
    const response = await request(app).get("/rota-invalida");

    expect(response.statusCode).toBe(404);
  });
});
