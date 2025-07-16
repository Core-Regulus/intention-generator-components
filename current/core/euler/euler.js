import * as THREE from 'three';
import '../floatValue/floatValue.js'
import loader from '../loader/loader.js';
import { ComponentRoot } from '../componentRoot/componentRoot.js';

loader.loadCSS(import.meta.resolve('./euler.css'));


class Euler extends ComponentRoot {
  get template() {
    return `
      <i-float-value class="roll" value="0" name="roll">Roll:</intention-float-value>
      <i-float-value class="pitch" value="0" name="pitch">Pitch:</intention-float-value>
      <i-float-value class="yaw" value="0" name="yaw">Yaw:</intention-float-value>    
    `;
  }

  _readOnly = false;

  constructor() {
    super();    
  }

  get roll() { return this.get('components.roll.value'); }
  set roll(value) { this.set('components.roll.value', value); }
  get pitch() { return this.get('components.pitch.value'); }
  set pitch(value) { this.set('components.pitch.value', value); }
  get yaw() { return this.get('components.yaw.value'); }
  set yaw(value) { this.set('components.yaw.value', value); }

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
