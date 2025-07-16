import dom from '../dom/dom.js';
import { Container } from '../container/container.js';

export class ComponentRoot extends Container {  
  _properties = {};

  get properties() {
    return this._properties;
  }

  async render() {
    await super.render();
    dom.collectComponents(this);
    this.apply();
    this.componentReady?.();
  }

  getObject(path) {
    let root = this;
    const ka = path.split('.').slice(0, -1);
    for (const c of ka) {
      root = root[c];
      if (root == null) break;
    }
    const key = ka[ka.length - 1];
    return {
      isValid: (root != null),
      key,
      object: root
    };
  }

  set(path, value) {
    const obj = this.getObject(path);
    if (obj.isValid) {
      obj.object[obj.key] = value;
    }
    this.properties[path] = value;
  }

  get(path) {
    const obj = this.getObject(path);
    if (obj.isValid) {
      return obj.object[obj.key];
    }
    return this.properties[path];
  }

  apply() {
    const keys = Object.keys(this.properties);
    for (const key of keys) {
      const val = this.properties[key];
      const obj = this.getObject(key);
      if (!obj.isValid) continue;
      obj.object[obj.key] = val;
    }
  }
}

export default {
  ComponentRoot
}