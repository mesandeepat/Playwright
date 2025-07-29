export class ChallengingDOMPage { 
    constructor(page) { 
        this.page = page; 
        this.clickChallengingDOMLink = page.locator('#content > ul > li:nth-child(5) > a');
        this.pageTitle = page.locator('h3');
        this.clickFirstButton = page.locator('//div//div//a[@class="button"]');
        this.clickSecondButton = page.locator('//div//div//a[@class="button alert"]');
        this.clickThirdButton = page.locator('//div//div//a[@class="button success"]');
        this.validateValueFrom7thRowAnd5thColumn = page.locator('//table//tbody//tr[7]//td[5]');
        this.validateValueFrom8thRowAnd6thColumn = page.locator('//table//tbody//tr[8]//td[2]');
        this.clickOnEditBtnIn5thRow = page.locator('//table//tbody//tr[5]//a');
        this.clickOnDeleteBtnIn8thRow = page.locator('//table//tbody//tr[5]//a[2]');
        
    }

    async clickOnChallengingDOMLink() {
        await this.clickChallengingDOMLink.click();
    }
    async validatePageTitle() {
        const title = await this.pageTitle.textContent();
        if (!title) {
            throw new Error('Page title is not present');
        }
    }

    async clickOnFirstButton() {
        await this.clickFirstButton.click();
    }
    async clickOnSecondButton() {
        await this.clickSecondButton.click();
    }
    async clickOnThirdButton() {
        await this.clickThirdButton.click();
    }

    async validateValueFrom7thRowAnd5thColumnIsPresent() {
        const value = await this.validateValueFrom7thRowAnd5thColumn.textContent();
        if (!value) {
            throw new Error('Value from 7th row and 5th column is not present');
        }
    }
    async validateValueFrom8thRowAnd6thColumnIsPresent() {
        const value = await this.validateValueFrom8thRowAnd6thColumn.textContent();
        if (!value) {
            throw new Error('Value from 8th row and 6th column is not present');
        }
    }

    async clickOnEditBtnIn5thRow() {
        await this.clickOnEditBtnIn5thRow.click();
    }
    async clickOnDeleteBtnIn8thRow() {
        await this.clickOnDeleteBtnIn8thRow.click();
    }
    async validateEditButtonIn5thRowIsPresent() {
        const isVisible = await this.clickOnEditBtnIn5thRow.isVisible();
        if (!isVisible) {
            throw new Error('Edit button in 5th row is not present');
        }
    }
    async validateDeleteButtonIn8thRowIsPresent() {
        const isVisible = await this.clickOnDeleteBtnIn8thRow.isVisible();
        if (!isVisible) {
            throw new Error('Delete button in 8th row is not present');
        }
    }                 

}