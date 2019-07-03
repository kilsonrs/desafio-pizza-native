import React, { Component } from 'react';

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

import Header from '~/components/Header';

import image from '~/assets/pizzas.png';

export default class Main extends Component {
  static navigationOptions = {
    headerTitle: <Header title="Pizzaria Don Juan" />,
  };

  state = {
    products: {
      data: [
        {
          id: 1,
          title: 'Pizzas',
          description: 'Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome.',
          tipos: [
            {
              id: 1,
              title: 'Portuguesa',
              tamanhos: [
                {
                  id: 1,
                  title: 'Gigante',
                  price: 'R$76,00',
                },
                {
                  id: 2,
                  title: 'Grande',
                  price: 'R$59,00',
                },
                {
                  id: 3,
                  title: 'Média',
                  price: 'R$42,00',
                },
                {
                  id: 4,
                  title: 'Pequena',
                  price: 'R$29,00',
                },
              ],
            },
            {
              id: 2,
              title: 'Calabresa',
              tamanhos: [
                {
                  id: 1,
                  title: 'Gigante',
                },
                {
                  id: 2,
                  title: 'Grande',
                },
                {
                  id: 3,
                  title: 'Média',
                },
                {
                  id: 4,
                  title: 'Pequena',
                },
              ],
            },
            {
              id: 3,
              title: 'Frango Frito',
            },
            {
              id: 4,
              title: 'Marguerita',
            },
            {
              id: 5,
              title: 'Pizza 4 Quejos',
            },
          ],
        },
        {
          id: 2,
          title: 'Massas',
          description: '10 tipos de massas com diferentes molhos para te satisfazer.',
        },
        {
          id: 3,
          title: 'Calzones',
          description: 'Calzones super recheados com mais de 50 sabores diferentes.',
        },
        {
          id: 4,
          title: 'Bebidas não-alcóolicas',
          description: 'Refrigerantes, sucos, chá gelado, energéticos e água.',
        },
        {
          id: 5,
          title: 'Bebidas alcóolicas',
          description: 'Cervejas artesanais, vinhos e destilados.',
        },
      ],
    },
  };

  componentDidMount() {
    console.tron.log(this.props);
    // console.tron.log(this.state);
  }

  handleProductPress = (product) => {
    const { navigation } = this.props;
    navigation.navigate('Type', product);
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <List
          data={products.data}
          keyExtractor={product => String(product.id)}
          renderItem={({ item: product }) => (
            <Card onPress={() => this.handleProductPress(product)}>
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
  }
}
