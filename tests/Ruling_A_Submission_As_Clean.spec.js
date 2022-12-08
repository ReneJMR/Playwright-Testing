// @ts-check
const { test, expect } = require('@playwright/test');

//Import POM_Login.js from Page_Object_Model folder route
//Import POM_Ask_For_Submission.js from Page_Object_Model folder route
//Import POM_Clean_Submission.js from Page_Object_Model folder route
const {Login} = require('../Page_Object_Model/POM_Login');
const {Ask_For_Submission} = require('../Page_Object_Model/POM_Ask_For_Submission');
const {Ruling_Clean_Submission} = require('../Page_Object_Model/POM_Clean_Submission');

//Use Login Spec
let loginPage
test.beforeEach(async ({ page }) => {
  loginPage = new Login(page);
  await loginPage.navigate();
  await loginPage.click_sign_in_button();
  await loginPage.FA_User();
  await loginPage.click_login_button();
});

//Use Ask for Submission Spec
let AskSubmission
test.beforeEach(async ({ page }) => {
  AskSubmission = new Ask_For_Submission(page);
  await AskSubmission.My_Work_Module_Click();
  await AskSubmission.Ask_For_Submission_Click();
});


//Description of the test
test.describe('Ask for a submission and rule a document', () => {
    //What the test will perform
    test('Rule document 1 as clean and send report', async ({ page }) => {
      const Clean_Submission = new Ruling_Clean_Submission(page);
      await Clean_Submission.Select_Document_1();
      await Clean_Submission.Select_Result_Dropdown();
      await Clean_Submission.Select_Result_Dropdown_Clean();
      await Clean_Submission.Select_Document_Type_Dropdown();
      await Clean_Submission.Select_Document_Type_Dropdown_Bank_Statement();
      await Clean_Submission.Click_Update_Selected_Button();
      await Clean_Submission.Click_Send_Report_Button();
      await Clean_Submission.Click_Send_Report_Button_Modal();
      await Clean_Submission.stop_page_closing();
    });
  });
