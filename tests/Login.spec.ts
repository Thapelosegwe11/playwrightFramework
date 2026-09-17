import { test } from "../fixtures/CustomFixtures";
import { validUsers } from "../testData/TestData";


// test.beforeEach( async ({loginPage}) => {
//     await loginPage.GoToURL('/');
//     await loginPage.navigateToLoginPage;
// });

test.describe('Login Tests', () =>{


    test('Admin user should be able to login', async ({ loginPage}) =>{
        
        await loginPage.OpenNdosiPage();
        
        await loginPage.navigateToLoginPage();

        await loginPage.userLogin(validUsers.Admin.username,validUsers.Admin.password);

    });

    test('Student user can login', async ({loginPage}) => {

        await loginPage.OpenNdosiPage();

        await loginPage.navigateToLoginPage();

        await loginPage.userLogin(validUsers.StudentUser.username, validUsers.StudentUser.password);
    })



});