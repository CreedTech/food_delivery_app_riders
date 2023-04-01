import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Keyboard,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import Spinner from 'react-native-loading-spinner-overlay';
import FlashMessage from 'react-native-flash-message';
import { showMessage, hideMessage } from 'react-native-flash-message';
import * as EmailValidator from 'email-validator';
import { FancyAlert } from 'react-native-expo-fancy-alerts';

import { useTheme } from 'react-native-paper';

import { AuthContext } from '../components/context';


// import Users from '../model/users';


function checkEmail(email) {
  return EmailValidator.validate(email);
}


const ForgotPasswordScreen = ({ navigation, setIsLoggedIn }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  // const [password, setPassword] = useState(null);
  // const [phone, setPhone] = useState(null);
  const [data, setData] = React.useState({
    email: '',
    check_emailInputChange: false,
  });
  const [visible, setVisible] = React.useState(false);
  const toggleAlert = React.useCallback(() => {
    setVisible(!visible);
  }, [visible]);
  const {forgot_password, loading, setLoading } =
    useContext(AuthContext);

  useEffect(() => {
    setLoading(false);
  }, []);

  async function resetPassword() {
    const passwordMail = {
      email: data.email,
    };
    Keyboard.dismiss();
    setLoading(true);
    // Check if email is valid
    if (!checkEmail(data.email)) {
      showMessage({
        message: 'Invalid email',
        type: 'danger',
        position: 'bottom',
      });
    } else {
      const passwordReset = await forgot_password(passwordMail);
    if (passwordReset['type'] === 'danger') {
      console.log('yo1');
      console.log(passwordReset['message']);
      showMessage({
        message: passwordReset['message'],
        type: 'danger',
        position: 'bottom',
      });
    } else {
      console.log(passwordReset['message']);
      setLoading(false);
      showMessage({
        message: passwordReset['message'],
        type: 'success',
        position: 'bottom',
      });
      toggleAlert();
      // const timeout = setTimeout(() => {
      //   toggleAlert();
        
      // }, 3000);
      // return () => clearTimeout(timeout);
      // navigation.navigate("VerifyPhoneScreen");
    }
    }
  }

  const { colors } = useTheme();

  const emailInputChange = (val) => {
    if (checkEmail(val)) {
      setData({
        ...data,
        email: val,
        check_emailInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_emailInputChange: false,
      });
    }
  };





  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar style="auto" />
      <Spinner visible={loading} />
      <View style={{ paddingTop: 50, paddingHorizontal: 30 }}>
        <View style={{ paddingTop: 100, marginVertical: 20 }}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>
            No worries, we'll send you reset instructions.
          </Text>
        </View>
        {/* <TouchableOpacity onPress={toggleAlert}>
        <Text>Tap me</Text>
      </TouchableOpacity> */}

        <View style={{ marginVertical: 20 }}>
          <View style={styles.mobileContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={data.email}
              placeholderStyle={{ fontSize: 40, color: 'red' }}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              selectionColor="#FD264F"
              onChangeText={(text) => emailInputChange(text)}
            />
          {data.check_emailInputChange ? (
              <Animatable.View animation="bounceIn" style={{ alignSelf:'center', alignContent:'center', alignItems:'center'}}>
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <View style={styles.loginContainer}>
            <TouchableOpacity
              style={styles.LoginButton}
              onPress={resetPassword}
              disabled={!data.email}
            >
              <Text style={styles.loginText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.noAccount}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignInScreen');
              }}
            >
              <Text
                style={{
                  fontWeight: '600',
                  color: '#FD264F',
                  fontSize: 16,
                  alignSelf: 'center',
                  textAlign: 'center',
                }}
              >
                <Feather
                  name="chevron-left"
                  color="#FD264F"
                  size={20}
                  style={styles.backIcon}
                  onPress={() => navigation.goBack()}
                />
                Back to login
              </Text>
            </TouchableOpacity>
          </View>

          {/* <ActivityIndicator size="large" /> */}
        </View>
      </View>
      <FlashMessage position={'top'} />
      <FancyAlert
        visible={visible}
        icon={<View style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#4CB748',
          borderRadius: 50,
          width: '100%',
        }}><Text style={{color:'ffffff'}}>👍🏻</Text></View>}
        style={{ backgroundColor: 'white' }}
      >
        <View style={styles.content}>
        <Text style={styles.contentText}>Reset Link Sent Successfully!!</Text>
        <TouchableOpacity onPress={() => {
              navigation.navigate('SignInScreen');
            }} style={styles.btn}>
            <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}
            >
            <Text style={styles.btnText}>OK</Text>
        </TouchableOpacity>
      </TouchableOpacity>
        </View>
      </FancyAlert>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '20%',
    paddingVertical: 20,
  },
  backIcon: {
    marginTop: 67,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#303030',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ABABB4',
  },
  textInputMobile: {
    alignSelf: 'stretch',
    width: '65%',
    paddingHorizontal: 11,
    paddingVertical: 10,
    color: '#000000',
    backgroundColor: 'transparent',
  },
  countrCode: {
    width: '30%',
  },
  input: {
    alignSelf: 'stretch',
    paddingHorizontal: 11,
    paddingVertical: 10,
    width: '95%',
    color: '#000000',
    backgroundColor: 'transparent',
  },
  LoginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FD264F',
    width: '100%',
    height: 56,
    marginTop: 30,
    borderRadius: 8,
  },
  forgotPass: {
    paddingTop: 14,
    alignSelf: 'flex-end',
  },
  passwordForgotten: {
    color: '#FD264F',
    fontSize: 14,
    fontWeight: '600',
  },
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
  },
  loginText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 18,
  },
  loginContainer: {
    width: '100%',
    paddingVertical: 5,
  },
  noAccount: {
    paddingTop: 14,
    alignSelf: 'center',
    fontSize: 26,
  },
  noAccountText: {
    color: '#FD264F',
    fontSize: 16,
  },
  eyeIcon: {
    marginTop: 5,
  },
  mobileContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 27,
    paddingVertical: 7,
    marginTop: 40,
    backgroundColor: '#F2F2F4',
    borderRadius: 15,
  },
  headerContainer: {
    width: '100%',
    height: '10%',
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  headerText: {
    fontSize: 17,
    color: 'grey',
  },
  errorMsg: {
    color: 'red',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -16,
    marginBottom: 16,
  },
  contentText: {
    textAlign: 'center',
  },
  btn: {
    borderRadius: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 14,
    alignSelf: 'stretch',
    backgroundColor: '#4CB748',
    marginTop: 16,
    minWidth: '50%',
    paddingHorizontal: 16,
    // marginBottom:15,
  },
  btnText: {
    color: '#FFFFFF',
  },
});
