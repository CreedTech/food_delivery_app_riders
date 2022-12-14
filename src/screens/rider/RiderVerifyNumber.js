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
} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import styles from './styles/verify';
export default RiderVerifyNumber = (props) => {
  const [otp, setOtp] = useState('');
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Enter the {'\n'} verification code</Text>
        <Text style={styles.subtitle}>
          Please provide details below to login
        </Text>
      </View>
      <View style={styles.otpContainer}>
        <OTPTextInput
          inputCount={6}
          inputCellLength={1}
          tintColor={otpField.tintColor}
          ref={(e) => {}}
        />
      </View>
      <View style={styles.verifyContainer}>
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => {
            props.navigation.navigate('Home');
          }}
        >
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resendCode}>
        <Text style={styles.resendCodeText}>
          Resend Code in <Text>00:43</Text>
        </Text>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
};
const otpField = {
  tintColor: '#FD264F',
};

const goNext = (props) => {
  props.navigation.navigate('Login');
};
