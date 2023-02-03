import { Locator, Page } from '@playwright/test';

class HomeSelectors {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    portfolioAreaLocator(): Locator {
        return this.page.locator('[class*="portfolio puzzle"]');
    }

    portfoliosLocator(): Locator {
        return this.portfolioAreaLocator().locator('article');
    }

    portfolioHoverText(text?: string): Locator {
        return this.portfolioAreaLocator().locator('.project_inner a', { hasText: text });
    }
}

export default HomeSelectors;
