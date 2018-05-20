import * as React from 'react';
import styled from 'styled-components';
import ListView from '../components/list-view/index';
import HTML5Backend from 'react-dnd-html5-backend';
import { List } from 'immutable';
import { DragDropContext } from 'react-dnd';

interface Props {
    className?: string;
}

const DragDrop = (props: Props) => {
    return (
        <div id={'DragDrop'} className={props.className}>
            <ListView
                id={'open'}
                data={List([
                    'hello',
                    'world',
                    'door number 3',
                    'option A',
                    'option B',
                    'blue pill',
                ])}
            />
            <ListView
                id={'in-progess'}
                data={List([
                    'hello',
                    'world',
                    'door number 3',
                    'option A',
                    'option B',
                    'blue pill',
                ])}
            />
            <ListView
                id={'complete'}
                data={List([
                    'hello',
                    'world',
                    'door number 3',
                    'option A',
                    'option B',
                    'blue pill',
                ])}
            />
        </div>
    );
};

const withDragDropContext = DragDropContext(HTML5Backend)(DragDrop);

export default styled(withDragDropContext)`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background-color: ${props => props.theme.background};
`;