import dom from '../dom/dom.js';
import { Container } from '../container/container.js';

export class ComponentRoot extends Container {  
  async render() {
    await super.render();
    dom.collectComponents(this);
    this.apply();
    this.componentReady?.();
  }
}

export default {
  ComponentRoot
}