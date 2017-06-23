import { HelloWorldMapPage } from './app.po';

describe('hello-world-map App', () => {
  let page: HelloWorldMapPage;

  beforeEach(() => {
    page = new HelloWorldMapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
