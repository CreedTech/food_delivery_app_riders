import React, { useState, useEffect } from 'react';
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
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
// import OTPTextInput from 'react-native-otp-textinput';

const VerifyPhoneScreen = ({ navigation }) => {
  const CELL_COUNT = 6;
  const RESEND_OTP_TIME_LIMIT = 20;

  let resendOtpTimerInterval;

  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
    RESEND_OTP_TIME_LIMIT
  );

  //to start resent otp option
  const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
      if (resendButtonDisabledTime <= 0) {
        clearInterval(resendOtpTimerInterval);
      } else {
        setResendButtonDisabledTime(resendButtonDisabledTime - 1);
      }
    }, 1000);
  };

  //on click of resend button
  const onResendOtpButtonPress = () => {
    //clear input field
    setValue("");
    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    startResendOtpTimer();

    // resend OTP Api call
    // todo
    console.log("todo: Resend OTP");
  };

  //declarations for input field
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  //start timer on screen on launch
  useEffect(() => {
    startResendOtpTimer();
    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

  return (
    <ScrollView behavior="padding" style={styles.wrapper}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Enter the {'\n'}verification code</Text>
          <Text style={styles.subtitle}>
          Enter the verification code sent to your phone
          </Text>
        </View>
        <View style={styles.otpContainer}>
        <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <View
                  onLayout={getCellOnLayoutHandler(index)}
                  key={index}
                  style={[styles.cellRoot, isFocused && styles.focusCell]}
                >
                  <Text style={styles.cellText}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
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
        {resendButtonDisabledTime > 0 ? (
          <View style={styles.resendCode}>
              <Text style={styles.resendCodeText}>
                Resend Code in <Text>{resendButtonDisabledTime}</Text>
              </Text>
            </View>
        ) : (
          <TouchableOpacity onPress={onResendOtpButtonPress}>
            <View style={styles.resendCode}>
              <Text style={styles.resendCodeText}>
                Resend Code in <Text>{resendButtonDisabledTime}</Text>
              </Text>
            </View>
          </TouchableOpacity>
        )}
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
