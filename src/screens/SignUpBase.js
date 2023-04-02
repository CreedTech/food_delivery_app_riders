import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import SignUpScreen from './SignUpScreen';

const SignUpBase = ({ setToken, navigation, setIsLoggedIn }) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar style="auto" />
      <SignUpScreen
        navigation={navigation}
        setToken={setToken}
        setIsLoggedIn={setIsLoggedIn}
      ></SignUpScreen>
    </SafeAreaView>
  );
};

export default SignUpBase;
