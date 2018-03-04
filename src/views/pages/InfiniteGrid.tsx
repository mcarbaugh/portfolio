import * as React from 'react';
import styled from 'styled-components';
import DataGrid from '../components/DataGrid/index';
import Theme from '../../models/Theme';

interface InfiniteGridProps {
    className?: string;
    theme: Theme;
}

const InfiniteGrid = (props: InfiniteGridProps) => {
    return (
        <div id="InfiniteGrid" className={props.className}>
            <DataGrid rowHeight={50} columnWidth={250}/>
        </div>
    );
};

export default styled(InfiniteGrid)`
    height: 100%;
    width: 100%;
    background-color: ${(props: InfiniteGridProps) => props.theme.background};
`;