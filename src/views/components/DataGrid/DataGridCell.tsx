import * as React from 'react';
import styled from 'styled-components';

interface DataGridCellProps {
    content?: string | number | boolean | undefined | null;
    className?: string;
    style?: React.CSSProperties;
}

const DataGridCell = (props: DataGridCellProps) => {
    return (
        <div
            className={props.className}
            style={props.style}
        >
            {props.content}
        </div>
    );
};

export default styled(DataGridCell)`
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.background};
    border-right: 1px dotted ${props => props.theme.secondary};
    border-bottom: 1px dotted ${props => props.theme.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9em;
    box-sizing: border-box;
`;
