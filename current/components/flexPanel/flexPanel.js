import { Container } from '../../core/container/container.js';

export class FlexPanel extends Container {
  constructor() {
    super();
    this.style['display'] = 'flex';
    this.direction = 'row';
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

customElements.define('i-flex-panel', FlexPanel);

export default {
  FlexPanel
}