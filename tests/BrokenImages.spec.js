import { test, expect } from '@playwright/test';
import { BrokenImagesPage } from '../pages/BrokenImagesPages.js';
import '../utils/test-hooks.js';

test('broken images validation', async ({ page }) => {
    const brokenimage = new BrokenImagesPage(page);
    // Clicking on broken images link from home page

    //clicking on broken image 
    await brokenimage.clickBrokenImage();

    //validating page title 
    await brokenimage.validatePageTitle();

    //validate where image is not broken 
    await brokenimage.validateImagesAreBroken();
})