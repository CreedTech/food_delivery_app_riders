import React, {useState,useContext,useEffect} from 'react';
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
  Keyboard
} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import Spinner from 'react-native-loading-spinner-overlay';
import FlashMessage from 'react-native-flash-message';
import { showMessage, hideMessage } from "react-native-flash-message";

import { useTheme } from 'react-native-paper';
import authModel from '../model/auth';

import { AuthContext } from '../components/context';

// import Users from '../model/users';

const SignInScreen = ({ navigation, setIsLoggedIn }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  // const [password, setPassword] = useState(null);
  // const [phone, setPhone] = useState(null);
  const [data, setData] = React.useState({
    phone: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const { login,forgot_password ,loading,setLoading} = useContext(AuthContext);
  
  useEffect(() => {
    setLoading(false);

  }, []);
  const handleLogin = () => {
    login(data.phone, data.password);
  };

  async function logIn() {
    Keyboard.dismiss();
    setLoading(true);
    const userLogin = {
      phone: "+234" + data.phone.replace(" ","").slice(-10),
      password: data.password,
      "userType": "VENDOR",
    };

    const loginUser = await login(userLogin);
    
    if (loginUser['type'] === 'danger') {
      console.log('y2');
      console.log(loginUser['message']);
        showMessage({
            message: loginUser['message'],
            type: 'danger',
            position: 'bottom'
        })
    } else {
      console.log(loginUser['message']);
        showMessage({
            message: loginUser['message'],
            type: 'success',
            position: 'bottom'
        })
        setIsLoggedIn(true);
        
    }
};

async function resetPassword() {
  // const passwordReset = {
  //   email: email,
  //   // password: password,
  //   // "userType": "VENDOR",
  // };

  const passwordReset = await forgot_password(email);
  if (passwordReset['type'] === 'danger') {
    console.log('yo1');
    console.log(passwordReset['message']);
      showMessage({
          message: passwordReset['message'],
          type: 'danger',
          position: 'bottom'
      })
  } else {
    console.log(passwordReset['message']);
      showMessage({
          message: passwordReset['message'],
          type: 'success',
          position: 'bottom'
      })
      // navigation.navigate("VerifyPhoneScreen");
      
  }
  
  // if (passwordReset['type'] === 'danger') {
  //   console.log(passwordReset['message']);
  //     showMessage({
  //         message: passwordReset['message'],
  //         type: 'danger',
  //         position: 'bottom'
  //     })
  // } else {
  //   console.log(passwordReset['message']);
  //     showMessage({
  //         message: passwordReset['message'],
  //         type: 'success',
  //         position: 'bottom'
  //     })
  //     setIsLoggedIn(true);
      
  // }
};
  
  const { colors } = useTheme();

  // const { login, isLoading } = React.useContext(AuthContext);
  // const { signIn ,isLoading} = React.useContext(AuthContext);
  // const [loading, setLoading] = React.useState(false);

  const textInputChange = (val) => {
    if (val.trim().length >= 10 && !isNaN(+val)) {
      setData({
        ...data,
        phone: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        phone: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 10 && !isNaN(+val)) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  // const loginHandle = () => {
  //   signIn();
  //   // signIn();
  // };

  //     const loginHandle = (phone_number, password) => {
  //         const foundUser = Users.filter((item) => {
  //             return phone_number == item.phone_number && password == item.password;
  //         });
  //         console.log(foundUser);

  //     if (data.phone_number.length == 0 || data.password.length == 0) {
  //       Alert.alert(
  //         'Wrong Input!',
  //         'phone_number or password field cannot be empty.',
  //         [{ text: 'Okay' }]
  //       );
  //       return;
  //     }

  //     if (foundUser.length !== 0) {
  //       Alert.alert('Invalid User!', 'phone_number or password is incorrect.', [
  //         { text: 'Okay' },
  //       ]);
  //       return;
  //     }
  //     signIn(foundUser);
  //         // signIn();
  //   };

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar style="auto" />
      <Spinner visible={loading} />
      <View style={{ paddingTop: 50, paddingHorizontal: 30 }}>
      <TouchableOpacity>
          <Feather
            name="chevron-left"
            color="black"
            size={20}
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>
            Please provide details below to login
          </Text>
        </View>
      
      <View style={{ marginVertical: 20, marginTop: 50 }}>
        
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
              value={data.phone}
            placeholder="Phone Number"
            keyboardType="numeric"
            maxLength={20}
            underlineColorAndroid="transparent"
              selectionColor="#FD264F"
              // onChangeText={(val) => setPhone(val)}
              // onChangeText={setPhone}
            onChangeText={(val) => textInputChange(val)}
            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn" style={{ alignSelf:'center', alignContent:'center', alignItems:'center'}}>
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Invalid Phone Number</Text>
          </Animatable.View>
        )}
        <View style={styles.mobileContainer}>
          <TextInput
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.passwordInput}
              placeholder="Password"
              value={data.password}
            placeholderStyle={{ fontSize: 40, color: 'red' }}
            autoCapitalize="none"
              selectionColor="#FD264F"
              // onChangeText={(val) => setPassword(val)}
              // onChangeText={setPassword}
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}  style={{ alignSelf:'center', alignContent:'center', alignItems:'center'}}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={25} />
            ) : (
              <Feather name="eye" color="grey" size={25} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be more than or equal to 6 characters long.
            </Text>
          </Animatable.View>
        )}
        <View style={styles.forgotPass}>
            <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotPasswordScreen');
            }}
            >
            <Text style={styles.passwordForgotten}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginContainer}>
          <TouchableOpacity
            style={styles.LoginButton}
              onPress={logIn}
              disabled={!data.phone && !data.password}
            // onPress={() => navigation.navigate('FinishSetupScreen')}
          >
            <Text style={styles.loginText}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.noAccount}>
          <Text style={styles.noAccountText}>
            Don’t have an account?{' '}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUpBase');
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
      <FlashMessage position={'top'}/>
     </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    flexDirection: 'column',
    marginTop: '20%',
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  backIcon: {
    marginBottom: 67,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    // lineHeight: '34px',
    // letterSpacing: '-0.01px',
    color: '#303030',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    // lineHeight: '24px',
    // letterSpacing: '-0.01px',
    color: '#ABABB4',
  },
  textInputMobile: {
    alignSelf: 'stretch',
    width: '65%',
    paddingHorizontal: 11,
    paddingVertical: 10,
    color: '#000000',
    backgroundColor: 'transparent',
    // backgroundColor:'#c0c0c0'
  },
  countrCode: {
    width: '30%',
  },
  passwordInput: {
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
    // flex: 1,
    paddingTop: 14,
    alignSelf: 'flex-end',
  },
  passwordForgotten: {
    color: '#FD264F',
    fontSize: 14,
    fontWeight: '600',
    // lineHeight: '18px'
  },
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
  },
  loginText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 18,
    // lineHeight: '18px',
  },
  loginContainer: {
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    // flexDirection: 'row',
    width: '100%',
    // paddingHorizontal: 7,
    paddingVertical: 5,
  },
  noAccount: {
    paddingTop: 14,
    alignSelf: 'center',
  },
  noAccountText: {
    color: '#FD264F',
    fontSize: 16,
    // lineHeight:'18px',
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
    // overflow: 'hidden'
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
    color:'red'
  }
});
