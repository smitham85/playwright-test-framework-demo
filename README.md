# Playwright Test Automation Framework Demo

This repository contains a demonstration test automation framework built with Playwright and TypeScript. It is designed to showcase best practices for testing a modern e-commerce web application, including the use of the Page Object Model (POM), the Component Object Model for shared UI elements, environment variables for sensitive data, and CI/CD integration.

---

## 🚀 Tech Stack

- **Framework:** [Playwright](https://playwright.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Test Runner:** Playwright Test
- **CI/CD:** GitHub Actions
- **Environment Variables:** [dotenv](https://www.npmjs.com/package/dotenv)

---

## 🎯 Key Features & Patterns

- **Page Object Model (POM):** All page-specific locators and interactions are encapsulated in page classes (`/pages`) for improved maintenance and readability.
- **Component Object Model:** Shared UI elements, like the search widget, are encapsulated in their own component classes (`/pages/components`) and composed within page objects. This follows the **Don't Repeat Yourself (DRY)** principle and makes the framework highly scalable.
- **Test Suites:** Tests are organized by feature into separate spec files (`/tests`), covering Authentication and Product Search functionalities.
- **Secure Credential Management:** User credentials are kept out of the codebase and managed securely using a `.env` file.
- **CI/CD Integration:** Includes a pre-configured GitHub Actions workflow that automatically runs the full test suite on every push and pull request.
- **Detailed Reporting:** Generates a comprehensive HTML report upon test completion, including traces and screenshots for failed tests, allowing for easy analysis and debugging.

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/smitham85/playwright-test-framework-demo.git](https://github.com/smitham85/playwright-test-framework-demo.git)
    cd playwright-test-framework-demo
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Install Playwright browsers:**
    ```bash
    npx playwright install
    ```
4.  **Create an environment file:**
    - Create a file named `.env` in the root of the project.
    - Add your test user credentials to this file:
      ```
      TEST_USER_EMAIL="your-email@example.com"
      TEST_USER_PASSWORD="your-secure-password"
      ```

### Running the Tests

- **Run all tests:**
  ```bash
  npx playwright test
  ```
- **Run tests in a specific browser:**
  ```bash
  npx playwright test --project=chromium
  ```
- **View the HTML report:**
  ```bash
  npx playwright show-report

  ```
