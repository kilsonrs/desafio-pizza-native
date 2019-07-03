import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled(LinearGradient).attrs({
  colors: ['#444', '#000'],
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 0.5 },
})`
  flex: 1;
  justify-content: center;
  background: #000;
`;

export const Background = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  backgroundColor: '#000',
  opacity: 0.15,
})`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 72px;
  width: 72px;
  margin-bottom: 43px;
`;

export const Form = styled.KeyboardAvoidingView`
  width: 100%;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
  fontSize: 15,
})`
  width: 100%;
  background: #f4f4f4;
  border-radius: 5px;
  padding: 0 15px;
  height: 50px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled(RectButton)`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: #e5293e;
  border-radius: 5px;
  margin-top: 10px;
`;

export const RegisterButton = styled(BorderlessButton)`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  color: #fff;
`;
