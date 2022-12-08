const { expect } = require("@playwright/test");

require('dotenv').config({
    path: `.env`
  })

  //Create a class called Search_User
exports.Search_User = class Search_User{

    /**
     * @param {import('@playwright/test').Page} page
     */
   
    //Create a constructor function
    constructor(page){
      this.page=page;
      this.Users_Module = page.locator('#Users');
      this.Search_Textbox = page.locator('#usersSearch');
      this.Search_button = page.locator('#usersSearch__search_button');
    }
  
    //async function to click on the Users Module
    async Click_Users_Module(){
        await this.Users_Module.click();
        await expect(this.page).toHaveURL('https://fraud-ralph.snappt.com/users');
      }
      
    //Async function to click on Search box
    async Click_Search_Textbox(){
        await this.Search_Textbox.click();
        await this.Search_Textbox.fill('alexis');
      }

    //Async function to click on the search button
    async Click_Search_Button(){
        await this.Search_button.click();
      }
      
      
    //Stop page from closing autmatically
    async stop_page_closing(){
        await this.page.pause();
      }
  


  }
  