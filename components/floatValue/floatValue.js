import loader from '../loader/loader.js';
import attributes from '../attributes/attributes.js';
import { FlexPanel } from '../flexPanel/flexPanel.js';

loader.loadCSS(import.meta.resolve('./floatValue.css'));

class FloatValue extends FlexPanel {
  #template = `    
    <span></span>
    <input type="number" value="0" step="0.01"/>
  `;

  constructor() {    
    super();    
  }

  async render() {
    const body = this.innerHTML;
    this.innerHTML = this.#template;
    this.components = {
      title: this.querySelector('span'),
      val: this.querySelector('input')
    };
    this.components.title.innerHTML = body;
  }

  set value(value) { this.components.val.value = value.toFixed(3); }
  get value() { return this.components.val.value; }

  set readOnly(value) {
    this.components.val.readOnly = value;
  }

  get readOnly() { this.components.val.readOnly; }
}

customElements.define('intention-float-value', FloatValue);
