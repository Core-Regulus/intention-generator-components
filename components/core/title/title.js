import loader from '../loader/loader.js';
import { Container } from '../container/container.js';

loader.loadCSS(import.meta.resolve('./title.css'));

class Title extends Container {
  _size = 1;
  _header = null;
  _oldHeader = null;

  set size(value) {
    this._size = value;
    this._oldHeader = this._header;
    this._header = null;
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
    const target = this._oldHeader || this.header;
    const source = (target.childNodes.length == 0) ?
      this :
      target;
    this.copyChildNodes(target, source);
    this.appendChild(target);

  }
}

customElements.define('intention-title', Title);
