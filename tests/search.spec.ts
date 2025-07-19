import { test, expect } from '@playwright/test';
import { HomePage, SearchPage } from '../pages';

test.describe('Product Search', () => {
  let homePage: HomePage;
  let searchPage: SearchPage;
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

  // Go to the home page before each test
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    searchPage = new SearchPage(page);
    await homePage.goto();
  });
  test('should find a product using the search bar', async ({ page }) => {
    // Arrange
    const productName = 'MacBook';

    // Act
    await homePage.search.searchFor(productName);

    // Assert
    await expect(searchPage.getSearchHeaderFor(productName)).toBeVisible();
  });
});
