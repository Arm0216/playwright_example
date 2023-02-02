import {test} from "../fixtures/fixtures.spec";
const parameters: JSON = require('./test_parameters.json')


test.describe('Home page functionality', ()=>{
    test.beforeEach(async ({homePage})=>{
        await homePage.goTo()
    })

    test('Verify portfolios hover functionality', async ({homePage, assertion, common})=>{
        await homePage.scrollOnPortfolioArea();
        for (const {index, value} of common.getLoopIndexAndValue(parameters['portfolios'])){
            await homePage.hoverOnPortfolio(index)
            await assertion.verifyPortfolioHoverTextVisibility(value)
        }
    })

    parameters['portfolios'].forEach((value, index)=>{
        test(`Verify ${value} portfolio click functionality`, async ({homePage, assertion})=>{
            const url = await homePage.getUrlPathOfPortfolio(value)
            await homePage.scrollOnPortfolioArea();
            await homePage.clickOnPortfolio(index)
            await assertion.verifyPageUrl(url)
            await assertion.verifyProjectTitle(value)
        })
    })
})