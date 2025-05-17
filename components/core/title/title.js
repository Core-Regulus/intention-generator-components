import loader from '../loader/loader.js';
import { Container } from '../container/container.js';

loader.loadCSS(import.meta.resolve('./title.css'));

class Title extends Container {
  _size = 1;

  set size(value) {
    this._size = value;
    this.render();
  }

  get size() { return this._size; }
  
  async render() {
    const body = this.innerHTML;
    this.innerHTML = `
      <h${this.size}>${body}</h${this.size}>
    `;
  }
}

customElements.define('intention-title', Title);
