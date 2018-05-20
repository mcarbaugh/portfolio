import styled from 'styled-components';

const PrimaryButton = styled.button`
    padding: 5px 10px;
    margin: auto 8px;
    outline: none;
    border-radius: 2px;
    color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.primary};
    background: ${props => props.theme.background1};
    transition-property: ${props => props.theme.transitionProperty};
    transition-duration: ${props => props.theme.transitionDuration};
    transition-timing-function: ${props => props.theme.transitionTiming};
    &:hover {
        cursor: pointer;
        color: ${props => props.theme.background1};
        background: ${props => props.theme.primary};
    }
`;

export default PrimaryButton;