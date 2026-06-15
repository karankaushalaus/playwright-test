import { test, expect } from '@playwright/test';

test('opens Playwright docs from Get Started', async ({ page }) => {
  await page.goto('https://playwright.dev');

  await expect(page).toHaveTitle(/Playwright/);

  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(page).toHaveURL(/docs/);
});