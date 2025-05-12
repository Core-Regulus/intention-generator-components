import loader from '../loader/loader.js';
import attributes from '../attributes/attributes.js';

loader.load(import.meta.resolve('indicator.css'));

class Indicator extends HTMLElement {
  #template = `
    <label>
      <span class="led"></span>
      <span class="title"></span>
    </label>
  `;

  #value = false;

  constructor() {
    super();
    this.innerHTML = this.#template;
    this.components = {
      title: this.querySelector('.title'),
      led: this.querySelector('.led')
    };
    attributes.loadAttributes(this);
  }  
  
  set value(value) { 
    if (value == true) {
      this.components.led.classList.add('on');
      return;
    } else {
      this.components.led.classList.remove('on'); 
    }
  }
  get value() { return this.components.val.value; }

  get title() { return this.components.title.innerHTML; }
  set title(value) { return this.components.title.innerHTML = value; }
}

customElements.define('intention-indicator', Indicator);
