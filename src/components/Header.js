import React from 'react';
import styled from 'styled-components/native';
import {Text} from './Text';
import IC_Vector from '../assets/Icons/Vector 1.svg';
import IC_Notification from '../assets/Icons/ic_notification-active.svg';
import {COLOR_05} from '@env';

export const Header = (props) => {
  return (
    <HeaderComponent>
      <Container style={{flexDirection: 'row', paddingHorizontal: 16}}>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            color: COLOR_05,
            fontSize: 16,
          }}>
          meu
        </Text>
        <Logo
          source={require('../assets/Images/Logo/Logo.png')}
          resizeMode={'contain'}
        />
        <IC_Vector width={12} height={7} style={{top: 8, left: 8}} />
      </Container>
      <IC_Notification width={24} height={24} style={{marginHorizontal: 16}} />
    </HeaderComponent>
  );
};

const HeaderComponent = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.Image`
  width: 63px;
  height: 18px;
  margin-left: 3px;
`;

const Container = styled.View``;
