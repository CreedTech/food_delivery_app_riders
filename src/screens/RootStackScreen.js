import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import OnBoardingScreen from './OnBoardingScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import VerifyPhoneScreen from './VerifyPhoneScreen';
import FinishSetupScreen from './FinishSetup';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <RootStack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen name="VerifyPhoneScreen" component={VerifyPhoneScreen} />
    <RootStack.Screen name="FinishSetupScreen" component={FinishSetupScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
