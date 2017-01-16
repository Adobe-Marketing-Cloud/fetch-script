(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fetchScript"] = factory();
	else
		root["fetchScript"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction getScriptId() {\n  return 'script_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);\n}\n\nfunction createScript(url, id) {\n  var script = document.createElement('script');\n  script.type = 'text/javascript';\n  script.async = true;\n  script.id = id;\n  script.src = url;\n\n  return script;\n}\n\nfunction removeScript(id) {\n  var script = document.getElementById(id);\n  var parent = script.parentNode;\n\n  try {\n    parent && parent.removeChild(script);\n  } catch (e) {\n    // ignore\n  }\n}\n\nfunction appendScript(script) {\n  var firstScript = document.getElementsByTagName('script')[0];\n  firstScript.parentNode.insertBefore(script, firstScript);\n}\n\nfunction fetchScriptInternal(url, options, promise) {\n  return new promise(function (resolve, reject) {\n    var timeout = options.timeout || 5000;\n    var scriptId = getScriptId();\n    var script = createScript(url, scriptId);\n\n    var timeoutId = setTimeout(function () {\n      reject(new Error('Script request to ' + url + ' timed out'));\n\n      removeScript(scriptId);\n    }, timeout);\n\n    var disableTimeout = function disableTimeout(timeoutId) {\n      return clearTimeout(timeoutId);\n    };\n\n    script.addEventListener('load', function (e) {\n      resolve({ ok: true });\n\n      disableTimeout(timeoutId);\n      removeScript(scriptId);\n    });\n\n    script.addEventListener('error', function (e) {\n      reject(new Error('Script request to ' + url + ' failed ' + e));\n\n      disableTimeout(timeoutId);\n      removeScript(scriptId);\n    });\n\n    appendScript(script);\n  });\n}\n\nfunction fetchScript(settings) {\n  return function (url) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    var promise = settings && settings.Promise || self.Promise;\n\n    return fetchScriptInternal(url, options, promise);\n  };\n}\n\nexports.default = fetchScript;\nmodule.exports = exports['default'];//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmV0Y2gtc2NyaXB0LmpzP2Y4YzUiXSwibmFtZXMiOlsiZ2V0U2NyaXB0SWQiLCJEYXRlIiwibm93IiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJjcmVhdGVTY3JpcHQiLCJ1cmwiLCJpZCIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJhc3luYyIsInNyYyIsInJlbW92ZVNjcmlwdCIsImdldEVsZW1lbnRCeUlkIiwicGFyZW50IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZSIsImFwcGVuZFNjcmlwdCIsImZpcnN0U2NyaXB0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbnNlcnRCZWZvcmUiLCJmZXRjaFNjcmlwdEludGVybmFsIiwib3B0aW9ucyIsInByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGltZW91dCIsInNjcmlwdElkIiwidGltZW91dElkIiwic2V0VGltZW91dCIsIkVycm9yIiwiZGlzYWJsZVRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwib2siLCJmZXRjaFNjcmlwdCIsInNldHRpbmdzIiwiUHJvbWlzZSIsInNlbGYiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBU0EsV0FBVCxHQUF1QjtBQUNyQixxQkFBaUJDLEtBQUtDLEdBQUwsRUFBakIsU0FBK0JDLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFnQixNQUExQixDQUEvQjtBQUNEOztBQUVELFNBQVNDLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCQyxFQUEzQixFQUErQjtBQUM3QixNQUFJQyxTQUFTQyxTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQUYsU0FBT0csSUFBUCxHQUFjLGlCQUFkO0FBQ0FILFNBQU9JLEtBQVAsR0FBZSxJQUFmO0FBQ0FKLFNBQU9ELEVBQVAsR0FBWUEsRUFBWjtBQUNBQyxTQUFPSyxHQUFQLEdBQWFQLEdBQWI7O0FBRUEsU0FBT0UsTUFBUDtBQUNEOztBQUVELFNBQVNNLFlBQVQsQ0FBc0JQLEVBQXRCLEVBQTBCO0FBQ3hCLE1BQU1DLFNBQVNDLFNBQVNNLGNBQVQsQ0FBd0JSLEVBQXhCLENBQWY7QUFDQSxNQUFNUyxTQUFTUixPQUFPUyxVQUF0Qjs7QUFFQSxNQUFJO0FBQ0ZELGNBQVVBLE9BQU9FLFdBQVAsQ0FBbUJWLE1BQW5CLENBQVY7QUFDRCxHQUZELENBRUUsT0FBT1csQ0FBUCxFQUFVO0FBQ1Y7QUFDRDtBQUNGOztBQUVELFNBQVNDLFlBQVQsQ0FBc0JaLE1BQXRCLEVBQThCO0FBQzVCLE1BQU1hLGNBQWNaLFNBQVNhLG9CQUFULENBQThCLFFBQTlCLEVBQXdDLENBQXhDLENBQXBCO0FBQ0FELGNBQVlKLFVBQVosQ0FBdUJNLFlBQXZCLENBQW9DZixNQUFwQyxFQUE0Q2EsV0FBNUM7QUFDRDs7QUFFRCxTQUFTRyxtQkFBVCxDQUE2QmxCLEdBQTdCLEVBQWtDbUIsT0FBbEMsRUFBMkNDLE9BQTNDLEVBQW9EO0FBQ2xELFNBQU8sSUFBSUEsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxRQUFNQyxVQUFVSixRQUFRSSxPQUFSLElBQW1CLElBQW5DO0FBQ0EsUUFBTUMsV0FBVy9CLGFBQWpCO0FBQ0EsUUFBTVMsU0FBU0gsYUFBYUMsR0FBYixFQUFrQndCLFFBQWxCLENBQWY7O0FBRUEsUUFBTUMsWUFBWUMsV0FBVyxZQUFNO0FBQ2pDSixhQUFPLElBQUlLLEtBQUosd0JBQStCM0IsR0FBL0IsZ0JBQVA7O0FBRUFRLG1CQUFhZ0IsUUFBYjtBQUNELEtBSmlCLEVBSWZELE9BSmUsQ0FBbEI7O0FBTUEsUUFBTUssaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLGFBQWFDLGFBQWFKLFNBQWIsQ0FBYjtBQUFBLEtBQXZCOztBQUVBdkIsV0FBTzRCLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFVBQVNqQixDQUFULEVBQVk7QUFDMUNRLGNBQVEsRUFBQ1UsSUFBSSxJQUFMLEVBQVI7O0FBRUFILHFCQUFlSCxTQUFmO0FBQ0FqQixtQkFBYWdCLFFBQWI7QUFDRCxLQUxEOztBQU9BdEIsV0FBTzRCLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQVNqQixDQUFULEVBQVk7QUFDM0NTLGFBQU8sSUFBSUssS0FBSix3QkFBK0IzQixHQUEvQixnQkFBNkNhLENBQTdDLENBQVA7O0FBRUFlLHFCQUFlSCxTQUFmO0FBQ0FqQixtQkFBYWdCLFFBQWI7QUFDRCxLQUxEOztBQU9BVixpQkFBYVosTUFBYjtBQUNELEdBNUJNLENBQVA7QUE2QkQ7O0FBRUQsU0FBUzhCLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCO0FBQzdCLFNBQU8sVUFBQ2pDLEdBQUQsRUFBdUI7QUFBQSxRQUFqQm1CLE9BQWlCLHVFQUFQLEVBQU87O0FBQzVCLFFBQU1DLFVBQVVhLFlBQVlBLFNBQVNDLE9BQXJCLElBQWdDQyxLQUFLRCxPQUFyRDs7QUFFQSxXQUFPaEIsb0JBQW9CbEIsR0FBcEIsRUFBeUJtQixPQUF6QixFQUFrQ0MsT0FBbEMsQ0FBUDtBQUNELEdBSkQ7QUFLRDs7a0JBRWNZLFciLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFNjcmlwdElkKCkge1xuICByZXR1cm4gYHNjcmlwdF8ke0RhdGUubm93KCl9XyR7TWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApfWA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNjcmlwdCh1cmwsIGlkKSB7XG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgc2NyaXB0LmlkID0gaWQ7XG4gIHNjcmlwdC5zcmMgPSB1cmw7XG5cbiAgcmV0dXJuIHNjcmlwdDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU2NyaXB0KGlkKSB7XG4gIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgY29uc3QgcGFyZW50ID0gc2NyaXB0LnBhcmVudE5vZGU7XG5cbiAgdHJ5IHtcbiAgICBwYXJlbnQgJiYgcGFyZW50LnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBpZ25vcmVcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc2NyaXB0KSB7XG4gIGNvbnN0IGZpcnN0U2NyaXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICBmaXJzdFNjcmlwdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzY3JpcHQsIGZpcnN0U2NyaXB0KTtcbn1cblxuZnVuY3Rpb24gZmV0Y2hTY3JpcHRJbnRlcm5hbCh1cmwsIG9wdGlvbnMsIHByb21pc2UpIHtcbiAgcmV0dXJuIG5ldyBwcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0IHx8IDUwMDA7XG4gICAgY29uc3Qgc2NyaXB0SWQgPSBnZXRTY3JpcHRJZCgpO1xuICAgIGNvbnN0IHNjcmlwdCA9IGNyZWF0ZVNjcmlwdCh1cmwsIHNjcmlwdElkKTtcbiAgICBcbiAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoYFNjcmlwdCByZXF1ZXN0IHRvICR7dXJsfSB0aW1lZCBvdXRgKSk7XG5cbiAgICAgIHJlbW92ZVNjcmlwdChzY3JpcHRJZCk7XG4gICAgfSwgdGltZW91dCk7XG5cbiAgICBjb25zdCBkaXNhYmxlVGltZW91dCA9IHRpbWVvdXRJZCA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICBcbiAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJlc29sdmUoe29rOiB0cnVlfSk7ICAgICAgXG4gICAgICBcbiAgICAgIGRpc2FibGVUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICByZW1vdmVTY3JpcHQoc2NyaXB0SWQpO1xuICAgIH0pO1xuXG4gICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24oZSkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcihgU2NyaXB0IHJlcXVlc3QgdG8gJHt1cmx9IGZhaWxlZCAke2V9YCkpO1xuICAgICAgXG4gICAgICBkaXNhYmxlVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgcmVtb3ZlU2NyaXB0KHNjcmlwdElkKTtcbiAgICB9KTtcblxuICAgIGFwcGVuZFNjcmlwdChzY3JpcHQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmV0Y2hTY3JpcHQoc2V0dGluZ3MpIHtcbiAgcmV0dXJuICh1cmwsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHByb21pc2UgPSBzZXR0aW5ncyAmJiBzZXR0aW5ncy5Qcm9taXNlIHx8IHNlbGYuUHJvbWlzZTtcblxuICAgIHJldHVybiBmZXRjaFNjcmlwdEludGVybmFsKHVybCwgb3B0aW9ucywgcHJvbWlzZSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoU2NyaXB0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZldGNoLXNjcmlwdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ])
});
;