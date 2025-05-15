import attributes from '../attributes/attributes.js';

export class Container extends HTMLElement {
  constructor() {    
    super();    
    this.render();
    attributes.loadAttributes(this);
  }

  async render() {}  
}

export default {
    Container
}