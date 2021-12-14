/// <reference types="cypress"/>

import articles from "../support/pages/articles";

describe("Validar cenário de login", () => {
  beforeEach(() => {
    cy.visit("register");
  });

  it("Clicar no botão Sign in com os campos vazios", () => {
    cy.intercept(
      {
        method: "POST",
        path: "/api/users",
      },
      {
        statusCode: 422,
        fixture: "cadastro-usuario-sem-dados",
      }
    ).as("postUsers");
    articles.tentarCriarContaComDadosVazio;
  });

  it("Preencher o campo Nome e clicar no botão Sign in", () => {
    cy.intercept(
      {
        method: "POST",
        path: "/api/users",
      },
      {
        statusCode: 422,
        fixture: "cadastro-usuario-sem-dados",
      }
    ).as("postUsers");
    articles.tentarCriarContaApenasComNome();
  });

  it("Preencher o campo Email e clicar no botão Sign in", () => {
    cy.intercept(
      {
        method: "POST",
        path: "/api/users",
      },
      {
        statusCode: 422,
        fixture: "cadastro-usuario-sem-dados",
      }
    ).as("postUsers");

    articles.preencherCampoEmail();
  });

  it("Preencher com usuário já cadastrado", () => {
    cy.intercept(
      {
        method: "POST",
        path: "/api/users",
      },
      {
        statusCode: 422,
        fixture: "cadastro-usuario-existente",
      }
    ).as("postUsers");
    articles.tentarCriarContaUsuarioExistente();
  });

  it("Preencher com email já cadastrado", () => {
    cy.intercept(
      {
        method: "POST",
        path: "/api/users",
      },
      {
        statusCode: 422,
        fixture: "cadastro-email-existente",
      }
    ).as("postUsers");
    articles.tentarCriarContaEmailExistente();
  });

  it("Preencher com email e usuário já cadastrado", () => {
    cy.intercept(
      {
        method: "POST",
        path: "/api/users",
      },
      {
        statusCode: 422,
        fixture: "cadastro-email-usuario-existente",
      }
    ).as("postUsers");
    articles.tentarCriarContaEmaiusuarioCadastrado();
  });

  it(" Preencher email e senha válidos e clicar no botão Sign in", () => {
    cy.intercept(
      {
        method: "POST",
        path: "/api/users",
      },
      {
        statusCode: 200,
        fixture: "cadastro-com-sucesso",
      }
    ).as("postUsers");
    articles.criarContaDadosCorreto();
  });

  it(" Preencher email e senha válidos e pressionar Enter", () => {
    cy.intercept(
      {
        method: "POST",
        path: "/api/users",
      },
      {
        statusCode: 200,
        fixture: "cadastro-com-sucesso",
      }
    ).as("postUsers");

    articles.criarContaDadosCorretoConfirmandoComEnter();
  });
});
