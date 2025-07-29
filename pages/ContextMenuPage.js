export class ContextMenuPage { 
    constructor(page) { 
        this.page = page; 
        this.clickContextMenuLink = page.locator('#content > ul > li:nth-child(7) > a');
        this.pageTitle = page.locator('h3');
        this.contextMenu = page.locator('#hot-spot');   
    }

    async clickOnContextMenuLink() { 
        await this.clickContextMenuLink.click(); 
    }

    async validateTitle() { 
        const title = await this.pageTitle.textContent();
        if (!title) {
            throw new Error('Page title is not present');
        }   
    }

    async rightClickOnContextMenu() { 
        await this.contextMenu.click({ button: 'right' });
    }

    async clickOkOnAlert() { 
        this.page.on('dialog', async dialog => {
            if (dialog.type() === 'alert') {
                await dialog.accept();
            }
        });
    }
}