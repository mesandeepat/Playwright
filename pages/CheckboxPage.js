export class CheckboxPage {
    constructor(page) {
        this.page = page;
        this.clickCheckboxLink = page.locator('#content > ul > li:nth-child(6) > a');
        this.pageTitle = page.locator('h3');
        this.checkbox1 = page.locator('#checkboxes > input[type="checkbox"]:nth-child(1)');
        this.checkbox2 = page.locator('#checkboxes > input[type="checkbox"]:nth-child(3)');
    }

    async clickOnCheckboxLink() {
        await this.clickCheckboxLink.click();
    }

    async validatePageTitle() {
        const title = await this.pageTitle.textContent();
        if (!title) {
            throw new Error('Page title is not present');
        }
    }

    async clickOnCheckbox1() {
        await this.checkbox1.click();
    }

    async clickOnCheckbox2() {
        await this.checkbox2.click();
    }

    async validateCheckbox1IsChecked() {
        const isChecked = await this.checkbox1.isChecked();
        if (!isChecked) {
            throw new Error('Checkbox 1 is not checked');
        }
    }

    async validateCheckbox2IsChecked() {
        const isChecked = await this.checkbox2.isChecked();
        if (!isChecked) {
            throw new Error('Checkbox 2 is not checked');
        }
    }                      

}