const { until } = require('selenium-webdriver');
const { driver } = require('../webdriverConfigs/chromeDriver');

class DriverUtils {
  static wait(locator) {
    return driver.wait(until.elementIsVisible(locator), 10000);
  }

  static getCurrentUrl() {
    return driver.getCurrentUrl();
  }

  static getTitle() {
    return driver.getTitle();
  }
}

module.exports = {
  DriverUtils,
};
