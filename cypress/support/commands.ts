Cypress.Commands.add("visitVenues", () => {
  cy.visit("/venues");
});

Cypress.Commands.add("visitLogin", () => {
  cy.visit("/login");
});

Cypress.Commands.add("login", (email: string, password: string) => {
  cy.intercept("POST", "**/auth/login*").as("login");

  cy.get("input[type='email']").type(email);
  cy.get("input[type='password']").type(password);
  cy.get("button[type='submit']").contains("Login").click();

  cy.wait("@login");
  cy.wait(500);
});

Cypress.Commands.add("logout", () => {
  cy.get('[aria-label="User menu"]').eq(1).click();
  cy.get("button").contains("Logout").click();
  cy.wait(500);
});

Cypress.Commands.add("isLoggedIn", () => {
  cy.window().then((win) => {
    const storedState = win.localStorage.getItem("auth-storage");
    const parsedState = JSON.parse(storedState);
    const token = parsedState.state?.user?.accessToken;
    expect(token).to.be.a("string");
  });
});

Cypress.Commands.add("isLoggedOut", () => {
  cy.window().then((win) => {
    const storedState = win.localStorage.getItem("auth-storage");
    const parsedState = JSON.parse(storedState);
    const token = parsedState.state?.user?.accessToken;
    expect(token).to.be.undefined;
  });
});

Cypress.Commands.add("checkInvalidLoginError", () => {
  cy.get('[role="alert"]').should("contain.text", "Invalid email or password");
});

Cypress.Commands.add("search", (searchQuery) => {
  cy.intercept("GET", "**/holidaze/venues/search*").as("search");
  cy.get("input[type='search']").eq(1).type(searchQuery);
  cy.wait("@search");
});

Cypress.Commands.add("waitForVenues", () => {
  cy.wait("@getVenues");
});

Cypress.Commands.add("checkForVenues", (minCount = 1) => {
  cy.get(".grid-cols-list").children().should("have.length.greaterThan", minCount);
});

Cypress.Commands.add("checkForSingleVenue", () => {
  cy.url().should("include", "/venue/");
  cy.get("h1").should("exist");
});

Cypress.Commands.add("viewSingleVenue", () => {
  cy.intercept("GET", "**/holidaze/venues/*").as("singleVenue");
  cy.get(".grid-cols-list").children().first().click();
  cy.wait("@singleVenue");
});
