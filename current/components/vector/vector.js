import '../floatValue/floatValue.js'
import { ComponentRoot } from '../../core/componentRoot/componentRoot.js';

class Vector3d extends ComponentRoot {
  get template() {
    return `
      <i-float-value class="x" value="0" name="x">X:</i-float-value>
      <i-float-value class="y" value="0" name="y">Y:</i-float-value>
      <i-float-value class="z" value="0" name="z">X:</i-float-value>    
    `;
  }

  _readOnly = false;
  _x = 0;
  _y = 0;
  _z = 0;

  constructor() {
    super();
  }

  get x() { return this._x; }
  set x(value) { 
    this._x = Number(value);
    this.set('components.x.value', this._x.toFixed(3)); 
  }

  get y() { return this._pitch; }
  set y(value) { 
    this._y = Number(value);
    this.set('components.y.value', this._y.toFixed(3)); 
  }

  get z() { return this._z;  }
  set z(value) { 
    this._z = Number(value);
    this.set('components.z.value', this._z.toFixed(3)); 
  }

  get readOnly() { return this._readOnly; }
  set readOnly(value) {
    this._readOnly = value;
    this.set('components.x.readOnly', value);
    this.set('components.y.readOnly', value);
    this.set('components.z.readOnly', value);
  }

  set step(value) {
    this.set('components.roll.step', value);
    this.set('components.pitch.step', value);
    this.set('components.yaw.step', value);
  }

  get step() {
    return this.components.x.step;
  }

  componentReady() {
    this.components.x.oninput = (e) => {
      this._x = e.target.value;
    };
    this.components.y.oninput = (e) => {
      this._y = e.target.value;
    };
    this.components.z.oninput = (e) => {
      this._z = e.target.value;
    }
  }
}

customElements.define('i-vector3d', Vector3d);
