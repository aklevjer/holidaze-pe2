declare namespace Cypress {
  interface Chainable {
    visitVenues(): Chainable<void>;
    visitLogin(): Chainable<void>;
    login(email: string, password: string): Chainable<void>;
    logout(): Chainable<void>;
    isLoggedIn(): Chainable<void>;
    isLoggedOut(): Chainable<void>;
    checkInvalidLoginError(): Chainable<void>;
    search(searchQuery: string): Chainable<void>;
    waitForVenues(): Chainable<void>;
    checkForVenues(minCount?: number): Chainable<void>;
    checkForSingleVenue(): Chainable<void>;
    viewSingleVenue(): Chainable<void>;
  }
}
