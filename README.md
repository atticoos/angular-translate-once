# angular-translate-once

This is an extension of [`angular-translate`](https://github.com/angular-translate/angular-translate) to allow for one-time binding for static content. This enhances the `angular-translate` module by only applying the translation once. Without `angular-translate-once`, your translations are added to the application's watch context when many times they will never expect a change (field labels, static copy, etc).


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
