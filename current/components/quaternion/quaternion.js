import loader from '../../core/loader/loader.js';
import { ComponentRoot } from '../../core/componentRoot/componentRoot.js';

class Quaternion extends ComponentRoot {
  get template() {
    return `
      <i-float-value class="real" value="0" step="0.01" name="real">Real:</i-float-value>
      <i-float-value class="i" value="0" step="0.01" name="i">i:</i-float-value>
      <i-float-value class="j" value="0" step="0.01" name="j">j:</i-float-value>
      <i-float-value class="k" value="0" step="0.01" name="k">k:</i-float-value>
    `;
  }

  _i = 0;
  _j = 0;
  _k = 0;
  _real = 0;

  set i(value) { 
    this._i = Number(value);
    this.set('components.i.value', this._i.toFixed(3)); 
  }
  set j(value) { 
    this._j = Number(value);
    this.set('components.j.value', this._j.toFixed(3)); 
  }
  set k(value) { 
    this._k = Number(value);
    this.set('components.k.value', this._k.toFixed(3)); 
  }
  set real(value) { 
    this._real = Number(value);
    this.set('components.real.value', this._real.toFixed(3)); 
  }

  get i() { return this._i; }
  get j() { return this._j; }
  get k() { return this._k; }
  get real() { return this._real; }

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
