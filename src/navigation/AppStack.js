import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerStack from './DrawerStack';

const App = createStackNavigator();

const DrawerNav = () => {
  return <DrawerStack />;
};

const AppStack = ({ token }) => {
  return (
    <App.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <App.Screen name="HomeScreen" component={DrawerNav} token={token} />
    </App.Navigator>
  );
};

export default AppStack;
