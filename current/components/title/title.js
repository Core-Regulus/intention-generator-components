import loader from '../../core/loader/loader.js';
import { Container } from '../../core/container/container.js';

loader.loadCSS(import.meta.resolve('./title.css'));

class Title extends Container {
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
    const target = this.header;
    const source = this._oldHeader || this;
    this.copyChildNodes(target, source);
    this.innerHTML = '';
    this.appendChild(target);
    this._oldHeader = null;
  }
}

customElements.define('i-title', Title);
