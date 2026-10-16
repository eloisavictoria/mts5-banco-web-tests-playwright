
//import { test, expect } from '@playwright/test';
const { test, expect } = require('../fixture/credenciais');


test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:4000/');
    await page.screenshot({ path: 'screenshots/login.png', fullPage: true });
  });

test('Login com dados válidos deve permitir entrada no sistema', async ({ page, usuarios }) => {
  

  await page.getByRole('textbox', { name: 'Usuário' }).fill(usuarios.valido.usuario);
  await page.getByRole('textbox', { name: 'Senha' }).fill(usuarios.valido.senha);
  await page.getByRole('button', { name: 'Entrar' }).click();
  
  await expect(page.getByRole('heading', { name: 'Realizar Transferência' })).toBeVisible();
});

test('Login com dados inválidos deve apresentar mensagem de erro', async ({ page, usuarios }) => {


  await page.getByRole('textbox', { name: 'Usuário' }).fill(usuarios.invalido.usuario);
  await page.getByRole('textbox', { name: 'Senha' }).fill(usuarios.invalido.senha);
  await page.getByRole('button', { name: 'Entrar' }).click();

  
  
  await expect(page.getByText('Erro no login. Tente novamente.')).toBeVisible();
});