import React, {useState, useEffect} from 'react';
import {TabBar} from '../../components/TabBar';
import {Expander} from '../../components/Expander';
import styled from 'styled-components/native';
import {Text} from '../../components/Text';
import {COLOR_05, COLOR_07, COLOR_03, COLOR_04} from '@env';
import IC_Notification from '../../assets/Icons/ic_notification-active.svg';
import IC_Vector from '../../assets/Icons/Vector 1.svg';
import IC_Eye from '../../assets/Icons/eye-outline.svg';
import IC_Hand_Money from '../../assets/Icons/ic_hand_money.svg';
import {Dimensions, FlatList} from 'react-native';
import {UserService} from '../../services/UserService';
const {width, height} = Dimensions.get('window');
import numeral from 'numeral';
import {QuickAccess} from '../../components/QuickAccess';
import {TransactionItem} from '../../components/TransactionItem';
import {TransactionsService} from '../../services/TransactionsService';
import {TransactionSeparator} from '../../components/TransactionSeparator';
import {useNavigation} from '@react-navigation/core';
import {Header} from '../../components/Header';

export const HomeScreen = (props) => {
  const {navigate} = useNavigation();
  const [recentTransactions, setRecentTransactions] = useState([]);
  const getRecentTransactions = async () => {
    let transactions = await TransactionsService.getRecent(3);
    setRecentTransactions(transactions);
  };
  const openTransactions = () => {
    navigate('StatementScreen');
  };

  useEffect(() => {
    getRecentTransactions();
  }, []);
  return (
    <Expander>
      <Expander>
        <Content showsVerticalScrollIndicator={false}>
          <Header />
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
                {numeral(parseFloat(UserService.user.balance)).format(
                  '$ 0,0.00',
                )}
              </Text>
              <IC_Eye width={24} height={24} style={{top: 2, left: 15}} />
            </Container>
          </BalanceContainer>
          <QuickAccess />
          <LoanCard>
            <IC_Hand_Money />
            <LoanCardContent>
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 14,
                  lineHeight: 17,
                }}>
                Empréstimo pessoal
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 12,
                  lineHeight: 17,
                  color: COLOR_03,
                }}>
                Você tem R$ 500 pré-aprovados!
              </Text>
            </LoanCardContent>
          </LoanCard>
          <TransactionHistorySection>
            <Text style={{fontSize: 14, lineHeight: 20}}>
              Histórico de transações
            </Text>
            <FlatList
              style={{marginTop: 20}}
              data={recentTransactions}
              keyExtractor={(item) => item._id}
              renderItem={({item, index}) => {
                return <TransactionItem {...item} />;
              }}
              ItemSeparatorComponent={TransactionSeparator}
            />
            <Text
              style={{
                fontSize: 14,
                lineHeight: 16,
                color: COLOR_04,
                fontFamily: 'Montserrat-Bold',
                paddingVertical: 10,
                textAlign: 'right',
                marginTop: 20,
              }}
              onPress={openTransactions}>
              VER MAIS
            </Text>
          </TransactionHistorySection>
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

const Container = styled.View``;

const BalanceContainer = styled.View`
  margin-top: 30px;
  align-items: center;
`;

const LoanCard = styled.View`
  margin-horizontal: 20px;
  padding-horizontal: 13px;
  padding-vertical: 16px;
  flex-direction: row;
  background-color: ${COLOR_07};
  border-radius: 4px;
  shadowColor: #000;
  shadowOffset: {width: 0px, height: 2px};
  shadowOpacity: 0.16;
  shadowRadius: 4px;
  elevation: 1;
`;
const LoanCardContent = styled.View`
  padding-left: 13px;
`;

const TransactionHistorySection = styled.View`
  background-color: ${COLOR_07};
  padding-horizontal: 20px;
  padding-vertical: 30px;
  margin-top: 32px;
`;
