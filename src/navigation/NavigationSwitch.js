import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { AuthStackRider,AuthStackMain } from './NavigationStack';
import AuthLoadingScreen from '../screens/main/AuthLoadingScreen';
import Drawer from '../components/DrawerComponent/Drawer';
// import RiderLogin from '../screens/rider/RiderLogin';

export default switchNavigator = createAppContainer(
   createSwitchNavigator(
      {
         AuthLoading: AuthLoadingScreen,
         Main: AuthStackMain,
         OnBoard: AuthStackRider,
         // Drawer: Drawer,
         // Drawer: HomeDrawer
      },
      {
         initialRouteName: 'AuthLoading',
      },
   ),
);
