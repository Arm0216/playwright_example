import {Locator, Page} from "@playwright/test";

abstract class HomeAbstract{
    protected learnMoreButton: Locator
    readonly page: Page;
    protected constructor(page: Page) {
        this.page = page;
    }
    async goTo(): Promise<void>{
        await this.page.goto('/')
    }
    abstract clickOnLearnMoreButton(): Promise<void>
}

export default HomeAbstract