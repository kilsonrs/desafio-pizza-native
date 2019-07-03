import { StatusBar, Platform } from 'react-native';

StatusBar.setBarStyle('white-content');

if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor('#0B2031');
}
