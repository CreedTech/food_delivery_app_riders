import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Home from '../screens/Home';
// import HomeScreen from '../screens/HomeScreen';
// import EditProfileScreen from '../screens/EditProfileScreen';
// import MyTripsScreen from '../screens/MyTripsScreen';
// import WalletScreen from '../screens/WalletScreen';
import DrawerStack from './DrawerStack';

const App = createStackNavigator();

const DrawerNav = () => {
    return (
        <DrawerStack />
    );
}

const AppStack = ({token}) => {
  return (
    <App.Navigator 
      initialRouteName='HomeScreen'
      screenOptions={{ headerShown: false }}
    >
      <App.Screen name='HomeScreen' component={DrawerNav} token={token}  />
      {/* <App.Screen name='EditProfile' component={EditProfileScreen} /> */}
      {/* <App.Screen name='MyTrips' component={MyTripsScreen} /> */}
      {/* <App.Screen name='Wallet' component={WalletScreen} /> */}
    </App.Navigator>
  )
}

export default AppStack