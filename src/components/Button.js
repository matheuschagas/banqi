import React from 'react';
import styled from 'styled-components/native';
import {COLOR_05, COLOR_07} from '@env';

export const Button = (props) => {
  return (
    <ButtonContainer
      onPress={props.onPress}
      style={{...props.style}}
      activeOpacity={0.7}>
      <ButtonContent style={{...props.contentStyle}}>
        {props.children}
      </ButtonContent>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  width: 90%;
  min-height: 2px;
  padding-vertical: 12px;
  padding-horizontal: 15px;
  border-radius: 30px;
  background-color: ${COLOR_05};
  align-content: center;
  justify-content: center;
`;
const ButtonContent = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  color: ${COLOR_07};
  font-family: Montserrat-Bold;
`;
