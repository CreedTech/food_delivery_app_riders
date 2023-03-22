import React,{ useContext, useEffect, useState } from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import {
  useTheme,
  Caption,
  Drawer,
  Text,
    Divider,
} from 'react-native-paper';
import userModel from '../../model/user';
import { AuthContext } from '../context';
import { Avatar, ListItem } from 'react-native-elements';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Spinner from 'react-native-loading-spinner-overlay';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export function DrawerContent({props,navigation, setIsLoggedIn}) {
  const paperTheme = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);
  const [userInfo, setUserInfo] = useState('');
    useEffect(() => {
    async function getUser() {
        const result = await userModel.getProfile();
        
      setUserInfo(result);
      setIsLoading(false);

    };
    getUser();
}, []);
  const { logout } = useContext(AuthContext);

  async function logOut() {
    await logout();
    setIsLoggedIn(false);
  };


  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Spinner visible={isLoading} />
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15,width: '50%' }}>
              <ListItem>
                <Avatar
                  size={65}
                  rounded
                  source={
                    require("../../assets/images/profile.png")
                  }
                />
                <View style={{ padding: 1, flexDirection: 'column' }}>
                  <Text style={styles.title} numberOfLines={1}>
                    {userInfo.firstName} {userInfo.lastName}
                  </Text>
                  <Caption style={styles.caption}>#4389Rider</Caption>
                </View>
              </ListItem>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account" color="#000000" size={size} />
              )}
              labelStyle={{fontFamily: 'Poppins-Light'}}
              label="Edit"
              style={styles.drawerItem}
              onPress={() => {navigation.navigate('EditProfileScreen')}}
            />
            <Divider />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="wallet" color="#000000" size={size} />
              )}
              labelStyle={{fontFamily: 'Poppins-Light'}}
              label="Wallet"
              style={styles.drawerItem}
              onPress={() => {navigation.navigate('WalletScreen')}}
            />
            <Divider />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="car" color="#000000" size={size} />
              )}
              labelStyle={{fontFamily: 'Poppins-Light'}}
              label="My Trips"
              style={styles.drawerItem}
              onPress={() => {navigation.navigate('MyTripsScreen')}}
            />
            <Divider />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="dialpad" color="#000000" size={size} />
              )}
              labelStyle={{fontFamily: 'Poppins-Light'}}
              label="Set Password"
              style={styles.drawerItem}
              // onPress={() => {navigation.navigate('Set PassScreen')}}
            />
            {/* <Divider /> */}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <TouchableOpacity
          onPress={logOut}
        >
          <Text style={{ color: '#ffffff' }}>Log out</Text>
        </TouchableOpacity>
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    width: '80%'
  },
  title: {
    fontSize: 20,
    color: '#1A1A1A',
    fontWeight: '600',
    fontFamily: 'Poppins-Medium',
  },
  caption: {
    color: '#100F0F',
    fontSize: 16,
    fontWeight: '600',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
    fontFamily: 'Poppins-Light'
  },
  drawerItem: {
    fontSize: 13,
    padding: 5,
    fontFamily: 'Poppins-Light'
  },
  drawerSection: {
    marginTop: 15,
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
    shadowColor: 'transparent',
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  bottomDrawerSection: {
    marginBottom: 20,
    margin: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    color: '#ffffff',
    width: '80%',
    borderBottomWidth: 0,
    backgroundColor: '#FD264F',
    shadowColor: 'transparent',
    shadowRadius: 0,
    fontFamily: 'Poppins-Light',
    shadowOffset: {
      height: 0,
    },
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontFamily: 'Poppins-Light'
  },
});
