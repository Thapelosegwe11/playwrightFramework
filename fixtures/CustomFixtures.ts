import { LoginPage } from "../Pages/LoginPage";
import {test as base } from "@playwright/test";


type CustormFixtures = {

    loginPage : LoginPage;
    //LoginPage loginpage = new LoginPage; //intance of the LoginPge class.

};

export const test = base.extend<CustormFixtures>({
    
    loginPage: async ({ page }, use) => {

        await use (new LoginPage(page));

    }
});
