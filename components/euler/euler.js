import * as THREE from 'three';
import '../floatValue/floatValue.js'
import attributes from '../attributes/attributes.js'
import loader from '../loader/loader.js';

loader.loadCSS(import.meta.resolve('./euler.css'));


class Euler extends HTMLElement {
  #template = `
    <intention-float-value class="roll" value="0">Roll</intention-float-value>
    <intention-float-value class="pitch" value="0">Pitch</intention-float-value>
    <intention-float-value class="yaw" value="0">Yaw</intention-float-value>    
  `;

  #readOnly = false;
  
  constructor() {
    super();
    this.innerHTML = this.#template;
    const readOnly = attributes.getBoolean(this,'read-only');
    this.components = {
      roll: this.querySelector('.roll'),
      pitch: this.querySelector('.pitch'),
      yaw: this.querySelector('.yaw'),
    };    
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
