import * as THREE from 'three';
import '../floatValue/floatValue.js'
import { ComponentRoot } from '../../core/componentRoot/componentRoot.js';

class Euler extends ComponentRoot {
  get template() {
    return `
      <i-float-value class="roll" value="0" name="roll">Roll:</i-float-value>
      <i-float-value class="pitch" value="0" name="pitch">Pitch:</i-float-value>
      <i-float-value class="yaw" value="0" name="yaw">Yaw:</i-float-value>    
    `;
  }

  _readOnly = false;
  _roll = 0;
  _pitch = 0;
  _yaw = 0;

  constructor() {
    super();
  }

  get roll() { return this._roll; }
  set roll(value) { 
    this._roll = Number(value);
    this.set('components.roll.value', this._roll.toFixed(3)); 
  }

  get pitch() { return this._pitch; }
  set pitch(value) { 
    this._pitch = Number(value);
    this.set('components.pitch.value', this._pitch.toFixed(3)); 
  }

  get yaw() { return this._yaw;  }
  set yaw(value) { 
    this._yaw = Number(value);
    this.set('components.yaw.value', this._yaw.toFixed(3)); 
  }

  get readOnly() { return this._readOnly; }
  set readOnly(value) {
    this._readOnly = value;
    this.set('components.roll.readOnly', value);
    this.set('components.pitch.readOnly', value);
    this.set('components.yaw.readOnly', value);
  }

  get quaternion() {
    const quaternion = new THREE.Quaternion();
    const euler = new THREE.Euler(this.roll, this.pitch, this.yaw, 'XYZ');
    return quaternion.setFromEuler(euler);
  }
}

customElements.define('i-euler', Euler);
