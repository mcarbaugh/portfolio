import * as React from 'react';
import styled from 'styled-components';
import DataGrid from '../components/DataGrid/index';
import ConnectedColorThemePicker from '../containers/ConnectedColorThemePicker';

interface InfiniteGridProps {
    className?: string;
}

const InfiniteGrid = (props: InfiniteGridProps) => {
    return (
        <div id="infinite-grid" className={props.className}>
            <ConnectedColorThemePicker />
            <DataGrid rowHeight={50} columnWidth={250}/>
        </div>
    );
};

export default styled(InfiniteGrid)`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.background};
`;