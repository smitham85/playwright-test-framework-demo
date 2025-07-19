import type { Locator, Page } from '@playwright/test';

export class LoginPage {
  // Properties
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly invalidLoginError: Locator;

  // Constructor
  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByPlaceholder('E-Mail Address');
    this.passwordInput = page.getByPlaceholder('Password');
    this.submitButton = page.getByRole('button', { name: 'Login' });
    this.invalidLoginError = page.locator('.alert-danger');
  }

  // Methods
  async goto() {
    await this.page.goto('/index.php?route=account/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.page.waitForLoadState('networkidle');
    await this.submitButton.click();
  }
}
