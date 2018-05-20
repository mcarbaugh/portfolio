import * as React from 'react';
import StyledLink from '../components/StyledLink';
import styled from 'styled-components';
import Title from '../components/Title';
import dictionary from '../dictionaries/Home';

interface HomeProps {
    className?: string;
}

const Home = (props: HomeProps) => {
    return (
        <div id={'Home'} className={props.className}>
            <Title>{dictionary.title}</Title>
            <ul>
                <li><StyledLink to={'/infinite-grid'}>Infinite Grid</StyledLink></li>
                {/* <li><StyledLink to={'/color-inspector'}>Color Inspector</StyledLink></li> */}
                <li><StyledLink to={'/drag-drop'}>Drag Drop</StyledLink></li>
            </ul>
        </div>
    );
};

export default styled(Home)`
    flex: 1;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.background};
    transition-property: ${props => props.theme.transitionProperty};
    transition-duration: ${props => props.theme.transitionDuration};
    transition-timing-function: ${props => props.theme.transitionTiming};
`;