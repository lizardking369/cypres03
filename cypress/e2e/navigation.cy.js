/// <reference types ="Cypress"/>



describe("page mavigation",()=>{

    it('Visits the website', () => {
        cy.visit('http://localhost:5173/');
        cy.get('[data-cy="header-about-link"]').click()
        cy.location("pathname").should("eq",'/about')
             console.log(cy.location("pathname"));
             cy.location().then((loc) => {
                console.log(loc.pathname);
            });
            cy.go("back")
            cy.location("pathname").should("eq",'/')
        cy.get('[data-cy="header-home-link"]').click()    
        cy.location("pathname").should("eq",'/')







      });
  

});