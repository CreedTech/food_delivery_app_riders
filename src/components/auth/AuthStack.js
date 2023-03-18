import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from '../../screens/OnBoardingScreen';
import SignInScreen from '../../screens/SignInScreen';
import VerifyPhoneScreen from '../../screens/VerifyPhoneScreen';
import FinishSetupScreen from '../../screens/FinishSetup';
import SignUpBase from '../../screens/SignUpBase';
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack({setToken, setIsLoggedIn}) {
    return (
        <Stack.Navigator initialRouteName="OnBoardingScreen" screenOptions={{headerShown: false}}>
            <Stack.Screen name="OnBoardingScreen" >
                {(screenProps) => <OnBoardingScreen {...screenProps}/>}
            </Stack.Screen>
            <Stack.Screen name="SignUpBase">
                {(screenProps) => <SignUpBase {...screenProps} setToken={setToken} setIsLoggedIn={setIsLoggedIn}></SignUpBase>}
            </Stack.Screen>

            <Stack.Screen name="SignInScreen">
                {(screenProps) => <SignInScreen {...screenProps}  setIsLoggedIn={setIsLoggedIn}></SignInScreen>}
            </Stack.Screen>
            <Stack.Screen name="ForgotPasswordScreen">
                {(screenProps) => <ForgotPasswordScreen {...screenProps}  setIsLoggedIn={setIsLoggedIn}></ForgotPasswordScreen>}
            </Stack.Screen>
            <Stack.Screen name="VerifyPhoneScreen">
                {(screenProps) => <VerifyPhoneScreen {...screenProps} ></VerifyPhoneScreen>}
            </Stack.Screen>
            <Stack.Screen name="FinishSetupScreen">
                {(screenProps) => <FinishSetupScreen {...screenProps} ></FinishSetupScreen>}
            </Stack.Screen>
        </Stack.Navigator>
        );
}


