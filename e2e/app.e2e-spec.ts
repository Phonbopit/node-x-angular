import { HapiXAngularPage } from './app.po';

describe('hapi-x-angular App', () => {
  let page: HapiXAngularPage;

  beforeEach(() => {
    page = new HapiXAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
