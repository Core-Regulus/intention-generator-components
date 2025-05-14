import loader from '../loader/loader.js';
import attributes from '../attributes/attributes.js';

loader.loadCSS(import.meta.resolve('./floatValue.css'));

class FloatValue extends HTMLElement {
  #template = `
    <label>
      <span></span>
      <input type="number" value="0" step="0.01"/>
    </label>
  `;

  #readOnly = false;

  constructor() {
    super();
    const body = this.innerHTML;
    this.innerHTML = this.#template;
    this.components = {
      title: this.querySelector('span'),
      val: this.querySelector('input')
    };
    this.components.title.innerHTML = body;
    attributes.loadAttributes(this);
  }

  set value(value) { this.components.val.value = value.toFixed(3); }
  get value() { return this.components.val.value; }

  set readOnly(value) {
    this.#readOnly = value;
    this.components.val.readOnly = this.#readOnly;
  }

  get readOnly() { return this.#readOnly; }
}

customElements.define('intention-float-value', FloatValue);
