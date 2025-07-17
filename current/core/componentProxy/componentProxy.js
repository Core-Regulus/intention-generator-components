import { isEmpty, toKebab, toCamelCase } from "../string/string.js";

function createComponentHash(domRoot, fullPath) {
  const res = {};
  const elements = domRoot.querySelector(`[name^=${fullPath}]`);
  for (const elem of elements) {
    const name = attributes.get(el, 'name');
    const firstPart = toCamelCase(name.split('.')[0]);
    res[firstPart] = elem;
  }
  return res;
}

export function createComponentProxy(domRoot, source, prefix) {
  const componentHandler = {
    get(obj, prop) {
      const fullPath = isEmpty(prefix) ? toKebab(prop) : toKebab(`${prefix}.${prop}`);
      if (obj[fullPath] !== undefined) {
        return obj[fullPath];
      }
      const targetElement = domRoot.querySelector(`[name=${fullPath}]`);
      if (targetElement != null) {
        obj[fullPath] = targetElement;
        return targetElement;
      }
      const res = createComponentHash(domRoot, fullPath);
      return createComponentProxy(domRoot, res, fullPath);
    }
  };
  return new Proxy(source, componentHandler);
}

export default {
  createComponentProxy
}