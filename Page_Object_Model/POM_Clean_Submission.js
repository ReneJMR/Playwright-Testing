const { expect } = require("@playwright/test");


//Create a class called Ruling Clean Submission
exports.Ruling_Clean_Submission = class Ruling_Clean_Submission{

  /**
   * @param {import('@playwright/test').Page} page
   */

  //Create a constructor function
  constructor(page){
    this.page=page;
    this.Document=page.locator('text=Doc 1');
    this.Select_Result=page.getByRole('button', { name: 'result' });
    this.Select_Result_Clean=page.getByRole('option', { name: 'Clean' })
    this.Select_Document_Type=page.getByRole('button', { name: 'document' });
    this.Select_Document_Type_Bank_Statement=page.getByRole('option', { name: 'Bank Statement' });
    this.Update_Selected=page.locator("#update_selected_button");
    this.Send_Report=page.locator("#button-send-report");
    this.Send_Report_Modal=page.getByRole('button', { name: 'Send Report' });
  }

  //async function to click on the checkbox of document 1
  async Select_Document_1(){
    await this.Document.click();
  }
  //Async function to select the Result drop-down
  async Select_Result_Dropdown(){
    await this.Select_Result.click();
  }
  //Async function to select the option Clean from the Result drop-down
  async Select_Result_Dropdown_Clean(){
    await this.Select_Result_Clean.click();
  }
  //Async function to select the Document Type drop-down
  async Select_Document_Type_Dropdown(){
    await this.Select_Document_Type.click();
  }
  //Async function to select the option Bank Statement from the Document Type drop-down
  async Select_Document_Type_Dropdown_Bank_Statement(){
    await this.Select_Document_Type_Bank_Statement.click();
  }
  //Async function to click on the Update Selected button
  async Click_Update_Selected_Button(){
    await this.Update_Selected.click();
  }
  //Async function to click on the Send Report Button
  async Click_Send_Report_Button(){
    await this.Send_Report.click();
  }
  //Async function to click on the Send Report button from the modal
  async Click_Send_Report_Button_Modal(){
    await this.Send_Report_Modal.click();
  }

  //Stop page from closing autmatically
  async stop_page_closing(){
    await this.page.pause();
  }
}

