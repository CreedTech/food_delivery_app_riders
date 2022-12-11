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
   ActivityIndicator,
} from 'react-native';
import PhoneInput from 'react-native-phone-input';
// import Toast from 'react-native-simple-toast';
// import CountryPicker from 'react-native-country-picker-modal'
import AntIcon from "react-native-vector-icons/AntDesign";
// import LeftOutlined  from '@ant-design/icons';
import styles from './styles/login';

export default RiderLogin = props => {

   return (
      <View style={styles.wrapper}>
         <View style={styles.container}>
            {/* <View style={styles.headerContainer}>
               <Text style={styles.headerText}>
                  Select your country code and provide you phone
               </Text>
               <Text style={styles.headerText}>number.Please!</Text>
            </View>
            <View style={styles.mobileContainer}>
               <PhoneInput
                  allowZeroAfterCountryCode={true}
                  style={styles.countrCode}
               />
               <TextInput
                  style={styles.textInputMobile}
                  placeholder="Phone Number"
                  keyboardType="numeric"
                  maxLength={40}
                  onChangeText={email => setEmail(email)}
                  underlineColorAndroid="#c0c0c0"
                  selectionColor="#42A5F5"
               />
            </View>
            <View style={styles.loginContainer}>
               <TouchableOpacity
                  style={styles.LoginButton}
                  onPress={() => {
                     signInAsync(props);
                  }}
               >
                  <Text style={styles.loginText}>NEXT</Text>
               </TouchableOpacity>
            </View> */}
            <TouchableOpacity>
               <AntIcon name="left" color="black" size={20} style={styles.backIcon} onPress={() => props.navigation.goBack()} />
            </TouchableOpacity>
            <View>
            <Text style={styles.title}>
                Login
              </Text>
            <Text style={styles.subtitle}>
            Please provide details below to login 
              </Text>
            </View>
            <View style={styles.mobileContainer}>
               <PhoneInput
                  allowZeroAfterCountryCode={true}
                  style={styles.countrCode}
                  initialCountry={'us'}
                  useRef='phone'
               />
               {/* <CallingCodePicker onValueChange={() => {}} /> */}
               {/* <PhoneInput/> */}
               <TextInput
                  style={styles.textInputMobile}
                  placeholder="Phone Number"
                  keyboardType="numeric"
                  maxLength={40}
                  underlineColorAndroid="#c0c0c0"
                  selectionColor="#42A5F5"
               />
            </View>
            <View style={styles.mobileContainer}>
               <TextInput
                  secureTextEntry={true}
                  style={styles.passwordInput}
                  placeholder="Password"
                  placeholderStyle={{ fontSize: "40px", color: 'red' }}
               />
               <AntIcon name="eye" color="#CDC5C7" size={30}  onPress={() => props.navigation.goBack()} />
               
            </View>
            <View style={styles.forgotPass}>
               <Text style={styles.passwordForgotten}>Forgot Password?</Text>
            </View>
            <View style={styles.loginContainer}>
               <TouchableOpacity
                  style={styles.LoginButton}
                  onPress={() => {
                     signInAsync(props);
                  }}
               >
                  <Text style={styles.loginText}>Sign in</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.noAccount}>
               <Text style={styles.noAccountText}>Don’t have an account? <Text style={{fontWeight:'600'}}>Register</Text></Text>
            </View>

            {/* <ActivityIndicator size="large" /> */}
         </View>
      </View>
   );
};

signInAsync = props => {
   props.navigation.navigate('Verify');
};
