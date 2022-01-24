const { getElementByLocator } = require("../../webdriver/chromeDriver");
const { BasePage } = require("../basePage/basePage");

class SignUpPage extends BasePage {
    constructor() {
        super();
        this.path = "/mijn/inschrijven/bestellen?ref=%2F";
    }

    getMaleButton() {
      return getElementByLocator("xpath", '//*[@id="app"]/div/main/div/div/div/form/div[1]/span[2]/label');
    }

    getFemaleButton() {
      return getElementByLocator("xpath", '//*[@id="app"]/div/main/div/div/div/form/div[1]/span[1]/label');
    }

    getFirstName() {
      return getElementByLocator("name", 'firstName');
    }

    getLastName() {
      return getElementByLocator("name", 'lastName');
    }

    getPostalCodeNld() {
      return getElementByLocator("name", 'address.postalCodeNld');
    }

    getHouseNumber() {
      return getElementByLocator("name", 'address.houseNumber');
    }
    getHouseNumberExtra() {
      return getElementByLocator("name", 'address.houseNumberExtra');
    }

    getEmailAddress() {
      return getElementByLocator("name", 'emailAddress');
    }

    getPassword() {
      return getElementByLocator("name", 'password');
    }

    getPhoneNumberNl() {
      return getElementByLocator("css", '#phoneNumberWebshop');
    }

    getBirthDay() {
      return getElementByLocator("css", '#dateOfBirthWebshop');
    }

    getRadioOptOut() {
      return getElementByLocator("xpath", '//*[@for="f-radio-button-bonusCardChoice-optOut"]');
    }

    getRadioRequest() {
      return getElementByLocator("xpath", '//*[@for="f-radio-button-bonusCardChoice-request"]');
    }

    getRadioInput() {
      return getElementByLocator("xpath", '//*[@for="f-radio-button-bonusCardChoice-input"]');
    }

    getCheckboxServiceMail() {
      return getElementByLocator("xpath", '//*[@for="f-checkbox-serviceMail"]');
    }

    getBonusCardNumberField() {
      return getElementByLocator("xpath", '//*[@id="cards.BO"]');
    }

    getCheckboxMail() {
      return getElementByLocator("xpath", '//*[@for="f-checkbox-newsLetter"]');
    }

    getRegistrationSubmitButton() {
      return getElementByLocator("id", "registration-form-submit");
    }
}

module.exports = {
    SignUpPage
};