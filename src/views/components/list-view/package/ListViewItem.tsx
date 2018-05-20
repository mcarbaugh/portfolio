import * as React from 'react';
import styled from 'styled-components';
import { Task } from '../../../../models/Task';
import {
    ConnectDragSource,
    DragSource,
    DragSourceConnector,
    DragSourceMonitor,
    DragSourceSpec,
} from 'react-dnd';
import { Status } from '../../../../constants/Status';

interface ListViewItemProps {
    containerId?: string;
    className?: string;
    data?: Task;
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
                {
                    data && data.status === Status.OPEN &&
                    <i className={'material-icons'}>view_headline</i>
                }
                {
                    data && data.status === Status.IN_PROGRESS &&
                    <i className={'material-icons'}>rowing</i>
                }
                {
                    data && data.status === Status.COMPLETE &&
                    <i className={'material-icons'}>done</i>
                }
                <span>{data ? data.name : '...'}</span>
                <span>[ {data ? data.status : undefined} ]</span>
            </div>
        );
    }
}

const StyledListViewItem = styled(ListViewItem)`
    position: relative;
    display: flex;
    align-items: left;
    align-content: left ;
    flex-direction: column;
    justify-content: left;
    margin: 8px;
    padding: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.primary};
    background-color: ${props => props.theme.background};
    transition-property: ${props => props.theme.transitionProperty};
    transition-duration: ${props => props.theme.transitionDuration};
    transition-timing-function: ${props => props.theme.transitionTiming};
    & span {
        margin: 5px;
    };
    & i {
        position: absolute;
        top: 5px;
        right: 5px;
    };
`;

const dragSourceSpec: DragSourceSpec<{}> = {
    beginDrag: (props: ListViewItemProps) => {
        return {
            id: props.data ? props.data.id : 0,
            status: props.containerId,
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
