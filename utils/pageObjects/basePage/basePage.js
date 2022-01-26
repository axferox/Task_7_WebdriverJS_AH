const { until } = require("selenium-webdriver");
const { driver } = require("../../webdriver/chromeDriver");

class BasePage {
    constructor() {
        this.baseUrl = `https://www.ah.nl`;
    }

    getPageUrl() {
        return `${this.baseUrl}${this.path}`;
    }

    open() {
        return driver.get(`${this.baseUrl}${this.path}`);
    }

    getTitle() {
        return driver.getTitle();
    }

    waitUntilTitleIsLoaded() {
      return driver.wait(until.titleIs(this.titleName));
    }
}

module.exports = { BasePage };