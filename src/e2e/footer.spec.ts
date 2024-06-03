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

test('Footer links are correct', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const servicesLink = await page.getByText('Services');
  await expect(servicesLink).toHaveAttribute('href', '/services');

  const pricingLink = await page.getByText('Pricing');
  await expect(pricingLink).toHaveAttribute('href', '/pricing');

  const clientsLink = await page.getByText('Clients');
  await expect(clientsLink).toHaveAttribute('href', '/clients');

  const aboutLink = await page.getByText('About Us');
  await expect(aboutLink).toHaveAttribute('href', '/about');

  const contactLink = await page.getByText('Contact');
  await expect(contactLink).toHaveAttribute('href', '/contact');
});

test('Footer links navigate correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const servicesLink = await page.getByText('Services');
  await servicesLink.click();
  await expect(page).toHaveURL('http://localhost:3000/services');

  const pricingLink = await page.getByText('Pricing');
  await pricingLink.click();
  await expect(page).toHaveURL('http://localhost:3000/pricing');

  const clientsLink = await page.getByText('Clients');
  await clientsLink.click();
  await expect(page).toHaveURL('http://localhost:3000/clients');

  const aboutLink = await page.getByText('About Us');
  await aboutLink.click();
  await expect(page).toHaveURL('http://localhost:3000/about');

  const contactLink = await page.getByText('Contact');
  await contactLink.click();
  await expect(page).toHaveURL('http://localhost:3000/contact');
});

test('Footer subscription form works', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const emailInput = await page.getByPlaceholder('Enter your email');
  await emailInput.fill('j.heyliger4@gmail.com');

  const subscribeButton = await page.getByText('Subscribe', { exact: true });
  await subscribeButton.click();

  // TODO: Add verification logic here once email server is up.
  // use same logic as contact form test
});