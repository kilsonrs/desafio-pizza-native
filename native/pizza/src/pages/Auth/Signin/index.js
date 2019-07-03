import React, { Component } from 'react';

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

export default class Signin extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    // const { signInRequest } = this.props;
    // signInRequest(email, password);
  };

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    return (
      <Container>
        <Background source={background}>
          <Logo source={logo} />
          <Form>
            <Input
              placeholder="Seu e-mail"
              value={email}
              keyboardType="email-address"
              onChangeText={text => this.setState({ email: text })}
              autoCorrect={false}
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              autoFocus
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
            />
            <Input
              placeholder="Senha secreta"
              value={password}
              onChangeText={text => this.setState({ password: text })}
              ref={(el) => {
                this.passwordInput = el;
              }}
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="send"
            />
            <SubmitButton onPress={() => navigation.navigate('Main')}>
              <ButtonText>Entrar</ButtonText>
            </SubmitButton>
            <RegisterButton onPress={() => navigation.navigate('Signup')}>
              <ButtonText>Criar conta gratuita</ButtonText>
            </RegisterButton>
          </Form>
        </Background>
      </Container>
    );
  }
}
