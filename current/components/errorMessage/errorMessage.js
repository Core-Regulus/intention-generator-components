import loader from '../../core/loader/loader.js';

loader.loadCSS(import.meta.resolve('./errorMessage.css'));

class ErrorMessage extends HTMLElement {
  constructor() {
    super();
    window.addEventListener('error', (event) => {
      this.message = event.message;
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.message = event.reason.message;
    });
  }
  set message(value) { this.innerHTML = value; }
  get message() { return this.innerHTML; }

}

customElements.define('i-error-message', ErrorMessage);
