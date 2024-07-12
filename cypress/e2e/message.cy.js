/// <reference types ="Cypress"/>

import { disable } from "express/lib/application"

describe('contact form',()=>{
    // it("should visit and submit the contact form",()=>{
    //     cy.visit("http://localhost:5173/about")
    //     cy.get('[data-cy="contact-input-message"]').type("hello{enter}word")
    //     cy.get('[data-cy="contact-input-name"]').type("this is boby brown")
    //     cy.get('[data-cy="contact-input-email"]').type("boby@gmail.com")
    //     // cy.get('[data-cy="contact-btn-submit"]').should("not.have.attr","disabled").contains("Send Message")
    //     // cy.get('[data-cy="contact-btn-submit"]').click()
    //     cy.get('[data-cy="contact-btn-submit"]').then((ele)=>{
    //        expect(ele.attr("disabled")).to.be.undefined
    //        expect(ele.text()).to.be.eq("Send Message")
    //     })
    //     cy.get('[data-cy="contact-btn-submit"]').click()
    //     cy.get('[data-cy="contact-btn-submit"]').contains("Sending")
    //     cy.get('[data-cy="contact-btn-submit"]').should("have.attr","disabled")
    //     // cy.get('[data-cy="contact-btn-submit"]').as("subBtn")
    //     // cy.get('[data-cy="contact-input-message"]').clear().type("hello{enter}word")
    //     // cy.get('[data-cy="contact-input-name"]').clear().type("now with subBtn")
    //     // cy.get('[data-cy="contact-input-email"]').clear().type("boby@gmail.com")
    //     // cy.get("@subBtn").click();
    //     // cy.get('@subBtn').contains("Sending").should("have.attr","disabled")
   
    //    })
        it("should check validation",()=>{
            cy.visit("http://localhost:5173/about")
            cy.get('[data-cy="contact-btn-submit"]').as("subBtn")
            cy.get("@subBtn").click()
    })  





})