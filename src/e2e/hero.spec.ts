import { test, expect } from '@playwright/test';

test('Hero component loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveText('Welcome to Our Service');
  await expect(page).toHaveText('Discover the amazing features we offer to make your life easier.');
  await expect(page.locator('button')).toHaveText('Find out More');
  await expect(page.locator('img')).toHaveCount(1);
});