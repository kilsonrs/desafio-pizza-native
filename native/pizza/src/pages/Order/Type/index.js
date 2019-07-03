import React from 'react';

import image from '~/assets/tipo.png';

import {
  Container, List, Title, Image, Card,
} from './styles';

const Type = ({ navigation }) => (
  <Container>
    <List
      data={navigation.state.params.tipos}
      numColumns={2}
      keyExtractor={tipo => String(tipo.id)}
      renderItem={({ item: tipo }) => (
        <Card onPress={() => navigation.navigate('Size', tipo)}>
          <Image source={image} />
          <Title>{tipo.title}</Title>
        </Card>
      )}
    />
  </Container>
);

Type.navigationOptions = {
  headerTitle: 'Selecione um tipo',
};

export default Type;
