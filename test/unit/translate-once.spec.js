'use strict';

describe('pascalprecht.translate', function () {
  describe('$translateOnce', function () {
    var $compile,
        $rootScope,
        elementAttributes = ['placeholder', 'title', 'alt', 'value'],
        translations = {
          'FOO': 'foo',
          'BAR': 'bar',
          'FOOBAR': 'foobar',
          'WITH_VALUE': 'translation with {{value}}',
          'WITH_ELEMENT': 'translation with <strong ng-bind="foo"></strong> and {{value}}'
        };

    beforeEach(module('pascalprecht.translate', function ($translateProvider) {
      $translateProvider
        .translations('en', translations)
        .preferredLanguage('en');
    }));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    it ('should perform the translation', function () {
      var element = $compile('<div translate-once="FOO"></div>')($rootScope);
      $rootScope.$digest();
      expect(element.text()).toBe(translations.FOO);
    });

    it ('should perform the translation only once', function () {
      var element = $compile('<div translate-once="FOO"></div>')($rootScope);
      $rootScope.$digest();
      expect(element.text()).toBe(translations.FOO);
      element.attr('translate-once', 'BAR');
      $rootScope.$digest();
      expect(element.text()).toBe(translations.FOO);
    });

    it ('should translate with dynamic values', function () {
      $rootScope.translationValue = {value: 'foobar'};
      var element = $compile('<div translate-once="WITH_VALUE" translate-values="translationValue"></div>')($rootScope);
      $rootScope.$digest();
      expect(element.text()).toBe('translation with foobar');
    });

    it ('should translate and compile elements', function () {
      var markup = '<div translate-once="WITH_ELEMENT" translate-values="translationValue" translate-compile></div>',
          element;
      $rootScope.foo = 'foo';
      $rootScope.translationValue = {value: 'bar'};
      element = $compile(markup)($rootScope);
      $rootScope.$digest();
      expect(element.text()).toBe('translation with foo and bar');
      expect(element.find('strong').html()).toBe('foo');
    });

    describe('attributes', function () {
      it ('should translate an element\'s attributes', function () {
        angular.forEach(elementAttributes, function (attribute) {
          var element = $compile('<input translate-once-' + attribute + '="FOO" />')($rootScope);
          $rootScope.$digest();
          expect(element.attr(attribute)).toBe(translations.FOO);
        });
      });

      it ('should translate an element\'s attributs with dynamic values', function () {
        $rootScope.translationValue = {value: 'foobar'};
        angular.forEach(elementAttributes, function (attribute) {
          var element = $compile(
            '<input translate-once-' + attribute + '="WITH_VALUE" translate-values="translationValue" />'
          )($rootScope);
          $rootScope.$digest();
          expect(element.attr(attribute)).toBe('translation with foobar');
        });
      });

      it ('should only translate an element\'s attribute once', function () {
        angular.forEach(elementAttributes, function (attribute) {
          var element = $compile('<input translate-once-' + attribute + '="FOO" />')($rootScope);
          $rootScope.$digest();
          expect(element.attr(attribute)).toBe(translations.FOO);
          element.attr('translate-once' + attribute, 'BAR');
          expect(element.attr(attribute)).toBe(translations.FOO);
        });
      });
    });
  });
});
