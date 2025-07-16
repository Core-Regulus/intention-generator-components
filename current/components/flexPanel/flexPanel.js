import loader from '../../core/loader/loader.js';
import { Container } from '../../core/container/container.js';
loader.loadCSS(import.meta.resolve('./flexPanel.css'));

export class FlexPanel extends Container {
  set direction(value) {
    this.style['flexDirection'] = value;
  }
  get direction() {
    return this.style['flexDirection'];
  }

  get template() {
    return this.childNodes;
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