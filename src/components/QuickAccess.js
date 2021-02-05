import React from 'react';
import styled from 'styled-components/native';
import IC_PIX from '../assets/Icons/ic_pix.svg';
import IC_Deposit from '../assets/Icons/ic_deposit-bicolor.svg';
import IC_Withdraw from '../assets/Icons/ic_withdraw-bicolor.svg';
import {FlatList, View, Dimensions} from 'react-native';
import {COLOR_07, COLOR_02} from '@env';

const {width, height} = Dimensions.get('window');

export const QuickAccess = (props) => {
  const data = [
    {
      name: 'Pix',
      testID: 'QUICKACCESS_PIX',
      onPress: () => {},
      icon: IC_PIX,
    },
    {
      name: 'Depositar',
      testID: 'QUICKACCESS_DEPOSITAR',
      onPress: () => {},
      icon: IC_Deposit,
    },
    {
      name: 'Sacar',
      testID: 'QUICKACCESS_SACAR',
      onPress: () => {},
      icon: IC_Withdraw,
    },
    {
      name: 'Transferir',
      testID: 'QUICKACCESS_TRANSFERIR',
      onPress: () => {},
      icon: IC_PIX,
    },
    {
      name: 'Cobrar',
      testID: 'QUICKACCESS_COBRAR',
      onPress: () => {},
      icon: IC_PIX,
    },
  ];
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{marginTop: 40, marginBottom: 27, paddingTop: 10}}
      data={data}
      keyExtractor={(item) => item.testID}
      renderItem={({item}) => {
        return (
          <QuickAccessCard
            testID={item.testID}
            accessibilityLabel={item.testID}
            onPress={item.onPress}
            activeOpacity={0.7}>
            <item.icon />
            <QuickAccessCardText>{item.name}</QuickAccessCardText>
          </QuickAccessCard>
        );
      }}
    />
  );
};

const QuickAccessCard = styled.TouchableOpacity`
  padding-vertical: 10px;
  padding-left: 14px;
  height: 104px;
  width: 120px;
  align-items: flex-start;
  background: ${COLOR_07};
  border-radius: 11px;
  margin-horizontal: 5px;
  margin-vertical: 5px;
  shadowColor: #000;
  shadowOffset: {width: 0px, height: 2px};
  shadowOpacity: 0.16;
  shadowRadius: 4px;
  elevation: 1;
  justify-content: space-between;
`;

const QuickAccessCardText = styled.Text`
  color: ${COLOR_02};
  font-family: Montserrat-Bold;
  font-size: 14px;
`;
