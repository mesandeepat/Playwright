import { expect } from '@playwright/test';

export class AddRemoveElementsPage {
    
    constructor(page) {
        this.page = page;
        this.clickAddRemoveBtn = page.locator('//ul//li[2]//a'); 
        this.pageTitle = page.locator('h3');
        this.validateAddBtn = page.locator('//button[@onclick="addElement()"]');
        this.clickAddBtn = page.locator('//button[@onclick="addElement()"]');
        this.validateDeleteBtn = page.locator('//button[@onclick="deleteElement()"]');
        this.clickDeleteBtn = page.locator('//button[@onclick="deleteElement()"]');
    }

    async clickAddRemoveElementsBtn() { 
        await this.clickAddRemoveBtn.click();
    }

    async validatePageTitle() { 
        const actualValue = 'Add/Remove Elements'
        const expectedValue = await this.pageTitle.textContent();
        expect(actualValue.trim()).toBe(expectedValue);
        console.log(`Page title is: ${expectedValue}`);
    }

    async validateAddBtnIsPresent() { 
        expect(await this.validateAddBtn).toBeVisible();
    }

    async clickAddButton() {
        await this.clickAddBtn.click();
    }

    async validateDeleteBtnIsPresent() { 
         expect(await this.validateDeleteBtn).toBeVisible();
    }

    async clickDeleteButton() {
        await this.clickDeleteBtn.click();
    }

}