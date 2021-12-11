/// <reference types="cypress"/>

describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.intercept(
      {
        // hostname = https://api.realworld.io
        // path = /api/users
        // POST
        method: 'POST',
        path: '/api/users'
      },
      {
        statusCode: 200,
        fixture: 'cadastro-com-sucesso'

        // {
        // "user": {
        //   "email": "chapterXX@gmail.com",
        //  "username": "chapterXXXX",
        //  "bio": null,
        //  "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
        //  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoYXB0ZXJYWEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImNoYXB0ZXJYWFhYIiwiYmlvIjpudWxsLCJpbWFnZSI6Imh0dHBzOi8vYXBpLnJlYWx3b3JsZC5pby9pbWFnZXMvc21pbGV5LWN5cnVzLmpwZWciLCJpYXQiOjE2Mzg5MDk5ODUsImV4cCI6MTY0NDA5Mzk4NX0.W6PRPeFCe-ICWDr3MDEaoWqwRLau0S1rv15ohqYausU"
        // }
        //   }
      }
    ).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder=Username]').type('pao')
    cy.get('[placeholder=Email]').type('CalV@gmail.com')
    cy.get('[placeholder=Password]').type('123456')
    cy.get('button.btn-primary').click()
    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Cadastro com usuário já existente', () => {
    cy.intercept(
      {
        // hostname = https://api.realworld.io
        // path = /api/users
        // POST
        method: 'POST',
        path: '/api/users'
      },
      {
        statusCode: 422,
        fixture: 'cadastro-usuario-existente'

        // {
        // "user": {
        //   "email": "chapterXX@gmail.com",
        //  "username": "chapterXXXX",
        //  "bio": null,
        //  "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
        //  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoYXB0ZXJYWEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImNoYXB0ZXJYWFhYIiwiYmlvIjpudWxsLCJpbWFnZSI6Imh0dHBzOi8vYXBpLnJlYWx3b3JsZC5pby9pbWFnZXMvc21pbGV5LWN5cnVzLmpwZWciLCJpYXQiOjE2Mzg5MDk5ODUsImV4cCI6MTY0NDA5Mzk4NX0.W6PRPeFCe-ICWDr3MDEaoWqwRLau0S1rv15ohqYausU"
        // }
        //   }
      }
    ).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder=Username]').type('pao')
    cy.get('[placeholder=Email]').type('CalV@gmail.com')
    cy.get('[placeholder=Password]').type('123456')
    cy.get('button.btn-primary').click()
    cy.contains('username has already been taken').should('be.visible')
  })

  it.only('Cadastro com Email existente', () => {
    cy.intercept(
      {

        method: 'POST',
        path: '/api/users'
      },
      {
        statusCode: 422,
        fixture: 'cadastro-email-existente'

      }
    ).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder=Username]').type('Marcela')
    cy.get('[placeholder=Email]').type('CalV@gmail.com')
    cy.get('[placeholder=Password]').type('123456')
    cy.get('button.btn-primary').click()
    cy.contains('email has already been taken').should('be.visible')
  })
})
