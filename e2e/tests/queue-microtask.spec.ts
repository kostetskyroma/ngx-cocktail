import { test, expect } from '@playwright/test';

test.describe('queueMicrotask — Features decorator timing', () => {
  test('no "Ivy is not enabled" errors are thrown during page load', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto('/');

    expect(errors.filter((e) => e.includes('Ivy is not enabled'))).toHaveLength(0);
  });

  test('DestroyableFeature is active on the very first component mount', async ({ page }) => {
    await page.goto('/');
    const cleanPanel = page.getByTestId('clean-panel');

    // First-ever instantiation of DestroyableCleanComponent.
    // If the microtask hadn't resolved, destroyed$ would be undefined and
    // the takeUntil subscription would throw — counter would stay at 0 forever.
    await cleanPanel.getByTestId('mount-btn').click();
    await expect(cleanPanel.getByTestId('counter')).not.toHaveText('0', { timeout: 3000 });
  });

  test('TitleFeature is active on the very first component activation', async ({ page }) => {
    await page.goto('/');
    await page.locator('#title').scrollIntoViewIfNeeded();

    // First-ever instantiation of TitlePageAComponent.
    // If the microtask hadn't resolved, TitleFeature would never wrap the factory
    // and the title would remain unchanged.
    await page.getByTestId('page-a-btn').click();
    await expect(page).toHaveTitle('Demo: Page A');
  });

  test('DestroyableFeature works on re-mount (applied at class level, not per instance)', async ({ page }) => {
    await page.goto('/');
    const cleanPanel = page.getByTestId('clean-panel');

    await cleanPanel.getByTestId('mount-btn').click();
    await page.waitForTimeout(1500);
    await cleanPanel.getByTestId('unmount-btn').click();
    await expect(page.getByTestId('event-log')).toContainText(
      'destroyed$ fired — all subscriptions cleaned up',
    );

    // Second instantiation of the same class — feature must still be present.
    await cleanPanel.getByTestId('mount-btn').click();
    await expect(cleanPanel.getByTestId('counter')).not.toHaveText('0', { timeout: 3000 });
  });

  test('TitleFeature works on re-activation (applied at class level, not per instance)', async ({ page }) => {
    await page.goto('/');
    await page.locator('#title').scrollIntoViewIfNeeded();

    await page.getByTestId('page-a-btn').click();
    await expect(page).toHaveTitle('Demo: Page A');

    await page.getByTestId('reset-btn').click();

    // Re-instantiate the same component class — factory wrap must still be in place.
    await page.getByTestId('page-a-btn').click();
    await expect(page).toHaveTitle('Demo: Page A');
  });

  test('both DestroyableFeature and TitleFeature are active simultaneously', async ({ page }) => {
    await page.goto('/');

    // Activate TitleFeature
    await page.locator('#title').scrollIntoViewIfNeeded();
    await page.getByTestId('page-a-btn').click();
    await expect(page).toHaveTitle('Demo: Page A');

    // Activate DestroyableFeature in the same page session
    await page.locator('#destroyable').scrollIntoViewIfNeeded();
    await page.getByTestId('clean-panel').getByTestId('mount-btn').click();
    await expect(page.getByTestId('clean-panel').getByTestId('counter')).not.toHaveText('0', {
      timeout: 3000,
    });

    // Title must still reflect the last TitleFeature activation
    await expect(page).toHaveTitle('Demo: Page A');
  });
});
