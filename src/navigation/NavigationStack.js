import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import Login from '../screens/rider/Login';
import RiderLogin from '../screens/rider/RiderLogin';
import RiderVerifyNumber from '../screens/rider/RiderVerifyNumber';
import RiderRegister from '../screens/rider/RiderRegister';
import OnBoarding from '../screens/rider/OnBoarding';


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

// const AuthStackMain = createAppContainer(
//    createStackNavigator(
//       {
//          Home: { screen: RiderHome },
//          RiderScreen: { screen: RiderRegLog },
//          RiderReg: { screen: RiderRegister },
//          Login: { screen: Login },
//          RiderVerifyNum: { screen: RiderVerifyNumber },
//          RiderResetPassWord: { screen: RiderForgotPassword },
//          RiderLog: { screen: Login },
//          RiderPick: { screen: RiderPickup },
//       },
//       {
//          headerMode: 'none',
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
   // AuthStackMain,
   AuthStackRider,
   // RiderHomeStackNav
};
