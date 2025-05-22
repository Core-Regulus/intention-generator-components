import string from '../string/string.js';
import attributes from '../attributes/attributes.js';

function getStartPath(source, root) {
  let cur = null;
  let curVal = null;
  let parent = source;
  const res = [];
  while (parent != root) {
    cur = attributes.get(parent, 'name');
    parent = parent.parentNode;
    if (parent == null) 
      break;
    if (cur == null) continue;
    curVal = string.toCamelCase(cur);
    res.push(curVal);
  }
  return res.reverse().join('.');
}

export function collectComponents(element) {
  if (element.components == null) element.components = {};
  const elements = element.querySelectorAll('[name]');
  for (const el of elements) {
    const name = attributes.get(parent, 'name');
    const namesArray = name.split('.');
    if (namesArray.length == 5)
      debugger;
    let root = element.components;
    for (let i = 0; i < namesArray.length - 1; i++) {
      const name = string.toCamelCase(namesArray[i]);
      if (root[name] == null) root[name] = {};
      root = root[name];        
    }
    const lname = string.toCamelCase(namesArray[namesArray.length - 1]);
    try {
      root[lname] = el;
    } catch (e) {
      debugger;
      throw e;
    }
  }
}

export default {
  collectComponents
}
