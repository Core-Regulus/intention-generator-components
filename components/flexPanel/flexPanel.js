import loader from '../loader/loader.js';
import attributes from '../attributes/attributes.js';

loader.loadCSS(import.meta.resolve('./flexPanel.css'));

class FlexPanel extends HTMLElement {  
  constructor() {
    super();
    attributes.loadAttributes(this);
  }
}

customElements.define('intention-flex-panel', FlexPanel);
