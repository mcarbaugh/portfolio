import { List, Record } from 'immutable';
import { Task } from '../../../models/Task';
import { Status } from '../../../constants/Status';
import { TasksActions } from './actions';
import { TasksActionTypes as types } from './types';

export const TasksStateRecord = Record({
    tasks: List([
        new Task({ id: 2, name: 'Run to the store', description: 'blah blah blah', status: Status.OPEN }),
        new Task({ id: 4, name: 'Get a haircut', description: 'Not the red pill', status: Status.OPEN }),
        new Task({ id: 3, name: 'Buy dog food', description: 'Not the red pill', status: Status.IN_PROGRESS }),
        new Task({ id: 8, name: 'Get an Oil change', description: 'Not the red pill', status: Status.OPEN }),
        new Task({ id: 1, name: 'Discover the meaning of life', description: 'Not the red pill', status: Status.OPEN }),
        new Task({ id: 9, name: 'Clean room', description: 'Not the red pill', status: Status.OPEN }),
        new Task({ id: 5, name: 'Fix broken window', description: 'Not the red pill', status: Status.COMPLETE }),
        new Task({ id: 6, name: 'Cash my paycheck', description: 'Not the red pill', status: Status.COMPLETE }),
    ]),
});

export class TasksState extends TasksStateRecord {
    tasks: List<Task>;
}

export const tasksReducer = (state = new TasksState(), action: TasksActions) => {
    switch (action.type) {
        case (types.UPDATE_STATUS):
            return state.setIn(
                ['tasks'],
                state.tasks.map((task: Task) => {
                    return task && task.id === action.id
                        ? task.setIn(['status'], action.status)
                        : task;
                }),
        );
        default:
            return state;
    }
};
