import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { setTheme, SetTheme } from '../../state/ducks/theme/index';
import { Theme } from '../../models/Theme';
import ColorThemePicker from '../components/ColorThemePicker';
import dark from '../themes/dark';
import light from '../themes/light';

interface PropsFromDispatch {
    setTheme?: (theme: Theme) => SetTheme;
}

type Props = PropsFromDispatch;

class ConnectedColorThemePicker extends React.PureComponent<Props> {

    public constructor(props: Props) {
        super(props);
        this.setDarkTheme = this.setDarkTheme.bind(this);
        this.setLightTheme = this.setLightTheme.bind(this);
    }

    public render() {
        const {
            setLightTheme,
            setDarkTheme,
        } = this;
        return (
            <ColorThemePicker
                setDarkTheme={setDarkTheme}
                setLightTheme={setLightTheme}
            />
        );
    }

    private setDarkTheme = () => {
        const setThemeHandler = this.props.setTheme;
        if (setThemeHandler) {
            setThemeHandler(dark);
        }
    }

    private setLightTheme = () => {
        const setThemeHandler = this.props.setTheme;
        if (setThemeHandler) {
            setThemeHandler(light);
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<{}>): PropsFromDispatch => {
    return bindActionCreators(
        {
            setTheme,
        },
        dispatch,
    );
};

export default connect(undefined, mapDispatchToProps)(ConnectedColorThemePicker);
