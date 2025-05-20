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
  
  set value(value) { this.components.value.value = value; }
  get value() { return this.components.value.value; }

  set step(value) { this.components.value.step = value; }
  get step() { return this.components.value.step; }

  set min(value) { this.components.value.min = value; }
  get min() { return this.components.value.min; }

  set max(value) { this.components.value.max = value; }
  get max() { return this.components.value.max; }

  set titleWidth(value) { this.components.title.style.width = value; }
  get titleWidth() { return this.components.title.style.width; }

  set readOnly(value) {
    this.components.value.readOnly = value;
  }

  get readOnly() { this.components.value.readOnly; }
}

customElements.define('intention-float-value', FloatValue);
