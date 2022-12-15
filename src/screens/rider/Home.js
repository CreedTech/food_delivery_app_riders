import React, { useState } from 'react';
import { View, AsyncStorage, Text,Button } from 'react-native';
// import HomeDrawer  from '../../navigation/index';
import { DrawerNavigator } from '../../navigation/NavigationStack';
import styles from './styles/home';
export default Home = (props) => {
   const navigationOptions = {
      header: null,
   };
   return (
      <View style={styles.container}>
         <DrawerNavigator/>
         
      </View>
   );
};
_signOutAsync = async () => {
   await AsyncStorage.clear();
   this.props.navigation.navigate('Auth');
};
