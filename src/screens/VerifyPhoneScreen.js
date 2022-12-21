import React from 'react';
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
  ScrollView
} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';

const VerifyPhoneScreen = ({ navigation }) => {
  return (
    <ScrollView behavior="padding" style={styles.wrapper}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Enter the {'\n'}verification code</Text>
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
              navigation.navigate('SignInScreen');
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
    </ScrollView>
  );
};
const otpField = {
  tintColor: '#FD264F',
};

export default VerifyPhoneScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: '20%',
    paddingVertical: 150,
    paddingHorizontal: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    // lineHeight: '34px',
    // letterSpacing: '-0.01px',
    color: '#303030',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    // lineHeight: '24px',
    // letterSpacing: '-0.01px',
    color: '#ABABB4',
  },
  otpContainer: {
    flex: 1,
    paddingHorizontal: 70,
    alignContent: 'center',
    paddingLeft: 100,
    paddingRight: 100,
    // marginBottom:70,
    // width:'70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  verifyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FD264F',
    width: '100%',
    height: 56,
    marginTop: 15,
    borderRadius: 8,
  },
  resendCode: {
    paddingTop: 14,
    alignSelf: 'center',
  },
  resendCodeText: {
    color: '#FE8CA2',
    fontSize: 16,
    // lineHeight:'18px',
  },
  verifyText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  headerContainer: {
    width: '100%',
    height: '10%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  headerText: {
    fontSize: 17,
    color: 'grey',
  },
  otpInputs: {
    tintColor: '#FD264F',
  },
});
