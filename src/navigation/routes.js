import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { AuthContext } from '../components/context';
import AppStack from './AppStack';

export default function Routes() {
    const { userInfo } = useContext(AuthContext);
    // const [initializing, setInitializing] = useState(true);

  //   const onAuthStateChanged = (user) => {
  //     setUser(user);
  //     if (initializing) setInitializing(false);
  //   };

  //   useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; 
  // }, []);

  // if (initializing) return null;

  return (
    <NavigationContainer>
      {userInfo.token === null ? <AuthStack /> : <AuthStack />}
    </NavigationContainer>

    );
  }



// export const routes = {
//     ONBOARDING: 'OnboardingScreen',
//     SPLASH: 'SplashScreen',
//     LOGIN: 'LoginScreen',
//     REGISTER: 'RegisterScreen',
//     OTPSCREEN: 'VerifyPhoneScreen',
//     FINISH: 'FinishSetupScreen',
//     HOMETAB: 'HomeTabScreen',
//     PROFILETAB: 'ProfieTabScreen',
//     FAVORITES: 'FavoritesTabScreen',
//     BASKETTAB: 'BasketTabScreen',
//     RESTAURANT: 'RestaurantTabScreen',
//     HOME: 'HomeStackScreen',
//     DETAIL: 'DetailStackScreen',
//     BASKET: 'BasketStackScreen',
//     CHECKOUT: 'CheckoutStackScreen',
//     DELIVERY: 'DeliveyStackScreen',
//     PROFILE: 'ProfileStackScreen',
//     RESTAURANTDETAIL: 'RestaurantDetailStackScreen',
//   };