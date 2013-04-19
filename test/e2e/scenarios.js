'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('ng-grid', function() {
  beforeEach(function() {
    browser().navigateTo('../../workbench/index.html');
  });

  describe('templates', function() {
    browser().navigateTo('../../workbench/templating/external.html');

    it('should not cause a $digest or $apply error when fetching the template completes after the data $http request does', function() {

    });

    it('should load external templates before building the grid', function() {
      // todo: rows should have data when external template is defined
    });

    it('should only load the same external template once', function() {
      // todo
    });
  });
});