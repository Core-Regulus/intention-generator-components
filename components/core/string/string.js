export function toCamelCase(name, skipParts = {}) {
  const na = name.split('-').filter(f => !skipParts[f]);
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

export function capitalize(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function toString(value) {
  if (value == null) return '';
  return value.toString();  
}

export function toBoolean(value) {
  if (value == null) return false;
  return value === 'true' || value === '1';  
}

export function isValidName(val) {
  if (val == null) return false;
  if (val == '') return false;
  const rt = /[A-Za-z0-9]{3,32}/;
  const match = rt.exec(val);
  if (match == null) return false;
  return true;
}



export default {
  toCamelCase,
  capitalize,
  toString,
  toBoolean,
  isValidName
}