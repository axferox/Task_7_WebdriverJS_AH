const { getElementByLocator } = require("../../webdriver/chromeDriver");
const { BasePage } = require("../basePage/basePage");

class SignUpPage extends BasePage {
    constructor() {
        super();
        this.path = "/mijn/inschrijven/bestellen?ref=%2F";
    }

    get maleLabel() {
      return getElementByLocator("xpath", '//*[@for="f-radio-button-gender-male"]');
    }

    get femaleLabel() {
      return getElementByLocator("xpath", '//*[@for="f-radio-button-gender-female"]');
    }

    get maleButton() {
      return getElementByLocator("xpath", '//*[@id="f-radio-button-gender-male"]');
    }

    get femaleButton() {
      return getElementByLocator("xpath", '//*[@id="f-radio-button-gender-female"]');
    }

    get firstName() {
      return getElementByLocator("name", 'firstName');
    }

    get lastName() {
      return getElementByLocator("name", 'lastName');
    }

    get postalCodeNld() {
      return getElementByLocator("name", 'address.postalCodeNld');
    }

    get houseNumber() {
      return getElementByLocator("name", 'address.houseNumber');
    }
    get houseNumberExtra() {
      return getElementByLocator("name", 'address.houseNumberExtra');
    }

    get emailAddress() {
      return getElementByLocator("name", 'emailAddress');
    }

    get password() {
      return getElementByLocator("name", 'password');
    }

    get phoneNumberNl() {
      return getElementByLocator("css", '#phoneNumberWebshop');
    }

    get birthDay() {
      return getElementByLocator("css", '#dateOfBirthWebshop');
    }

    get radioOptOut() {
      return getElementByLocator("xpath", '//*[@for="f-radio-button-bonusCardChoice-optOut"]');
    }

    get radioRequest() {
      return getElementByLocator("xpath", '//*[@for="f-radio-button-bonusCardChoice-request"]');
    }

    get radioInput() {
      return getElementByLocator("xpath", '//*[@for="f-radio-button-bonusCardChoice-input"]');
    }

    get radioOptOutLabel() {
      return getElementByLocator("xpath", '//*[@id="f-radio-button-bonusCardChoice-optOut"]');
    }

    get radioRequestLabel() {
      return getElementByLocator("xpath", '//*[@id="f-radio-button-bonusCardChoice-request"]');
    }

    get radioInputLabel() {
      return getElementByLocator("xpath", '//*[@id="f-radio-button-bonusCardChoice-input"]');
    }

    get bonusCardNumberField() {
      return getElementByLocator("xpath", '//*[@id="cards.BO"]');
    }

    get checkboxServiceMailLabel() {
      return getElementByLocator("xpath", '//*[@for="f-checkbox-serviceMail"]');
    }

    get checkboxMailLabel() {
      return getElementByLocator("xpath", '//*[@for="f-checkbox-newsLetter"]');
    }

    get checkboxServiceMail() {
      return getElementByLocator("xpath", '//*[@id="f-checkbox-serviceMail"]');
    }

    get checkboxMail() {
      return getElementByLocator("xpath", '//*[@id="f-checkbox-newsLetter"]');
    }

    get registrationSubmitButton() {
      return getElementByLocator("id", "registration-form-submit");
    }
}

module.exports = {
    SignUpPage
};