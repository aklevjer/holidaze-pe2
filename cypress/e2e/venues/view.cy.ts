describe("View Venues", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/holidaze/venues*").as("getVenues");
    cy.visitVenues();
    cy.waitForVenues();
  });

  it("displays initial venues on page load", () => {
    cy.checkForVenues();
  });

  it("shows the details of a single venue upon clicking", () => {
    cy.viewSingleVenue();
    cy.checkForSingleVenue();
  });
});
