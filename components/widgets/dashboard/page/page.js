import loader from '../loader/loader.js';
import { Page } from '../../../core/page/page.js';

loader.loadCSS(import.meta.resolve('./page.css'));

export class DashboardPage extends Page {}

customElements.define('intention-dashboard-page', Page);
