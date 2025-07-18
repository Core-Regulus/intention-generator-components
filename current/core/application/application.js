import { ComponentRoot } from '../componentRoot/componentRoot.js';
import { Actions } from '../actions/actions.js';
import { searchAttribute } from '../attributes/attributes.js';

export class Application extends ComponentRoot { 
  #actions = new Actions(this);

  get isSearchRoot() {
    return true;
  }

  #handleClickAction(event) {
    const target = event.target;
    const clickA = searchAttribute(target, 'action-click');    
    this.#actions.dispatch(clickA.node, clickA.attributeValue);
  }

  #connectActions() {
    this.addEventListener('click', this.#handleClickAction);
  }

  #disconnectActions() {
    this.removeEventListener('click', this.#handleClickAction);
  }


  connectedCallback() {
    this.#connectActions();
  }

  disconnectedCallback() {
    this.#disconnectActions();
  }

  
}

customElements.define('i-application', Application);
