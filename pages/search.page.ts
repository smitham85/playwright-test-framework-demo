import type { Locator, Page } from '@playwright/test';

export class SearchPage {
  // Properties
  readonly page: Page;

  // Constructor
  constructor(page: Page) {
    this.page = page;
  }

  // Methods
  getSearchHeaderFor(product: string): Locator {
    const searchHeaderText = new RegExp(`^Search - ${product}`);
    return this.page.getByText(searchHeaderText);
  }
}
