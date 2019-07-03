import React from 'react';
import image from '~/assets/Tamanhos/tamanho-g.png';

import {
  Container,
  List,
  Card,
  Image,
  Info,
  Title,
  Description,
  Time,
  TimeIcon,
  TimeText,
} from './styles';

const Cart = ({ navigation }) => (
  <Container>
    <List
      data={navigation.state.params.tamanhos}
      numColumns={2}
      keyExtractor={size => String(size.id)}
      renderItem={({ item: size }) => (
        <Card onPress={() => navigation.navigate('Purchase', size)}>
          <Image source={image} />
          <Info>
            <Title>{product.title}</Title>
            <Description>{product.description}</Description>
            <Time>
              <TimeIcon name="alarm" />
              <TimeText>30 mins</TimeText>
            </Time>
          </Info>
        </Card>
      )}
    />
  </Container>
);

Cart.navigationOptions = {
  headerTitle: 'Carrinho',
};
export default Cart;
