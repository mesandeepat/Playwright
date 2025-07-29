import { test, expect } from '@playwright/test';
import { ContextMenuPage } from '../pages/ContextMenuPage.js';
import '../utils/test-hooks.js';

test('context menu', async ({ page }) => {
    const contextMenu = new ContextMenuPage(page);

    // Clicking on context menu link from home page 
    await contextMenu.clickOnContextMenuLink();

    // Validating the page title
    await contextMenu.validateTitle();

    // Right-clicking on the box to open context menu
    await contextMenu.rightClickOnContextMenu();

    // Validating the alert message after clicking "Copy"
    await contextMenu.clickOkOnAlert();
});

