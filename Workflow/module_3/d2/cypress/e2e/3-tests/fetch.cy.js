describe("fetch", () => {
  it("can wait for fetched data", () => {
    cy.intercept("https://jsonplaceholder.typicode.com/posts").as("posts");
    cy.visit("profile.html");
    cy.wait("@posts");
    cy.get('.container li').should('have.length.gt', 2)
  })
});