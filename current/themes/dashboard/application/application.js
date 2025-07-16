import loader from '../../../core/loader/loader.js';
import { Page } from '../../../core/application/application.js';

loader.loadCSS(import.meta.resolve('./application.css'));

export class DashboardApplication extends Application { }

customElements.define('i-dashboard-application', DashboardApplication);
