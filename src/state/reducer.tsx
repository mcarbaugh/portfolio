import { combineReducers } from 'redux';
import { themeReducer, ThemeState } from './ducks/theme/reducers';

export interface RootState {
    theme: ThemeState;
}

export const rootReducer = combineReducers<RootState>({
    theme: themeReducer,
});
