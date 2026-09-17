import { BasPage } from "../utils/BasePage";


export class LoginPage extends BasPage{
    
    async OpenNdosiPage(){
       
        await this.GoToURL('/')
    }

    async navigateToLoginPage(){
        
        await this.ClickElement(this.page.getByRole('button', {name:'Login'}));
    }

    async userLogin(username: string, password: string){
        await this.EnterText(this.page.locator('#login-email'), username);
        await this.EnterText(this.page.locator('#login-password'), password);
        await this.ClickElement(this.page.getByRole('button', {name:'Login'}));
        //await this.ClickElement(this.page.locator('xpath=//button[@class="login-submit]'));
    }

    async verifyDashboardHeading() {
        await this.VerifyElementVisible(this.page.getByRole('heading', {name: /Welcome\s*back/i}));
        
    }

}