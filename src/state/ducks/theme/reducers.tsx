import { Record } from 'immutable';
import { ThemeActions } from './actions';
import { ThemeActionTypes as types } from './types';
import { Theme } from '../../../models/Theme';
import dark from '../../../views/themes/dark';

export const ThemeStateRecord = Record({
    theme: dark,
});

export class ThemeState extends ThemeStateRecord {
    theme: Theme;
}

export const themeReducer = (state = new ThemeState(), action: ThemeActions) => {
    switch (action.type) {
        case (types.SET_THEME):
            return state.set('theme', action.theme);
        default:
            return state;
    }
};
