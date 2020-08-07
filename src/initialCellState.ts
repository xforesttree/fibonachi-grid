import { CellState } from "./types";

const InitialCellsState = (): CellState[] => {
    const cellsState: CellState[] = [];
    for (let col = 1; col <= 50; col++) {
        for (let row = 1; row <= 50; row++) {
            const key = `${col} / ${row}`;
            const cell = { columnIndex: col, rowIndex: row };
            cellsState.push({ key, cell });
        }
    }
    return cellsState;
};

export default InitialCellsState;
