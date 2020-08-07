import React, { useState } from "react";
import Cell from "./components/Cell";
import { CellState } from "./types";
import InitialCellsState from "./initialCellState";
import Grid from "./components/Grid";

function App() {
    const [cells, setCells] = useState<CellState[]>(InitialCellsState);
    const [updatedCells, setUpdatedCells] = useState<CellState[] | null>(null);

    function updateCell(cellObject: CellState) {
        const { value } = cellObject.cell;
        const newValue = { ...cellObject, cell: { ...cellObject.cell, value: value ? value + 1 : 1 } };
        return newValue;
    }

    function unClick() {
        setUpdatedCells(null);
    }

    function onClick(cellObject: CellState) {
        const clickedCell = cells.find((cell: CellState) => cell.key === cellObject.key);
        const rowToUpdate = cells.filter((cell: CellState) => cell.cell.rowIndex === cellObject.cell.rowIndex);
        const columnToUpdate = cells.filter((cell: CellState) => cell.cell.columnIndex === cellObject.cell.columnIndex);

        setUpdatedCells([...rowToUpdate, ...columnToUpdate]);

        if (clickedCell === undefined) {
            window.Error("something went wrong");
        } else {
            const cellsWithNewValue: CellState[] = [];
            columnToUpdate.forEach((columnCell: CellState) => {
                cellsWithNewValue.push(updateCell(columnCell));
            });
            rowToUpdate.forEach((rowCell: CellState) => {
                rowCell.key !== clickedCell.key && cellsWithNewValue.push(updateCell(rowCell));
            });
            setCells([...cells, ...cellsWithNewValue]);
        }
        setTimeout(unClick, 800);
    }

    return (
        <Grid>
            {cells.map((cellObject: CellState) => {
                const { key, cell } = cellObject;
                function click() {
                    onClick(cellObject);
                }
                return (
                    <Cell
                        clicked={updatedCells?.find((updatedCell: CellState) => updatedCell.key === key) !== undefined}
                        key={key}
                        cellState={cell}
                        onClick={click}
                    />
                );
            })}
        </Grid>
    );
}

export default App;
