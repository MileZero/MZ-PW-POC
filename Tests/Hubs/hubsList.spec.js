const { test, page, expect } = require('@playwright/test');
const { FilterFeature } = require('../../pages/filterHubList');
const Login = require('../LogintoMileView/logintoMileView.spec');
require('dotenv').config();
const email = process.env.Email;
const password = process.env.Pass;

test('driverprofile page', async ({ page }) => {
     await Login(page, email, password)
    const Filter = new FilterFeature(page);
    await page.goto('https://milevision-stage.milezero.com/mv/hubsConfig.jsp');
    await Filter.filterName.
    await Filter.filterStatusClick();
    await Filter.filterWithWords('RDG')

    const Searchedword = await page.inputValue('input[placeholder="Search"]');
    await page.getByRole('columnheader', { name: 'Name' }).getByRole('button').click();
    await page.getByPlaceholder('Search').fill(Searchedword)
    await Filter.filterNameClick();
    await Filter.filterWithWords('Duban')
    await Filter.saveResultsAsTabClick(Searchedword)
    console.log(Searchedword)
});
 // await page.getByRole('button', { name: 'Add a New Driver' }).click();
// await page.getByRole('button', { name: 'Save' }).click();


