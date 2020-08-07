export type Cell = {
    rowIndex: number;
    columnIndex: number;
    value?: number;
};

export type CellState = { key: string; cell: Cell };
