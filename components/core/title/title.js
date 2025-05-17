import loader from '../loader/loader.js';
import { Container } from '../container/container.js';

loader.loadCSS(import.meta.resolve('./title.css'));

class Title extends Container {
  _size = 1;
  _header = null;

  set size(value) {
    this._size = value;
    this._element = null;
    this.render();
  }

  get size() { return this._size ?? 1; }
  
  
get header() {
    if (this._header == null) {
      this._header = window.document.createElement(`h${this.size}`);
    }
    return this._header;
  }
  
  async render() {
    const target = this.header;
    const source = (target.children.length == 0) ?
      this :
      target;
    this.copyChildren(target, source);
    this.appendChild(target);

  }
}

customElements.define('intention-title', Title);
