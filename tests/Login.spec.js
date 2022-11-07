// @ts-check
const { test, expect } = require('@playwright/test');

//Import POM_Login.js from Page_Object_Model folder route
const {Login} = require('../Page_Object_Model/POM_Login')

//Description of the test
test.describe('Login to Snappt Main Page', () => {
  //What the test will perform
  test('Login with Snappt Admin user account', async ({ page }) => {
    //Instance for the login class, created in POM_Login.js
    const logintomainpage = new Login(page);
    await logintomainpage.navigate();
    await logintomainpage.click_sign_in_button();
    await logintomainpage.fill_information();
    await logintomainpage.click_login_button();
    await logintomainpage.ExpectedPage();
    await logintomainpage.stop_page_closing();

  });
});