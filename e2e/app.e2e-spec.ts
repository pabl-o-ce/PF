import { PFsPage } from './app.po';

describe('pfs App', () => {
  let page: PFsPage;

  beforeEach(() => {
    page = new PFsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
