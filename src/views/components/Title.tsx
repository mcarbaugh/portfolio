import styled from 'styled-components';
import Theme from '../../models/Theme';

interface TitleProps {
  theme?: Theme;
}

const Title = styled.h1`
  font-size: ${() => '300%'};
  color: ${(props: TitleProps) => props.theme ? props.theme.primary : ''};
`;

export default Title;