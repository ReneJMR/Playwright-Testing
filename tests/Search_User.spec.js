// @ts-check
const { test, expect } = require('@playwright/test');

//Import POM_Login.js from Page_Object_Model folder route
const {Login} = require('../Page_Object_Model/POM_Login');
const {Search_User} = require('../Page_Object_Model/POM_Search_User');

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
    test('Click on Users Module and search for a specific user', async ({ page }) => {
      const User_Search = new Search_User(page);
      await User_Search.Click_Users_Module();
      await User_Search.Click_Search_Textbox();
      await User_Search.Click_Search_Button();
      await User_Search.stop_page_closing();
    });
  });
