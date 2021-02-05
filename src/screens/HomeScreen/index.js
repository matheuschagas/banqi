import React from 'react';
import {TabBar} from '../../components/TabBar';
import {Expander} from '../../components/Expander';
import styled from 'styled-components/native';
import {Text} from '../../components/Text';
import {COLOR_05} from '@env';
import IC_Notification from '../../assets/Icons/ic_notification-active.svg';
import IC_Vector from '../../assets/Icons/Vector 1.svg';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const HomeScreen = (props) => {
  return (
    <Expander>
      <Expander>
        <Content>
          <Header>
            <Container style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                  color: COLOR_05,
                  fontSize: 16,
                }}>
                meu
              </Text>
              <Logo
                source={require('../../assets/Images/Logo/Logo.png')}
                resizeMode={'contain'}
              />
              <IC_Vector width={12} height={7} style={{top: 8, left: 8}} />
            </Container>
            <IC_Notification width={24} height={24} />
          </Header>
        </Content>
      </Expander>
      <TabBar active={'Início'} />
    </Expander>
  );
};

const Content = styled.ScrollView`
  flex: 1;
  width: ${width};
  padding-vertical: 20px;
  padding-horizontal: 16px;
`;

const Header = styled.SafeAreaView`
  flex: 1;
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
