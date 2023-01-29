import HomeAbstract from "./Home.abstract";
import {expect, Page} from "@playwright/test";

class HomePage extends HomeAbstract{
    constructor(page: Page) {
        super(page);
        this.learnMoreButton = page.locator('a', { hasText: 'Learn More' });
    }
    async clickOnLearnMoreButton(): Promise<void> {
        await this.learnMoreButton.click()
    }
}

export default HomePage