import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Cards, MoneyBox, Limits, Statistic } from "../Screens"
//Stack Names 
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{ headerShown: false }} name="Cards" component={Cards} />
            <Tab.Screen options={{ headerShown: false }} name="MoneyBox" component={MoneyBox} />
            <Tab.Screen options={{ headerShown: false }} name="Limits" component={Limits} />
        </Tab.Navigator>
    )
}

export default Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Stack" component={TabScreen} options={{ headerShown: false, tabBarVisible: false }} />
                <Stack.Screen options={{ headerShown: false, tabBarVisible: false }} name="Home" component={Home} />
                <Stack.Screen options={{ headerShown: false, tabBarVisible: false }} name="Cards" component={Cards} />
                <Stack.Screen options={{ headerShown: false, tabBarVisible: false }} name="MoneyBox" component={MoneyBox} />
                <Stack.Screen options={{ headerShown: false, tabBarVisible: false }} name="Limits" component={Limits} />
                <Stack.Screen options={{ headerShown: false, tabBarVisible: false }} name="Statistic" component={Statistic} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
