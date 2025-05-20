import dom from '../dom/dom.js';
import { Container } from '../container/container.js';
import string from '../string/string.js';

export class ComponentRoot extends Container {
  #name = null;

  async render() {
    await super.render();
    dom.collectComponents(this);
  }

  set name(value) {
    this.#name = value;
    if (string.isValidName(this.#name))
      dom.collectComponents(this);
  }

  get name() { return this.#name; }
}

export default {
  ComponentRoot
}