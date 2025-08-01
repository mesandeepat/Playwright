import { test, expect } from '@playwright/test';
import { ABTestingPage } from '../pages/ ABTestingPage.js';
import '../utils/test-hooks.js';

test('abtesting page validation', async ({ page }) => {
    const abtestingpage = new ABTestingPage(page);

    //Clicking on abtesting link from home page 
    await abtestingpage.clickonAbTestingLink();

    //Validating the page description is present
    await abtestingpage.validatePageDescriptionIsPresent();

    //Validating the page title 
    const validTitle = await abtestingpage.validateMatchingPageTitle();
    expect(validTitle).toBe(true);

}); 