import * as React from 'react';
import ListViewItem from './ListViewItem';
import styled from 'styled-components';
import { List } from 'immutable';
import { Theme } from '../../../../models/Theme';

import {
    ConnectDropTarget,
    DropTarget,
    DropTargetConnector,
    DropTargetMonitor,
    DropTargetSpec,
} from 'react-dnd';

interface ListViewProps<T> {
    data: List<T>;
    className?: string;
    theme?: Theme;
}

interface DropTargetProps {
    canDrop: boolean;
    connectDropTarget: ConnectDropTarget;
}

type Props<T> = ListViewProps<T> & DropTargetProps;

class ListView<T> extends React.Component<Props<T>> {

    public constructor(props: Props<T>) {
        super(props);
        this.renderChildren = this.renderChildren.bind(this);
    }

    public render() {
        const {
            className,
            connectDropTarget,
        } = this.props;

        return connectDropTarget(
            <div
                className={className}
            >
                {this.renderChildren()}
            </div>
        );
    }

    private renderChildren() {
        const {
            data,
        } = this.props;
        return data
            .map((child, index) => {
                return (
                    <ListViewItem
                        key={index}
                        data={child}
                    />
                );
            });
    }
}

const StyledListView = styled(ListView)`
    flex: 1;
    color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.secondary};
    background: ${props => props.canDrop ? props.theme.background : props.theme.dropZone};
`;

const dropTargetSpec: DropTargetSpec<{}> = {
    canDrop: (props: ListViewProps<number | string | object | boolean>, monitor: DropTargetMonitor) => {
        return true;
    }
};

const dropTargetCollector = (connector: DropTargetConnector, monitor: DropTargetMonitor) => {
    return {
        canDrop: monitor.canDrop(),
        connectDropTarget: connector.dropTarget(),
    };
};

export default DropTarget<ListViewProps<number | string | object | boolean>>
    ('ListViewItem', dropTargetSpec, dropTargetCollector)(StyledListView);
