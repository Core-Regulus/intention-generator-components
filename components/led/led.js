import loader from '../loader/loader.js';
import attributes from '../attributes/attributes.js';

loader.loadCSS(import.meta.resolve('./indicator.css'));

class Led extends HTMLElement {
  #template = `
    <span class="led"></span>
    <span class="title"></span>
  `;

  #value = false;

  constructor() {
    super();
    const body = this.innerHTML;
    this.innerHTML = this.#template;
    this.components = {
      title: this.querySelector('.title'),
      led: this.querySelector('.led')
    };
    this.components.title.innerHTML = body;
    attributes.loadAttributes(this);
  }  
  
  set value(value) { 
    if (value == true) {
      this.classList.add('on');
    } else {
      this.classList.remove('on'); 
    }
  }
  get value() { return this.components.val.value; }

  get title() { return this.components.title.innerHTML; }
  set title(value) { return this.components.title.innerHTML = value; }
}

customElements.define('intention-led', Led);
