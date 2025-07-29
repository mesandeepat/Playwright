import { test, expect } from '@playwright/test';
import { AddRemoveElementsPage } from '../pages/AddRemoveElementsPage.js'
import '../utils/test-hooks.js';

test('add remove button validation', async ({ page }) => {
    const addremove = new AddRemoveElementsPage(page);

    //Click on Add Remove Button link 
    await addremove.clickAddRemoveElementsBtn(); 

    //Validating page title 
    await addremove.validatePageTitle();

    //Validating add button is present 
    await addremove.validateAddBtnIsPresent();

    //Clicking add button 
    await addremove.clickAddButton();

    //Validating delete button is present
    await addremove.validateDeleteBtnIsPresent();

    //Clicking delete button    
    await addremove.clickDeleteButton();   

});