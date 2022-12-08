const { expect } = require("@playwright/test");

//Create a class called UserName
exports.UserName = class UserName{

  /**
   * @param {import('@playwright/test').Page} page
   */

  //Create a constructor function
  constructor(page){
    this.page=page;
    this.Profile_Button = page.locator('#ButtonProfile');
    this.Change_Name_Button = page.locator('#change-info-login');
    this.Change_First_Name = page.locator('#firstName');
    this.Change_Last_Name = page.locator('#lastName');
    this.Save_Button = page.locator('#submit');
  }

  //Async function to click in the profile button
  async Profile_Button_Click(){
    await this.Profile_Button.click();
    await expect(this.page).toHaveURL('https://fraud-ralph.snappt.com/user-profile');
  }

  //Async function to click in the change name button
  async Change_Name_Button_Click(){
    await this.Change_Name_Button.click();
  }
  
  //Async function to click on the First Name textbox
  async Change_First_Name_Click(){
    await this.Change_First_Name.click();
    await this.Change_First_Name.fill('New Admin User');
  }

  //Async function to change the Last Name textbox
  async Change_Last_Name_Click(){
    await this.Change_Last_Name.click();
    await this.Change_Last_Name.fill('Testing Account');
  }
  
  //Async function to click on the save button
  async Save_Button_Click(){
    await this.Save_Button.click();
  }
  
  //Stop page from closing autmatically
  async stop_page_closing(){
    await this.page.pause();
  }
}

