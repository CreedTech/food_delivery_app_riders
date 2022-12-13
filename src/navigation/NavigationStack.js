import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import customDrawerContentComponent from '../components/DrawerComponent/riderDrawerContainer';
// import Login from '../screens/rider/Login';
import RiderLogin from '../screens/rider/RiderLogin';
import RiderVerifyNumber from '../screens/rider/RiderVerifyNumber';
import RiderRegister from '../screens/rider/RiderRegister';
import OnBoarding from '../screens/rider/OnBoarding';
import Home from '../screens/rider/Home';
import FinishSetup from '../screens/rider/FinishSetup';


const AuthStackRider = createStackNavigator({
   OnBoarding: {screen: OnBoarding},
   Login: { screen: RiderLogin },
   Verify: { screen: RiderVerifyNumber },
   Register: { screen: RiderRegister },
   // Register: { screen: RiderRegister },
},
   {
      headerMode: 'none',
      navigationOptions: {
         headerVisible: false,
      },
   },
);

const AuthStackMain = createAppContainer(
   createStackNavigator(
      {
         FinishSetup: {screen: FinishSetup},
         Home: { screen: Home },
      },
      {
         headerMode: 'none',
      },
   ),
);
const HomeDrawer = createAppContainer(
   createDrawerNavigator(
      {
         Home: { screen: Home },
      },
      {
         initialRouteName: 'Home',
         contentComponent: customDrawerContentComponent,
         drawerOpenRoute: 'DrawerOpen',
         drawerCloseRoute: 'DrawerClose',
         drawerToggleRoute: 'DrawerToggle',
      },
   ),
);
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
   HomeDrawer
   // RiderHomeStackNav
};
