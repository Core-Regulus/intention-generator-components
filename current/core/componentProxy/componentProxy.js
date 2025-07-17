import { isEmpty, toKebab, toCamelCase } from "../string/string.js";

function createComponentHash(fullPath) {
  const res = {};
  const elements = this.querySelector(`[name^=${fullPath}]`);
  for (const elem of elements) {
    const name = attributes.get(el, 'name');
    const firstPart = toCamelCase(name.split('.')[0]);
    res[firstPart] = elem;
  }
  return res;
}

export function createComponentProxy(source, prefix) {
  const componentHandler = {
    get(obj, prop) {
      const fullPath = isEmpty(prefix) ? toKebab(prop) : toKebab(`${prefix}.${prop}`);
      if (obj[fullPath] !== undefined) {
        return obj[fullPath];
      }
      const targetElement = this.querySelector(`[name=${fullPath}]`);
      if (targetElement != null) {
        obj[fullPath] = targetElement;
        return targetElement;
      }
      const res = createComponentHash(fullPath);
      return createComponentProxy(res, fullPath);
    }
  };
  return new Proxy(source, componentHandler);
}

export default {
  createComponentProxy
}