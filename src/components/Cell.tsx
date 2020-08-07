import React from "react";
import styled from "@emotion/styled";
import { Cell as CellType } from "src/types";

type Props = {
    onClick: () => void;
    cellState: CellType;
    clicked: boolean;
};

type StylingProps = {
    clicked: boolean;
    rowIndex: number;
    columnIndex: number;
};

const StyledCell = styled.div<StylingProps>`
    background-color: ${props => (props.clicked ? "yellow" : "white")};
    border: 1px solid black;
    min-width: 25px;
    min-height: 25px;
    grid-row: ${({ rowIndex }) => `${rowIndex} / ${rowIndex + 1}`};
    grid-column: ${({ columnIndex }) => `${columnIndex} / ${columnIndex + 1}`};
`;

function Cell({ onClick, clicked, cellState }: Props) {
    return (
        <StyledCell
            rowIndex={cellState.rowIndex}
            columnIndex={cellState.columnIndex}
            clicked={clicked}
            onClick={onClick}
        >
            {cellState.value}
        </StyledCell>
    );
}

export default Cell;
