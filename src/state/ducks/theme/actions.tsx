import { ThemeActionTypes as types } from './types';
import { Theme } from '../../../models/Theme';

export interface SetTheme {
    type: types.SET_THEME;
    theme: Theme;
}

export const setTheme = (theme: Theme): SetTheme => {
    return {
        type: types.SET_THEME,
        theme,
    };
};

export type ThemeActions = SetTheme;