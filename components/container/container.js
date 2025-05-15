import attributes from '../attributes/attributes.js';

export class Container extends HTMLElement {
  constructor() {    
    super();
    attributes.loadAttributes(this);
  }

  async render() {}  
}

export default {
    Container
}