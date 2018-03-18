import * as React from 'react';
import styled from 'styled-components';

interface HomeProps {
    className?: string;
}

const Home = (props: HomeProps) => {
    return (
        <i className={`material-icons md-48 ${props.className}`}>home</i>
    );
};

export default styled(Home)`
    color: ${props => props.theme.primary};
`;