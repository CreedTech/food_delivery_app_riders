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
  ScrollView,
} from 'react-native';
import PhoneInput from 'react-native-phone-input';
// import Toast from 'react-native-simple-toast';
// import CountryPicker from 'react-native-country-picker-modal'
import AntIcon from 'react-native-vector-icons/AntDesign';
// import LeftOutlined  from '@ant-design/icons';
import styles from './styles/register';

export default RiderRegister = (props) => {
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
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
            <Text style={styles.title}>Register</Text>
            <Text style={styles.subtitle}>
              Please provide details below to register
            </Text>
          </View>
          <View style={styles.mobileContainer}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderStyle={{ fontSize: 40, color: 'red' }}
            />
          </View>
          <View style={styles.mobileContainer}>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderStyle={{ fontSize: 40, color: 'red' }}
            />
          </View>
          <View style={styles.mobileContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderStyle={{ fontSize: 40, color: 'red' }}
            />
          </View>
          <View style={styles.mobileContainer}>
            <TextInput
              secureTextEntry={true}
              style={styles.passInput}
              placeholder="Enter Password"
              placeholderStyle={{ fontSize: 40, color: 'red' }}
            />
            <AntIcon
              style={styles.eyeIcon}
              name="eye"
              color="#CDC5C7"
              theme="outlined"
              size={30}
              onPress={() => props.navigation.goBack()}
            />
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
              selectionColor="#42A5F5"
            />
          </View>
          <View style={styles.registerContainer}>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => {
                props.navigation.navigate('Verify');
              }}
            >
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.noAccount}>
            <Text style={styles.noAccountText}>
              Already have an account?{' '}
              <TouchableOpacity
                
                onPress={() => {
                  props.navigation.navigate('Login');
                }}
              >
                <Text style={{ fontWeight: '600', color: '#FD264F' }}>
                  Sign in
                </Text>
              </TouchableOpacity>
            </Text>
          </View>

          {/* <ActivityIndicator size="large" /> */}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

// signInAsync = props => {
//    props.navigation.navigate('Verify');
// };
