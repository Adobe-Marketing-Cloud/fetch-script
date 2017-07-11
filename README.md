Script loading is NOT supported in standard Fetch API, https://fetch.spec.whatwg.org.
ac-fetch-script provides you the API to fetch script files that is similar to native Fetch API.
This library has been inspired by [fetch-jsonp](https://github.com/camsong/fetch-jsonp.git) 

If you need a `fetch` polyfill for old browsers, try [github/fetch](http://github.com/github/fetch).

## Installation

You can install with `npm`.

```
npm install fetch-script
```

## Usage

The `fetchScript` function supports ONLY GET HTTP method.

### Fetch script in simple way

```javascript
var fetch = fetchScript();

fetch('/some-javascript-file.js')
.then(function(response) {
  console.log('script loaded successfully');
})
.catch(function(ex) {
  console.log('failed', ex);
});
```

### Set script request timeout, default is 5000ms.

```javascript
var fetch = fetchScript();

fetch('/some-javascript-file.js', {timeout: 3000})
.then(function(response) {
  console.log('script loaded successfully');
})
.catch(function(ex) {
  console.log('failed', ex);
});
```

NOTE: timeout option is not supported in the native Fetch API.

### Passing Promise implementation, default is window.Promise, make sure you pass custom implementation if the browser doesn't support ES6 Promise.

```javascript
var fetch = fetchScript({Promise: CustomPromise});

fetch('/some-javascript-file.js', {timeout: 3000})
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

Chrome | Firefox | IE | Opera | Safari
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 9+ ✔ | Latest ✔ | 6.1+ ✔ |

# License

MIT

# Acknowledgement

Thanks to [github/fetch](https://github.com/github/fetch) for bring Fetch to old browsers.
