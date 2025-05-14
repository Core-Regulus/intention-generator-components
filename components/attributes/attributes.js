const typeMap = {
  'true': true,
  'false': false
}

const skipAttrNames = {
  'class': true
}

const skipAttrNamePart = {
  'data': true
}

function toBoolean(value) {
  if (value == null) return false;
  return value === 'true' || value === '1';  
}

function toString(value) {
  if (value == null) return '';
  return value.toString();  
}

function capitalize(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function getName(attrName) {
  const na = attrName.split('-').filter(f => skipAttrNamePart[f] == false);
  const res = [];
  for (let i = 0; i < na.length; i++) {
    const item = na[i];
    if (i == 0) 
      res.push(item);
    else
      res.push(capitalize(item))
  }
  return res.join('');
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
    const sa = skipAttrNames[attr.name];
    if (sa) continue;
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