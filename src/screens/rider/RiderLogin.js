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
import AntIcon from 'react-native-vector-icons/AntDesign';
// import LeftOutlined  from '@ant-design/icons';
import styles from './styles/login';

export default RiderLogin = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity>
          <AntIcon
            name="left"
            color="black"
            size={20}
            style={styles.backIcon}
            onPress={() => props.navigation.goBack()}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>
            Please provide details below to login
          </Text>
        </View>
        <View style={styles.mobileContainer}>
          <PhoneInput
            allowZeroAfterCountryCode={true}
            style={styles.countrCode}
            initialCountry={'ng'}
            useRef="phone"
          />
          {/* <CallingCodePicker onValueChange={() => {}} /> */}
          {/* <PhoneInput/> */}
          <TextInput
            style={styles.textInputMobile}
            placeholder="Phone Number"
            keyboardType="numeric"
            maxLength={20}
            // underlineColorAndroid="#c0c0c0"
            selectionColor="#42A5F5"
          />
        </View>
        <View style={styles.mobileContainer}>
          <TextInput
            secureTextEntry={true}
            style={styles.passwordInput}
            placeholder="Password"
            placeholderStyle={{ fontSize: 40, color: 'red' }}
          />
          <AntIcon
            style={styles.eyeIcon}
            name="eye"
            color="#CDC5C7"
            size={30}
            onPress={() => props.navigation.goBack()}
          />
        </View>
        <View style={styles.forgotPass}>
          <Text style={styles.passwordForgotten}>Forgot Password?</Text>
        </View>
        <View style={styles.loginContainer}>
          <TouchableOpacity
            style={styles.LoginButton}
            onPress={() => {
              props.navigation.navigate('FinishSetup');
            }}
          >
            <Text style={styles.loginText}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.noAccount}>
          <Text style={styles.noAccountText}>
            Don’t have an account?{' '}
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Register');
              }}
            >
              <Text style={{ fontWeight: '600', color: '#FD264F' }}>
                Register
              </Text>
            </TouchableOpacity>
          </Text>
        </View>

        {/* <ActivityIndicator size="large" /> */}
      </View>
    </View>
  );
};

// signInAsync = props => {
//    props.navigation.navigate('');
// };
