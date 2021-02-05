import React from 'react';
import styled from 'styled-components/native';
import {COLOR_SEPARATOR} from '@env';

export const TransactionSeparator = (props) => {
  return (
    <Container>
      <Separator />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  padding-bottom: 2px;
`;

const Separator = styled.View`
  width: 2px;
  height: 24px;
  background-color: ${COLOR_SEPARATOR};
  left: 16px;
`;
