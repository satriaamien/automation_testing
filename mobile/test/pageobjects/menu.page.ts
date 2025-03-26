import { $ } from "@wdio/globals";
import Page from "./page.js";

class LoginPage {
  get openMenu() {
    return $("~open menu");
  }
  get date(){
    return $("~date");
  }
  get menuItem() {
    return $("~menu item log in");
  }

  async chooseDate(month: string, day: string) {

  }
  async clickOpenMenu() {
    await this.openMenu.click();
    await browser.pause(2000);
  }
  async clickMenuItem() {
    await this.menuItem.click();
    await browser.pause(2000);
  }
}

export default new LoginPage();
