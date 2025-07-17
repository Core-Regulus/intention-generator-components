import string from "../string/string.js";

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

function getValue(val) {
  const lval = val.toLowerCase();
  const nv = typeMap[lval];
  if (nv != null) return nv;
  return val;
}

export function getBoolean(htmlElement, attrName) {
  const attr = htmlElement.getAttribute(attrName);
  return string.toBoolean(attr);
}

export function getString(htmlElement, attrName) {
  const attr = htmlElement.getAttribute(attrName);
  return toString(attr);
}

function getName(attrName) {
  return string.toCamelCase(attrName, skipAttrNamePart);
}

export function loadAttributes(htmlElement) {
  for (const attr of htmlElement.attributes) {
    const sa = skipAttrNames[attr.name];
    if (sa) continue;
    const name = getName(attr.name);
    if (name == null) continue;
    htmlElement[name] = getValue(attr.value);
  }
}

export function get(htmlElement, name) {
  const ta = htmlElement.getAttribute(name);
  if (ta != null) return ta;
  const td = htmlElement.getAttribute(`data-${name}`);
  return td;
}

export function searchAttribute(element, name) {  
  const res = {
    node: null,
    attributeName: name,
    attributeValue: null
  };
  do {
    res.attributeValue = attributes.get(node, name);
    res.node = node.parentNode;
    if (res.node == null) return res;
  } while (res.attributeValue == null);
  return res;
}

export default {
  getBoolean,
  searchAttribute,
  getString,
  loadAttributes,
  get
}