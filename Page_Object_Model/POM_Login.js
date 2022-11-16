const { expect } = require("@playwright/test");

//Create a class called Login
exports.Login = class Login{

  /**
   * @param {import('@playwright/test').Page} page
   */

  //Create a constructor function
  constructor(page){
    this.page=page;
    this.btnSignIn = page.locator('button[name="Sign In"]');
    this.EnterEmail = page.locator('#loginId');
    this.NextButton = page.locator('button.blue.button');
    this.EnterPassword = page.locator('#password');
    this.Login_Button = page.locator('button.blue.button');
  }

  //Async function to go to the login page of snappt
  async navigate(){
    await this.page.goto('https://fraud-ralph.snappt.com/login');
  }

  //async function to click the "Sign In" button
  async click_sign_in_button(){
    await this.btnSignIn.click();
  }

  //Async function to fill the information for entering email, clicking the "Next" button and entering the password
  async fill_information (){
    await this.EnterEmail.fill('saofficialaccount@opticpower.com');
    await this.NextButton.click();
    await this.EnterPassword.fill('Testing123#');
  }

  //Async function to click the login button
  async click_login_button(){
    await this.Login_Button.click();
  }

  //Assertion of what the expected page should be
  async ExpectedPage(){
    await expect(this.page).toHaveURL('https://fraud-ralph.snappt.com');
  }

  //Stop page from closing autmatically
  async stop_page_closing(){
    await this.page.pause();
  }
}
