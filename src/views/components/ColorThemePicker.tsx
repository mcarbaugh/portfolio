import * as React from 'react';
import { Theme } from '../../models/Theme';
import styled from 'styled-components';
import PrimaryButton from '../components/PrimaryButton';
import Description from '../components/Description';

interface Props {
    className?: string;
    theme?: Theme;
    setDarkTheme?: (event: React.MouseEvent<HTMLElement>) => void;
    setLightTheme?: (event: React.MouseEvent<HTMLElement>) => void;
}

const ColorThemePicker = (props: Props) => {
    return (
        <div id="color-theme-picker" className={props.className}>
            <Description>Choose a theme:</Description>
            <PrimaryButton onClick={props.setDarkTheme}>Dark</PrimaryButton>
            <PrimaryButton onClick={props.setLightTheme}>Light</PrimaryButton>
        </div>
    );
};

export default styled(ColorThemePicker)`
    height: 2em;
    display: flex;
    align-content: stretch;
    align-items: stretch;
    justify-content: left;
    padding: 5px;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.background};
    border-bottom: 1px solid ${props => props.theme.secondary};
`;
