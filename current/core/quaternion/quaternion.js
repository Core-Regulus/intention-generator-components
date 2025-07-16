import loader from '../loader/loader.js';
import { ComponentRoot } from '../componentRoot/componentRoot.js';

loader.loadCSS(import.meta.resolve('./quaternion.css'));

class Quaternion extends ComponentRoot {
  get template() {
    return `
      <i-float-value class="real" value="0" step="0.01" name="real">Real:</i-float-value>
      <i-float-value class="i" value="0" step="0.01" name="i">i:</i-float-value>
      <i-float-value class="j" value="0" step="0.01" name="j">j:</i-float-value>
      <i-float-value class="k" value="0" step="0.01" name="k">k:</i-float-value>
    `;
  }

  set i(value) { this.set('components.i.value', value.toFixed(3)); }
  set j(value) { this.set('components.j.value', value.toFixed(3)); }
  set k(value) { this.set('components.k.value', value.toFixed(3)); }
  set real(value) { this.set('components.real.value', value.toFixed(3)); }

  get i() { return Number(this.get('components.i.value')); }
  get j() { return Number(this.get('components.j.value')); }
  get k() { return Number(this.get('components.k.value')); }
  get real() { return Number(this.get('components.real.value')); }

  set readOnly(value) {
    this.set('components.real.readOnly', value);
    this.set('components.i.readOnly', value);
    this.set('components.j.readOnly', value);
    this.set('components.k.readOnly', value);
  }

  get readOnly() {
    return this.get('components.real.readOnly');
  }
}

customElements.define('i-quaternion', Quaternion);
