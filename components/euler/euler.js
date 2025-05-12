import * as THREE from 'three';
import '../floatValue/floatValue.js'
import attributes from '../attributes/attributes.js'

loader.loadCSS(import.meta.resolve('./euler.css'));


class Euler extends HTMLElement {
  #template = `
    <edit-float-value class="roll" data-title="Roll:" value="0"></edit-float-value>
    <edit-float-value class="pitch" data-title="Pitch:" value="0"></edit-float-value>
    <edit-float-value class="yaw" data-title="Yaw:" value="0"></edit-float-value>    
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

customElements.define('edit-euler', Euler);
