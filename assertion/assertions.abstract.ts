import {Locator, Page} from "@playwright/test";
import HomeSelectors from "../selectors/HomeSelectors/HomeSelectors";
import ProjectSelectors from "../selectors/ProjectSelectors/ProjectSelectors";

abstract class AssertionsAbstract{
    readonly page: Page;
    protected homeSelectors: HomeSelectors
    protected projectSelectors: ProjectSelectors

    protected constructor(page: Page) {
        this.page = page;
    }

    abstract verifyPortfolioHoverTextVisibility(text: string): Promise<void>
    abstract verifyProjectTitle(text: string): Promise<void>

    abstract verifyPageUrl(path: string): Promise<void>
}

export default AssertionsAbstract