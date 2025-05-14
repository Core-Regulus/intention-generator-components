import loader from '../loader/loader.js';
import attributes from '../attributes/attributes.js';

loader.loadCSS(import.meta.resolve('./quaternion.css'));

class Quaternion extends HTMLElement {  
  #template =
      `<label>
          <span>real:</span>
          <input class="real" type="number" value="0" step="0.01" name="real"/>
        </label>
        <label>
            <span>i:</span>
            <input class="i" type="number" value="0" step="0.01" name="i"/>
        </label>
        <label>
          <span>j:</span>
          <input class="j" type="number" value="0" step="0.01" name="j"/>
        </label>
        <label>
          <span>k:</span>
          <input class="k" type="number" value="0" step="0.01" name="k"/>
        </label>  
      `;

  #readOnly = false;
  
  constructor() {
    super();
    this.innerHTML = this.#template;
    this.components = {
      real: this.querySelector('.real'),
      i: this.querySelector('.i'),
      j: this.querySelector('.j'),
      k: this.querySelector('.k'),
    };    
    attributes.loadAttributes(this);
  }

  get readOnly() {
    return this.#readOnly;
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
    this.#readOnly = value;
    this.components.real.readOnly = this.#readOnly;
    this.components.i.readOnly = this.#readOnly;
    this.components.j.readOnly = this.#readOnly;
    this.components.k.readOnly = this.#readOnly;
    return this.#readOnly;
  } 
}

customElements.define('intention-quaternion', Quaternion);
