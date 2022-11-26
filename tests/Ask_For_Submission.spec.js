// @ts-check
const { test, expect } = require('@playwright/test');


//Import POM_Login.js from Page_Object_Model folder route
//Import POM_Ask_For_Submission.js from Page_Object_Model folder route
const {Login} = require('../Page_Object_Model/POM_Login');
const {Ask_For_Submission} = require('../Page_Object_Model/POM_Ask_For_Submission');

//Use Login Spec
let loginPage
test.beforeEach(async ({ page }) => {
  loginPage = new Login(page);
  await loginPage.navigate();
  await loginPage.click_sign_in_button();
  await loginPage.FA_User();
  await loginPage.click_login_button();
});

//Description of the test
test.describe('Login to Snappt Main Page', () => {
    //What the test will perform
    test('Click on MyWork module and ask for a submission to review', async ({ page }) => {
      const Review = new Ask_For_Submission(page);
      await Review.My_Work_Module_Click();
      await Review.Ask_For_Submission_Click();
      await Review.stop_page_closing();
    });
  });

