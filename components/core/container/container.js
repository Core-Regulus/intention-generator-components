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
}

export default {
  Container
}