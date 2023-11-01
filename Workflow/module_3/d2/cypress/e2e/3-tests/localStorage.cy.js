describe("local storage", () => {
  it("store and access values", () => {
    cy.visit("index.html");
    const myEmail = "eivind.holvik@noroff.no";
    cy.get("input#email").type(myEmail);
    cy.get("input#pw").type(`wefwefwef{enter}`);
    cy.window().its("localStorage").invoke("getItem", "email").should("eq", myEmail)
  })
});