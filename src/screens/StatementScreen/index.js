import React, {useState, useEffect} from 'react';
import {Expander} from '../../components/Expander';
import {Header} from '../../components/Header';
import styled from 'styled-components/native';
import {TransactionsService} from '../../services/TransactionsService';
import {Text} from '../../components/Text';
import {TransactionItem} from '../../components/TransactionItem';
import {TransactionSeparator} from '../../components/TransactionSeparator';
import {FlatList} from 'react-native';
import {COLOR_07} from '@env';

export const StatementScreen = (props) => {
  const [transactions, setTransactions] = useState([]);
  const getTransactions = async () => {
    setTransactions(await TransactionsService.get({}));
  };
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <Expander>
      <Content>
        <Header />
        <TitleContainer>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              marginBottom: 10,
            }}>
            Histórico de transações
          </Text>
        </TitleContainer>
        <FlatList
          style={{backgroundColor: COLOR_07, flex: 1, paddingHorizontal: 20}}
          data={transactions}
          keyExtractor={(item) => item._id}
          renderItem={({item, index}) => {
            return <TransactionItem {...item} />;
          }}
          ItemSeparatorComponent={TransactionSeparator}
        />
      </Content>
    </Expander>
  );
};

const Content = styled.View`
  flex: 1;
  padding-top: 20px;
  width: 100%;
`;

const TitleContainer = styled.View`
  margin-top: 10px;
  padding-top: 30px;
  align-items: center;
  background-color: ${COLOR_07};
  padding-bottom: 20px;
`;
