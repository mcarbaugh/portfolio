import * as React from 'react';
import styled from 'styled-components';
import DataGrid from '../components/data-grid/index';

interface InfiniteGridProps {
    className?: string;
}

const InfiniteGrid = (props: InfiniteGridProps) => {
    return (
        <div id="infinite-grid" className={props.className}>
            <DataGrid rowHeight={50} columnWidth={250}/>
        </div>
    );
};

export default styled(InfiniteGrid)`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.background};
`;