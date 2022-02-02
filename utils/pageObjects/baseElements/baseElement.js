const { until } = require('selenium-webdriver');
const { driver } = require('../../webdriverConfigs/chromeDriver');

class BaseElement {
  constructor(locator) {
    this.locator = locator;
  }

  findElement() {
    return driver.findElement(this.locator);
  }

  wait() {
    driver.wait(until.elementIsVisible(this.locator), 10000);
  }

  textInput(inputData) {
    return this.findElement().sendKeys(inputData);
  }

  isSelected() {
    return this.findElement().isSelected();
  }

  getElementText() {
    return this.findElement().getText();
  }

  click() {
    this.wait();
    return this.findElement(this.locator).click();
  }
}

module.exports = { BaseElement };
