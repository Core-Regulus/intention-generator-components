import loader from '../loader/loader.js';
import { ComponentRoot } from '../componentRoot/componentRoot.js';

loader.loadCSS(import.meta.resolve('./page.css'));

export class Page extends ComponentRoot {}

customElements.define('intention-page', Page);
