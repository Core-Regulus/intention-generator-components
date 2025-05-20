import attributes from '../attributes/attributes.js';
import dom from '../dom/dom.js';

export class Container extends HTMLElement {  
  #template = null;

  constructor() {
    super();
    if (this.constructor.name == 'GridPanel')
      console.log('Gotcha');
    this.render().then(() => {
      attributes.loadAttributes(this);      
    });
  }

  async render() {
    const tt = typeof this.template;
    if (tt == 'string')
      this.innerHTML = this.template; 
    else if (this.template instanceof HTMLElement) {
      this.appendChild(body);
    }
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