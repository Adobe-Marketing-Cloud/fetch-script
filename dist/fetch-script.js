(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.fetchScript = factory());
}(this, (function () { 'use strict';

function getScriptId() {
  return 'script_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
}

function createScript(url, id) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.id = id;
  script.src = url;

  return script;
}

function removeScript(scriptId) {
  var script = document.getElementById(scriptId);
  var parent = script.parentNode;

  try {
    if (parent) {
      parent.removeChild(script);
    }
  } catch (e) {
    // ignore
  }
}

function appendScript(script) {
  var firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(script, firstScript);
}

function fetchScript(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var timeout = options.timeout || 5000;

  return new Promise(function (resolve, reject) {
    var scriptId = getScriptId();
    var script = createScript(url, scriptId);

    var timeoutId = setTimeout(function () {
      reject(new Error('Script request to ' + url + ' timed out'));
      removeScript(scriptId);
    }, timeout);

    var disableTimeout = function disableTimeout(timeoutId) {
      return clearTimeout(timeoutId);
    };

    script.addEventListener('load', function (e) {
      resolve({ ok: true });
      disableTimeout(timeoutId);
      removeScript(scriptId);
    });

    script.addEventListener('error', function (e) {
      reject(new Error('Script request to ' + url + ' failed ' + e));
      disableTimeout(timeoutId);
      removeScript(scriptId);
    });

    appendScript(script);
  });
}

return fetchScript;

})));
