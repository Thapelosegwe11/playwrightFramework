import {test} from "../fixtures/CustomFixtures";
import { HomePage } from "../Pages/HomePage";
import { validUsers } from "../testData/TestData";


test.describe('Profile Tests', () => {

   test('User should edit Github', async ({homePage, profilePage}) => {
    
    homePage.NevigateToProfile();
    profilePage.clickEditProfile();
    profilePage.EditGitUsername(validUsers.GitUsername.username);
    
    })
});

