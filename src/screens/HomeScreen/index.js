import React from 'react';
import {TabBar} from '../../components/TabBar';
import {Expander} from '../../components/Expander';
import styled from 'styled-components/native';
import {Text} from '../../components/Text';
import {COLOR_05} from '@env';
import IC_Notification from '../../assets/Icons/ic_notification-active.svg';
import IC_Vector from '../../assets/Icons/Vector 1.svg';
import IC_Eye from '../../assets/Icons/eye-outline.svg';
import {Dimensions} from 'react-native';
import {UserService} from '../../services/UserService';
const {width, height} = Dimensions.get('window');
import numeral from 'numeral';
import {QuickAccess} from '../../components/QuickAccess';

export const HomeScreen = (props) => {
  return (
    <Expander>
      <Expander>
        <Content>
          <Header>
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
                source={require('../../assets/Images/Logo/Logo.png')}
                resizeMode={'contain'}
              />
              <IC_Vector width={12} height={7} style={{top: 8, left: 8}} />
            </Container>
            <IC_Notification
              width={24}
              height={24}
              style={{marginHorizontal: 16}}
            />
          </Header>
          <BalanceContainer>
            <Text style={{fontSize: 14, lineHeight: 20, marginBottom: 10}}>
              Meu saldo:
            </Text>
            <Container style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: 'Montserrat-Bold',
                  lineHeight: 28,
                }}>
                {numeral(parseInt(UserService.user.balance)).format('$ 0,0.00')}
              </Text>
              <IC_Eye width={24} height={24} style={{top: 2, left: 15}} />
            </Container>
          </BalanceContainer>
          <QuickAccess />
        </Content>
      </Expander>
      <TabBar active={'Início'} />
    </Expander>
  );
};

const Content = styled.ScrollView`
  flex: 1;
  width: ${width};
  padding-top: 20px;
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

const BalanceContainer = styled.View`
  margin-top: 30px;
  align-items: center;
`;
