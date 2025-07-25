import loader from '../../core/loader/loader.js';
import { Container } from '../../core/container/container.js';

loader.loadCSS(import.meta.resolve('./gridPanel.css'));

function fillCells(col, colsCount) {
  const rCol = col || [];
  const nCols = Number(colsCount);
  for (let c = 0; c < nCols; c++) {
    rCol[c] = rCol[c] ?? { width: '1fr', height: 'min-content' };
  }
  return rCol;
}

function buildCells(rows = 0, cols = 0, cells = []) {
  cells.length = rows;
  const nRows = Number(rows);
  for (let r = 0; r < nRows; r++) {
    cells[r] = fillCells(cells[r], cols);
  }
  return cells;
}

function getTemplateRows(cells) {
  const res = [];
  for (const cell of cells) {
    res.push(cell[0]?.height ?? '1fr');
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
  _updateTemplates() {
    this.style['gridTemplateRows'] = getTemplateRows(this._cells);
    this.style['gridTemplateColumns'] = getTemplateCols(this._cells);
  }

  set colCount(value) {
    this._cells = buildCells(this._cells?.length, value, this._cells);
    this._updateTemplates();
  }

  get colCount() {
    return this._cells?.[0]?.length ?? 0;
  }

  set rowCount(value) {
    this._cells = buildCells(value, this.cells?.[0]?.lenght, this._cells);
    this._updateTemplates();
  }

  get rowCount() {
    return this._cells?.length ?? 0;
  }

  getRow(index) {
    return this._cells[index];
  }

  setRow(index, attribute, value) {
    const row = this.getRow(index);
    if (row == null) return false;
    const rCell = row[0];
    rCell[attribute] = value;
    this._updateTemplates();
  }

  set gap(value) {
    this.style.gap = value;
  }

  get gap() { return this.style.gap; }
  get cells() { return this._cells; }
}

customElements.define('i-grid-panel', GridPanel);

export default {
  GridPanel
}