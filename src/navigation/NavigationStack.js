import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import {
//    createDrawerNavigator,
//    DrawerContentScrollView,
//    DrawerItemList,
//    DrawerItem,
//  } from '@react-navigation/drawer';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import customDrawerContentComponent from '../components/DrawerComponent/riderDrawerContainer';
// import Login from '../screens/rider/Login';
import RiderLogin from '../screens/rider/RiderLogin';
import RiderVerifyNumber from '../screens/rider/RiderVerifyNumber';
import RiderRegister from '../screens/rider/RiderRegister';
import OnBoarding from '../screens/rider/OnBoarding';
import Home from '../screens/rider/Home';
import FinishSetup from '../screens/rider/FinishSetup';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomDrawer from '../screens/rider/CustomDrawer';
import Dashboard from '../screens/rider/Dashboard';

const AuthStackRider = createStackNavigator(
  {
    OnBoarding: { screen: OnBoarding },
    Login: { screen: RiderLogin },
    Verify: { screen: RiderVerifyNumber },
    Register: { screen: RiderRegister },
    FinishSetup: { screen: FinishSetup },
    // Register: { screen: RiderRegister },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

const AuthStackMain = createAppContainer(
  createStackNavigator(
    {
      Home: { screen: Home },
    },
    {
      headerMode: 'none',
    }
  )
);
const DrawerNavigator = createAppContainer(
   createDrawerNavigator(
     {
      Home: { screen: Home },
         Dashboard: { screen: Dashboard },
      },
      {
         initialRouteName: 'Dashboard',
         contentComponent: CustomDrawer, // Pass here
         drawerOpenRoute: 'DrawerOpen',
         drawerCloseRoute: 'DrawerClose',
         drawerToggleRoute: 'DrawerToggle',
         // others props
         drawerBackgroundColor: 'rgba(255,255,255,.9)',
         overlayColor: 'rgba(0,0,0,0.5)',
         contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#6b52ae',
         },
      }
   )
);
// const HomeDrawer = createAppContainer(
//    createDrawerNavigator(
//       {
//          Home: { screen: Home },
//       },
//       {
//          initialRouteName: 'Home',
//          contentComponent: customDrawerContentComponent,
//          drawerOpenRoute: 'DrawerOpen',
//          drawerCloseRoute: 'DrawerClose',
//          drawerToggleRoute: 'DrawerToggle',
//       },
//    ),
// );
// const RiderHomeStackNav = createStackNavigator(
//    {
//       Main: { screen: RiderHomeContents },
//       pickUpLocation: { screen: RiderPickUp },
//    },
//    {
//       headerMode: 'none',
//       navigationOptions: {
//          headerVisible: false,
//       },
//    },
// );
export {
  AuthStackMain,
   AuthStackRider,
   DrawerNavigator
  // HomeDrawer
  // RiderHomeStackNav
};
