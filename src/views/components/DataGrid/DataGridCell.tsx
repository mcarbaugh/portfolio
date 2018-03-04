import * as React from 'react';
import styled from 'styled-components';

interface DataGridCellProps {
    className?: string;
    style?: React.CSSProperties;
    content?: string | number | boolean | undefined | null;
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
    color: #ddd;
    background-color: #333;
    border: 1px dotted #666;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9em;
`;
