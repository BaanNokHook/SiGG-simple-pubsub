import { pushNotiPage } from './pushNoti.po';
import { browser, logging } from 'protractor';

describe('workspace-project pushNoti', () => {
  let page: pushNotiPage;

  beforeEach(() => {
    page = new pushNotiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('pushNoti pushNoti is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
