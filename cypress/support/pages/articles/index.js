const el = require('./elements').ELEMENTS

const articlename = 'Artigo de teste' + new Date().getTime()
class Articles {
  acessarFormulatrio () {
    cy.get(el.linkNovoArtigo).click()
  }

  preencherFormulario () {
    cy.get(el.inputTitle).type(articlename)
    cy.get(el.inputDescription).type('Teste')
    cy.get(el.inputBody).type(
      'Treinamento para dominar automação de teste com cypress'
    )
    cy.get('[ng-model$=tagField]').type('Cypress')
  }

  enviarFormulario () {
    cy.contains('button', 'Publish Article').click()
  }

  verificarFormularioFoiCriado () {
    cy.contains(articlename).should('be.visible')
    cy.get('h1').should('have.text', articlename)
  }
}
export default new Articles()
