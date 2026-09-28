import {HomePage} from "../Pages/HomePage";
import {LoginPage} from "../Pages/LoginPage";
import {test as base } from "@playwright/test";
import { ProfilePage } from "../Pages/ProfilePage";


type CustormFixtures = {

    //LoginPage loginpage = new LoginPage; //intance of the LoginPge class
    
    loginPage : LoginPage;

    homePage : HomePage;

    profilePage : ProfilePage;
   

};

export const test = base.extend<CustormFixtures>({
    
    loginPage: async ({ page }, use) => {

        await use (new LoginPage(page));

    },
    homePage: async ({ page }, use) => {

        await use (new HomePage(page));
    }, 

    profilePage: async ({page}, use) => {

        await use (new ProfilePage(page));
    }
});

test.use( {storageState:'playwright/.auth/user.json'} );


