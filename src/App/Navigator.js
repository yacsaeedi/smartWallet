import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Home, Cards, MoneyBox, Limits, Statistic } from "../Screens"
import Icon from 'react-native-vector-icons/FontAwesome';


//Stack Names 
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    const routeName = route.name;
                    let iconName = routeName === "Home" ? "home" : routeName === "Statistic" ? "signal" : routeName === "MoneyBox" ? "database" : routeName === "Cards" ? "credit-card" : routeName === "Limits" ? "info-circle" : ""
                    return (
                        <View style={{
                            width: '75%', height: '75%', alignSelf: 'center', justifyContent: "center", alignItems: "center",
                            borderRadius: 15,
                        }
                        } >
                            <Icon name={iconName} size={14} color="#8c8c8e" />
                        </View >
                    );
                }

            })}
            tabBarOptions={{
                labelStyle: {
                    fontSize: 12,
                    marginBottom: 10,
                    color: "#707173",
                },
                style: {
                    borderTopWidth: 0.5,
                    borderTopColor: "#292c35",
                    backgroundColor: "#17191F",
                    elevation: 0,
                    width: '100%',
                    height: 60,
                },

            }}
            backBehavior="none"
            initialRouteName="Home"

        >
            <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Tab.Screen options={{ headerShown: false }} name="MoneyBox" component={MoneyBox} />
            <Tab.Screen options={{ headerShown: false }} name="Cards" component={Cards} />
            <Tab.Screen options={{ headerShown: false }} name="Limits" component={Limits} />
            <Tab.Screen options={{ headerShown: false }} name="Statistic" component={Statistic} />
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
