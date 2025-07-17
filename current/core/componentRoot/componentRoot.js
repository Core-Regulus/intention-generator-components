import { Container } from '../container/container.js';
import { createComponentProxy } from '../componentProxy/componentProxy.js';

export class ComponentRoot extends Container {  
  _components = createComponentProxy(this, {});
  
  get components() {
    return this._components;
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