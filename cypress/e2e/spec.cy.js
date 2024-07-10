describe('Visit Website Test', () => {
  it('Visits the website', () => {
    cy.visit('http://localhost:5173/');
  });
});