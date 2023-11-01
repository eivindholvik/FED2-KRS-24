describe("no.wikipedia.org", () => {
  it("can search for Noroff", () => {
    cy.visit("https://no.wikipedia.org");
    cy.get("input#searchInput").type(`Noroff`);
    cy.get(".cdx-search-input__end-button").click();
    cy.get('h1').contains("Noroff")
  })
})
