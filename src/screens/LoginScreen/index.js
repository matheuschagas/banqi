import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {Expander} from '../../components/Expander';
import {COLOR_08} from '@env';
import {Button} from '../../components/Button';
import {UserService} from '../../services/UserService';
import {Alert, DeviceEventEmitter} from 'react-native';

export const LoginScreen = (props) => {
  const login = async () => {
    DeviceEventEmitter.emit('loaderOn');
    try {
      await UserService.login();
      DeviceEventEmitter.emit('login');
    } catch (e) {
      Alert.alert('Ops...', e.message);
    }
    DeviceEventEmitter.emit('loaderOff');
  };
  return (
    <Expander background={COLOR_08}>
      <Logo
        source={require('../../assets/Images/LogoLogin/LogoLogin.png')}
        resizeMode={'contain'}
      />
      <Button style={{marginTop: 50}} onPress={login}>
        acesse agora
      </Button>
    </Expander>
  );
};

const Logo = styled.Image`
  width: 90%;
  height: 100px;
  margin-top: 50px;
`;
