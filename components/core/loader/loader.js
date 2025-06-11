const requestMaxTry = 5;

async function mountURL(mountPoint, url) {
  mountPoint.innerHTML = await loadHTML(url);
}

function pathToTemplateId(rPath) {
  const ts = rPath.replaceAll(/[\/\.\:]+/g, '-');
  return ts;
}

function loadTemplate(url) {
  const lt = pathToTemplateId(url);
  const dc = window.document.body.querySelector('#' + lt);
  if (dc == null) return null;
  const html = dc.innerHTML;
  return html;
}

async function loadHTML(url) {
  for (let i = 0; i < requestMaxTry; i++) {
    try {
      const lt = loadTemplate(url);
      if (lt != null) return lt;
      const res = await fetch(url);
      if (res.ok)
        return await res.text();
      throw new Error(`Error loading ${url}`);
    } catch (e) {
      if (i < requestMaxTry - 1) {
        await sleep(500);
        continue;
      }
      throw e;
    }
  }
}

async function loadCSS(url) {
  const lt = pathToTemplateId(url);
  const dc = window.document.body.querySelector('#' + lt);
  if (dc != null) return null;
  const head = window.document.querySelector('head');
  const link = window.document.createElement('link');
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", url);
  head.appendChild(link);
}

async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

export function State({ message = 'Time is out', rejectTimeout = 120000 }) {
  let setResolved;
  let setRejected;
  let timeout;
  const promise = new Promise((resolve, reject) => {
    setResolved = resolve;
    setRejected = reject;
    timeout = setTimeout(() => reject(new Error(message)), rejectTimeout);
  }).then((r) => {
    clearTimeout(timeout);
    return r;
  });
  promise.resolve = setResolved;
  promise.reject = setRejected;
  return promise;
}

let gBearerToken = null;

function getBearerToken() {
  let token = gBearerToken;
  if (token == null) {
    token = window.localStorage[tokenKey];
    gBearerToken = token;
  }
  if (token == null || token == "undefined") return null;
  return `Bearer ${token}`;
}

function setBearerToken(token) {
  gBearerToken = token;
  window.localStorage[tokenKey] = token;
}

function removeBearerToken() {
  gBearerToken = null;
  delete window.localStorage[tokenKey];
}

window.onbeforeunload = function () {
  if (gBearerToken != null) setBearerToken(gBearerToken);
};

async function tryFetch(url, options) {
  for (let i = 0; i < requestMaxTry; i++) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        const response = await res.text();
        const error = new Error('Server response error');
        error.request = {
          status: res.status,
          url,
          body: options.body,
          response
        };
        throw error;
      }
      return res;
    } catch (e) {
      if (i < requestMaxTry - 1) {
        await sleep(500);
        continue;
      }
      if (e.request) {
        throw e;
      }
      const error = new Error(e.message);
      error.request = {
        url,
        body: options?.body,
        status: null,
        response: null
      };
      throw error;
    }
  }
}

export default {
  mountURL,
  State,
  sleep,
  getBearerToken,
  setBearerToken,
  removeBearerToken,
  loadHTML,
  loadCSS,
  fetch: tryFetch,
  getHostName,
};