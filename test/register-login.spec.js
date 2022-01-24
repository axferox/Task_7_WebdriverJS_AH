const { PageFactory } = require("../utils/PageFactory");
const { chromeConfig, sleep, quit, elementClick, getCurrentUrl, getElementText, isElementSelected, sendKeys } = require("../utils/webdriver/chromeDriver");
const { expect } = require("chai");
const { TestData } = require("../utils/testData/testData");

const homePage = PageFactory.getPage("Home");
const cookiePopup = PageFactory.getPage("Cookie Popup");
const loginPage = PageFactory.getPage("Log in");
const signUpPage = PageFactory.getPage("Sign up")


describe("Test performs the testing of the login and sign up forms", () => {
    before(async () => {
        await chromeConfig();
    });
    after(async () => {
        await sleep();
        await quit();
    });

    it("Verify that page is loaded and the title matches the expected", async () => {
        await homePage.open();
        await homePage.waitUntilTitleIsLoaded();
    });

    it("Verify that cookie modal is opened and Accept button contains the text ", async () => {
        const elementText = "Accepteer";
        expect(await getElementText(cookiePopup.acceptButton)).equal(elementText);
    });

    it("Verify that menu login button name matches the expected", async () => {
        const menuLoginButtonText = "Inloggen";
        await elementClick(cookiePopup.acceptButton);
        expect(await getElementText(homePage.menuLoginButton)).equal(menuLoginButtonText);
    });

    it("Verify that user is landed on login screen after click on login button", async () => {
        const menuLoginButton = homePage.menuLoginButton;
        await elementClick(menuLoginButton);
        expect(await getCurrentUrl()).equal(loginPage.getPageUrl());
    });

    it("Verify that page contains user sign up link text matches the expected", async () => {
        const signUpLink = loginPage.signUpLink;
        const linkText = "Maak nu een profiel aan";
        expect(await getElementText(signUpLink)).equal(linkText);
    });

    it("Verify that user is landed on sign up page after click", async () => {
        const signUpLink = loginPage.signUpLink;
        await elementClick(signUpLink);
        expect(await getCurrentUrl()).equal(signUpPage.getPageUrl());
    });

    it("Verify that radiobuttons are present and unticked by default", async () => {
        const femaleButton = signUpPage.femaleButton;
        const maleButton = signUpPage.maleButton;
        expect(await isElementSelected(femaleButton)).equal(false);
        expect(await isElementSelected(maleButton)).equal(false);
    });

    it("Verify that female radiobutton changes status after click", async () => {
        const femaleButton = signUpPage.femaleButton;
        const femaleLabel = signUpPage.femaleLabel;
        await elementClick(femaleLabel);
        expect(await isElementSelected(femaleButton)).equal(true);
    });

    it("Verify that female radiobutton changes status after click and female radiobutton is not active", async () => {
        const femaleButton = signUpPage.femaleButton;
        const maleButton = signUpPage.maleButton;
        const maleLabel = signUpPage.maleLabel;
        await elementClick(maleLabel);
        expect(await isElementSelected(maleButton)).equal(true);
        expect(await isElementSelected(femaleButton)).equal(false);
    });

    it("Verify that complete the fields with the test data", async () => {
        await sendKeys(signUpPage.firstName, TestData.textGenerator());
        await sendKeys(signUpPage.lastName, TestData.textGenerator());
        await sendKeys(signUpPage.postalCodeNld, TestData.postalCodeNld());
        await sendKeys(signUpPage.houseNumber, TestData.houseNumber());
        await sendKeys(signUpPage.houseNumberExtra, TestData.houseNumberExtra());
        await sendKeys(signUpPage.emailAddress, TestData.mailRandomizer());
        await sendKeys(signUpPage.password, TestData.passwordGenerator());
        await sendKeys(signUpPage.phoneNumberNl, TestData.phoneNumberNl());
        await sendKeys(signUpPage.birthDay, TestData.birthDay());
    });

    it("Verify that Bonus card options are unticked by default", async () => {
        const optOut = signUpPage.radioOptOut;
        const request = signUpPage.radioRequest;
        const input = signUpPage.radioInput;
        expect(await isElementSelected(optOut)).equal(false);
        expect(await isElementSelected(request)).equal(false);
        expect(await isElementSelected(input)).equal(false);
    });

    it("Verify that Bonus card radiobutton with optOut option can be ticked and other options are unticked", async () => {
        const optOutButton = signUpPage.radioOptOut;
        const requestLabel = signUpPage.radioRequestLabel;
        const inputLabel = signUpPage.radioInputLabel;
        const optOutLabel = signUpPage.radioOptOutLabel;
        await elementClick(optOutButton);
        expect(await isElementSelected(requestLabel)).equal(false);
        expect(await isElementSelected(optOutLabel)).equal(true);
        expect(await isElementSelected(inputLabel)).equal(false);
    });

    it("Verify that Bonus card radiobutton with request option can be ticked and other options are unticked", async () => {
        const requestButton = signUpPage.radioRequest;
        const requestLabel = signUpPage.radioRequestLabel;
        const inputLabel = signUpPage.radioInputLabel;
        const optOutLabel = signUpPage.radioOptOutLabel;
        await elementClick(requestButton);
        expect(await isElementSelected(requestLabel)).equal(true);
        expect(await isElementSelected(optOutLabel)).equal(false);
        expect(await isElementSelected(inputLabel)).equal(false);
    });

    it("Verify that Bonus card radiobutton with input option can be ticked and other options are unticked", async () => {
        const inputButton = signUpPage.radioInput;
        const requestLabel = signUpPage.radioRequestLabel;
        const inputLabel = signUpPage.radioInputLabel;
        const optOutLabel = signUpPage.radioOptOutLabel;
        await elementClick(inputButton);
        expect(await isElementSelected(inputLabel)).equal(true);
        expect(await isElementSelected(optOutLabel)).equal(false);
        expect(await isElementSelected(requestLabel)).equal(false);
    });

    it("Verify that custom Bonus card field can be completed", async () => {
        const inputField = signUpPage.bonusCardNumberField;
        await sendKeys(inputField, TestData.bonusCardNumber());
    });

    it("Verify that subscription checkboxes are unticked by defauilt and can be ticked", async () => {
        const checkboxServiceMail = signUpPage.checkboxServiceMail;
        const checkboxMail = signUpPage.checkboxMail;
        expect(await isElementSelected(checkboxServiceMail)).equal(false);
        expect(await isElementSelected(checkboxMail)).equal(false);
    });

      it("Verify that subscription checkboxes can be ticked", async () => {
        const checkboxServiceMail = signUpPage.checkboxServiceMail;
        const checkboxMail = signUpPage.checkboxMail;
        const checkboxServiceMailLabel = signUpPage.checkboxServiceMailLabel;
        const checkboxMailLabel = signUpPage.checkboxMailLabel;
        await elementClick(checkboxServiceMailLabel);
        await elementClick(checkboxMailLabel);
        expect(await isElementSelected(checkboxServiceMail)).equal(true);
        expect(await isElementSelected(checkboxMail)).equal(true);
      });

    it("Verify that can be submitted", async () => {
        const submitButton = signUpPage.registrationSubmitButton;
        await elementClick(submitButton);
    });
});