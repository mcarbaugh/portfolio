import * as React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import dictionary from '../dictionaries/Home';

interface Props {
    className?: string;
}

const Home = (props: Props) => {
    return (
        <div className={props.className}>
            <Title>{dictionary.title}</Title>
            <ul>
                <li>Infinite Grid</li>
                <li>Color Inspector</li>
            </ul>
        </div>
    );
};

export default styled(Home)`
    height: 100%;
    width: 100%;
`;