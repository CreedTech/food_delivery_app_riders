import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import { AuthContext } from './context';
import RootStackScreen from '../screens/RootStackScreen';
import { DrawerContent } from '../components/DrawerComponent/DrawerContent';
import HomeScreen from '../screens/HomeScreen';
import DeliveriesScreen from '../screens/DeliveriesScreen';
import WalletScreen from '../screens/WalletScreen';
import MyTripsScreen from '../screens/MyTripsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';


const Drawer = createDrawerNavigator();

const Navigation = () => {
  
  const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);


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

  const {userInfo, splashLoading} = useContext(AuthContext);


  return (

        <NavigationContainer theme={theme}>
          {userInfo.token != null ? (
            <Drawer.Navigator
              screenOptions={{
                headerShown:false,
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
              <Drawer.Screen
                name="HomeScreen"
                component={HomeScreen}
               
              />
              <Drawer.Screen
                name="DeliveriesScreen"
                component={DeliveriesScreen}
               
              />
              <Drawer.Screen
                name="WalletScreen"
                component={WalletScreen}
               
              />
              <Drawer.Screen
                name="MyTripsScreen"
                component={MyTripsScreen}
               
              />
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
  );
};

export default Navigation;
