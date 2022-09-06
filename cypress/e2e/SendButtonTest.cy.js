describe('Test Weather API', () => {
  it('finds the content "Send"', () => {
    cy.visit('http://localhost:3000')
    

    cy.get(".cityField").type("Bucharest")

    cy.get(".send_Button").click()

    cy.get(".cardLabel").should('be.visible')
  })
}) ,

describe('Test Reset Button', () => {
  it('finds the content "Send"', () => {
    cy.visit('http://localhost:3000')
    

    cy.get(".cityField").type("Bucharest")

    cy.get(".send_Button").click()

    cy.get(".cardLabel").should('be.visible')

    cy.get(".reset_Button").click()

    cy.get(".cardLabel").should("not.exist")
  })
})