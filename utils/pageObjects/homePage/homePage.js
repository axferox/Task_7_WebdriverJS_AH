const { getElementByLocator } = require("../../webdriver/chromeDriver");
const { BasePage } = require("../basePage/basePage");

class HomePage extends BasePage {
    constructor() {
        super();
        this.path = "";
        this.titleName = "Albert Heijn: boodschappen doen bij de grootste supermarkt";
    }

    getMenuLoginButton() {
      return getElementByLocator("xpath", '//*[@id="menu_personal"]/li[2]/a/span');
    };
}

module.exports = {
    HomePage
};