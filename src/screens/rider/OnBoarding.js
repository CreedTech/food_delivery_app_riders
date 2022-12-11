import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
  TouchableHighlight,
  ActivityIndicator,
  Pressable,
} from 'react-native';
// import PhoneInput from 'react-native-phone-input';
// import Toast from 'react-native-simple-toast';
import styles from './styles/onboarding';

// const image = { require('../../assets/images/onboarding.png') };

export default OnBoarding = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/onboarding.png')}
          style={styles.image}
        >
          <View style={{ flex: 1 }} />
          <View style={{ flex: 5 }} />
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column',width:180, marginLeft:205 }}>
              <Text style={{ color: 'white', textAlign: 'center', fontSize:32, fontWeight:'800', }}>
                Ride & Flex
              </Text>
              <Text style={{ color: 'white', textAlign: 'center', fontSize:18, fontWeight:'600', }}>
                Deliver food on earn Extra money
              </Text>
            </View>
          </View>
          <View style={{ backgroundColor: 'red', height: 160, flexDirection: 'row', alignItems: 'center', alignContent: 'center' }}>
          <Pressable style={styles.login} onPress={() => {
                signInAsync(props);
             }}>
        <Text style={styles.loginText}>Login</Text>
      </Pressable>
            {/* <TouchableHighlight
              style={styles.login}
              onPress={() => {
                signInAsync(props);
             }}
              underlayColor="#fff"
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight> */}
            <TouchableHighlight
              style={styles.signup}
              onPress={() => {
                signUpAsync(props);
             }}
              underlayColor="#fff"
            >
              <Text style={styles.signupText}>Register</Text>
            </TouchableHighlight>
          </View>
        </ImageBackground>

        {/* <ActivityIndicator size="large" /> */}
      </View>
    </View>
  );
};

signInAsync = props => {
   props.navigation.navigate('Login');
};
signUpAsync = props => {
   props.navigation.navigate('Register');
};
