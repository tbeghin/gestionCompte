import { GestionComptesPage } from './app.po';

describe('gestion-comptes App', () => {
  let page: GestionComptesPage;

  beforeEach(() => {
    page = new GestionComptesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
