import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import HeaderBackground from '~/assets/header-background.png';

export const Container = styled.ImageBackground.attrs({
  source: HeaderBackground,
  imageStyle: {
    resizeMode: 'stretch',
    height: '20%',
  },
})`
  flex: 1;
  background: #f4f4f4;
  padding: 0 10px;
`;

export const Card = styled(RectButton)`
  flex: 1;
  align-items: center;
  padding: 16px;
  background: #f4f4f4;
  margin: 0 10px 20px;
  border-radius: 5px;
  elevation: 5;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  marginTop: 10,
})``;

export const Image = styled.Image`
  height: 130px;
  width: 130px;
`;

export const Title = styled.Text`
  margin-top: 16px;
  font-weight: bold;
  font-size: 18px;
`;
