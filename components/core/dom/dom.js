  import string from '../string/string.js';

  export function collectComponents(element) {
    if (element.components == null) element.components = {};
    const elements = element.querySelectorAll('[name]');
    for (const el of elements) {
      const name = attributes.get(el, 'name');
      const namesArray = name.split('.')
      let root = element.components;
      for (let i = 0; i < namesArray.length - 1; i++) {
        const name = string.toCamelCase(namesArray[i]);
        if (root[name] == null) root[name] = {};
        root = root[name];        
      }
      root[name] = el;
    }
  }

  export default {
    collectComponents
  }
