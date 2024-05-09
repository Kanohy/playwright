import { expect, test } from "@playwright/test";

test.describe('Login test', async () => {
    test('the user login with sucess', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await expect(await page.title()).toBe('Swag Labs');
    
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
    
        await expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');
        
        const productTitle = await page.locator('.header_secondary_container > span').textContent();
        //await expect(productTitle).toHaveText('Products');
        await expect(productTitle).toBe('Products');
    });
    
    test('the user inserts wrong credencials', async({page}) => {
        await page.goto('https://www.saucedemo.com/');
    
        await page.locator('[data-test="username"]').fill('teste');
        await page.locator('[data-test="password"]').fill('test');
        await page.locator('[data-test="login-button"]').click();
    
        const errorText = await page.getByText('Epic sadface: Username and password do not match any user in this service');
    
        await expect(errorText).toBeVisible();
    });
});
