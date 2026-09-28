import { BasePage } from "../utils/BasePage";

export class HomePage extends BasePage{

    async NevigateToProfile() {
       
        // await this.ClickElement(this.page.locator('.user-pill')); Must Test This CSS Locator!!!
        await this.ClickElement(this.page.getByRole('button', {name: 'Menu'}));

        await this.ClickElement(this.page.getByRole('button', {name: 'My Profile'}));

    }

    

 }