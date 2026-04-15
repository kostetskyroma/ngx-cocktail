import { test, expect } from '@playwright/test';

test.describe('DestroyableFeature', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#destroyable').scrollIntoViewIfNeeded();
  });

  test('clean panel: Mount is enabled and Unmount is disabled on load', async ({ page }) => {
    const cleanPanel = page.getByTestId('clean-panel');
    await expect(cleanPanel.getByTestId('mount-btn')).toBeEnabled();
    await expect(cleanPanel.getByTestId('unmount-btn')).toBeDisabled();
  });

  test('clean panel: mounting shows the component', async ({ page }) => {
    const cleanPanel = page.getByTestId('clean-panel');
    await cleanPanel.getByTestId('mount-btn').click();
    await expect(cleanPanel.locator('app-destroyable-clean')).toBeVisible();
    await expect(cleanPanel).toContainText('With DestroyableFeature');
    await expect(cleanPanel).toContainText('CLEAN');
  });

  test('clean panel: counter increments after mounting', async ({ page }) => {
    const cleanPanel = page.getByTestId('clean-panel');
    await cleanPanel.getByTestId('mount-btn').click();
    await expect(cleanPanel.getByTestId('counter')).not.toHaveText('0', { timeout: 3000 });
  });

  test('clean panel: component disappears after unmounting', async ({ page }) => {
    const cleanPanel = page.getByTestId('clean-panel');
    await cleanPanel.getByTestId('mount-btn').click();
    await page.waitForTimeout(1500);
    await cleanPanel.getByTestId('unmount-btn').click();
    await expect(cleanPanel.locator('app-destroyable-clean')).not.toBeVisible();
    await expect(cleanPanel).toContainText('Component unmounted');
  });

  test('event log shows cleanup message after clean component unmounts', async ({ page }) => {
    const cleanPanel = page.getByTestId('clean-panel');
    await cleanPanel.getByTestId('mount-btn').click();
    await page.waitForTimeout(1500);
    await cleanPanel.getByTestId('unmount-btn').click();
    await expect(page.getByTestId('event-log'))
      .toContainText('destroyed$ fired — all subscriptions cleaned up');
  });

  test('leaky panel: mounting shows the leaky component', async ({ page }) => {
    const leakyPanel = page.getByTestId('leaky-panel');
    await leakyPanel.getByTestId('mount-btn').click();
    await expect(leakyPanel.locator('app-destroyable-leaky')).toBeVisible();
    await expect(leakyPanel).toContainText('Without DestroyableFeature');
    await expect(leakyPanel).toContainText('LEAKY');
  });

  test('event log shows continued ticking after leaky component unmounts', async ({ page }) => {
    const leakyPanel = page.getByTestId('leaky-panel');
    await leakyPanel.getByTestId('mount-btn').click();
    await page.waitForTimeout(1500);
    await leakyPanel.getByTestId('unmount-btn').click();
    await expect(page.getByTestId('event-log'))
      .toContainText('still running after unmount?', { timeout: 3000 });
  });
});
