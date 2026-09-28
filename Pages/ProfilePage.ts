import { BasePage } from "../utils/BasePage";

export class ProfilePage extends BasePage {


    async clickEditProfile() {

        await this.ClickElement(this.page.getByRole('button', {name: 'Edit Profile'}));
    }
    
     async EditGitUsername(gitUsername : string) {
         

        await this.EnterText(this.page.getByPlaceholder('e.g. Octocat'), gitUsername);
    }

}