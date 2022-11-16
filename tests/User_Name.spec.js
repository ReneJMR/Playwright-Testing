// @ts-check
const { test, expect } = require('@playwright/test');

//Import POM_Login.js from Page_Object_Model folder route
//Import POM_User_Name.js from Page_Object_Model folder route
const {Login} = require('../Page_Object_Model/POM_Login');
const {UserName} = require('../Page_Object_Model/POM_User_Name');

//Use Login Spec
let loginPage
test.beforeEach(async ({ page }) => {
  loginPage = new Login(page);
  await loginPage.navigate();
  await loginPage.click_sign_in_button();
  await loginPage.fill_information();
  await loginPage.click_login_button();
});


//Description of the test
test.describe('Login to Snappt Main Page', () => {
  //What the test will perform
  test('Change the User name account', async ({ page }) => {
    const logintomainpage = new UserName(page);
    await logintomainpage.Profile_Button_Click();
    await logintomainpage.Change_Name_Button_Click();
    await logintomainpage.Change_First_Name_Click();
    await logintomainpage.Change_Last_Name_Click();
    await logintomainpage.Save_Button_Click();
    await logintomainpage.stop_page_closing();
  });
});