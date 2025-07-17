import { ComponentRoot } from '../componentRoot/componentRoot.js';
import { Actions } from '../actions/actions.js';

export class Application extends ComponentRoot { 
  #actions = new Actions(this);

  constructor() {
    super();    
    this.#collectActionClick();
  }

  handleClickAction(element) {
    const clickA = element.getAttribute('action-click');
    this.#actions.dispatch(element, clickA);
  }

  #collectActionClick() {        
    const elements = this.querySelectorAll('[action-click]');
    const self = this;
    for (const el of elements) {
      el.addEventListener('click', function () {
        self.handleClickAction(this);
      });
    }      
  }
}

customElements.define('i-application', Application);
