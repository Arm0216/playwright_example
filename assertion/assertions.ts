import {expect, Locator, Page} from "@playwright/test";
import AssertionsAbstract from "./assertions.abstract";
import HomeSelectors from "../selectors/HomeSelectors/HomeSelectors";
import ProjectSelectors from "../selectors/ProjectSelectors/ProjectSelectors";

class Assertions extends AssertionsAbstract{
    constructor(page: Page) {
        super(page);
        this.homeSelectors = new HomeSelectors(page)
        this.projectSelectors = new ProjectSelectors(page)
    }

    async verifyPageUrl(path: string): Promise<void> {
        await expect(this.page.url()).toContain(path)
    }
    async verifyPortfolioHoverTextVisibility(text:string): Promise<void> {
        await expect(this.homeSelectors.portfolioHoverText(text)).toBeVisible()
    }

    async verifyProjectTitle(text: string): Promise<void> {
         await expect(this.projectSelectors.projectTitle()).toHaveText(text)
    }

}

export default Assertions