loader.loadCSS(import.meta.resolve('./floatValue.css'));

class FloatValue extends HTMLElement {
  #template = `
    <label>
      <span></span>
      <input type="number" value="0" step="0.01"/>
    </label>
  `;

  #readOnly = false;

  constructor() {
    super();
  }

  async connectedCallback() {    
    this.innerHTML = this.#template;
    this.components = {
      title: this.querySelector('span'),
      val: this.querySelector('input')
    };
    const title = this.getAttribute('data-title');
    this.components.title.innerHTML = title;
  }
  
  set value(value) { this.components.val.value = value.toFixed(3); }
  get value() { return this.components.val.value; }

  set readOnly(value) {
    this.#readOnly = value;
    this.components.val.readOnly = this.#readOnly;
  }

  get readOnly() { return this.#readOnly; }
  
  async disconnectedCallback() { }
}

customElements.define('intention-float-value', FloatValue);
