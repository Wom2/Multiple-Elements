import homePage from '../pageobjects/home.page.js'

describe('The Home Page', () => {
    it('should verify list items', async () => {
        await homePage.open()
        
        await (browser).pause(1000);
        await expect(homePage.listExamples).toBeElementsArrayOfSize({gte: 44});
    })
});