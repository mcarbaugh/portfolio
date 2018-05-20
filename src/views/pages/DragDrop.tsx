import * as React from 'react';
import styled from 'styled-components';
import ListView from '../components/list-view/index';
import HTML5Backend from 'react-dnd-html5-backend';
import { List } from 'immutable';
import { DragDropContext } from 'react-dnd';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from '../../state/reducer';
import { Task } from '../../models/Task';
import { getOpenTasks, getInProgressTasks, getCompleteTasks } from '../../state/ducks/tasks/selectors';
import { Status } from '../../constants/Status';

import { updateStatus } from '../../state/ducks/tasks/index';
import FlexColumn from '../components/FlexColumn';

interface DragDropProps {
    className?: string;
}

interface PropsFromState {
    openTasks: List<Task>;
    inProgressTasks: List<Task>;
    completeTasks: List<Task>;
}

interface PropsFromDispatch {
    updateStatus?: typeof updateStatus;
}

type Props = DragDropProps & PropsFromState & PropsFromDispatch;

class DragDrop extends React.Component<Props> {
    
    public constructor(props: Props) {
        super(props);
        this.handleDrop = this.handleDrop.bind(this);
    }

    public render() {
        const {
            openTasks,
            inProgressTasks,
            completeTasks,
        } = this.props;

        return (
            <div id={'DragDrop'} className={this.props.className}>
                <FlexColumn>
                    <ListView
                        id={Status.OPEN}
                        data={openTasks}
                        onDrop={this.handleDrop}
                    />
                </FlexColumn>
                <FlexColumn>
                    <ListView
                        id={Status.IN_PROGRESS}
                        data={inProgressTasks}
                        onDrop={this.handleDrop}
                    />
                </FlexColumn>
                <FlexColumn>
                    <ListView
                        id={Status.COMPLETE}
                        data={completeTasks}
                        onDrop={this.handleDrop}
                    />
                </FlexColumn>
            </div>
        );
    }

    private handleDrop(id: number, status: Status) {
        const handler = this.props.updateStatus;
        if (handler) {
            handler(id, status);
        }
    }
}

const StyledDrapDrop = styled(DragDrop)`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background-color: ${props => props.theme.background2};
`;

const WithContext = DragDropContext(HTML5Backend)(StyledDrapDrop);

const mapStateToProps = (state: RootState) => {
    return {
        openTasks: getOpenTasks(state),
        inProgressTasks: getInProgressTasks(state),
        completeTasks: getCompleteTasks(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch<{}>): PropsFromDispatch => {
    return bindActionCreators(
    {
        updateStatus,
    },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WithContext);
