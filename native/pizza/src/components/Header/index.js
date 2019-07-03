import React from 'react';

import {
  Container, HistoryButton, HistoryIcon, CartButton, CartIcon, Title,
} from './styles';

const Header = ({ title }) => (
  <Container>
    <HistoryButton onPress={() => {}}>
      <HistoryIcon name="history" />
    </HistoryButton>
    <Title>{title}</Title>
    <CartButton onPress={() => {}}>
      <CartIcon name="shopping" />
    </CartButton>
  </Container>
);

export default Header;
