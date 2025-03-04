// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import BoarderLoginScreen from './BoarderLoginScreen';
import CustomerLoginScreen from './CustomerLoginScreen';
import BoarderDashboard from './BoarderDashboard';
import CustomerDashboard from './CustomerDashboard';
import CustomerSignupScreen from './CustomerSignupScreen';
import BoarderSignupScreen from './BoarderSignupScreen';
import Room from './Room';
import House from './House';
import CustomerHouse from './CustomerHouse';
import CustomerRoom
 from './CustomerRoom';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BoarderLogin" component={BoarderLoginScreen} />
        <Stack.Screen name="CustomerLogin" component={CustomerLoginScreen} />
        <Stack.Screen name="BoarderDashboard" component={BoarderDashboard} />
        <Stack.Screen name="CustomerDashboard" component={CustomerDashboard} />
        <Stack.Screen name="CustomerSignup" component={CustomerSignupScreen} />
        <Stack.Screen name="BoarderSignup" component={BoarderSignupScreen} />
        <Stack.Screen name="Room" component={Room} />
        <Stack.Screen name="House" component={House} />
        <Stack.Screen name="CustomerHouse" component={CustomerHouse} />
        <Stack.Screen name="CustomerRoom" component={CustomerRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;