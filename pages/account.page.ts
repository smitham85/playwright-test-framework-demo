import type { Locator, Page } from '@playwright/test';
import { SearchComponent } from './index';

export class AccountPage {
  // Properties
  readonly page: Page;
  readonly search: SearchComponent;
  readonly myAccountHeader: Locator;

  // Constructor
  constructor(page: Page) {
    this.page = page;
    this.search = new SearchComponent(page);
    this.myAccountHeader = page.getByRole('heading', { name: 'My Account' });
  }
}
