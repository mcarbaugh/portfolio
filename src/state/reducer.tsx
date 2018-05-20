import { combineReducers } from 'redux';
import { themeReducer, ThemeState } from './ducks/theme/reducers';
import { tasksReducer, TasksState } from './ducks/tasks/reducers';

export interface RootState {
    tasks: TasksState;
    theme: ThemeState;
}

export const rootReducer = combineReducers<RootState>({
    tasks: tasksReducer,
    theme: themeReducer,
});
