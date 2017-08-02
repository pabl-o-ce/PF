import { PFPage } from './app.po';

describe('pf App', () => {
  let page: PFPage;

  beforeEach(() => {
    page = new PFPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
