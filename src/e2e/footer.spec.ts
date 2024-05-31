import { test, expect } from '@playwright/test';

test('Footer renders correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const logo = await page.getByAltText('Logo');
  await expect(logo).toBeVisible();

  const productHeader = await page.getByText('Product');
  await expect(productHeader).toBeVisible();

  const companyHeader = await page.getByText('Company');
  await expect(companyHeader).toBeVisible();

  const emailInput = await page.getByPlaceholder('Enter your email');
  await expect(emailInput).toBeVisible();

  const subscribeButton = await page.getByText('Subscribe', { exact: true });
  await expect(subscribeButton).toBeVisible();
});