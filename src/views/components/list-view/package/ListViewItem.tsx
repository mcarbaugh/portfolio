import * as React from 'react';
import styled from 'styled-components';
import {
    ConnectDragSource,
    DragSource,
    DragSourceConnector,
    DragSourceMonitor,
    DragSourceSpec,
} from 'react-dnd';

interface ListViewItemState {
    background?: string;
}

interface ListViewItemProps {
    className?: string;
    data?: object | string | number | boolean;
}

interface DragSourceProps {
    isDragging: boolean;
    connectDragSource: ConnectDragSource;
}

type Props = ListViewItemProps & DragSourceProps;

class ListViewItem extends React.Component<Props, ListViewItemState> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        const {
            className,
            connectDragSource,
            data,
        } = this.props;

        return connectDragSource(
            <div className={className}>
                <span>{data}</span>
            </div>
        );
    }
}

const dragSourceSpec: DragSourceSpec<{}> = {
    beginDrag: () => {
        return {};
    },
    canDrag: () => {
        return true;
    }
};

const dragSourceCollector = (connector: DragSourceConnector, monitor: DragSourceMonitor) => {
    return {
        connectDragSource: connector.dragSource(),
        isDragging: monitor.isDragging,
    };
};

const DraggableListViewItem =
    DragSource<ListViewItemProps>('blah', dragSourceSpec, dragSourceCollector)(ListViewItem);

export default styled(DraggableListViewItem)`
    display: flex;
    align-items: stretch;
    align-content: stretch;
    margin: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.primary};
    background-color: ${props => props.theme.background};
    padding: 5px;
    & span {
        margin: auto;
    }
`;