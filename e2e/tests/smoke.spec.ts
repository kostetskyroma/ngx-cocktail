import { test, expect } from '@playwright/test';

test.describe('Smoke', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page title', async ({ page }) => {
    await expect(page).toHaveTitle('ngx-cocktail — Composable Angular Ivy features');
  });

  test('nav bar is visible with brand name', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    await expect(nav).toContainText('ngx-cocktail');
  });

  test('hero heading is visible', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('ngx-cocktail');
  });

  test('DestroyableFeature section is present', async ({ page }) => {
    const section = page.locator('#destroyable');
    await expect(section).toBeVisible();
    await expect(section.locator('h2')).toContainText('DestroyableFeature');
  });

  test('TitleFeature section is present', async ({ page }) => {
    const section = page.locator('#title');
    await expect(section).toBeVisible();
    await expect(section.locator('h2')).toContainText('TitleFeature');
  });

  test('GitHub link is present', async ({ page }) => {
    const link = page.getByTestId('github-link');
    await expect(link).toBeVisible();
    await expect(link).toContainText('GitHub');
  });
});
