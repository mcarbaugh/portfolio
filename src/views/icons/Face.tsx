import * as React from 'react';
import styled from 'styled-components';

interface FaceProps {
    className?: string;
}

const Face = (props: FaceProps) => {
    return (
        <i className={`material-icons md-48 ${props.className}`}>face</i>
    );
};

export default styled(Face)`
    color: ${props => props.theme.primary};
`;