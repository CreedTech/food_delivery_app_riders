import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FlashMessage from 'react-native-flash-message';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider } from './src/components/context';
import { DrawerContent } from './src/components/DrawerComponent/DrawerContent';
import HomeScreen from './src/screens/HomeScreen';
import DeliveriesScreen from './src/screens/DeliveriesScreen';
import WalletScreen from './src/screens/WalletScreen';
import MyTripsScreen from './src/screens/MyTripsScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/components/auth/AuthStack';
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

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [isLoaded] = useFonts(customFonts);
  const [deviceToken, setDeviceToken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  async function AssignDeviceToken() {
    const storedDeviceToken = await AsyncStorage.getItem('deviceToken');
    console.log('Device Token from setState');
    console.log(deviceToken);
    console.log('Device Token from Async Storage');
    console.log(storedDeviceToken);
    const result = await userModel.assignDeviceToken(storedDeviceToken);

    console.log(result);
    console.log('Device Token Received');
  }
  const requestUserPermission = async () => {};

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

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
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
    <PaperProvider theme={theme}>
      <AuthProvider>
        <View style={{ flex: 1 }}>
          <UserLocation />
          <NavigationContainer>
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

export default App;
