import {test} from "../fixtures/fixtures.spec";

test.describe('Home page functionality', ()=>{
    test.beforeEach(async ({page, context, homePage, common})=>{
        // const b = [
        //     {
        //         name: "auth._token.laravelSanctum",
        //         value: 'true',
        //         domain: 'stage.dlns.us',
        //         path: "/"
        //     }
        // ]
        await homePage.goTo()
        // await context.clearCookies();
        // await common.login()
        // await context.addCookies(b)
        // await page.reload()
    })

    test('Navigate to home page', async ({homePage, assertion})=>{
        await homePage.clickOnLearnMoreButton();
        await assertion.verifyMoreButtonClick();
    })
})