import { test, expect } from '@playwright/test';
import { CheckboxPage } from '../pages/CheckboxPage.js';
import '../utils/test-hooks.js';    

test('checkbox page validation', async ({ page }) => {
    const checkboxPage = new CheckboxPage(page);

    // Clicking on checkbox link from home page 
    await checkboxPage.clickOnCheckboxLink();

    //Validating the page title
    await checkboxPage.validatePageTitle();

    //Validating second checkbox is checked
    await checkboxPage.validateCheckbox2IsChecked();

    //Clicking on first checkbox
    await checkboxPage.clickOnCheckbox1();

    //Validating first checkbox is checked
    await checkboxPage.validateCheckbox1IsChecked();

    //Clicking on second checkbox 
    await checkboxPage.clickOnCheckbox2();

    

    
})