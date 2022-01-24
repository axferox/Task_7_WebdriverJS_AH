const { getElementByLocator } = require("../../webdriver/chromeDriver");
const { BasePage } = require("./basePage");

class CookiePopupPage extends BasePage {
    constructor() {
        super();
    }

    getCookiePopupModal() {
      return getElementByLocator("id", 'cookie-popup');
    }

    getAcceptButton() {
      return getElementByLocator("id", 'accept-cookies');
    }
}

module.exports = { CookiePopupPage };