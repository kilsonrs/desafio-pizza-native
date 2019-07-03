import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  RegisterButton,
  Background,
  ButtonText,
  Logo,
} from './styles';

import background from '~/assets/fundo.jpg';
import logo from '~/assets/logo.png';

export default class Signup extends Component {
  state = {};

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Background source={background}>
          <Logo source={logo} />
          <Form>
            <Input autoCorrect={false} autoCapitalize="none" placeholder="Nome completo" />
            <Input autoCorrect={false} autoCapitalize="none" placeholder="Seu e-mail" />
            <Input autoCorrect={false} autoCapitalize="none" placeholder="Senha secreta" />
            <SubmitButton onPress={() => {}}>
              <ButtonText>Criar conta</ButtonText>
            </SubmitButton>
            <RegisterButton onPress={() => navigation.navigate('Signin')}>
              <ButtonText>Já tenho login</ButtonText>
            </RegisterButton>
          </Form>
        </Background>
      </Container>
    );
  }
}
