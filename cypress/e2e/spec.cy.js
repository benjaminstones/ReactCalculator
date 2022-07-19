describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:3000/ReactCalculator')
    cy.contains('4').click();
    cy.contains('5').click();
    cy.contains('+').click();
    cy.contains('6').click();
    cy.contains('=').click();
    cy.contains('45+6=')
    cy.contains('51')
  })
  
})