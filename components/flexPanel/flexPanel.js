import loader from '../loader/loader.js';
import { Container } from '../container/container.js';

loader.loadCSS(import.meta.resolve('./flexPanel.css'));

export class FlexPanel extends Container {
  #direction = 'horizontal';
  constructor() {        
    super();
    this.classList.add('intention-flex-panel');
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

export default {
  FlexPanel
}