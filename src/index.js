function getScriptId() {
  return `script_${Date.now()}_${Math.ceil(Math.random() * 100000)}`;
}

function createScript(url, id) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.id = id;
  script.src = url;

  return script;
}

function removeScript(id) {
  const script = document.getElementById(id);
  const parent = script.parentNode;

  try {
    parent && parent.removeChild(script);
  } catch (e) {
    // ignore
  }
}

function appendScript(script) {
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(script, firstScript);
}

function fetchScriptInternal(url, options, promise) {
  return new promise((resolve, reject) => {
    const timeout = options.timeout || 5000;
    const scriptId = getScriptId();
    const script = createScript(url, scriptId);

    const timeoutId = setTimeout(() => {
      reject(new Error(`Script request to ${url} timed out`));

      removeScript(scriptId);
    }, timeout);

    const disableTimeout = timeoutId => clearTimeout(timeoutId);

    script.addEventListener('load', function(e) {
      resolve({ok: true});

      disableTimeout(timeoutId);
      removeScript(scriptId);
    });

    script.addEventListener('error', function(e) {
      reject(new Error(`Script request to ${url} failed ${e}`));

      disableTimeout(timeoutId);
      removeScript(scriptId);
    });

    appendScript(script);
  });
}

function fetchScript(settings) {
  return (url, options = {}) => {
    const promise = settings && settings.Promise || self.Promise;

    return fetchScriptInternal(url, options, promise);
  };
}

export default fetchScript;
