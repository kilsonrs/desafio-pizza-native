import React from 'react';

import image from '~/assets/Tamanhos/tamanho-g.png';

import {
  Container, List, Title, Image, Card,
} from './styles';

const Size = ({ navigation }) => (
  <Container>
    <List
      data={navigation.state.params.tamanhos}
      numColumns={2}
      keyExtractor={size => String(size.id)}
      renderItem={({ item: size }) => (
        <Card onPress={() => navigation.navigate('Cart', size)}>
          <Image source={image} />
          <Title>{size.title}</Title>
          <Title>{size.price}</Title>
        </Card>
      )}
    />
  </Container>
);

Size.navigationOptions = {
  headerTitle: 'Selecione um tamanho',
};

export default Size;
