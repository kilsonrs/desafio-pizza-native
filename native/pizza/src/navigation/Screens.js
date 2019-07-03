import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';

import Main from '~/pages/Main';
import Header from '~/components/Header';
import History from '~/pages/Order/History';
import Type from '~/pages/Order/Type';
import Size from '~/pages/Order/Size';
import Cart from '~/pages/Order/Cart';
import Purchase from '~/pages/Order/Purchase';

const Screens = createAppContainer(
  createStackNavigator(
    {
      Main,
      Header,
      History,
      Type,
      Size,
      Cart,
      Purchase,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#0B2031',
          elevation: 0,
        },
        headerTintColor: '#f4f4f4',
      },
      // transitionConfig: () => ({
      //   transitionSpec: {
      //     duration: 300,
      //     easing: Easing.out(Easing.poly(4)),
      //     timing: Animated.timing,
      //   },
      //   screenInterpolator: (sceneProps) => {
      //     const { layout, position, scene } = sceneProps;
      //     const { index } = scene;

      //     const width = layout.initWidth;
      //     const translateX = position.interpolate({
      //       inputRange: [index - 1, index, index + 1],
      //       outputRange: [width, 0, 0],
      //     });

      //     const opacity = position.interpolate({
      //       inputRange: [index - 1, index - 0.99, index],
      //       outputRange: [0, 1, 1],
      //     });

      //     return { opacity, transform: [{ translateX }] };
      //   },
      // }),
    },
  ),
);

export default Screens;
