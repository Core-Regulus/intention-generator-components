import { ComponentRoot } from '../../core/componentRoot/componentRoot.js';

class ToggleButton extends ComponentRoot {
  _onclick = null;
  get template() {
    return `
      <input name="value" type="checkbox" style="display:none;"/>
      <button name="button">${this.innerHTML}</button
    `;
  }

  set value(value) {
    this.set('components.value.checked', value);
  }

  get value() {
    return this.get('components.value.checked');
  }

  set onclick(value) {
    this._onclick = value;
  }

  get onclick() {
    return this._onclick;
  }

  componentReady() {
    this.components.button.onclick = () => {     
      this.value = !this.value;
      const mEvent = new MouseEvent(MouseEvent.CLICK);
      this.onclick?.(mEvent);
      this.dispatchEvent(mEvent);
    }
  }
}

customElements.define('i-toggle-button', ToggleButton);