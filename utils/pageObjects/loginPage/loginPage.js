const { getElementByLocator } = require("../../webdriver/chromeDriver");
const { BasePage } = require("../basePage/basePage");

class LogInPage extends BasePage {
    constructor() {
        super();
        this.path = "/mijn/inloggen?ref=%2F";
    }

    get signUpLink() {
      return getElementByLocator("xpath", '//*[@id="app"]/div/main/div/div/div/div[2]/div[3]/div/footer/p[1]/a/span');
    };
}

module.exports = {
    LogInPage
};