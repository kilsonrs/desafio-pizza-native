import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: transparent;
`;

export const HistoryButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
  border-radius: 18px;
  background: transparent;
`;

export const HistoryIcon = styled(Icon).attrs({
  size: 24,
  color: '#fff',
})``;

export const Title = styled.Text`
  color: #fefefe;
  font-size: 18px;
`;

export const CartButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
  border-radius: 18px;
  background: #e5293e;
`;

export const CartIcon = styled(Icon).attrs({
  size: 18,
  color: '#fff',
})``;
