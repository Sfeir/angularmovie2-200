import { Angularmovie2200bPage } from './app.po';

describe('angularmovie2-200b App', function() {
  let page: Angularmovie2200bPage;

  beforeEach(() => {
    page = new Angularmovie2200bPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
