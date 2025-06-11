import attributes from '../attributes/attributes.js';
import loader from '../loader/loader.js'

export class Container extends HTMLElement {  
  #template = null;

  constructor() {
    super();
    attributes.loadAttributes(this);
    this.render();
  }

  async render() {
    if ((this.template == null) && (this.url != null)) {
      this.template = await loader.loadHTML(this.url);
    }
    const tt = typeof this.template;    
    if (tt == 'string') {
      if (this.innerHTML == '')
        this.innerHTML = this.template; 
    } else if (this.template instanceof HTMLElement) {
      if (this.innerHTML == '')
        this.appendChild(body);
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