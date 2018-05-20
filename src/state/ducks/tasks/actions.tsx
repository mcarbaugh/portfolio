import { TasksActionTypes } from './types';
import { Status } from '../../../constants/Status';

export interface UpdateTask {
    type: TasksActionTypes.UPDATE_TASK;
    id: number;
    status: Status;
}

export const updateTask = (id: number, status: Status) => {
    return {
        type: TasksActionTypes.UPDATE_TASK,
        id,
        status,
    };
};

export type TasksActions = UpdateTask;