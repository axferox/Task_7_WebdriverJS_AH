const { until } = require('selenium-webdriver');
const { Header } = require('./header');
const { driver } = require('../../webdriverConfigs/chromeDriver');

class BasePage {
  constructor() {
    this.baseUrl = 'https://www.ah.nl';
    this.path = '';
    this.Header = new Header();
  }

  getPageUrl() {
    return `${this.baseUrl}${this.path}`;
  }

  getCurrentUrl() {
    return driver.getCurrentUrl();
  }

  open() {
    return driver.get(`${this.baseUrl}${this.path}`);
  }

  getTitle() {
    return driver.getTitle();
  }

  waitUntilTitleIsLoaded(title) {
    return driver.wait(until.titleIs(title));
  }
}

module.exports = { BasePage };
