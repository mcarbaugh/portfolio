import * as React from 'react';
import ListViewItem from './ListViewItem';
import styled from 'styled-components';
import { List } from 'immutable';

interface ListViewProps<T> {
    data: List<T>;
    className?: string;
}

type Props<T> = ListViewProps<T>;

class ListView<T> extends React.Component<Props<T>> {

    public constructor(props: Props<T>) {
        super(props);
        this.renderChildren = this.renderChildren.bind(this);
    }

    public render() {
        const {
            className,
        } = this.props;

        return (
            <div className={className}>
                {this.renderChildren()}
            </div>
        );
    }

    private renderChildren() {
        const {
            data,
        } = this.props;
        return data
            .map((child, index) =>
                <ListViewItem key={index} data={child} />
            );
    }
}

export default styled(ListView)`
    flex: 1;
    color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.secondary};
`;