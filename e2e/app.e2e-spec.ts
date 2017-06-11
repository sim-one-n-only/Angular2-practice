import { Ng2CribPage } from './app.po';

describe('ng2-crib App', () => {
  let page: Ng2CribPage;

  beforeEach(() => {
    page = new Ng2CribPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
