const el = require("./elements").ELEMENTS;

const articlename = "Artigo de teste" + new Date().getTime();
class Articles {
  acessarFormulatrio() {
    cy.get(el.linkNovoArtigo).click();
  }

  preencherFormulario() {
    cy.get(el.inputTitle).type(articlename);
    cy.get(el.inputDescription).type("Teste");
    cy.get(el.inputBody).type(
      "Treinamento para dominar automação de teste com cypress"
    );
    cy.get("[ng-model$=tagField]").type("Cypress");
  }

  enviarFormulario() {
    cy.contains("button", "Publish Article").click();
  }

  verificarFormularioFoiCriado() {
    cy.contains(articlename).should("be.visible");
    cy.get("h1").should("have.text", articlename);
  }

  preencherCampoEmail(){
    cy.get("[placeholder=Email]").type("CalV@gmail.com");
    cy.get("button.btn-primary").click();
    cy.contains("email can't be blank").should("be.visible");

  }
  
  tentarCriarContaComDadosVazio(){
    cy.get().click();
    cy.contains("email can't be blank").should("be.visible");
  }
  
  tentarCriarContaApenasComNome(){
    cy.get("[placeholder=Username]").type("Mel");
    cy.get("button.btn-primary").click();
    cy.contains("email can't be blank").should("be.visible");
  }
  tentarCriarContaUsuarioExistente(){
    cy.get("[placeholder=Username]").type("pao");
    cy.get("[placeholder=Email]").type("CalV@gmail.com");
    cy.get("[placeholder=Password]").type("123456");
    cy.get("button.btn-primary").click();
    cy.contains("username has already been taken").should("be.visible");
  }
  tentarCriarContaEmailExistente(){
    cy.get("[placeholder=Username]").type("Marcela");
    cy.get("[placeholder=Email]").type("CalV@gmail.com");
    cy.get("[placeholder=Password]").type("123456");
    cy.get("button.btn-primary").click();
    cy.contains("email has already been taken").should("be.visible");
  }
  tentarCriarContaEmaiusuarioCadastrado(){
    cy.get("[placeholder=Username]").type("Marcela");
    cy.get("[placeholder=Email]").type("CalV@gmail.com");
    cy.get("[placeholder=Password]").type("123456");
    cy.get("button.btn-primary").click();
    cy.contains("email has already been taken").should("be.visible");
    cy.contains("username has already been taken").should("be.visible");
  }
  criarContaDadosCorreto(){
    cy.get("[placeholder=Username]").type("pao");
    cy.get("[placeholder=Email]").type("CalV@gmail.com");
    cy.get("[placeholder=Password]").type("123456");
    cy.get("button.btn-primary").click();
    cy.contains("No articles are here... yet.").should("be.visible");
  }
  criarContaDadosCorretoConfirmandoComEnter(){
    cy.get("[placeholder=Username]").type("pao");
    cy.get("[placeholder=Email]").type("CalV@gmail.com");
    cy.get("[placeholder=Password]").type("123456 {enter}");
    cy.contains("No articles are here... yet.").should("be.visible");
  }
}
export default new Articles();
