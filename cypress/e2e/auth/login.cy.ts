describe("Login", () => {
  beforeEach(() => {
    cy.visitLogin();
  });

  it("allows the user to login with valid credentials", () => {
    cy.login(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"));
    cy.isLoggedIn();
  });

  it("shows an error message when attempting to login with invalid credentials", () => {
    cy.login("invalid@stud.noroff.no", "invalidpassword123");
    cy.checkInvalidLoginError();
  });
});
