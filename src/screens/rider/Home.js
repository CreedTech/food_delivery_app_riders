import React, { useState } from 'react';
import { View, AsyncStorage, Text,Button,TouchableOpacity } from 'react-native';
// import HomeDrawer  from '../../navigation/index';
import { DrawerNavigator } from '../../navigation/NavigationStack';
import { DrawerActions } from '@react-navigation/native';
import styles from './styles/home';
export default Home = (props) => {
   const navigationOptions = {
      header: null,
   };
   return (
      <View style={styles.container}>
         <DrawerNavigator/>
         {/* <Button onPress={() => navigation.openDrawer()}>Click</Button> */}
         <TouchableOpacity
              onPress={() => {
               props.navigation.toggleDrawer();
              }}
            >
              <Text style={{ fontWeight: '600', color: '#FD264F', textAlign:'center',marginBottom:200 }}>
                Register
              </Text>
            </TouchableOpacity>
      </View>
   );
};
_signOutAsync = async () => {
   await AsyncStorage.clear();
   this.props.navigation.navigate('Auth');
};
