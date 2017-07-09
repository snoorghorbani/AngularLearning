import { ParentChildComponentPage } from './app.po';

describe('parent-child-component App', () => {
  let page: ParentChildComponentPage;

  beforeEach(() => {
    page = new ParentChildComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
