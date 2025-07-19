import type { Locator, Page } from '@playwright/test';

export class SearchComponent {
  // Properties
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  // Constructor
  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByRole('textbox', {
      name: 'Search For Products',
    });
    this.searchButton = page.getByRole('button', { name: 'Search' });
  }

  // Methods
  async searchFor(product: string) {
    await this.searchInput.fill(product);
    await this.searchButton.click();
  }
}
