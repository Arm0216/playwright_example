import { test } from '../fixtures/fixtures.spec';
import parameters from './test_parameters.json';

test.describe('Home page functionality', () => {
    test.beforeEach(async ({ homePage }) => {
        await homePage.goTo();
    });

    test('Verify portfolios hover functionality', async ({ homePage, assertion }) => {
        await homePage.scrollOnPortfolioArea();
        for (let i = 0; i < parameters.portfolios.length; i++) {
            await homePage.hoverOnPortfolio(i);
            await assertion.verifyPortfolioHoverTextVisibility(parameters.portfolios[i]);
        }
    });

    parameters.portfolios.forEach((value, index) => {
        test(`Verify ${value} portfolio click functionality`, async ({ homePage, assertion }) => {
            const url = await homePage.getUrlPathOfPortfolio(value);
            await homePage.scrollOnPortfolioArea();
            await homePage.clickOnPortfolio(index);
            await assertion.verifyPageUrl(url);
            await assertion.verifyProjectTitle(value);
        });
    });
});
