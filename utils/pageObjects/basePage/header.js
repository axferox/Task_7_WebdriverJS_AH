const { BaseElement } = require('../baseElements/baseElement');

class Header {
  constructor() {
    this.menuLoginButton = new BaseElement({ xpath: '//*[@id="menu_personal"]/li[2]/a/span' });
  }
}

module.exports = { Header };
