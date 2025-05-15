import loader from '../loader/loader.js';
import attributes from '../attributes/attributes.js';
import { FlexPanel } from '../flexPanel/flexPanel.js';

loader.loadCSS(import.meta.resolve('./floatValue.css'));

class FloatValue extends FlexPanel {
  constructor() {    
    super();    
  }

  async render() {
    const body = this.innerHTML;
    const template = `    
      <span></span>
      <input type="number" value="0" step="0.01"/>
    `;
    this.innerHTML = template;
    this.components = {
      title: this.querySelector('span'),
      val: this.querySelector('input')
    };
    this.components.title.innerHTML = body;
  }

  set value(value) { this.components.val.value = value.toFixed(3); }
  get value() { return this.components.val.value; }

  set step(value) { this.components.val.step = value; }
  get step() { return this.components.val.step; }

  set min(value) { this.components.val.min = value; }
  get min() { return this.components.val.min; }

  set max(value) { this.components.val.max = value; }
  get max() { return this.components.val.max; }

  set readOnly(value) {
    this.components.val.readOnly = value;
  }

  get readOnly() { this.components.val.readOnly; }
}

customElements.define('intention-float-value', FloatValue);
