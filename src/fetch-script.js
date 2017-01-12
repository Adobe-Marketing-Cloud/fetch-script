function getScriptId() {
  return `script_${Date.now()}_${Math.ceil(Math.random() * 100000)}`;
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
  const script = document.getElementById(scriptId);
  const parent = script.parentNode;

  try {
    if (parent) {
      parent.removeChild(script);  
    }
  } catch (e) {
    // ignore
  }
}

function appendScript(script) {
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(script, firstScript);
} 

function fetchScript(url, options = {}) {
  const timeout = options.timeout || 5000;
  
  return new Promise((resolve, reject) => {
    const scriptId = getScriptId();
    const script = createScript(url, scriptId);
    const disableTimeout = () => { if (timeoutId) clearTimeout(timeoutId) };
    
    script.addEventListener('load', function(e) {
      resolve({ok: true});      
      disableTimeout();
      removeScript(scriptId);
    });

    script.addEventListener('error', function(e) {
      reject(new Error(`Script request to ${url} failed ${e}`));
      disableTimeout();
      removeScript(scriptId);
    });

    appendScript(script);

    const timeoutId = setTimeout(() => {
      reject(new Error(`Script request to ${url} timed out`));
      removeScript(scriptId);
    }, timeout);
  });
}

export default fetchScript;
