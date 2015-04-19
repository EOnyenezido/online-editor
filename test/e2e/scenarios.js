'use strict';

describe('Online editor', function() {

  it('should redirect index.html to index.html/#/editor', function() {
    browser.get('index.html');
    browser.getLocationAbsUrl().then(function(url) {
      expect(url.split('#')[1]).toBe('/editor');
    });
  });

  it('should redirect any wrong url to index.html/#/editor', function() {
    browser.setLocation('mkabdjfbjbkdhfkbfu');
    browser.getLocationAbsUrl().then(function(url) {
      expect(url.split('#')[1]).toBe('/editor');
    });
  });

  it('should display a live preview when preview is clicked', function() {
    element(by.id('preView')).click();
    var query = element(by.id('preview')).getInnerHtml();
    expect(query).toBe('<style></style><script></script>');
  });

  it('should go to preview on index.html/#/preview when fullscreen preview is clicked', function() {
    var query = element(by.id('fullScreen'));
    query.click();
    browser.getLocationAbsUrl().then(function(url) {
      expect(url.split('#')[1]).toBe('/preview');
    });
  });

  describe('Full screen preview', function()  {
    it('should show a full preview of the html, css and javascript code', function() {
      var query = element(by.id('fullScreenPreview')).getInnerHtml();
      expect(query).toBe('<style></style><script></script>');
    });
  })
});
