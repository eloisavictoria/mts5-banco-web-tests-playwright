// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:4000/');
    await page.screenshot({ path: 'screenshots/login.png', fullPage: true });
  });

test('Login com dados válidos deve permitir entrada no sistema', async ({ page }) => {
  

  await page.getByRole('textbox', { name: 'Usuário' }).fill('julio.lima');
  await page.getByRole('textbox', { name: 'Senha' }).fill('123456');
  await page.getByRole('button', { name: 'Entrar' }).click();
  
  await expect(page.getByRole('heading', { name: 'Realizar Transferência' })).toBeVisible();
});

test('Login com dados inválidos deve apresentar mensagem de erro', async ({ page }) => {


  await page.getByRole('textbox', { name: 'Usuário' }).fill('julio.lima');
  await page.getByRole('textbox', { name: 'Senha' }).fill('456123');
  await page.getByRole('button', { name: 'Entrar' }).click();

  
  
  await expect(page.getByText('Erro no login. Tente novamente.')).toBeVisible();
});