import {Page} from "@playwright/test";

abstract class AssertionsAbstract{
    readonly page: Page;

    protected constructor(page: Page) {
        this.page = page;
    }

    abstract verifyMoreButtonClick(): Promise<void>
}

export default AssertionsAbstract