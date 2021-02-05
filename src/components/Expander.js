import styled from 'styled-components/native';
import {COLOR_01} from '@env';

export const Expander = styled.View`
  flex: 1;
  background-color: ${(props) =>
    props.background ? props.background : COLOR_01};
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
  justify-content: center;
  align-items: center;
`;
