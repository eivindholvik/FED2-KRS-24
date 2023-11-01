describe("login", () => {
  it("can login", () => {
    cy.visit("index.html");
    cy.get("input#email").type(`eivind.hilvi@gr.sd`);
    cy.get("input#pw").type(`wefwefwef{enter}`);
    // cy.get(".cdx-search-input__end-button").click();
    // cy.get("h1").contains("pr");
    cy.get('h1').should('have.text', 'profile page');
  })
})