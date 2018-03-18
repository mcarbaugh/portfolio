import * as React from 'react';
import styled from 'styled-components';

interface BuildProps {
    className?: string;
}

const Build = (props: BuildProps) => {
    return (
        <i className={`material-icons md-48 ${props.className}`}>build</i>
    );
};

export default styled(Build)`
    color: ${props => props.theme.primary};
`;