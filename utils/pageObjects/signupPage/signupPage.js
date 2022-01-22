const { getElementByLocator } = require("../../webdriver/chromeDriver");
const { BasePage } = require("../basePage/basePage");

class SignUpPage extends BasePage {
    constructor() {
        super();
        this.path = "/mijn/inschrijven/bestellen?ref=%2F";
    }

    get maleButton() {
      return getElementByLocator("xpath", '//*[@id="app"]/div/main/div/div/div/form/div[1]/span[2]/label');
    }

    get femaleButton() {
      return getElementByLocator("xpath", '//*[@id="app"]/div/main/div/div/div/form/div[1]/span[1]/label');
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

    get checkboxServiceMail() {
      return getElementByLocator("xpath", '//*[@for="f-checkbox-serviceMail"]');
    }

    get bonusCardNumberField() {
      return getElementByLocator("xpath", '//*[@id="cards.BO"]');
    }

    get checkboxMail() {
      return getElementByLocator("xpath", '//*[@for="f-checkbox-newsLetter"]');
    }

    get registrationSubmitButton() {
      return getElementByLocator("id", "registration-form-submit");
    }
}

module.exports = {
    SignUpPage
};