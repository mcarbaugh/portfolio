import * as React from 'react';
import { Link } from 'react-router-dom';
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
                <li><Link to={'/infinite-grid'}>Infinite Grid</Link></li>
                <li><Link to={'/color-inspector'}>Color Inspector</Link></li>
            </ul>
        </div>
    );
};

export default styled(Home)`
    height: 100%;
    width: 100%;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.background};
`;