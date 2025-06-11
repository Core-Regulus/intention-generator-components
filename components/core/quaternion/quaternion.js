import loader from '../loader/loader.js';
import { ComponentRoot } from '../componentRoot/componentRoot.js';

loader.loadCSS(import.meta.resolve('./quaternion.css'));

class Quaternion extends ComponentRoot {
  get template() {
    return `
      i-float-value class="real" value="0" step="0.01" name="real">Real:</intention-float-value>
      i-float-value class="i" value="0" step="0.01" name="i">i:</intention-float-value>
      i-float-value class="j" value="0" step="0.01" name="j">j:</intention-float-value>
      i-float-value class="k" value="0" step="0.01" name="k">k:</intention-float-value>
    `;
  }

  set i(value) { this.components.i.value = value.toFixed(3); }
  set j(value) { this.components.j.value = value.toFixed(3); }
  set k(value) { this.components.k.value = value.toFixed(3); }
  set real(value) { this.components.real.value = value.toFixed(3); }

  get i() { return Number(this.components.i.value); }
  get j() { return Number(this.components.j.value); }
  get k() { return Number(this.components.k.value); }
  get real() { return Number(this.components.real.value); }

  set readOnly(value) {
    this.components.real.readOnly = value;
    this.components.i.readOnly = value;
    this.components.j.readOnly = value;
    this.components.k.readOnly = value;
  }

  get readOnly() {
    return this.components.real.readOnly;
  }
}

customElements.define('i-quaternion', Quaternion);
