import * as React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../models/Theme';
import { RootState } from '../../state/reducer';

interface ConnectedThemeProviderProps {
    children?: React.ReactNode;
}

interface PropsFromState {
    theme?: Theme;
}

type Props = ConnectedThemeProviderProps & PropsFromState;

export const ConnectedThemeProvider = (props: Props) => {
    return (
        <ThemeProvider theme={props.theme}>
            {props.children}
        </ThemeProvider>
    );
};

const mapStateToProps = (state: RootState) => ({
    theme: state.theme.theme
});

export default connect(mapStateToProps, {})(ConnectedThemeProvider);