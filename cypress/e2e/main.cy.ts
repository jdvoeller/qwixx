describe('qwixx app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  })
  it('all rows show checkboxes upon click and points are correct', () => {
    cy.byDataType('total-score').should('be.visible');
    cy.byDataType('total-score').should('have.text', 0);

    // red
    cy.boxByColorAndIndex('red', 0).within(() => {
      cy.get('.box-container').should('not.have.class', 'selected');
    });
    cy.boxByColorAndIndex('red', 0).click();
    cy.boxByColorAndIndex('red', 0).within(() => {
      cy.get('.box-container').should('have.class', 'selected');
      cy.get('.box-container').should('not.have.css', 'background-color', 'grey');
    });

    // yellow
    cy.boxByColorAndIndex('yellow', 1).within(() => {
      cy.get('.box-container').should('not.have.class', 'selected');
      cy.get('.box-container').should('not.have.css', 'background-color', 'grey');
    });
    cy.boxByColorAndIndex('yellow', 1).click();
    cy.boxByColorAndIndex('yellow', 1).within(() => {
      cy.get('.box-container').should('have.class', 'selected');
    });
    cy.boxByColorAndIndex('yellow', 0).within(() => {
      cy.get('.box-container').should('have.css', 'background-color', 'rgb(128, 128, 128)');
    });

    // green
    cy.boxByColorAndIndex('green', 0).click();
    cy.boxByColorAndIndex('green', 1).click();
    cy.boxByColorAndIndex('green', 2).click();
    cy.boxByColorAndIndex('green', 3).click();

    // blue
    cy.boxByColorAndIndex('blue', 3).click();
    cy.boxByColorAndIndex('blue', 4).click();
    cy.boxByColorAndIndex('blue', 5).click();
    cy.boxByColorAndIndex('blue', 6).click();
    cy.boxByColorAndIndex('blue', 7).click();

    // check score
    cy.byDataType('total-score').should('have.text', 28);

    // check minus points
    cy.minusBoxByIndex(0).should('be.visible').should('not.have.text', 'X');
    cy.minusBoxByIndex(0).click();
    cy.minusBoxByIndex(0).should('be.visible').should('have.text', 'X');
    cy.byDataType('total-score').should('have.text', 23);
    cy.minusBoxByIndex(1).click();
    cy.minusBoxByIndex(2).click();
    cy.minusBoxByIndex(3).click();
    cy.byDataType('total-score').should('have.text', 8);

    // add more points check score and remove points check score
    cy.boxByColorAndIndex('blue', 7).click();
    cy.byDataType('total-score').should('have.text', 2);
    cy.boxByColorAndIndex('blue', 9).click();
    cy.byDataType('total-score').should('have.text', 8);

    // uncheck minus box and make sure 5 points added
    cy.minusBoxByIndex(3).click();
    cy.byDataType('total-score').should('have.text', 13);
  })

  it('last box and lock box should enable', () => {
    cy.boxByColorAndIndex('green', 10).within(() => {
      cy.get('.box-container').should('have.css', 'background-color', 'rgb(128, 128, 128)');
    });
    cy.boxByColorAndIndex('green', 11).within(() => {
      cy.get('.box-container').should('have.css', 'background-color', 'rgb(128, 128, 128)');
    });

    // Not clickable
    cy.boxByColorAndIndex('green', 10).click();
    cy.boxByColorAndIndex('green', 10).within(() => {
      cy.get('.box-container').should('not.have.class', 'selected');
      cy.get('.box-container').should('have.class', 'unselected');
    });
    cy.boxByColorAndIndex('green', 11).click();
    cy.boxByColorAndIndex('green', 11).within(() => {
      cy.get('.box-container').should('not.have.class', 'selected');
      cy.get('.box-container').should('have.class', 'unselected');
    });

    // check five boxes and make sure lock options are enabled for row
    cy.boxByColorAndIndex('green', 4).click();
    cy.boxByColorAndIndex('green', 5).click();
    cy.boxByColorAndIndex('green', 6).click();
    cy.boxByColorAndIndex('green', 7).click();
    cy.boxByColorAndIndex('green', 8).click();
    cy.boxByColorAndIndex('green', 10).within(() => {
      cy.get('.box-container').should('not.have.css', 'background-color', 'rgb(128, 128, 128)');
    });
    cy.boxByColorAndIndex('green', 11).within(() => {
      cy.get('.box-container').should('not.have.css', 'background-color', 'rgb(128, 128, 128)');
    });

    // clickable
    cy.boxByColorAndIndex('green', 10).click();
    cy.boxByColorAndIndex('green', 11).click();
    cy.boxByColorAndIndex('green', 10).within(() => {
      cy.get('.box-container').should('have.class', 'selected');
      cy.get('.box-container').should('not.have.class', 'unselected');

    });
    cy.boxByColorAndIndex('green', 11).within(() => {
      cy.get('.box-container').should('have.class', 'selected');
      cy.get('.box-container').should('not.have.class', 'unselected');
    });
  });

  it('should have 78 * 4 total score when all boxes are clicked', () => {
    cy.byDataType('total-score').should('have.text', 0);

    // click 'em all
    cy.boxByColorAndIndex('red', 0).click();
    cy.boxByColorAndIndex('red', 1).click();
    cy.boxByColorAndIndex('red', 2).click();
    cy.boxByColorAndIndex('red', 3).click();
    cy.boxByColorAndIndex('red', 4).click();
    cy.boxByColorAndIndex('red', 5).click();
    cy.boxByColorAndIndex('red', 6).click();
    cy.boxByColorAndIndex('red', 7).click();
    cy.boxByColorAndIndex('red', 8).click();
    cy.boxByColorAndIndex('red', 9).click();
    cy.boxByColorAndIndex('red', 10).click();
    cy.boxByColorAndIndex('red', 11).click();
    cy.boxByColorAndIndex('yellow', 0).click();
    cy.boxByColorAndIndex('yellow', 1).click();
    cy.boxByColorAndIndex('yellow', 2).click();
    cy.boxByColorAndIndex('yellow', 3).click();
    cy.boxByColorAndIndex('yellow', 4).click();
    cy.boxByColorAndIndex('yellow', 5).click();
    cy.boxByColorAndIndex('yellow', 6).click();
    cy.boxByColorAndIndex('yellow', 7).click();
    cy.boxByColorAndIndex('yellow', 8).click();
    cy.boxByColorAndIndex('yellow', 9).click();
    cy.boxByColorAndIndex('yellow', 10).click();
    cy.boxByColorAndIndex('yellow', 11).click();
    cy.boxByColorAndIndex('green', 0).click();
    cy.boxByColorAndIndex('green', 1).click();
    cy.boxByColorAndIndex('green', 2).click();
    cy.boxByColorAndIndex('green', 3).click();
    cy.boxByColorAndIndex('green', 4).click();
    cy.boxByColorAndIndex('green', 5).click();
    cy.boxByColorAndIndex('green', 6).click();
    cy.boxByColorAndIndex('green', 7).click();
    cy.boxByColorAndIndex('green', 8).click();
    cy.boxByColorAndIndex('green', 9).click();
    cy.boxByColorAndIndex('green', 10).click();
    cy.boxByColorAndIndex('green', 11).click();
    cy.boxByColorAndIndex('blue', 0).click();
    cy.boxByColorAndIndex('blue', 1).click();
    cy.boxByColorAndIndex('blue', 2).click();
    cy.boxByColorAndIndex('blue', 3).click();
    cy.boxByColorAndIndex('blue', 4).click();
    cy.boxByColorAndIndex('blue', 5).click();
    cy.boxByColorAndIndex('blue', 6).click();
    cy.boxByColorAndIndex('blue', 7).click();
    cy.boxByColorAndIndex('blue', 8).click();
    cy.boxByColorAndIndex('blue', 9).click();
    cy.boxByColorAndIndex('blue', 10).click();
    cy.boxByColorAndIndex('blue', 11).click();

    cy.byDataType('total-score').should('have.text', (78 * 4));
  })
})