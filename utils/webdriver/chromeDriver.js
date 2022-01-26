const { Builder, until, By } = require("selenium-webdriver");
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

const driver = new Builder().forBrowser("chrome").build();

async function chromeConfig() {
    // chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
    await driver.manage().window().maximize();
}

async function quit() {
    return await driver.quit();
}

async function sleep() {
    return await driver.sleep(10000);
}

function getElementByLocator(locatorType, locatorName) {
    // await driver.wait(until.elementLocated(By[locatorType](locatorName), waitMilliseconds));
    return driver.findElement(By[locatorType](locatorName));
}

function getCurrentUrl() {
  return driver.getCurrentUrl();
}

function sendKeys(element, text) {
  return element.sendKeys(text);
}

function isElementSelected(element) {
  return element.isSelected();
}

function getElementText(element) {
  return element.getText();
}

function elementClick(element) {
  return element.click();
}

module.exports = { driver, chromeConfig, quit, sleep, getElementByLocator, getCurrentUrl, sendKeys, isElementSelected, getElementText, elementClick };