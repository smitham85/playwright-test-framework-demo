import type { Locator, Page } from '@playwright/test';
import { SearchComponent } from './index';

export class HomePage {
  // Properties
  readonly page: Page;
  readonly search: SearchComponent;

  // Constructor
  constructor(page: Page) {
    this.page = page;
    this.search = new SearchComponent(page);
  }

  // Methods
  async goto() {
    await this.page.goto('/');
  }
}
