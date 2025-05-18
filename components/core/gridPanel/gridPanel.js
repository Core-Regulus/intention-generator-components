import loader from '../loader/loader.js';
import { Container } from '../container/container.js';

loader.loadCSS(import.meta.resolve('./gridPanel.css'));

function fillCells(col, colsCount) {
  const rCol = col || [];
  for (let c = 0; c < colsCount; c++) {
    rCol[c] ??= { width: '1fr', height: '1fr' };
  }
  return rCol;
}

function buildCells(rows = 0, cols = 0, cells = []) {
  cells.length = rows;
  for(let r = 0; r < rows; r++) {
    cells[r] ??= fillCells(cells[r], cols);
  }
  return cells;
}

function getTemplateRows(cells) {
  const res = [];
  for (const cell of cells) {
    res.push(cell[0].height ?? '1fr');
  }
  return res.join(' ');
}

function getTemplateCols(cells) {
  const res = [];
  for (const cell of cells[0]) {
    res.push(cell.width ?? '1fr');
  }
  return res.join(' ');
}


export class GridPanel extends Container {    
  updateTemplates() {
    this.style['grid-template-rows'] = getTemplateRows(this_cells);
    this.style['grid-template-cols'] = getTemplateCols(this_cells);
  }

  set cols(value) {
    this._cells = buildCells(this._cells?.length, value, this._cells);
  }

  get cols() {
    return this._cells?.[0]?.length ?? 0;
  }

  set rows(value) {
    this._cells = buildCells(value, this.cells?.[0]?.lenght, this._cells);    
  }

  get rows() {
   return this._cells?.length ?? 0;
  }

  set gap(value) { 
    this.style.gap = value; 
  }

  get gap() { return this.style.gap; }

  get columns() { return this._columns; }
}

customElements.define('intention-grid-panel', GridPanel);

export default {
  GridPanel
}