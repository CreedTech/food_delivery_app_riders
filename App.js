import React, { useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator, Text,Alert } from 'react-native';
// import messaging from '@react-native-firebase/messaging';
import { firebase } from '@react-native-firebase/app';
// import firebase from 'firebase/app';
// import 'firebase/messaging';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
// import { initializeApp } from 'firebase/app';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import axios from 'axios';
import FlashMessage from 'react-native-flash-message';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import { BASE_URL } from './src/config';
import { AuthProvider } from './src/components/context';
import { DrawerContent } from './src/components/DrawerComponent/DrawerContent';
import HomeScreen from './src/screens/HomeScreen';
import DeliveriesScreen from './src/screens/DeliveriesScreen';
import WalletScreen from './src/screens/WalletScreen';
import MyTripsScreen from './src/screens/MyTripsScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './src/components/HomeNavigator';
import AuthStack from './src/components/auth/AuthStack';
import CustomDrawer from './src/navigation/CustomDrawer';

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

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <View style={styles.drawerContent}>
//         <View style={styles.userInfoSection}>
//           <View style={{ flexDirection: 'row', marginTop: 15 }}>
//             <ListItem>
//               <Avatar
//                 size={65}
//                 rounded
//                 source={
//                   require("./src/assets/images/profile.png")
//                 }
//               />
//               <View style={{ marginLeft: 5, flexDirection: 'column' }}>
//                 <Text style={styles.title}>John Mark</Text>
//                 <Caption style={styles.caption}>#4389Rider</Caption>
//               </View>
//             </ListItem>
//           </View>
//         </View>

//         <Drawer.Section style={styles.drawerSection}>
//           <DrawerItem
//             icon={({ color, size }) => (
//               <Icon name="account" color="#000000" size={size} />
//             )}
//             labelStyle={{fontFamily: 'Poppins-Light'}}
//             label="Edit"
//             style={styles.drawerItem}
//             onPress={() => {props.navigation.navigate('EditProfileScreen')}}
//           />
//           <Divider />
//           <DrawerItem
//             icon={({ color, size }) => (
//               <Icon name="wallet" color="#000000" size={size} />
//             )}
//             labelStyle={{fontFamily: 'Poppins-Light'}}
//             label="Wallet"
//             style={styles.drawerItem}
//             onPress={() => {props.navigation.navigate('WalletScreen')}}
//           />
//           <Divider />
//           <DrawerItem
//             icon={({ color, size }) => (
//               <Icon name="car" color="#000000" size={size} />
//             )}
//             labelStyle={{fontFamily: 'Poppins-Light'}}
//             label="My Trips"
//             style={styles.drawerItem}
//             onPress={() => {props.navigation.navigate('MyTripsScreen')}}
//           />
//           <Divider />
//           <DrawerItem
//             icon={({ color, size }) => (
//               <Icon name="dialpad" color="#000000" size={size} />
//             )}
//             labelStyle={{fontFamily: 'Poppins-Light'}}
//             label="Set Password"
//             style={styles.drawerItem}
//             // onPress={() => {props.navigation.navigate('Set PassScreen')}}
//           />
//           {/* <Divider /> */}
//         </Drawer.Section>
//       </View>
//       <DrawerItemList {...props} />
//     </DrawerContentScrollView>
//   );
// }
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [toggleDrawer, setToggelDrawer] = useState(false);
  const [isLoaded] = useFonts(customFonts);
  const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  useEffect(() => {
    // Initialize Firebase
     const firebaseConfig = {
      apiKey: "AIzaSyDclQuWpobiUod_Yl-Y7MMoZsC-zs7kNVE",
      authDomain: "fudap-70850.firebaseapp.com",
      databaseURL: "https://fudap-70850-default-rtdb.firebaseio.com",
      projectId: "fudap-70850",
      storageBucket: "fudap-70850.appspot.com",
      messagingSenderId: "395946524889",
      appId: "1:395946524889:web:31d42edf07f89a5f7a7ec8"
    };

    // initializeApp(firebaseConfig);

    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }

    // Get the device's FCM token
    const messaging = firebase.messaging();

    const getFCMToken = async () => {
      try {
        const settings = await Notifications.getPermissionsAsync();
        if (settings.granted) {
          const token = await messaging.getToken();
          console.log('FCM token:', token);
        } else {
          const { status } = await Notifications.requestPermissionsAsync();
          if (status === 'granted') {
            const token = await messaging.getToken();
            console.log('FCM token:', token);
          }
        }
      } catch (error) {
        console.log('Error getting FCM token:', error);
      }
    };

    // Request permissions to receive FCM push notifications
    const requestPermissions = async () => {
      try {
        await Notifications.requestPermissionsAsync({
          ios: {
            allowAlert: true,
            allowBadge: true,
            allowSound: true,
            allowAnnouncements: true,
          },
        });
      } catch (error) {
        console.log('Error requesting permissions:', error);
      }
    };

    // Subscribe to FCM push notifications
    const subscribeToNotifications = async () => {
      try {
        const expoPushToken = await Notifications.getExpoPushTokenAsync();
        console.log('Expo push token:', expoPushToken.data);

        if (Platform.OS === 'android') {
          const channel = await Notifications.setNotificationChannelAsync('default', {
            name: 'Default channel',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }

        await messaging().subscribeToTopic('all');
      } catch (error) {
        console.log('Error subscribing to notifications:', error);
      }
    };

    // Call the functions to get the FCM token, request permissions and subscribe to notifications
    getFCMToken();
    requestPermissions();
    subscribeToNotifications();

    // Handle incoming FCM push notifications when the app is in the foreground
    const handleForegroundMessage = async (message) => {
      console.log('Foreground message:', message);
      Notifications.setBadgeCountAsync(1);
    };

    const unsubscribeForeground = messaging().onMessage(handleForegroundMessage);

    // Handle incoming FCM push notifications when the app is in the background or closed
    const handleBackgroundMessage = async (message) => {
      console.log('Background message:', message);
      Notifications.setBadgeCountAsync(1);
    };

    const unsubscribeBackground = Notifications.addNotificationReceivedListener(handleBackgroundMessage);

    // Clean up the subscriptions when the component unmounts
    return () => {
      unsubscribeForeground();
      unsubscribeBackground.remove();
    };
  }, []);

  // useEffect(async () => {
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyDclQuWpobiUod_Yl-Y7MMoZsC-zs7kNVE",
  //     authDomain: "fudap-70850.firebaseapp.com",
  //     databaseURL: "https://fudap-70850-default-rtdb.firebaseio.com",
  //     projectId: "fudap-70850",
  //     storageBucket: "fudap-70850.appspot.com",
  //     messagingSenderId: "395946524889",
  //     appId: "1:395946524889:web:31d42edf07f89a5f7a7ec8"
  //   };
    
  //   firebase.initializeApp(firebaseConfig);
    
  //   Notifications.setNotificationHandler({
  //     handleNotification: async () => ({
  //       shouldShowAlert: true,
  //       shouldPlaySound: true,
  //       shouldSetBadge: true,
  //     }),
  //   });
    
  //   async function registerForPushNotificationsAsync() {
  //     let token;
  //     if (Platform.OS === 'android') {
  //       const { status } = await Notifications.getPermissionsAsync();
  //       if (status !== 'granted') {
  //         const { status } = await Notifications.requestPermissionsAsync();
  //         if (status !== 'granted') {
  //           return;
  //         }
  //       }
  //       token = await Notifications.getExpoPushTokenAsync();
  //     } else {
  //       const { status: existingStatus } = await Notifications.getPermissionsAsync();
  //       let finalStatus = existingStatus;
  //       if (existingStatus !== 'granted') {
  //         const { status } = await Notifications.requestPermissionsAsync();
  //         finalStatus = status;
  //       }
  //       if (finalStatus !== 'granted') {
  //         return;
  //       }
  //       token = (await Notifications.getExpoPushTokenAsync({ ios: { requireApnsPusher: true } }))?.data;
  //     }
  //     return token;
  //   }
    
  //   async function saveTokenToDatabase(token) {
  //     // Add your code for saving the token to your database here
  //   }
    
  //   async function onMessageReceived(message) {
  //     // Add your code for handling incoming messages here
  //   }
    
  //   const messaging = firebase.messaging();
  //   messaging.onMessage(onMessageReceived);
    
  //   const token = await registerForPushNotificationsAsync();
  //   if (token) {
  //     await saveTokenToDatabase(token);
  //   }
  // }, []);

  // const requestUserPermission = async () => {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // };

  // useEffect(() => {
  //   if (requestUserPermission) {
  //     // return fcm token for device
  //     messaging()
  //       .getToken()
  //       .then((token) => {
  //         console.log('====================================');
  //         console.log(token);
  //         console.log('====================================');
  //       });
  //   } else {
  //     console.log('====================================');
  //     console.log('Failed to get device token status', authStatus);
  //     console.log('====================================');
  //   }
  //   // Check whether an initial notification is available
  //   messaging()
  //     .getInitialNotification()
  //     .then(async (remoteMessage) => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage.notification
  //         );
  //         // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
  //       }
  //       // setLoading(false);
  //     });

  //   // Assume a message-notification contains a "type" property in the data payload of the screen to open

  //   messaging().onNotificationOpenedApp(async (remoteMessage) => {
  //     console.log(
  //       'Notification caused app to open from background state:',
  //       remoteMessage.notification
  //     );
  //     // navigation.navigate(remoteMessage.data.type);
  //   });

  //   // Register background handler
  //   messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  //     console.log('Message handled in the background!', remoteMessage);
  //   });

  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // }, []);
  // const initialLoginState = {
  //   isLoading: true,
  //   userInfo: null,
  //   userToken: null,
  // };

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

  // const loginReducer = (prevState, action) => {
  //   switch (action.type) {
  //     case 'RETRIEVE_TOKEN':
  //       return {
  //         ...prevState,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case 'LOGIN':
  //       return {
  //         ...prevState,
  //         userInfo: action.id,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case 'LOGOUT':
  //       return {
  //         ...prevState,
  //         userInfo: null,
  //         userToken: null,
  //         isLoading: false,
  //       };
  //     case 'REGISTER':
  //       return {
  //         ...prevState,
  //         userInfo: action.id,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //   }
  // };

  // const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  // const authContext = React.useMemo(
  //   () => ({
  //     // signIn: async(foundUser) => {
  //     //     const userToken = String(foundUser[0].userToken);
  //     //     const userInfo = foundUser[0].userInfo;

  //     //     try {
  //     //       await AsyncStorage.setItem('userToken', userToken);
  //     //     } catch(e) {
  //     //       console.log(e);
  //     //     }
  //     //     console.log('user token: ', userToken);
  //     //     dispatch({ type: 'LOGIN', id: userInfo, token: userToken });
  //     //   },
  //     signIn: () => {
  //       setUserToken('fhdh');
  //       setIsLoading(false);
  //       // const userToken = String(foundUser[0].userToken);
  //       // const userInfo = foundUser[0].userInfo;

  //       // try {
  //       //   await AsyncStorage.setItem('userToken', userToken);
  //       // } catch(e) {
  //       //   console.log(e);
  //       // }
  //       // console.log('user token: ', userToken);
  //       // dispatch({ type: 'LOGIN', id: userInfo, token: userToken });
  //     },
  //     signOut: () => {
  //       setUserToken(null);
  //       setIsLoading(false);
  //       // try {
  //       //   await AsyncStorage.removeItem('userToken');
  //       // } catch(e) {
  //       //   console.log(e);
  //       // }
  //       // dispatch({ type: 'LOGOUT' });
  //     },
  //     signUp: () => {
  //       setUserToken('fgkj');
  //       setIsLoading(false);
  //     },
  //     toggleTheme: () => {
  //       setIsDarkTheme((isDarkTheme) => !isDarkTheme);
  //     },
  //   }),
  //   []
  // );
  // useEffect(() => {
  //   setTimeout(async () => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

  // useEffect(() => {
  //   setTimeout(async() => {
  //     // setIsLoading(false);
  //     let userToken;
  //     userToken = null;
  //     try {
  //       userToken = await AsyncStorage.getItem('userToken');
  //     } catch(e) {
  //       console.log(e);
  //     }
  //     // console.log('user token: ', userToken);
  //     dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
  //   }, 1000);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }
  // const loginReducer = (prevState, action) => {
  //   switch (action.type) {
  //     case 'RETRIEVE_TOKEN':
  //       return {
  //         ...prevState,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case 'LOGIN':
  //       return {
  //         ...prevState,
  //         userInfo: action.userInfo,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case 'LOGOUT':
  //       return {
  //         ...prevState,
  //         userInfo: null,
  //         userToken: null,
  //         isLoading: false,
  //       };
  //     case 'REGISTER':
  //       return {
  //         ...prevState,
  //         userInfo: action.userInfo,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //   }
  // };

  // const [loginState, dispatch] = React.useReducer(
  //   loginReducer,
  //   initialLoginState
  // );
  // const [userInfo, setUserInfo] = useState({});
  // const [user, setUser] = useState({});

  // const authContext = React.useMemo(
  //   () => ({
  //     signIn: async (phone, password) => {
  //       // setUserToken('fgkj');
  //       // setIsLoading(false);
  //       setIsLoading(true);
  //       axios
  //         .post(`${BASE_URL}/auth/login`, {
  //           phone,
  //           password,
  //           "userType": "VENDOR"
  //         })
  //         .then((res) => {
  //           let userInfo = res.data;
  //           console.log(userInfo);
  //           setUserInfo(userInfo);
  //           // setUserToken = 'ddhdjkdfjjkfd';
  //           AsyncStorage.setItem('userToken', JSON.stringify(userInfo.token));
  //           AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
  //           // const userToken = userInfo.token;
  //           setIsLoading(false);
  //           dispatch({ type: 'LOGIN', id: userInfo.userId, token: userInfo.token });
  //         })
  //         .catch((error) => {
  //           if (error.response) {
  //             // Request made and server responded
  //             console.log(error.response.data);
  //             console.log(error.response.status);
  //             console.log(error.response.headers);
  //           } else if (error.request) {
  //             console.log(error.request);
  //           } else {
  //             console.log('Error', error.message);
  //           }
  //           setIsLoading(false);
  //         });

  //     },
  //     signOut: async () => {
  //       userToken = null;
  //       // setIsLoading(false);
  //       try {
  //         await AsyncStorage.removeItem('userToken');
  //         console.log(userToken);
  //         dispatch({ type: 'LOGOUT' });
  //       } catch (e) {
  //         console.log(e);
  //       }

  //     },
  //     signUp: (
  //       firstName,
  //       lastName,
  //       email,
  //       password,
  //       phone,
  //       userType = 'VENDOR',
  //       {navigation}
  //     ) => {
  //       // setUserToken('fgkj');
  //       // setIsLoading(false);
  //       setIsLoading(true);
  //       axios
  //         .post(`${BASE_URL}/user/register`, {
  //           firstName,
  //           lastName,
  //           email,
  //           password,
  //           phone,
  //           userType,
  //         })
  //         .then((res) => {
  //           let userInfo = res.data;
  //           setUserInfo(userInfo);
  //           // AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
  //           // userInfo.token  = null
  //           setIsLoading(false);
  //           navigation.navigate("VerifyPhoneScreen");
  //           // navigation.navigate('VerifyPhoneScreen');
  //           console.log(userInfo);
  //         })
  //         .catch((error) => {
  //           if (error.response) {
  //             // Request made and server responded
  //             console.log(error.response.data);
  //             console.log(error.response.status);
  //             console.log(error.response.headers);
  //           } else if (error.request) {
  //             // The request was made but no response was received
  //             console.log(error.request);
  //           } else {
  //             // Something happened in setting up the request that triggered an Error
  //             console.log('Error', error.message);
  //           }
  //           // console.log(`register error ${e}`);
  //           setIsLoading(false);
  //         });
  //     },
  //     getUserData: async (id) => {
  //       axios
  //         .get(`${BASE_URL}/user/${id}`)
  //         .then((res) => {
  //           let user = res.data;
  //           console.log(user.id);
  //           setUser(user);
  //           // setUserToken = 'ddhdjkdfjjkfd';
  //           AsyncStorage.setItem('user', JSON.stringify(user));
  //           // const userToken = userInfo.token;
  //           setIsLoading(false);
  //         })
  //         .catch((error) => {
  //           if (error.response) {
  //             // Request made and server responded
  //             console.log(error.response.data);
  //             console.log(error.response.status);
  //             console.log(error.response.headers);
  //           } else if (error.request) {
  //             console.log(error.request);
  //           } else {
  //             console.log('Error', error.message);
  //           }
  //           setIsLoading(false);
  //         });
  //     }
  //     // toggleTheme: () => {
  //     //   setIsDarkTheme( isDarkTheme => !isDarkTheme );
  //     // }

  //   }),
  //   []
  // );

  // useEffect(() => {
  //   setTimeout(async () => {
  //     // setIsLoading(false);
  //     let userToken;
  //     userToken = null;
  //     try {
  //       userToken = await AsyncStorage.getItem('userToken');
  //       let userInfo = await AsyncStorage.getItem('userInfo');
  //       // console.log(userInfo.token);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     // console.log('user token: ', userToken);
  //     dispatch({ type: 'RETRIEVE_TOKEN', token: userInfo.token });
  //   }, 1000);
  // }, []);

  // if (loginState.isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }
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
          <NavigationContainer>
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
                {/* {isLoggedIn ? (
              // </Drawer.Screen>
            ) : (
              <Drawer.Screen name="Auth">
                {() => (
                  <AuthStack
                    setToken={setToken}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              </Drawer.Screen>
            )} */}

                <Drawer.Screen
                  name="EditProfileScreen"
                  component={EditProfileScreen}
                  setIsLoggedIn={setIsLoggedIn}
                />
                {/* {(screenProps) => (
                <EditProfileScreen
                  {...screenProps}
                  setIsLoggedIn={setIsLoggedIn}
                />
              )}
            </Drawer.Screen> */}
                <Drawer.Screen
                  name="WalletScreen"
                  component={WalletScreen}
                  setIsLoggedIn={setIsLoggedIn}
                />
                {/* <Drawer.Screen name="Wallet">
              {(screenProps) => <WalletScreen {...screenProps} />}
            </Drawer.Screen> */}
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
                {/* <Drawer.Screen name="MyTrips">
              {(screenProps) => <MyTripsScreen {...screenProps} />}
            </Drawer.Screen> */}

                {/* <Drawer.Screen name="SetPassword">
              {(screenProps) => (
                <EditProfileScreen
                  {...screenProps}
                  setIsLoggedIn={setIsLoggedIn}
                />
              )}
            </Drawer.Screen> */}
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

export default App;
