import loader from '../loader/loader.js';
import { Container } from '../container/container.js';

loader.loadCSS(import.meta.resolve('./errorMessage.css'));

class ErrorMessage extends Container {  
  constructor() {
    super();
    window.addEventListener('error', (event) => {
      this.message = event.message;
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.message = event.reason.message;
    });
  }
  
  async render() {} 
  set message(value) { this.innerHTML = value; }
  get message() { return this.innerHTML; }

}

customElements.define('intention-error-message', ErrorMessage);
