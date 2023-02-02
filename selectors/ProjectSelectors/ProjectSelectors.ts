import {Locator, Page} from "@playwright/test";

class ProjectSelectors {
    page: Page
    constructor(page:Page) {
        this.page = page
    }
    projectTitle(): Locator{
        return this.page.locator('[class="entry-title"]');
    }
}

export default ProjectSelectors