import React from 'react';
import styled from 'styled-components/native';
import {COLOR_05, COLOR_02, COLOR_07} from '@env';
import IC_HOME from '../assets/Icons/ic_home.svg';
import IC_CARNES from '../assets/Icons/ic_carnes.svg';
import IC_CARDS from '../assets/Icons/ic_cards.svg';
import IC_MARKETPLACE from '../assets/Icons/ic_marketplace.svg';
import IC_SCANNER from '../assets/Icons/scanner.svg';

export const TabBar = (props) => {
  const inicio = props.active === 'Início';
  const compras = props.active === 'ComprasCompras';
  const pagar = props.active === 'Pagar';
  const cartoes = props.active === 'Cartões';
  const carnes = props.active === 'Carnês';
  return (
    <Container>
      <Clickable activeOpacity={0.7}>
        <IC_HOME width={25} height={25} stroke={inicio ? COLOR_05 : COLOR_02} />
        <ClickableText active={inicio}>Início</ClickableText>
      </Clickable>
      <Clickable activeOpacity={0.7}>
        <IC_MARKETPLACE
          width={25}
          height={25}
          stroke={compras ? COLOR_05 : COLOR_02}
        />
        <ClickableText active={compras}>Compras</ClickableText>
      </Clickable>
      <Clickable activeOpacity={0.7}>
        <IC_SCANNER
          width={25}
          height={25}
          stroke={pagar ? COLOR_05 : COLOR_02}
        />
        <ClickableText active={pagar}>Pagar</ClickableText>
      </Clickable>
      <Clickable activeOpacity={0.7}>
        <IC_CARDS
          width={25}
          height={25}
          stroke={cartoes ? COLOR_05 : COLOR_02}
        />
        <ClickableText active={cartoes}>Cartões</ClickableText>
      </Clickable>
      <Clickable activeOpacity={0.7}>
        <IC_CARNES
          width={25}
          height={25}
          stroke={carnes ? COLOR_05 : COLOR_02}
        />
        <ClickableText active={carnes}>Carnês</ClickableText>
      </Clickable>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex-direction: row;
  background-color: ${COLOR_07};
`;
const Clickable = styled.TouchableOpacity`
  flex: 1;
  padding-vertical: 8px;
  align-items: center;
  margin-top: 4px;
`;

const ClickableText = styled.Text`
  font-size: 11px;
  text-align: center;
  color: ${(props) => (props.active ? COLOR_05 : COLOR_02)};
`;
