import { test, expect } from '@playwright/test';

test('form renders correctly', async ({ page }) => {
    await page.goto('http://localhost:3000');
  
    const name = await page.getByPlaceholder('Name').first();
    await expect(name).toBeVisible();
  
    const email = await page.getByPlaceholder('Email').first();
    await expect(email).toBeVisible();
  
    const phoneNumber = await page.getByPlaceholder('Phone Number').first();
    await expect(phoneNumber).toBeVisible();
  
    const message = await page.getByPlaceholder('Enter your message here...').first();
    await expect(message).toBeVisible();
  
    const submit = await page.getByText('Submit').first();
    await expect(submit).toBeVisible();
});

test(' form submits without error', async ({ page }) => {
    await page.goto('http://localhost:3000/contact'); // replace with your app's URL

    it('submits the form', async () => {
        await page.fill('input[placeholder="Name"]', 'John Doe');
        await page.fill('input[placeholder="Email"]', 'john.doe@example.com');
        await page.fill('input[placeholder="Phone Number"]', '+1234567890');
        await page.fill('textarea[placeholder="Enter your message here..."]', 'Hello, this is a test message.');
        await page.click('button[type="submit"]');
        
        // TODO: Add verification logic here once email server is up.
        // await expect
    });
});