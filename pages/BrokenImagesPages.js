export class BrokenImagesPage {
    constructor(page) {
        this.page = page;
        this.clickBrokenImageLink = page.locator('//a[text()="Broken Images"]'); 
        this.brokenImagePageTitle = page.locator('h3');
        this.listOfImages = page.locator('//div//h3/following-sibling::img');
    }

    async clickBrokenImage() { 
        await this.clickBrokenImageLink.click();
    }

    async validatePageTitle() {
        const title = await this.brokenImagePageTitle.textContent();
        if (!title) {
            throw new Error('Broken Images page title is not present');
        }
    }

    
async validateImagesAreBroken() {
    const images = await this.listOfImages.count();
    if (images === 0) {
        throw new Error('No images found on the Broken Images page');
    }

    for (let i = 0; i < images; i++) {
        const image = this.listOfImages.nth(i);
        const isBroken = await image.evaluate(img => img.naturalWidth === 0);
        if (!isBroken) {
            throw new Error(`Image at index ${i} is not broken`);
        }
    }
}

}