const typeMap = {
  'true': true,
  'false': false
}

function toBoolean(value) {
  if (value == null) return false;
  return value === 'true' || value === '1';  
}

function toString(value) {
  if (value == null) return '';
  return value.toString();  
}

function getName(attrName) {
  const na = attrName.split('-');
  return na[1] || na[0];
}

function getValue(val) {
  const lval = val.toLowerCase();
  const nv = typeMap[lval];
  if (nv != null) return nv;
  return val;
}

export function getBoolean(htmlElement, attrName) {
  const attr = htmlElement.getAttribute(attrName);
  return toBoolean(attr);
}

export function getString(htmlElement, attrName) {
  const attr = htmlElement.getAttribute(attrName);
  return toString(attr);
}

export function loadAttributes(htmlElement) {
  for (const attr of htmlElement.attributes) {
    const name = getName(attr.name);
    if (name == null) continue;
    this[name] = getValue(attr.value);
  }
}

export default {
  getBoolean,
  getString,
  loadAttributes
}