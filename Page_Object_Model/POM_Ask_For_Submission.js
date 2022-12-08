const { expect } = require("@playwright/test");


//Create a class called Ask For Submission
exports.Ask_For_Submission = class Ask_For_Submission{

  /**
   * @param {import('@playwright/test').Page} page
   */

  //Create a constructor function
  constructor(page){
    this.page=page;
    this.My_Work_Module = page.locator('#MyWork');
    this.Ask_Review = page.locator('#ask-for-submission');
  }


  //Async function to click on MyWork Module
  async My_Work_Module_Click(){
    await this.My_Work_Module.click();
    await expect(this.page).toHaveURL('https://fraud-ralph.snappt.com/my-work');
  }
  
  //Async function to click on the Ask for submission button
  async Ask_For_Submission_Click(){
    await this.Ask_Review.click();
  }
  
  //Stop page from closing autmatically
  async stop_page_closing(){
    await this.page.pause();
  }
}
