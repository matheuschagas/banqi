import React from 'react';
import styled from 'styled-components/native';
import {Expander} from '../../components/Expander';
import {Header} from '../../components/Header';
import {Text} from '../../components/Text';
import numeral from 'numeral';
import {COLOR_07, COLOR_06, COLOR_03} from '@env';
export const TransactionDetailScreen = ({route}) => {
  let {_id, amount, description, date} = route.params;
  amount = parseFloat(amount);
  date = new Date(date);
  const positive = amount > 0;
  return (
    <Expander>
      <Content>
        <Header />
        <ValueContainer>
          <Text style={{fontSize: 14, lineHeight: 20, marginBottom: 10}}>
            {description}
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Montserrat-Bold',
              lineHeight: 28,
              color: positive ? COLOR_06 : COLOR_03,
            }}>
            {positive ? '+ ' : ''}
            {numeral(amount).format('$ 0,0.00')}
          </Text>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 20,
              marginBottom: 10,
              color: positive ? COLOR_06 : COLOR_03,
            }}>
            {positive ? 'Recebido' : 'Pago'} em{' '}
            {date.toLocaleString('pt-BR', {
              dateStyle: 'short',
            })}
          </Text>
          <Text
            style={{
              fontSize: 10,
              lineHeight: 20,
              marginBottom: 10,
              marginTop: 20,
              width: '70%',
            }}>
            Em caso de dúvida sobre a transação entre em contato pelo 0800 999
            999 e informe o código da transação:{' '}
            <Text style={{fontFamily: 'Montserrat-Bold'}}>{_id}</Text>
          </Text>
        </ValueContainer>
      </Content>
    </Expander>
  );
};

const Content = styled.View`
  flex: 1;
  padding-top: 20px;
  width: 100%;
`;
const ValueContainer = styled.View`
  margin-top: 10px;
  padding-top: 30px;
  align-items: center;
  background-color: ${COLOR_07};
  padding-bottom: 20px;
`;
