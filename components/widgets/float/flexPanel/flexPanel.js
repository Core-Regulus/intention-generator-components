import loader from '../loader/loader.js';
import { FlexPanel } from '../../../core/flexPanel/flexPanel.js';

loader.loadCSS(import.meta.resolve('./flexPanel.css'));

export class FloatFlexPanel extends FlexPanel {}

customElements.define('intention-float-flex-panel', FloatFlexPanel);

export default {
  FlexPanel
}