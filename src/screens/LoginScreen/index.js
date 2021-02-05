import React from 'react';
import styled from 'styled-components/native';
import {Expander} from '../../components/Expander';
import {COLOR_08} from '@env';
import {Button} from '../../components/Button';
export const LoginScreen = (props) => {
  return (
    <Expander background={COLOR_08}>
      <Logo
        source={require('../../assets/Images/LogoLogin/LogoLogin.png')}
        resizeMode={'contain'}
      />
      <Button style={{marginTop: 50}}>acesse agora</Button>
    </Expander>
  );
};

const Logo = styled.Image`
  width: 90%;
  height: 100px;
  margin-top: 50px;
`;
