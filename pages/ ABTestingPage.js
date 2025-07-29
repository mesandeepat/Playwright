export class ABTestingPage { 

    constructor(page) {
        this.page = page
        this.abtestingLink = page.locator('a[href="/abtest"]');
        this.pageTitle = page.locator('h3');
        this.pageDescription = page.locator('p'); 

    }
    
   async clickonAbTestingLink() {
        await this.abtestingLink.click();
    }

    async validatePageDescriptionIsPresent() {
        const description = await this.pageDescription.textContent();
        if (!description) {
            throw new Error('Page description is not present');
        }
    }

    async validateMatchingPageTitle() { 
        const title = (await this.pageTitle.textContent()).trim();
        const actualHeaderText = ['A/B Test Control', 'A/B Test Variation 1'];
        return actualHeaderText.includes(title);

    }
    
}