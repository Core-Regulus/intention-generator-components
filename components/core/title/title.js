import loader from '../loader/loader.js';
import { Container } from '../container/container.js';

loader.loadCSS(import.meta.resolve('./title.css'));

class Title extends Container {
  #size = 1;

  set size(value) {
    this.#size = value;
    this.render();
  }

  get size() { return this.#size; }
  
  constructor () {
    super();
    this.#size = 1;
  }

  async render() {
    const body = this.firstChild?.innerHTML || this.innerHTML;
    this.innerHTML = `
      <h${this.size}>${body}</h${this.size}>
    `;
  }
}

customElements.define('intention-title', Title);
