import {Locator, Page} from "@playwright/test";
import HomeSelectors from "../../selectors/HomeSelectors/HomeSelectors";

abstract class HomeAbstract{
    readonly page: Page;
    protected homeSelectors: HomeSelectors
    protected constructor(page: Page) {
        this.page = page;
    }
    async goTo(): Promise<void>{
        await this.page.goto('/')
    }
    abstract scrollOnPortfolioArea(): Promise<void>
    abstract hoverOnPortfolio(index: number): Promise<void>
    abstract clickOnPortfolio(index: number): Promise<void>
    abstract getUrlPathOfPortfolio(text: string): Promise<string>

}

export default HomeAbstract