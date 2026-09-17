import { Locator, Page, expect } from "@playwright/test";

export class BasPage{

    constructor(public page:Page){
    }

    async GoToURL(url: string){
        await this.page.goto(url);
    }

    async ClickElement(locator: Locator){
        await locator.click();
    }

    async EnterText(locator: Locator, text: string){
        await locator.fill(text);
    }

    async VerifyElementVisible(locator: Locator){
        await expect(locator).toBeVisible();
    }

    async GetTextElementValue(locator: Locator){
        return await locator.textContent();
    }

}