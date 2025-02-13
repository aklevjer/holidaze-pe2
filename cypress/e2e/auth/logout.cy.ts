describe("Logout", () => {
  beforeEach(() => {
    cy.visitLogin();
  });

  it("logs the user out with the logout button", () => {
    cy.login(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"));
    cy.isLoggedIn();
    cy.logout();
    cy.isLoggedOut();
  });
});
