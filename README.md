# angular-translate-once

[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](http://bower.herokuapp.com/packages/angular-translate-once)
[![Build Status](http://img.shields.io/travis/ajwhite/angular-translate-once.svg?style=flat)](http://travis-ci.org/ajwhite/angular-translate-once)
[![Dependency Status](http://img.shields.io/gemnasium/ajwhite/angular-translate-once.svg?style=flat)](https://gemnasium.com/ajwhite/angular-translate-once)



`angular-translate-once` is an extension of [`angular-translate`](https://github.com/angular-translate/angular-translate) by introducing one-time bindings for static content.

By default, all of your translations beocme part of the digest cycle and bloat your application's [`$watch` list](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watch). You don't really need to observe any changes for things like

- form labels
- input placeholders
- link text/titles
- static copy

These things really only need to bind once. If you're looking to trim any excess watchers from your application, and you use [`angular-translate`](https://github.com/angular-translate/angular-translate), this directive may help you out.


## Example Usage
```html
<label translate-once="EMAIL_ADDRESS"></label>
<input type="email" translate-once-placeholder="SAMPLE_EMAIL_ADDRESS" />
```

```html
<p translate-once="DYNAMIC_CONTENT" translate-values="{standard: 'object'}"></p>
```

---

This should all look very familiar, the only difference is `-once` in the directive name, and that the translation will be applied as soon as the directive is linked.
