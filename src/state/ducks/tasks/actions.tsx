import { TasksActionTypes } from './types';
import { Status } from '../../../constants/Status';

export interface UpdateStatus {
    type: TasksActionTypes.UPDATE_STATUS;
    id: number;
    status: Status;
}

export const updateStatus = (id: number, status: Status) => {
    return {
        type: TasksActionTypes.UPDATE_STATUS,
        id,
        status,
    };
};

export type TasksActions = UpdateStatus;