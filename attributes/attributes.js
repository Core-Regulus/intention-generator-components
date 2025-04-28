function toBoolean() {
  if (value == null) return false;
  return value === 'true' || value === '1';  
}

export function getAttributeBoolean(dom, attrName) {
  const attr = dom.getAttribute(attrName);
  return toBoolean(attr);
}

export default {
  getAttributeBoolean
}