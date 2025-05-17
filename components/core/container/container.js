import attributes from '../attributes/attributes.js';

export class Container extends HTMLElement {
  #template = '';
  
  constructor() {
    super();
    this.render().then(() => {
      attributes.loadAttributes(this);
    });
  }

  async render() { }

  set template(value) { this.#template = value; }
  get template() { return this.#template; }

  copyChildren(dest, source) {
    if (dest == source) return;
    for (const item of source.children) {
      dest.appendChild(item);
    }
  }
}

export default {
  Container
}