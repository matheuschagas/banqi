import React from 'react';
import {TabBar} from '../../components/TabBar';
import {Expander} from '../../components/Expander';
export const HomeScreen = (props) => {
  return (
    <Expander>
      <Expander />
      <TabBar active={'Início'} />
    </Expander>
  );
};
