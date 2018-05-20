import * as React from 'react';
import styled from 'styled-components';
import {
    ConnectDragSource,
    DragSource,
    DragSourceConnector,
    DragSourceMonitor,
    DragSourceSpec,
} from 'react-dnd';

interface ListViewItemProps {
    containerId?: string;
    className?: string;
    data?: object | string | number | boolean;
}

interface DragSourceProps {
    isDragging: boolean;
    connectDragSource: ConnectDragSource;
}

type Props = ListViewItemProps & DragSourceProps;

class ListViewItem extends React.Component<Props> {
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

const StyledListViewItem = styled(ListViewItem)`
    display: flex;
    align-items: stretch;
    align-content: stretch;
    margin: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.primary};
    background-color: ${props => props.theme.background};
    padding: 5px;
    transition-property: ${props => props.theme.transitionProperty};
    transition-duration: ${props => props.theme.transitionDuration};
    transition-timing-function: ${props => props.theme.transitionTiming};
    & span {
        margin: auto;
    }
`;

const dragSourceSpec: DragSourceSpec<{}> = {
    beginDrag: (props: ListViewItemProps) => {
        return {
            id: props.containerId,
        };
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

export default DragSource<ListViewItemProps>
    ('ListViewItem', dragSourceSpec, dragSourceCollector)(StyledListViewItem);
