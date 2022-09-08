
describe('Test Weather API', () => {
  it('finds the content "Send"', () => {
    cy.visit('http://localhost:3000')
    

    cy.get('[data-cy="input_Textfield"]').type("Bucharest")

    cy.get('[data-cy="send_Button"]').click()

    cy.get('[data-cy="card_Label"]').should('be.visible')
  })
}) ,

describe('Test Reset Button', () => {
  it('finds the content "Send"', () => {
    cy.visit('http://localhost:3000')
    
    cy.get('[data-cy="input_Textfield"]').type("Bucharest")

    cy.get('[data-cy="send_Button"]').click()

    cy.get('[data-cy="card_Label"]').should('be.visible')

    cy.get('[data-cy="reset_Button"]').click()

    cy.get('[data-cy="card_Label"]').should("not.exist")
  })
}),

describe("Test POST Request", () => {
  it("Tests the post http request", () => {

    cy.intercept('http://api.weatherstack.com/current?access_key=cfd3ad17303f6603902b474daa1f3c6f&query=Bucharest', (req) => {
      req.continue((res) => {
        expect(res.body).to.include("temperature")
      })
    })
  })
})