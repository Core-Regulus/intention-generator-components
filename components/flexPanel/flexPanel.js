import loader from '../loader/loader.js';
import attributes from '../attributes/attributes.js';

loader.loadCSS(import.meta.resolve('./flexPanel.css'));

class FlexPanel extends HTMLElement {
  #direction = 'horizontal';
  constructor() {
    super();
    attributes.loadAttributes(this);
  }

  set direction(value) {
    this.classList.remove(this.#direction);
    this.classList.add(value);
    this.#direction = value;
  }

  get direction() { return this.#direction; }
  
  set gap(value) {
    this.style.gap = value;    
  }

  get gap() { return this.style.gap; }
}

customElements.define('intention-flex-panel', FlexPanel);
