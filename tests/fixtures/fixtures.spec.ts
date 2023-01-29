import { test as base } from "@playwright/test";
import HomeAbstract from "../../pages/HomePage/Home.abstract";
import HomePage from "../../pages/HomePage/Home.page";
import Common from "../../common/Common";
import CommonInterface from "../../common/Common.interface";
import AssertionsAbstract from "../../assertion/assertions.abstract";
import Assertions from "../../assertion/assertions";

type FixturesType = {
    homePage: HomeAbstract
    common: CommonInterface
    assertion: AssertionsAbstract
}
export const test = base.extend<FixturesType>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    common: async ({ context }, use) => {
        await use(new Common(context));
    },

    assertion: async ({page}, use) => {
        await use(new Assertions(page))
    }
});
