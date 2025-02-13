describe("Search", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/holidaze/venues*").as("getVenues");
    cy.visitVenues();
    cy.waitForVenues();
  });

  it("displays venues when search results are found", () => {
    cy.search("cabin");
    cy.checkForVenues();
  });
});
