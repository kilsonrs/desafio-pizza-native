import React from 'react';
import { YellowBox } from 'react-native';

import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';

import { Provider } from 'react-redux';
import store from './store';

import Routes from '~/routes';

YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core']);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
