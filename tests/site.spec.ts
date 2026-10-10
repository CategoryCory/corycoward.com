import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('homepage exposes its primary sections and navigation anchors', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveTitle('Cory Coward | Software Engineer');
	const navigation = page.getByRole('navigation', { name: 'Primary navigation' });
	await expect(navigation.getByRole('link', { name: 'Experience' })).toBeVisible();
	await expect(navigation.getByRole('link', { name: 'Projects' })).toBeVisible();
	await expect(navigation.getByRole('link', { name: 'About' })).toBeVisible();
	await expect(page.locator('#experience')).toBeVisible();
	await expect(page.locator('#projects')).toBeVisible();
	await expect(page.locator('#about')).toBeVisible();
});

test('work-history highlights can be expanded', async ({ page }) => {
	await page.goto('/');

	const highlights = page.locator('.role-highlights').first();
	await expect(highlights).toHaveCount(1);
	await expect(highlights).not.toHaveAttribute('open', '');

	await highlights.locator('summary').click();
	await expect(highlights).toHaveAttribute('open', '');
	await expect(highlights.getByRole('list', { name: 'Role highlights' })).toBeVisible();
});

test('a project card opens its generated detail page', async ({ page }) => {
	await page.goto('/');

	const projectLink = page.locator('.project-card h3 a').first();
	await expect(projectLink).toBeVisible();
	await projectLink.click();

	await expect(page).toHaveURL(/\/projects\/[^/]+\/$/);
	await expect(page.locator('.project-page h1')).toBeVisible();
	await expect(page.locator('.project-content h2').first()).toBeVisible();
});

for (const path of ['/', '/projects/temp-humidity-sensor/']) {
	test(`${path} has no detectable accessibility violations`, async ({ page }) => {
		await page.goto(path);

		const results = await new AxeBuilder({ page }).analyze();
		expect(results.violations).toEqual([]);
	});
}