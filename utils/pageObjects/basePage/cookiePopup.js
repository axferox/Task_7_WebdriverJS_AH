const { getElementByLocator } = require("../../webdriver/chromeDriver");
const { BasePage } = require("./basePage");

class CookiePopupPage extends BasePage {
    constructor() {
        super();
    }

    get cookiePopupModal() {
      return getElementByLocator("id", 'cookie-popup');
    }

    get acceptButton() {
      return getElementByLocator("id", 'accept-cookies');
    }
}

module.exports = { CookiePopupPage };