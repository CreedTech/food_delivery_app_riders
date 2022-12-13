import React, { useState } from 'react';
import { View, AsyncStorage, Text } from 'react-native';
// import HomeDrawer  from '../../navigation/index';
import styles from './styles/home';
export default Home = () => {
   const navigationOptions = {
      header: null,
   };
   return (
      <View style={styles.container}>
           {/* <HomeDrawer /> */}
           <Text>Welcome To My World</Text>
      </View>
   );
};
_signOutAsync = async () => {
   await AsyncStorage.clear();
   this.props.navigation.navigate('Auth');
};
