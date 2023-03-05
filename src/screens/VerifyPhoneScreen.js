import React, { useState, useEffect,useContext } from 'react';
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
  ScrollView,
  SafeAreaView
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { AuthContext } from '../components/context';
import axios from 'axios';
import { BASE_URL } from '../config';
import { StatusBar } from "expo-status-bar";
import userModel from '../model/user';
import FlashMessage from 'react-native-flash-message';
import { showMessage, hideMessage } from "react-native-flash-message";
// import OTPTextInput from 'react-native-otp-textinput';

const VerifyPhoneScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userInfo, setUserInfo] = useState('');
  const CELL_COUNT = 6;
  const RESEND_OTP_TIME_LIMIT = 20;
  const [verification_code, setValue] = useState("");
  const ref = useBlurOnFulfill({ verification_code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    verification_code,
    setValue,
  });
  const { VerifyOtp } = useContext(AuthContext);

  useEffect(() => {
    async function getUser() {
        const result = await userModel.getProfile();
        
      setUserInfo(result);
      console.log(userInfo);

    };
    getUser();
}, []);

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
  

  async function handleVerifyOtp() {
    const code = {
      verification_code: verification_code
    }
    const result = await VerifyOtp(code);
    console.log(result);

      if (result['type'] === 'danger') {
        console.log('yo1');
        console.log(result['message']);
          showMessage({
              message: result['message'],
              type: 'danger',
              position: 'bottom'
          })
      } else {
        console.log(result['message']);
          showMessage({
              message: result['message'],
              type: 'success',
              position: 'bottom'
          })
          setIsLoading(false);
          navigation.navigate("FinishSetupScreen");
          // navigation.navigate("VerifyPhoneScreen");
          
      }
  }

  // const handleVerifyOtp = async (
    // verification_code
  // ) => {
  //   setIsLoading(true);
  //   await axios
  //     .post(`${BASE_URL}otp/verifyOtp`, {
  //       verification_code
  //     })
  //     .then((res) => {
  //       let otp = res.data;
  //       // setUserInfo(userInfo);
  //       setIsLoading(false);
  //       navigation.navigate("FinishSetupScreen");
  //       console.log(otp);
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         // Request made and server responded
  //         console.log(error.response.data);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       } else if (error.request) {
  //         // The request was made but no response was received
  //         console.log(error.request);
  //       } else {
  //         // Something happened in setting up the request that triggered an Error
  //         console.log('Error', error.message);
  //       }
  //       // console.log(`register error ${e}`);
  //       setIsLoading(false);
  //     });
  // };

  const handleResendOtp = async (
    customer_mobile_number
  ) => {
    setIsLoading(true);
    await axios
      .post(`${BASE_URL}otp/resendOtp`, {
        customer_mobile_number
      })
      .then((res) => {
        let opt = res.data;
        // setUserInfo(userInfo);
        setIsLoading(false);
        // navigation.navigate("FinishSetupScreen");
        console.log(opt);
      })
      .catch((error) => {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        // console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

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
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 30 }}
      >
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="25">
        <Text style={styles.title}>Enter the {'\n'}verification code</Text>
          <Text style={styles.subtitle}>
          Enter the verification code sent to your phone
          </Text>
        <View>
        <CodeField
              ref={ref}
              {...props}
              value={verification_code}
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
          <View style={styles.button}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={{
                height: 55,
                width: "100%",
                backgroundColor: '#FD264F',
                marginVertical: 20,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
              onPress={() => {
                console.log(verification_code);
              handleVerifyOtp(verification_code);
            }}
          >
            <Text style={{ color: '#fff', fontWeight: "bold", fontSize: 18 }}>Verify</Text>
          </TouchableOpacity>
           
        </View>
        {resendButtonDisabledTime > 0 ? (
          <Text style={styles.resendCodeText}>
          Resend Code in <Text>{resendButtonDisabledTime}</Text>
        </Text>
        ) : (
          <TouchableOpacity onPress={onResendOtpButtonPress}>
          <View style={styles.resendCodeContainer}>
            <Text style={styles.resendCode}> Resend Code</Text>
            <Text style={{ marginTop: 40 }}>
              {" "}
              in {resendButtonDisabledTime} sec
            </Text>
          </View>
        </TouchableOpacity>
        )}
        </KeyboardAvoidingView>
        
      </ScrollView>
      <FlashMessage position={'top'}/>
      </SafeAreaView>
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
    fontSize: 25,
    fontWeight: '900',
    // lineHeight: '34px',
    // letterSpacing: '-0.01px',
    color: '#303030',
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '400',
    marginVertical: 10,
    top: 2,
    // lineHeight: '24px',
    // letterSpacing: '-0.01px',
    color: '#ABABB4',
  },
  codeFieldRoot: {
    marginTop: 40,
    width: "90%",
    marginLeft: 20,
    marginRight: 20,
  },
  cellRoot: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  cellText: {
    color: "#000",
    fontSize: 28,
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: '#FD264F',
    borderBottomWidth: 2,
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
    marginTop: 100,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    // flexDirection: 'row',
    // width: '100%',
    // paddingHorizontal: 10,
    // paddingVertical: 5,
  },
  verifyButton: {
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#FD264F',
    // width: '100%',
    // height: 56,
    // marginTop: 15,
    // borderRadius: 8,
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
  resendCode: {
    color: '#FD264F',
    marginStart: 100,
    marginTop: 40,
    fontSize: 12,
  },
  resendCodeText: {
    marginStart: 100,
    marginTop: 40,
    color: '#FD264F',
    fontSize: 12,
    fontStyle: "normal",
  },
  resendCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
