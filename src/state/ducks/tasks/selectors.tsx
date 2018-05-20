import { List } from 'immutable';
import { RootState } from '../../reducer';
import { createSelector } from 'reselect';
import { Task } from '../../../models/Task';
import { Status } from '../../../constants/Status';

export const getTasks = (state: RootState) => state.tasks.tasks;

export const getOpenTasks = createSelector(
    [getTasks],
    (tasks: List<Task>) => {
        return tasks
            .filter((task: Task) => {
                return task.status === Status.OPEN;
            });
    }
);

export const getInProgressTasks = createSelector(
    [getTasks],
    (tasks: List<Task>) => {
        return tasks
            .filter((task: Task) => {
                return task.status === Status.IN_PROGRESS;
            });
    }
);

export const getCompleteTasks = createSelector(
    [getTasks],
    (tasks: List<Task>) => {
        return tasks
            .filter((task: Task) => {
                return task.status === Status.COMPLETE;
            });
    }
);