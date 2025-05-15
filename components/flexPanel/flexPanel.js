import loader from '../loader/loader.js';
import { Container } from '../container/container.js';

loader.loadCSS(import.meta.resolve('./flexPanel.css'));

export class FlexPanel extends Container {    
  constructor() {        
    super();
    this.classList.add('intention-flex-panel');
  }

  set direction(value) { 
    this.style['flexDirection'] = value; 
  }
  get direction() { 
    return this.style['flexDirection'];
  }

  set gap(value) { 
    this.style.gap = value; 
  }

  get gap() { return this.style.gap; }
}

customElements.define('intention-flex-panel', FlexPanel);

export default {
  FlexPanel
}