import React, { useContext, useEffect, useState } from 'react';
import { View} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import FlashMessage from 'react-native-flash-message';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider} from './src/components/context';
import { DrawerContent } from './src/components/DrawerComponent/DrawerContent';
import HomeScreen from './src/screens/HomeScreen';
import DeliveriesScreen from './src/screens/DeliveriesScreen';
import WalletScreen from './src/screens/WalletScreen';
import MyTripsScreen from './src/screens/MyTripsScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/components/auth/AuthStack';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import userModel from './src/model/user';
import UserLocation from './src/components/UserLocation';

let customFonts = {
  'Poppins-Black': require('./src/assets/fonts/Poppins-Black.ttf'),
  'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
  'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
  'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
  'Poppins-Light': require('./src/assets/fonts/Poppins-Light.ttf'),
  'Poppins-Thin': require('./src/assets/fonts/Poppins-Thin.ttf'),
  'Unbounded-Regular': require('./src/assets/fonts/Unbounded-Regular.ttf'),
  'Unbounded-Bold': require('./src/assets/fonts/Unbounded-Bold.ttf'),
};



const Home = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// const LOCATION_TRACKING = 'location-tracking';

// TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
//   if (error) {
//       console.log('LOCATION_TRACKING task ERROR:', error);
//       return;
//   }
//   if (data) {
//       const { locations } = data;
//       let lat = locations[0].coords.latitude;
//       let long = locations[0].coords.longitude;

//       l1 = lat;
//       l2 = long;

//       console.log(
//           `${new Date(Date.now()).toLocaleString()}: ${lat},${long}`
//       );
//   }
// });
// const RegisterBackgroundTask = async () => {
//   try {
//     await BackgroundFetch.registerTaskAsync(LOCATION_TRACKING, {
//       minimumInterval: 5, // seconds,
//     })
//     console.log("Task registered")
//   } catch (err) {
//     console.log("Task Register failed:", err)
//   }
// }
// RegisterBackgroundTask();
//  BackgroundFetch.registerTaskAsync(LOCATION_TRACKING, {
//   minimumInterval: 60, // 1 min
//   stopOnTerminate: false,
//   startOnBoot: true,
// })
//   .then(() => alert('BackgroundFetch.registerTaskAsync success'))
//   .catch(error => console.log(error.message));

// var l1;
// var l2;
// !TODO -- RESTRUCTURE THE FILE TO SEND RIDERS LOCATION AFTER BEING LOGGED IN BUT THE TASK MANAGER AND ALL SHOULD WORK IMMEDIATELY THE APP STARTS RUNNING
// !TODO -- SEND DEVICE TOKEN TO BACKEND SO IT CAN BE USED FOR THE NOTIFICATION SERVICE

 const App = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
  //  const [locationStarted, setLocationStarted] = React.useState(false);
  const [token, setToken] = useState(null);
  const [isLoaded] = useFonts(customFonts);
  const [isLoading, setIsLoading] = React.useState(true);
  // const [location, setLocation] = React.useState(null);
  const [deviceToken, setDeviceToken] = React.useState(null);
  //  const [driverId, setDriverId] = React.useState(null);
  //  const [userInfo, setUserInfo] = useState('');
  // const [userToken, setUserToken] = React.useState(null);
   
  // const { UpdateRiderLocation } = useContext(AuthContext);

   const [isDarkTheme, setIsDarkTheme] = React.useState(false);

   async function AssignDeviceToken() {
  const storedDeviceToken = await AsyncStorage.getItem('deviceToken');
  console.log("Device Token from setState");
  console.log(deviceToken);
  console.log("Device Token from Async Storage");
  console.log(storedDeviceToken);
  const result = await userModel.assignDeviceToken(storedDeviceToken);
    
  console.log(result);
  console.log("Device Token Received");

};
   const requestUserPermission = async () => {
  };

  useEffect(() => {
    if (requestUserPermission) {
      // return fcm token for device
      messaging()
        .getToken()
        .then((token) => {
          console.log('====================================');
          console.log(token);
          AsyncStorage.setItem('deviceToken', JSON.stringify(token));
          setDeviceToken(token);
          AssignDeviceToken();
          console.log('====================================');
        });
      
    } else {
      console.log('====================================');
      console.log('Failed to get device token status', authStatus);
      console.log('====================================');
    }
    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification
          );
          // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        // setLoading(false);
      });

    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(async (remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification
      );
      // navigation.navigate(remoteMessage.data.type);
    });

    // Register background handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;


    
  }, []);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      // ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('./src/assets/fonts/Poppins-Black.ttf'),
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Light': require('./src/assets/fonts/Poppins-Light.ttf'),
    'Poppins-Thin': require('./src/assets/fonts/Poppins-Thin.ttf'),
    'Unbounded-Regular': require('./src/assets/fonts/Unbounded-Regular.ttf'),
    'Unbounded-Bold': require('./src/assets/fonts/Unbounded-Bold.ttf'),
  });

   

  if (!fontsLoaded) {
    return null;
  }
   


  return (
    // <PaperProvider theme={theme} style={{ fontFamily: 'Poppins-Black' }}>
    //   <Providers />
    // </PaperProvider>
    <PaperProvider theme={theme}>
      <AuthProvider>
        <View style={{ flex: 1 }}>
        <UserLocation />
          <NavigationContainer
        //     linking={{
        // config: {
        //   // Configuration for linking
        // },
        // async getInitialURL() {
        //   // First, you may want to do the default deep link handling
        //   // Check if app was opened from a deep link
        //   const url = await Linking.getInitialURL();

        //   if (url != null) {
        //     return url;
        //   }

        //   // Handle URL from expo push notifications
        //   const response = await Notifications.getLastNotificationResponseAsync();
                         
        //   return response?.notification.request.content.data.url;
        // },
        // subscribe(listener) {
        //   const onReceiveURL = ({ url }) => listener(url);

        //   // Listen to incoming links from deep linking
        //   Linking.addEventListener('url', onReceiveURL);

        //   // Listen to expo push notifications
        //   const subscription = Notifications.addNotificationResponseReceivedListener(response => {
        //     const url = response.notification.request.content.data.url;

        //     // Any custom logic to see whether the URL needs to be handled
        //     //...

        //     // Let React Navigation handle the URL
        //     listener(url);
        //   });

        //   return () => {
        //     // Clean up the event listeners
        //     Linking.removeEventListener('url', onReceiveURL);
        //     subscription.remove();
        //   };
        // },
        //     }}
          >
            {/* {isLoggedIn ? (
            <Home.Screen name="HomeScreen">
            {(screenProps) => <HomeStack {...screenProps} token={token} />}
          </Home.Screen>
              //  <HomeStack  token={token} />
            ) : (
              <AuthStack
                    setToken={setToken}
                    setIsLoggedIn={setIsLoggedIn}
                  />
            )} */}
            {isLoggedIn ? (
              <Drawer.Navigator
                screenOptions={{
                  headerShown: false,
                  headerStyle: {
                    backgroundColor: '#009387',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
                drawerContent={(props) => (
                  <DrawerContent {...props} setIsLoggedIn={setIsLoggedIn} />
                )}
              >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen
                  name="EditProfileScreen"
                  component={EditProfileScreen}
                  setIsLoggedIn={setIsLoggedIn}
                />
                <Drawer.Screen
                  name="WalletScreen"
                  component={WalletScreen}
                  setIsLoggedIn={setIsLoggedIn}
                />
                <Drawer.Screen
                  name="MyTripsScreen"
                  component={MyTripsScreen}
                  setIsLoggedIn={setIsLoggedIn}
                />
                <Drawer.Screen
                  name="DeliveriesScreen"
                  component={DeliveriesScreen}
                  setIsLoggedIn={setIsLoggedIn}
                />
              </Drawer.Navigator>
            ) : (
              <AuthStack setToken={setToken} setIsLoggedIn={setIsLoggedIn} />
            )}
          </NavigationContainer>

          <FlashMessage position={'top'} />
        </View>
      </AuthProvider>
    </PaperProvider>
  );
 };





//  const startLocationTracking = async () => {
//   await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
//       accuracy: Location.Accuracy.Highest,
//       timeInterval: 1000,
//       distanceInterval: 0,
//   });
//   await Location.hasStartedLocationUpdatesAsync(
//       LOCATION_TRACKING
//   );
//   // setLocationStarted(hasStarted);
//   // console.log('tracking started?', hasStarted);
//  };

// function myTask() {
//   try {
//     // fetch data here...
//     const backendData = "Simulated fetch " + Math.random();
//     console.log("myTask() ", backendData);
//     setStateFn(backendData);
//     return backendData
//       ? BackgroundFetch.Result.NewData
//       : BackgroundFetch.Result.NoData;
//   } catch (err) {
//     return BackgroundFetch.Result.Failed;
//   }
// }
// async function initBackgroundFetch(taskName,
//                                    taskFn,
//                                    interval = 60 * 15) {
//   try {
//     if (!TaskManager.isTaskDefined(taskName)) {
//       TaskManager.defineTask(taskName, taskFn);
//     }
//     const options = {
//       minimumInterval: interval // in seconds
//     };
//   await BackgroundFetch.registerTaskAsync(taskName, options);
//   } catch (err) {
//     console.log("registerTaskAsync() failed:", err);
//   }
// }
// initBackgroundFetch('myTaskName', myTask, 5);

// TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
//   if (error) {
//       console.log('LOCATION_TRACKING task ERROR:', error);
//       return;
//   }
//   if (data) {
//       const { locations } = data;
//       let lat = locations[0].coords.latitude;
//       let long = locations[0].coords.longitude;

//       l1 = lat;
//       l2 = long;

//       console.log(
//           `${new Date(Date.now()).toLocaleString()}: ${lat},${long}`
//       );
//   }
// });

// TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
//   if (error) {
//       console.log('LOCATION_TRACKING task ERROR:', error);
//       return;
//   }
//   if (data) {
//       const { locations } = data;
//       let lat = locations[0].coords.latitude;
//       let long = locations[0].coords.longitude;

//       l1 = lat;
//     l2 = long;

//       console.log(
//           `${new Date(Date.now()).toLocaleString()}: ${lat},${long}`
//       );
//   }
// });
 

export default App;
