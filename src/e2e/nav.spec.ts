import { test, expect } from '@playwright/test';

test('header renders correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const homeNav = await page.getByText('Home').first();
  await expect(homeNav).toBeVisible();

  const aboutNav = await page.getByText('About').first();
  await expect(aboutNav).toBeVisible();

  const servicesNav = await page.getByText('Services').first();
  await expect(servicesNav).toBeVisible();

  const pricingNav = await page.getByText('Pricing').first();
  await expect(pricingNav).toBeVisible();

  const contactNav = await page.getByText('Contact').first();
  await expect(contactNav).toBeVisible();
});

test('should navigate to all pages', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  await page.click(`text=Home`);
  await expect(page).toHaveURL(`http://localhost:3000/`);
  
  const links = ['About', 'Services', 'Pricing', 'Contact'];
  for (const link of links) {
    await page.click(`text=${link}`);
    await expect(page).toHaveURL(new RegExp(`http://localhost:3000/${link.toLowerCase()}`));
    await page.goBack();
  }
});