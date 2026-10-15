// @ts-check
import { test, expect } from '@playwright/test';

test('com dados válidos deve permitir entrada no sistema', async ({ page }) => {
  await page.goto('http://localhost:4000/');

  await page.getByRole('textbox', { name: 'Usuário' }).fill('julio.lima');
  await page.getByRole('textbox', { name: 'Senha' }).fill('123456');
  await page.getByRole('button', { name: 'Entrar' }).click();
  
  await expect(page.getByRole('heading', { name: 'Realizar Transferência' })).toBeVisible();
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
