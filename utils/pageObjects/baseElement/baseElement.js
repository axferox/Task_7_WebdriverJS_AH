const { driver } = require('../../webdriverConfigs/chromeDriver');
const { DriverUtils } = require('../../driverUtils/driverUtils');

class BaseElement {
  constructor(locator) {
    this.locator = locator;
  }

  findElement() {
    return driver.findElement(this.locator);
  }

  textInput(inputData) {
    this.findElement().sendKeys(inputData);
  }

  isSelected() {
    return this.findElement().isSelected();
  }

  getElementText() {
    return this.findElement().getText();
  }

  click() {
    DriverUtils.wait(this.locator);
    return this.findElement(this.locator).click();
  }
}

module.exports = { BaseElement };
