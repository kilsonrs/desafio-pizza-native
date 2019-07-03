import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
  height: 79px;
  width: 79px;
`;

export const Info = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export const Description = styled.Text.attrs({
  numberOfLine: 2,
})`
  font-size: 12px;
`;

export const Time = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TimeIcon = styled(Icon).attrs({
  size: 12,
  color: '#b3b3b3',
})``;

export const TimeText = styled.Text`
  font-size: 11px;
  margin-left: 5px;
`;
