import { test, expect } from '@playwright/test';

test.describe('TitleFeature', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#title').scrollIntoViewIfNeeded();
  });

  test('default document title on load', async ({ page }) => {
    await expect(page).toHaveTitle('ngx-cocktail — Composable Angular Ivy features');
  });

  test('Page A button sets document.title to "Demo: Page A"', async ({ page }) => {
    await page.getByTestId('page-a-btn').click();
    await expect(page).toHaveTitle('Demo: Page A');
  });

  test('Page B button sets document.title to "Demo: Page B"', async ({ page }) => {
    await page.getByTestId('page-b-btn').click();
    await expect(page).toHaveTitle('Demo: Page B');
  });

  test('mock browser tab reflects the active page title', async ({ page }) => {
    await page.getByTestId('page-a-btn').click();
    await expect(page.getByTestId('mock-tab-title')).toContainText('Demo: Page A');

    await page.getByTestId('page-b-btn').click();
    await expect(page.getByTestId('mock-tab-title')).toContainText('Demo: Page B');
  });

  test('Reset shows placeholder text in viewport', async ({ page }) => {
    await page.getByTestId('page-a-btn').click();
    await expect(page).toHaveTitle('Demo: Page A');

    await page.getByTestId('reset-btn').click();
    await expect(page.getByTestId('title-viewport'))
      .toContainText('Click a page button to activate a component');
  });

  test('switching between pages updates title each time', async ({ page }) => {
    await page.getByTestId('page-a-btn').click();
    await expect(page).toHaveTitle('Demo: Page A');

    await page.getByTestId('page-b-btn').click();
    await expect(page).toHaveTitle('Demo: Page B');

    await page.getByTestId('page-a-btn').click();
    await expect(page).toHaveTitle('Demo: Page A');
  });
});
