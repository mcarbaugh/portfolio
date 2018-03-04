import * as React from 'react';
import styled from 'styled-components';
import Theme from '../../../models/Theme';

interface DataGridCellProps {
    content?: string | number | boolean | undefined | null;
    className?: string;
    style?: React.CSSProperties;
    theme: Theme;
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
    color: ${(props: DataGridCellProps) => props.theme.primary};
    background-color: ${(props: DataGridCellProps) => props.theme.background};
    border: 1px dotted ${(props: DataGridCellProps) => props.theme.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9em;
`;
