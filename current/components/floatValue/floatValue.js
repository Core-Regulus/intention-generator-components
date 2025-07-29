import loader from '../../core/loader/loader.js';
import { ComponentRoot } from '../../core/componentRoot/componentRoot.js';

loader.loadCSS(import.meta.resolve('./floatValue.css'));

class FloatValue extends ComponentRoot {
  get template() {
    return `    
      <span class="title" name="title">${this.innerHTML}</span>
      <input class="value" name="value" type="number"/>
    `;
  }

  set value(value) { this.set('components.value.value', value); }
  get value() { return this.get('components.value.value'); }

  set step(value) { this.set('components.value.step', value); }
  get step() { return this.get('components.value.step'); }

  set min(value) { this.set('components.value.min', value); }
  get min() { return this.get('components.value.min'); }

  set max(value) { this.set('components.value.max', value ); }
  get max() { return this.get('components.value.max'); }

  set titleWidth(value) { this.set('components.title.style.width', value); }
  get titleWidth() { return this.get('components.title.style.width'); }

  set readOnly(value) {
    this.set('components.value.readOnly', value);
  }

  get readOnly() { return this.get('this.components.value.readOnly'); }
}

customElements.define('i-float-value', FloatValue);
