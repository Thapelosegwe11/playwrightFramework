import { LoginPage } from "../Pages/LoginPage";
import {test as base } from "@playwright/test";


type CustormFixtures = {

    loginPage : LoginPage;

};

export const test = base.extend<CustormFixtures>({
    
    loginPage: async ({ page }, use) => {

        await use (new LoginPage(page));

    }
});