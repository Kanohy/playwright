import { expect, test } from "@playwright/test";

test("teste escala", async ({page}) => {

        await test.step('login', async () => {
            await page.goto('https://srv-kubnode-01.whebdc.com.br:9104/#/');
            await page.locator('[id="loginUsername"]').fill('lpbauer');
            await page.locator('[id="loginPassword"]').fill('Kanohy_11');
            await page.getByRole('button', { name: 'Login' }).click();
            
            await page.getByRole('button', { name: 'Ok' }).isEnabled().then(async () => {
                await page.getByRole('button', { name: 'Ok' }).click();
            }).catch(() => {
                console.log('No invalid object found');
            });
        });
        
        await test.step('acessar pep', async () => {
            await page.locator("[class*='corsisf1__launcher'] input[ng-model='search']").fill('his');
            await page.locator('a').filter({ hasText: 'Historia Clínica Electrónica' }).nth(1).click();   
        });
        
        await test.step('escala', async () => {
            //await page.locator('#header').getByRole('button').click();
            await page.getByText('Alfred de Paula Rodrigues').click();
            await page.getByRole('button', { name: 'Seleccione la atención' }).click();
            await page.getByText('Escalas e índices').click();
            await page.locator('.w-listbox').first().click();
            await page.locator('a').filter({ hasText: 'Geral' }).click();
            await page.locator('#elipsisButton').click();
            await page.getByText('Braden', { exact: true }).click();
            await page.getByRole('button', { name: 'Añadir' }).click();
            await page.locator('div:nth-child(2) > div > .w-attr-container__content > tasy-listbox > .w-listbox > .w-listbox__label > .truncate').first().click();
            await page.locator('a').filter({ hasText: 'Completamente limitada (1' }).click();
            await page.locator('div:nth-child(2) > div:nth-child(2) > .w-attr-container__content > tasy-listbox > .w-listbox > .w-listbox__label > .truncate').click();
            await page.locator('a').filter({ hasText: 'Piel constantemente húmeda (1' }).click();
            await page.locator('div:nth-child(3) > .w-attr-container__content > tasy-listbox > .w-listbox').first().click();
            await page.locator('a').filter({ hasText: 'Encamado (1 punto)' }).click();
            await page.locator('a').filter({ hasText: '---' }).nth(2).click();
            await page.locator('a').filter({ hasText: 'Completamente inmóvil (1' }).click();
            await page.locator('div:nth-child(3) > div:nth-child(2) > .w-attr-container__content > tasy-listbox > .w-listbox').click();
            await page.locator('a').filter({ hasText: 'Muy pobre (1 punto)' }).click();
            await page.locator('a').filter({ hasText: '---' }).nth(2).click();
            await page.locator('a').filter({ hasText: 'Problema (1 punto)' }).click();
            await page.locator('tasy-wbutton').filter({ hasText: 'Guardar' }).locator('div').first().click();
            await page.getByRole('button', { name: 'Ahora no' }).click();
            //await page.locator('div:nth-child(5) > .slick-viewport > .grid-canvas > .ui-widget-content > div:nth-child(4) > .datagrid-cell-content-wrapper').click();
            //await page.getByText('6', { exact: true }).nth(1).click();
            await page.getByRole('button', { name: 'Liberar' }).click();
            await page.locator('#ngdialog11').getByRole('button', { name: 'Liberar' }).click();
        });
});
