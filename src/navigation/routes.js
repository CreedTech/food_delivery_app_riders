import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { AuthContext } from '../components/context';
import AppStack from './AppStack';

export default function Routes() {
  const { userInfo } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {userInfo.token === null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
