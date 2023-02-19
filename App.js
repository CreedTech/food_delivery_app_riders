import React, { useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createDrawerNavigator } from '@react-navigation/drawer';
import axios from 'axios';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import { BASE_URL } from './src/config';
// import { AuthProvider } from './src/components/context';
// import Navigation from './src/components/Navigation';
// import Providers from './src/navigation';
// import {useNavigation} from '@react-navigation/native';
import { AuthContext } from './src/components/context';
import RootStackScreen from './src/screens/RootStackScreen';
import { DrawerContent } from './src/components/DrawerComponent/DrawerContent';
import HomeScreen from './src/screens/HomeScreen';
import DeliveriesScreen from './src/screens/DeliveriesScreen';
import WalletScreen from './src/screens/WalletScreen';
import MyTripsScreen from './src/screens/MyTripsScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();
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
const App = () => {
  const [isLoaded] = useFonts(customFonts);
  const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);
  // const navigation = useNavigation();

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userInfo: null,
    userToken: null,
  };

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
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userInfo: action.userInfo,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userInfo: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userInfo: action.userInfo,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useState({});

  const authContext = React.useMemo(
    () => ({
      signIn: async (phone, password) => {
        // setUserToken('fgkj');
        // setIsLoading(false);
        setIsLoading(true);
        axios
          .post(`${BASE_URL}/auth/login`, {
            phone,
            password,
            "userType": "VENDOR"
          })
          .then((res) => {
            let userInfo = res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            // setUserToken = 'ddhdjkdfjjkfd';
            AsyncStorage.setItem('userToken', JSON.stringify(userInfo.token));
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            // const userToken = userInfo.token;
            setIsLoading(false);
            dispatch({ type: 'LOGIN', id: userInfo.userId, token: userInfo.token });
          })
          .catch((error) => {
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            setIsLoading(false);
          });
        
      },
      signOut: async () => {
        userToken = null;
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem('userToken');
          console.log(userToken);
          dispatch({ type: 'LOGOUT' });
        } catch (e) {
          console.log(e);
        }
        
      },
      signUp: (
        firstName,
        lastName,
        email,
        password,
        phone,
        userType = 'VENDOR',
        {navigation}
      ) => {
        // setUserToken('fgkj');
        // setIsLoading(false);
        setIsLoading(true);
        axios
          .post(`${BASE_URL}/user/register`, {
            firstName,
            lastName,
            email,
            password,
            phone,
            userType,
          })
          .then((res) => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            // AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            // userInfo.token  = null
            setIsLoading(false);
            navigation.navigate("VerifyPhoneScreen");
            // navigation.navigate('VerifyPhoneScreen');
            console.log(userInfo);
          })
          .catch((error) => {
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            // console.log(`register error ${e}`);
            setIsLoading(false);
          });
      },
      getUserData: async (id) => {
        axios
          .get(`${BASE_URL}/user/${id}`)
          .then((res) => {
            let user = res.data;
            console.log(user.id);
            setUser(user);
            // setUserToken = 'ddhdjkdfjjkfd';
            AsyncStorage.setItem('user', JSON.stringify(user));
            // const userToken = userInfo.token;
            setIsLoading(false);
          })
          .catch((error) => {
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            setIsLoading(false);
          });
      }
      // toggleTheme: () => {
      //   setIsDarkTheme( isDarkTheme => !isDarkTheme );
      // }

    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        let userInfo = await AsyncStorage.getItem('userInfo');
        // console.log(userInfo.token);
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userInfo.token });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    // <PaperProvider theme={theme} style={{ fontFamily: 'Poppins-Black' }}>
    //   <Providers />
    // </PaperProvider>
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken !== null ? (
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
              drawerContent={(props) => <DrawerContent {...props} />}
            >
              <Drawer.Screen name="HomeScreen" component={HomeScreen} />
              <Drawer.Screen
                name="DeliveriesScreen"
                component={DeliveriesScreen}
              />
              <Drawer.Screen name="WalletScreen" component={WalletScreen} />
              <Drawer.Screen name="MyTripsScreen" component={MyTripsScreen} />
              <Drawer.Screen
                name="EditProfileScreen"
                component={EditProfileScreen}
              />
              {/* <Drawer.Screen name="SupportScreen" component={SupportScreen} /> */}
              {/* <Drawer.Screen name="SettingsScreen" component={SettingsScreen} /> */}
              {/* <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} /> */}
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
