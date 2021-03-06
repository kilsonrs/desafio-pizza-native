import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '10.10.10.4' })
    .use(reactotronRedux())
    .use(sagaPlugin())
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
