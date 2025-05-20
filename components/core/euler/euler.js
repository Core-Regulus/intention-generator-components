import * as THREE from 'three';
import '../floatValue/floatValue.js'
import loader from '../loader/loader.js';
import { ComponentRoot } from '../componentRoot/componentRoot.js';

loader.loadCSS(import.meta.resolve('./euler.css'));


class Euler extends ComponentRoot {
  get template() {
    return `
      <intention-float-value class="roll" value="0" name="roll">Roll:</intention-float-value>
      <intention-float-value class="pitch" value="0" name="pitch">Pitch:</intention-float-value>
      <intention-float-value class="yaw" value="0" name="yaw">Yaw:</intention-float-value>    
    `;
  }

  #readOnly = false;
  
  constructor() {
    super();
  } 

  get readOnly() { return this.#readOnly; }

  get roll() { return this.components.roll.value; }
  set roll(value) { this.components.roll.value = value }
  get pitch() { return this.components.pitch.value; }
  set pitch(value) { this.components.pitch.value = value; }
  get yaw() { return this.components.yaw.value; }
  set yaw(value) { this.components.yaw.value = value; }

  set readOnly(value) {
    this.#readOnly = value;
    this.components.roll.readOnly = value;
    this.components.pitch.readOnly = value;
    this.components.yaw.readOnly = value;
  }

  get quaternion() {
    const quaternion = new THREE.Quaternion();
    const euler = new THREE.Euler( this.roll, this.pitch, this.yaw, 'XYZ' );    
    return quaternion.setFromEuler(euler);
  }
}

customElements.define('intention-euler', Euler);
