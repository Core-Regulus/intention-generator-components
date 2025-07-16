import attributes from '../attributes/attributes.js';
import loader from '../loader/loader.js';


export class Container extends HTMLElement {  
  #template = null;
  #properties = {};

  constructor() {
    super();
    attributes.loadAttributes(this);
    this.render();
  }

  get properties() {
    return this.#properties;
  }

  async render(force) {
    const forceLoad = (window.location.hostname == 'localhost') || force || this.children.length == 0;
    if (forceLoad && (this.url != null)) {
      this.template = await loader.loadHTML(this.url);
    }
    const tt = typeof this.template;    
    if (tt == 'string') {
      if (forceLoad)
        this.innerHTML = this.template; 
    } else if (this.template instanceof HTMLElement) {
      if (forceLoad) {
        this.innerHTML = '';
        this.appendChild(body);
      }        
    }
  }

  set template(value) { this.#template = value; }
  get template() { return this.#template; }


  getObject(path) {
    let root = this;
    const pathArray = path.split('.');
    const keyArray = pathArray.slice(0, -1);
    for (const c of keyArray) {
      root = root[c];
      if (root == null) break;
    }
    const key = pathArray[pathArray.length -1];
    return {
      isValid: (root != null),
      key,
      object: root
    };
  }

  set(path, value) {
    const obj = this.getObject(path);
    if (obj.isValid) {
      obj.object[obj.key] = value;
    }
    this.properties[path] = value;
  }

  get(path) {
    const obj = this.getObject(path);
    if (obj.isValid) {
      return obj.object[obj.key];
    }
    return this.properties[path];
  }

  apply() {
    const keys = Object.keys(this.properties);
    for (const key of keys) {
      const val = this.properties[key];
      const obj = this.getObject(key);
      if (!obj.isValid) continue;
      obj.object[obj.key] = val;
    }
  }

  copyChildNodes(dest, source) {
    if (dest == source) return;
    for (const item of source.childNodes) {      
      if (dest == item) return;
      dest.appendChild(item);            
    }
  }
}

export default {
  Container
}