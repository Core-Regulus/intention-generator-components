import loader from '../loader/loader.js';
import { FlexPanel } from '../flexPanel/flexPanel.js';

loader.loadCSS(import.meta.resolve('./quaternion.css'));

class Quaternion extends FlexPanel {  
  get template() {
    return `
      <intention-float-value class="roll" value="0" step="0.01">Real</intention-float-value>
      <intention-float-value class="i" value="0" step="0.01">i</intention-float-value>
      <intention-float-value class="j" value="0" step="0.01">i</intention-float-value>
      <intention-float-value class="k" value="0" step="0.01">i</intention-float-value>        
    `;
  }

  async render() {
    this.innerHTML = this.template;
    this.components = {
      real: this.querySelector('.real'),
      i: this.querySelector('.i'),
      j: this.querySelector('.j'),
      k: this.querySelector('.k'),
    };    
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

customElements.define('intention-quaternion', Quaternion);
