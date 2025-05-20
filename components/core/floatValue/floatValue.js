import loader from '../loader/loader.js';
import attributes from '../attributes/attributes.js';
import { FlexPanel } from '../flexPanel/flexPanel.js';

loader.loadCSS(import.meta.resolve('./floatValue.css'));

class FloatValue extends FlexPanel {
  get template() {
    return `    
      <span class="title" name="title">${this.innerHTML}</span>
      <input class="value" name="value" type="number" value="0" step="0.01"/>
    `;
  }
  
  set value(value) { this.components.val.value = value; }
  get value() { return this.components.val.value; }

  set step(value) { this.components.val.step = value; }
  get step() { return this.components.val.step; }

  set min(value) { this.components.val.min = value; }
  get min() { return this.components.val.min; }

  set max(value) { this.components.val.max = value; }
  get max() { return this.components.val.max; }

  set titleWidth(value) { this.components.title.style.width = value; }
  get titleWidth() { return this.components.title.style.width; }

  set readOnly(value) {
    this.components.val.readOnly = value;
  }

  get readOnly() { this.components.val.readOnly; }
}

customElements.define('intention-float-value', FloatValue);
