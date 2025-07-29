import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log('Navigating to homepage');
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle('The Internet');
  console.log('Title validated successfully');
});

test.afterEach(async () => {
  console.log('Test finished.');
});
