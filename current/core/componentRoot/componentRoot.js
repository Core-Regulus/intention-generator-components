import { Container } from '../container/container.js';
import { createComponentProxy } from '../componentProxy/componentProxy.js';

export class ComponentRoot extends Container {  
  #components = createComponentProxy({});
  
  get components() {
    return this.#components;
  }

  async render() { 
    await super.render();
    this.apply();
    this.componentReady?.();
  }
}

export default {
  ComponentRoot
}