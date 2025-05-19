import attributes from '../attributes/attributes.js';
import attributes from '../attributes/attributes.js';
import dom from '../dom/dom.js';

export class Container extends HTMLElement {
  #template = '';
  
  constructor() {
    super();
    this.render().then(() => {
      attributes.loadAttributes(this);      
    });
  }

  async render() {
    this.innerHTML = this.template; 
    dom.collectComponents(this);
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