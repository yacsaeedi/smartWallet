import React from 'react';
import {LogBox} from 'react-native';
import {enableScreens} from 'react-native-screens';

import Navigator from './Navigator';

enableScreens();
LogBox.ignoreAllLogs();

const App = () => {
  return <Navigator />;
};

export default App;
