import { test, expect } from '@playwright/test';

test('homepage loads with title and encoder UI', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/b64chop/i);
  await expect(page.locator('#btn-encode')).toBeVisible();
  await expect(page.locator('#input-area')).toBeVisible();
  await expect(page.locator('#output-area')).toBeVisible();
});

test('encode mode: typing text produces Base64 output', async ({ page }) => {
  await page.goto('/');
  // Ensure encode mode is active
  await page.locator('#btn-encode').click();
  await page.locator('#input-area').fill('hello');
  const output = await page.locator('#output-area').inputValue();
  expect(output).toBe('aGVsbG8=');
});

test('decode mode: pasting Base64 produces plain text', async ({ page }) => {
  await page.goto('/');
  await page.locator('#btn-decode').click();
  await page.locator('#input-area').fill('aGVsbG8=');
  const output = await page.locator('#output-area').inputValue();
  expect(output).toBe('hello');
});
