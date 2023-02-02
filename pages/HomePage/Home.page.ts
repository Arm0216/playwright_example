import HomeAbstract from "./Home.abstract";
import {Page} from "@playwright/test";
import HomeSelectors from "../../selectors/HomeSelectors/HomeSelectors";

class HomePage extends HomeAbstract{
    constructor(page: Page) {
        super(page);
        this.homeSelectors = new HomeSelectors(page)
    }
    async scrollOnPortfolioArea(): Promise<void> {
        await this.homeSelectors.portfolioAreaLocator().scrollIntoViewIfNeeded()
    }

    async hoverOnPortfolio(index: number): Promise<void> {
        await this.homeSelectors.portfoliosLocator().nth(index).hover()
    }

    async clickOnPortfolio(index: number): Promise<void> {
        await this.homeSelectors.portfoliosLocator().nth(index).click()
    }

    async getUrlPathOfPortfolio(text: string): Promise<string> {
        return await this.homeSelectors.portfolioHoverText(text).getAttribute('href')
    }
}

export default HomePage