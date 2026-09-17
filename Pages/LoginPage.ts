import { BasPage } from "../utils/BasePage";


export class LoginPage extends BasPage{
    
    async OpenNdosiSite(){
       
        await this.GoToURL('/')
    }

    async navigateToLoginPage(){
        
        await this.ClickElement(this.page.getByRole('button', {name:'Login'}));
    }

    async userLogin(username: string, password: string){
        await this.EnterText(this.page.locator('#login-email'), username);
        await this.EnterText(this.page.locator('#login-password'), password);
        await this.ClickElement(this.page.getByRole('button', {name:'Login'}));
    }

    async verifyDashboardHeading(): Locator{
        
    }

}