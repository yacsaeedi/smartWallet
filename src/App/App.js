import React, { useState, useEffect } from 'react';
import { View, StatusBar, LogBox } from "react-native";
import Navigator from "./Navigator"
// import Store from '@Redux/Stores';
// import { Theme, Color } from '@Constants';
// import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
enableScreens();
LogBox.ignoreAllLogs();
const App = (props) => {
  return (
    <>
      <Navigator />
    </>
  )
};
export default App;