Script loading is NOT supported in standard Fetch API, https://fetch.spec.whatwg.org.
ac-fetch-script provides you the API to fetch script files that is similar to native Fetch API.
This library has been inspired by [fetch-jsonp](https://github.com/camsong/fetch-jsonp.git) 

If you need a `fetch` polyfill for old browsers, try [github/fetch](http://github.com/github/fetch).

## Installation

You can install with `npm`.

```
npm install ac-fetch-script
```

## Promise Polyfill for IE

IE9/10/11 does not support [ES6 Promise](https://tc39.github.io/ecma262/#sec-promise-constructor), run this to polyfill the global environment at the beginning of your application.

```js
require('es6-promise').polyfill();
```

## Usage

The `fetchScript` function supports ONLY GET HTTP method.

### Fetch script in simple way

```javascript
fetchScript('/some-javascript-file.js')
.then(function(response) {
  console.log('script loaded successfully');
})
.catch(function(ex) {
  console.log('failed', ex);
});
```

### Set script request timeout, default is 5000ms

```javascript
fetchScript('/some-javascript-file.js', {timeout: 3000})
.then(function(response) {
  console.log('script loaded successfully');
})
.catch(function(ex) {
  console.log('failed', ex);
});
```

### Caveats

Since we can't retrieve loaded script content, the response will contain just the ```ok``` property set to ```true```. This is to be consistent with Fetch API. You can safely ignore response parameter.

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 9+ ✔ | Latest ✔ | 6.1+ ✔ |

# License

MIT

# Acknowledgement

Thanks to [github/fetch](https://github.com/github/fetch) for bring Fetch to old browsers.
