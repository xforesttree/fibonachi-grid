import React from "react";
import styled from "@emotion/styled";

type Props = {
    children: any;
};

const StyledGrid = styled.div`
    display: grid;
    grid-template: repeat(auto, 50) / repeat(auto, 50);
`;

function Grid({ children }: Props): JSX.Element {
    return <StyledGrid>{React.Children.toArray(children)}</StyledGrid>;
}

export default Grid;
