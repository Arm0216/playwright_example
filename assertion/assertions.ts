import {expect, Page} from "@playwright/test";
import AssertionsAbstract from "./assertions.abstract";

class Assertions extends AssertionsAbstract{
    constructor(page: Page) {
        super(page);
    }
    async verifyMoreButtonClick(): Promise<void>{
        await expect(this.page.url()).toContain('/about')
    }
}

export default Assertions