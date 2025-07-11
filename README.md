# Playwright Test Automation Framework Demo

This repository contains a demonstration test automation framework built with Playwright and TypeScript. It is designed to showcase best practices for testing a modern web application, including the use of the Page Object Model (POM).

---

## 🚀 Tech Stack

* **Framework:** [Playwright](https://playwright.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Test Runner:** Playwright Test
* **CI/CD:** GitHub Actions

---

## 🎯 Key Features

* **Page Object Model (POM):** Tests are organized using the Page Object Model for improved maintenance, readability, and scalability.
* **Cross-Browser Testing:** Configured to run tests across multiple browsers (Chromium, Firefox, WebKit) to ensure wide compatibility.
* **CI/CD Integration:** Includes a pre-configured GitHub Actions workflow (`.github/workflows/playwright.yml`) that automatically runs the test suite on every push and pull request.
* **Detailed Reporting:** Generates a comprehensive HTML report upon test completion for easy analysis of results and failures.

---

## 🛠️ Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/en/) (v18 or higher)
* [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone [https://github.com/smitham85/playwright-test-framework-demo.git](https://github.com/smitham85/playwright-test-framework-demo.git)
    ```
2.  Navigate to the project directory:
    ```bash
    cd playwright-test-framework-demo
    ```
3.  Install the necessary dependencies:
    ```bash
    npm install
    ```
4.  Install the Playwright browsers:
    ```bash
    npx playwright install
    ```

### Running the Tests

* To run all tests in headed mode across all configured browsers:
    ```bash
    npx playwright test --headed
    ```
* To run tests in a specific browser (e.g., Chromium):
    ```bash
    npx playwright test --project=chromium
    ```
* To view the HTML report after a test run:
    ```bash
    npx playwright show-report
    
