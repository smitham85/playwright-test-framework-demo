import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { AccountPage, LoginPage } from '../pages';

test.describe('Authentication', () => {
  let loginPage: LoginPage;
  let accountPage: AccountPage;
  const email = process.env.TEST_USER_EMAIL;
  const password = process.env.TEST_USER_PASSWORD;
  // Runs once before all tests in this file and ensures the environment variables are set
  test.beforeAll(() => {
    if (!email || !password) {
      throw new Error(
        'Test environment variables (TEST_USER_EMAIL, TEST_USER_PASSWORD) not set. Please create a .env file.'
      );
    }
  });

  // Navigate to the login page before each
  test.beforeEach(async ({ page }) => {
    accountPage = new AccountPage(page);
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });
  test('should allow a user to log in with valid credentials', async ({
    page,
  }) => {
    // Act
    await loginPage.login(email!, password!);

    // Assert
    await expect(page).toHaveURL(/route=account\/account/);
    await expect(accountPage.myAccountHeader).toBeVisible();
  });

  test('should show an error message with invalid credentials', async ({
    page,
  }) => {
    // Arrange
    const invalidEmail = faker.internet.email();
    const invalidPassword = faker.internet.password();

    // Act
    await loginPage.login(invalidEmail, invalidPassword);

    // Assert
    await expect(loginPage.invalidLoginError).toBeVisible();
    await expect(loginPage.invalidLoginError).toContainText(
      'Warning: No match for E-Mail Address and/or Password.'
    );
  });
});
