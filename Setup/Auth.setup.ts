import {LoginPage} from '../Pages/LoginPage';
import {test as setup} from '@playwright/test';
import { validUsers } from '../testData/TestData';


 const authFile = 'playwright/.auth/user.json';

setup('authentication', async ({page}) => {

    const loginPage = new LoginPage(page);

    await loginPage.OpenNdosiPage();

    await loginPage.GoToURL('/');

    await loginPage.navigateToLoginPage();

    await loginPage.userLogin(validUsers.Admin.username,validUsers.Admin.username);


    //Save Authentication state to file.

    await page.context().storageState( {path: authFile} );
});