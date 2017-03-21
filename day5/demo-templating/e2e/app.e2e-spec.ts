import { DemoTemplatingPage } from './app.po';

describe('demo-templating App', () => {
  let page: DemoTemplatingPage;

  beforeEach(() => {
    page = new DemoTemplatingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
