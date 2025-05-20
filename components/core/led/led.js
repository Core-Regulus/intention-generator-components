import loader from '../loader/loader.js';
import { Container } from '../container/container.js';

loader.loadCSS(import.meta.resolve('./led.css'));

class Led extends Container {
  get template() {
    return `
      <span class="led" name="led"></span>
      <span class="title" name="title">${this.innerHTML}</span>
    `;
  }
  
  set value(value) { 
    if (value == true) {
      this.classList.add('on');
    } else {
      this.classList.remove('on'); 
    }
  }
  get value() { return this.components.val.value; }

  get title() { 
    return this.components.title.innerHTML; 
  }
  set title(value) { 
    return this.components.title.innerHTML = value; 
  }
}

customElements.define('intention-led', Led);
