/* eslint-disable no-undef */
describe('My First Test', () => {
	it('Performs a single addition', () => {
		cy.visit('http://localhost:3000/ReactCalculator')
		cy.contains('4').click();
		cy.contains('5').click();
		cy.contains('+').click();
		cy.contains('6').click();
		cy.contains('=').click();
		cy.get('[data-cy="expression"]').contains('45+6=')
		cy.get('[data-cy="total"]').contains('51')
	})
  
})