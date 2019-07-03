import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Signin from '~/pages/Auth/Signin';
import Signup from '~/pages/Auth/Signup';
import Screens from '~/navigation/Screens';

const Routes = createAppContainer(
  createSwitchNavigator({ Main: { screen: Screens }, Signin, Signup }),
);

export default Routes;
