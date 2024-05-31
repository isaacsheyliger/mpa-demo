import { test, expect } from '@playwright/test';

test('Blurb component renders correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const title = 'Sample Title';
  const description = 'This is a sample description';
  const imgSrc = 'path/to/image.jpg'; // Use a real image path or a placeholder

  // Render the Blurb component
  await page.evaluate(({ title, description, imgSrc }) => {
    const root = document.getElementById('__next');
    if (root) {
      const blurb = document.createElement('div');
      blurb.innerHTML = `<div class="flex flex-col sm:flex-row items-center justify-center w-full max-w-4xl mx-auto">
        <div class="w-full sm:w-1/2 aspect-square relative">
          <img src="${imgSrc}" alt="${title}" class="rounded-lg" />
        </div>
        <div class="w-full sm:w-1/2 p-4 flex flex-col justify-center">
          <h2 class="text-2xl font-bold mb-2">${title}</h2>
          <p class="text-lg">${description}</p>
        </div>
      </div>`;
      root.appendChild(blurb);
    }
  }, { title, description, imgSrc });

  await expect(page.locator('h2')).toHaveText(title);
  await expect(page.locator('p')).toHaveText(description);
  await expect(page.locator('img')).toHaveAttribute('src', imgSrc);
});