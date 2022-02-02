const { BasePage } = require('./basePage');
const { BaseElement } = require('../baseElements/baseElement');

class CookiePopupPage extends BasePage {
  constructor() {
    super();
    this.cookiePopupModal = new BaseElement({ id: 'cookie-popup' });
    this.acceptButton = new BaseElement({ id: 'accept-cookies' });
  }
}

module.exports = { CookiePopupPage };
