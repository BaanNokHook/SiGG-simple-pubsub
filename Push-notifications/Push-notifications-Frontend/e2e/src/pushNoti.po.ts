import { browser, by, element } from 'protractor';

export class pushNotiPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('pushNoti-root .content span')).getText() as Promise<string>;
  }
}
