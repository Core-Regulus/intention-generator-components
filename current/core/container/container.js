import attributes from '../attributes/attributes.js';
import loader from '../loader/loader.js';
import string from '../string/string.js';

export class Container extends HTMLElement {  
  #template = null;

  constructor() {
    super();
    attributes.loadAttributes(this);
    this.render();
  }

  async render(force) {
    const forceLoad = (window.location.hostname == 'localhost') || force || this.children.length == 0;
    if (forceLoad && (this.url != null)) {
      /*const fUrl = string.isURL(this.url) ? 
        this.url :
        window.location.origin + this.url;*/
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

  copyChildNodes(dest, source) {
    if (dest == source) return;
    for (const item of source.childNodes) {
      dest.appendChild(item);
    }
  }
}

export default {
  Container
}