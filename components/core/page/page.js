import loader from '../loader/loader.js';
import { Container } from '../container/container.js';

loader.loadCSS(import.meta.resolve('./page.css'));

export class Page extends Container {}

customElements.define('intention-page', Page);
