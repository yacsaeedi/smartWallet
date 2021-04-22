import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Home, Cards, MoneyBox, Limits, Statistic } from '../Screens';
import { Color } from '../Constants';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const UserContext = React.createContext();
let user = 0;

const tabsIcon = {
  Home: 'home',
  Statistic: 'signal',
  MoneyBox: 'database',
  Cards: 'credit-card',
  Limits: 'info-circle',
};

const TabScreen = () => {
  const [context, setContext] = useState(user);
  const [state, setstate] = useState(true);

  useEffect(() => { }, [context]);

  const screenOptions = ({ route }) => ({
    tabBarVisible: state,
    tabBarIcon: ({ color }) => {
      const routeName = route.name;
      const iconName = tabsIcon[routeName];
      return <Icon name={iconName} size={19} color={color} />;
    },
  });

  return (
    <UserContext.Provider value={[context, setContext, state, setstate]}>
      <Tab.Navigator
        tabBarOptions={tabBarOptions}
        screenOptions={screenOptions}
        backBehavior="none"
        initialRouteName="Home">
        <Tab.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="MoneyBox"
          component={MoneyBox}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Limits"
          component={Limits}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Statistic"
          component={Statistic}
        />
      </Tab.Navigator>
    </UserContext.Provider>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabScreen}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="Cards"
          component={Cards}
          options={{ headerShown: false, tabBarVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const tabBarOptions = {
  keyboardHidesTabBar: true,
  activeTintColor: Color.white,
  inactiveTintColor: Color.lightTxt,
  labelStyle: {
    fontSize: 12,
    marginBottom: 10,
  },
  style: {
    borderTopWidth: 0.5,
    borderTopColor: Color.border,
    backgroundColor: Color.black,
    elevation: 0,
    width: '100%',
    height: 55,
  },
};

export default Navigator;
