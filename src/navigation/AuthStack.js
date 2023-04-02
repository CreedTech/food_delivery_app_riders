import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import VerifyPhoneScreen from '../screens/VerifyPhoneScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import FinishSetupScreen from '../screens/FinishSetup';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import OnBoardingScreen from '../screens/OnBoardingScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); 
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });

    // GoogleSignin.configure({
    //   webClientId: '996774138663-6fkr29thvppia0oofuq13g630mmo4kfb.apps.googleusercontent.com',
    // });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = 'OnBoardingScreen';
  } else {
    routeName = 'SignInScreen';
  }

  return (
    <Stack.Navigator
        initialRouteName="OnBoardingScreen"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="VerifyPhoneScreen" component={VerifyPhoneScreen} />
        <Stack.Screen name="FinishSetupScreen" component={FinishSetupScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack