# Holidaze

[![Automated Unit Testing](https://github.com/aklevjer/holidaze-pe2/actions/workflows/unit-test.yml/badge.svg)](https://github.com/aklevjer/holidaze-pe2/actions/workflows/unit-test.yml) [![Automated E2E Testing](https://github.com/aklevjer/holidaze-pe2/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/aklevjer/holidaze-pe2/actions/workflows/e2e-test.yml)

![Screen shot of the accommodation site](https://sinnsykt.net/screenshots/holidaze-screen.jpg)

An accommodation booking site where users can book and list venues.

## Description

This project was developed for Project Exam 2 at Noroff. The task was to create an accommodation booking site using the knowledge gained over the past two years.

Some of the features include the ability for users with @stud.noroff.no emails to register as either a customer or a venue manager. Customers can browse venues, make bookings, and manage them. Venue managers can create, update, and delete venues, as well as manage bookings for their listed venues.

Unregistered users can explore and search through venues but must register to make bookings or manage listings.

## Built With

- **React** for building the user interface.
- **TypeScript** for static typing and type safety.
- **React Router** for handling navigation and routing.
- **TanStack Query** and **Axios** for managing asynchronous data fetching and state.
- **Zustand** for global state management.
- **React Hook Form** and **Zod** for form handling and validation.
- **Tailwind CSS** for utility-based styling and responsive design.
- **Headless UI** for accessible, unstyled UI components.
- **Vite** for bundling and development.

## Getting Started

### Installing

1. Clone the repository:

```bash
git clone git@github.com:aklevjer/holidaze-pe2.git
```

2.  Install the dependencies:

```bash
npm install
```

### Setting Up Environment Variables

This project requires certain environment variables to run and test the application. Create a `.env` file in the root directory of the project and add the following variables:

```
VITE_API_BASE_URL=
VITE_API_KEY=
VITE_USER_EMAIL=
VITE_USER_PASSWORD=
```

**To obtain and configure the API URL and key:**

1. Visit the [Noroff API documentation](https://docs.noroff.dev/docs/v2) to obtain both the API URL and key.
2. Use the API URL and key as the values for `VITE_API_BASE_URL` and `VITE_API_KEY` in the `.env` file.

**For testing purposes:**

1. Run the application locally or visit the [deployed application](https://holidaze-ak.netlify.app).
2. Register a new user account if you don't have one already.
3. Use the registered email and password as the values for `VITE_USER_EMAIL` and `VITE_USER_PASSWORD` in the `.env` file.

### Running

To run the app in development mode, use the following command:

```bash
npm run dev
```

To build the app for production, use the following command:

```bash
npm run build
```

## Project Commands

### Running Tests

To run both unit and end-to-end tests:

```bash
npm run test
```

To run unit tests using Vitest:

```bash
npm run test-unit
```

To open Cypress for end-to-end testing in interactive mode:

```bash
npm run test-e2e
```

To run Cypress end-to-end tests in headless mode:

```bash
npm run test-e2e-cli
```

### Code Formatting and Linting

To format the code using Prettier:

```bash
npm run format
```

To lint the code using ESLint:

```bash
npm run lint
```

To fix linting issues using ESLint:

```bash
npm run lint-fix
```

## Contact

You can reach me on [LinkedIn](https://www.linkedin.com/in/aklevjer/).
