import React from 'react';
import styled from 'styled-components/native';
import IC_Arrow from '../assets/Icons/Vector.svg';
import {Text} from './Text';
import numeral from 'numeral';
import {COLOR_03, COLOR_06} from '@env';

export const TransactionItem = (props) => {
  let {_id, description, amount, date} = props;
  amount = parseFloat(amount);
  date = new Date(date);
  const positive = amount > 0;
  return (
    <Container key={_id} activeOpacity={0.7}>
      <IC_Arrow />
      <InfoContainer>
        <Text style={{fontSize: 14, lineHeight: 20}}>{description}</Text>
        <Text
          style={{
            fontSize: 12,
            lineHeight: 16,
            color: positive ? COLOR_06 : COLOR_03,
          }}>
          {positive ? 'Recebido' : 'Pago'} em{' '}
          {
            date
              .toLocaleString('pt-BR', {
                dateStyle: 'short',
                timeStyle: '',
              })
              .split(' ')[0]
          }
        </Text>
      </InfoContainer>
      <Amount positive={positive}>
        {positive ? '+ ' : ''}
        {numeral(amount).format('$ 0,0.00')}
      </Amount>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding-left: 5px;
`;

const InfoContainer = styled.View`
  flex: 1;
  padding-horizontal: 20px;
`;

const Amount = styled.Text`
  font-family: Montserrat-Medium;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => (props.positive ? COLOR_06 : COLOR_03)};
`;
