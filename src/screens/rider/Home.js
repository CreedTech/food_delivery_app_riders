import React, { useState } from 'react';
import { View, AsyncStorage, Text,Button } from 'react-native';
// import HomeDrawer  from '../../navigation/index';
import styles from './styles/home';
export default Home = (props) => {
   const navigationOptions = {
      header: null,
   };
   return (
      <View style={styles.container}>
         {/* <HomeDrawer /> */}
         {/* <Button title="Open drawer" onPress={() => props.navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => props.navigation.toggleDrawer()} /> */}
         <Text>Welcome To My World</Text>
         
      </View>
   );
};
_signOutAsync = async () => {
   await AsyncStorage.clear();
   this.props.navigation.navigate('Auth');
};
