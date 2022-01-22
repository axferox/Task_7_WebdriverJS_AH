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
        expect(await getElementText(await cookiePopup.acceptButton)).equal(elementText);
    });

    it("Verify that menu login button name matches the expected", async () => {
        const menuLoginButtonText = "Inloggen";
        await elementClick(await cookiePopup.acceptButton);
        expect(await getElementText(await homePage.menuLoginButton)).equal(menuLoginButtonText);
    });

    it("Verify that user is landed on login screen after click on login button", async () => {
        const menuLoginButton = await homePage.menuLoginButton;
        await elementClick(menuLoginButton);
        expect(await getCurrentUrl()).equal(loginPage.getPageUrl());
    });

    it("Verify that page contains user sign up link text matches the expected", async () => {
        const signUpLink = await loginPage.signUpLink
        const linkText = "Maak nu een profiel aan";
        expect(await getElementText(signUpLink)).equal(linkText);
    });

    it("Verify that user is landed on sign up page after click", async () => {
        const signUpLink = await loginPage.signUpLink;
        await elementClick(signUpLink);
        expect(await getCurrentUrl()).equal(signUpPage.getPageUrl());
    });

    it("Verify that radiobuttons are present and unticked by default", async () => {
        const femaleButton = await signUpPage.femaleButton;
        const maleButton = await signUpPage.maleButton;
        expect(await isElementSelected(femaleButton)).equal(false);
        expect(await isElementSelected(maleButton)).equal(false);
    });

    it("Verify that female radiobutton changes status after click", async () => {
        const femaleButton = await signUpPage.femaleButton;
        await elementClick(femaleButton);
        expect(await isElementSelected(femaleButton)).equal(true);
    });

    it("Verify that female radiobutton changes status after click and female radiobutton is not active", async () => {
        const femaleButton = await signUpPage.femaleButton;
        const maleButton = await signUpPage.maleButton;
        await elementClick(maleButton);
        expect(await isElementSelected(maleButton)).equal(true);
        expect(await isElementSelected(femaleButton)).equal(false);
    });

    it("Verify that complete the fields with the test data", async () => {
        await sendKeys(await signUpPage.firstName, TestData.textGenerator());
        await sendKeys(await signUpPage.lastName, TestData.textGenerator());
        await sendKeys(await signUpPage.postalCodeNld, TestData.postalCodeNld());
        await sendKeys(await signUpPage.houseNumber, TestData.houseNumber());
        await sendKeys(await signUpPage.houseNumberExtra, TestData.houseNumberExtra());
        await sendKeys(await signUpPage.emailAddress, TestData.mailRandomizer());
        await sendKeys(await signUpPage.password, TestData.passwordGenerator());
        await sendKeys(await signUpPage.phoneNumberNl, TestData.phoneNumberNl());
        await sendKeys(await signUpPage.birthDay, TestData.birthDay());
    });

    it("Verify that Bonus card options are unticked by default", async () => {
        const optOut = await signUpPage.radioOptOut;
        const request = await signUpPage.radioRequest;
        const input = await signUpPage.radioInput;
        expect(await isElementSelected(optOut)).equal(false);
        expect(await isElementSelected(request)).equal(false);
        expect(await isElementSelected(input)).equal(false);
    });

    it("Verify that Bonus card radiobutton with optOut option can be ticked and other options are unticked", async () => {
        const optOut = await signUpPage.radioOptOut;
        const request = await signUpPage.radioRequest;
        const input = await signUpPage.radioInput;
        await elementClick(optOut);
        expect(await isElementSelected(request)).equal(false);
        expect(await isElementSelected(optOut)).equal(true);
        expect(await isElementSelected(input)).equal(false);
    });

    it("Verify that Bonus card radiobutton with request option can be ticked and other options are unticked", async () => {
        const optOut = await signUpPage.radioOptOut;
        const request = await signUpPage.radioRequest;
        const input = await signUpPage.radioInput;
        await elementClick(request);
        expect(await isElementSelected(request)).equal(true);
        expect(await isElementSelected(optOut)).equal(false);
        expect(await isElementSelected(input)).equal(false);
    });

    it("Verify that Bonus card radiobutton with input option can be ticked and other options are unticked", async () => {
        const optOut = await signUpPage.radioOptOut;
        const request = await signUpPage.radioRequest;
        const input = await signUpPage.radioInput;
        await elementClick(input);
        expect(await isElementSelected(input)).equal(true);
        expect(await isElementSelected(optOut)).equal(false);
        expect(await isElementSelected(request)).equal(false);
    });

    it("Verify that custom Bonus card field can be completed", async () => {
        const inputField = await signUpPage.bonusCardNumberField;
        await sendKeys(inputField, TestData.bonusCardNumber());
    });

    it("Verify that subscription checkboxes are unticked by defauilt and can be ticked", async () => {
        const checkboxServiceMail = await signUpPage.checkboxServiceMail;
        const checkboxMail = await signUpPage.checkboxMail;
        expect(await isElementSelected(checkboxServiceMail)).equal(false);
        expect(await isElementSelected(checkboxMail)).equal(false);
    });

      it("Verify that subscription checkboxes can be ticked", async () => {
        const checkboxServiceMail = await signUpPage.checkboxServiceMail;
        const checkboxMail = await signUpPage.checkboxMail;
        await elementClick(checkboxServiceMail);
        await elementClick(checkboxMail);
        expect(await isElementSelected(checkboxServiceMail)).equal(true);
        expect(await isElementSelected(checkboxMail)).equal(true);
      });

    it("Verify that can be submitted", async () => {
        const submitButton = await signUpPage.registrationSubmitButton;
        await elementClick(submitButton);
    });
});