import * as React from 'react';
import ListViewItem from './ListViewItem';
import styled from 'styled-components';
import { List } from 'immutable';
import { Theme } from '../../../../models/Theme';
import { DragDropListViewItem } from './DragDropListViewItem';
import {
    ConnectDropTarget,
    DropTarget,
    DropTargetConnector,
    DropTargetMonitor,
    DropTargetSpec,
} from 'react-dnd';
import { Task } from '../../../../models/Task';

interface ListViewProps {
    id?: string;
    data: List<Task>;
    className?: string;
    theme?: Theme;
    onDrop?: (id: number, status: string) => void;
}

interface DropTargetProps {
    canDrop: boolean;
    connectDropTarget: ConnectDropTarget;
}

type Props = ListViewProps & DropTargetProps;

class ListView extends React.Component<Props> {

    public constructor(props: Props) {
        super(props);
        this.renderChildren = this.renderChildren.bind(this);
    }

    public render() {
        const {
            className,
            connectDropTarget,
        } = this.props;

        return connectDropTarget(
            <div className={className}>
                {this.renderChildren()}
            </div>
        );
    }

    private renderChildren() {
        const {
            id,
            data,
        } = this.props;
        return data
            .map((child, index) => {
                return (
                    <ListViewItem
                        containerId={id}
                        key={index}
                        data={child}
                    />
                );
            });
    }
}

const StyledListView = styled(ListView)`
    position: relative;
    flex: 1;
    color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.secondary};
    background-color: ${props => props.canDrop ? props.theme.background1 : props.theme.background2};
    transition-property: ${props => props.theme.transitionProperty};
    transition-duration: ${props => props.theme.transitionDuration};
    transition-timing-function: ${props => props.theme.transitionTiming};
`;

const dropTargetSpec: DropTargetSpec<{}> = {
    canDrop: (props: ListViewProps, monitor: DropTargetMonitor) => {
        const item: DragDropListViewItem = monitor.getItem();
        return props.id !== item.status;
    },
    drop: (props: ListViewProps, monitor: DropTargetMonitor) => {
        const handler = props.onDrop;
        const item: DragDropListViewItem = monitor.getItem();
        const id = item.id || 0;
        const status = props.id || '';
        if (handler) {
            handler(id, status);
        }
    }
};

const dropTargetCollector = (connector: DropTargetConnector, monitor: DropTargetMonitor) => {
    return {
        canDrop: monitor.canDrop(),
        connectDropTarget: connector.dropTarget(),
    };
};

export default DropTarget<ListViewProps>
    ('ListViewItem', dropTargetSpec, dropTargetCollector)(StyledListView);
