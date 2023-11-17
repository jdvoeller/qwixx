describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/');
    cy.boxByColorAndIndex('red', 0).should('be.visible');
    cy.boxByColorAndIndex('red', 0).click();
    cy.boxByColorAndIndex('red', 0).find('div').should('have.class', 'selected');
    cy.boxByColorAndIndex('red', 1).find('div').should('not.have.class', 'selected');
    cy.boxByColorAndIndex('red', 0).click();
    cy.boxByColorAndIndex('red', 0).find('div').should('not.have.class', 'selected');
    cy.boxByColorAndIndex('red', 0).click();
    cy.boxByColorAndIndex('red', 1).click();
    cy.boxByColorAndIndex('red', 2).click();
    cy.boxByColorAndIndex('red', 3).click();
    cy.boxByColorAndIndex('red', 4).click();
    cy.boxByColorAndIndex('blue', 5).click();
    cy.boxByColorAndIndex('blue', 6).click();
    cy.boxByColorAndIndex('blue', 7).click();
    cy.boxByColorAndIndex('blue', 8).click();
    cy.boxByColorAndIndex('blue', 9).click();

  })
})