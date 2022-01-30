const { BasePage } = require('./base_page');

class CookiePopup extends BasePage {
  constructor() {
    super();
    this.cookiePopupModal = {
      locatorType: 'id',
      locatorId: 'cookie-popup',
    };
    this.acceptButton = {
      locatorType: 'id',
      locatorId: 'accept-cookies',
      locatorText: 'Accepteer',
    };
  }
}

module.exports = { CookiePopup };
