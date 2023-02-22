import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import authModel from '../model/auth';
import axios from 'axios';
import { BASE_URL } from '../config';
import FlashMessage from 'react-native-flash-message';
import { showMessage, hideMessage } from "react-native-flash-message";
import PhoneInput from 'react-native-phone-input';
// import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
// import { AuthContext } from '../components/context';
import Spinner from 'react-native-loading-spinner-overlay';

function checkEmail(email) {
  return authModel.checkEmail(email);
}

// function checkAlert() {
//   showMessage({
//       message: 'You must agree to terms to register',
//       type: 'danger',
//       position: 'bottom'
//   });
// };

const SignUpScreen = ({ setToken, navigation, setIsLoggedIn }) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone_number: '',
    check_textInputChange: false,
    check_numberInputChange: false,
    check_emailInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  async function createUser() {
    // Check if email is valid
    if (!checkEmail(email)) {
      showMessage({
        message: 'Invalid email',
        type: 'danger',
        position: 'bottom',
      });
    } else {
      // Prepare user object
      const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        userType: 'VENDOR',
      };

      // Register user
      const result = await authModel.register(user);

      // Check if registration successful
      if (result['type'] === 'success') {
        logIn();
      }

      showMessage({
        message: result['title'],
        description: result['message'],
        type: result['type'],
        position: 'bottom',
      });
    }
  }

  async function logIn() {
    const userLogin = {
      phone: phone,
      password: password,
    };

    const loginUser = await authModel.login(userLogin);
    if (Object.prototype.hasOwnProperty.call(loginUser, 'errors')) {
      showMessage({
        message: loginUser['errors']['title'],
        type: 'danger',
        position: 'bottom',
      });
    } else {
      setToken(loginUser['token']);
      setIsLoggedIn(true);
    }
  }

  // const {signUp} = useContext(AuthContext);

  const numberInputChange = (val) => {
    if (val.length > 10) {
      setData({
        ...data,
        phone_number: val,
        check_numberInputChange: true,
      });
    } else {
      setData({
        ...data,
        phone_number: val,
        check_numberInputChange: false,
      });
    }
  };

  const emailInputChange = (val) => {
    if (val.length > 5) {
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

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
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

  const handleAxiosRequest = async (
    firstName,
    lastName,
    email,
    password,
    phone,
    userType = 'VENDOR'
  ) => {
    // setUserToken('fgkj');
    // setIsLoading(false);
    setIsLoading(true);
    await axios
      .post(`${BASE_URL}/user/register`, {
        firstName,
        lastName,
        email,
        password,
        phone,
        userType,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        setIsLoading(false);
        navigation.navigate('VerifyPhoneScreen');
        console.log(userInfo);
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

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 30 }}
    >
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="25">
        {/* <StatusBar backgroundColor="#ffffff" barStyle="light-content" /> */}
        <TouchableOpacity>
          <AntIcon
            name="left"
            color="black"
            size={20}
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.subtitle}>
            Please provide details below to register
          </Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Spinner visible={isLoading} />
          <View style={styles.mobileContainer}>
            <TextInput
              style={styles.input}
              value={firstName}
              placeholder="First Name"
              placeholderStyle={{ fontSize: 40 }}
              underlineColorAndroid="transparent"
              selectionColor="#FD264F"
              onChangeText={(text) => setFirstName(text)}
            />
          </View>
          <View style={styles.mobileContainer}>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              selectionColor="#FD264F"
              underlineColorAndroid="transparent"
              placeholderStyle={{ fontSize: 40 }}
              onChangeText={(text) => setLastName(text)}
            />
          </View>
          <View style={styles.mobileContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              underlineColorAndroid="transparent"
              selectionColor="#FD264F"
              placeholderStyle={{ fontSize: 40 }}
              onChangeText={(text) => setEmail(text)}
            />
            {/* {data.check_emailInputChange ? (
              <Animatable.View animation="bounceIn" style={{ alignSelf:'center', alignContent:'center', alignItems:'center'}}>
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null} */}
          </View>
          <View style={styles.mobileContainer}>
            <TextInput
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.passInput}
              value={password}
              keyboardType="numbers-and-punctuation"
              placeholder="Enter Password"
              underlineColorAndroid="transparent"
              selectionColor="#FD264F"
              placeholderStyle={{ fontSize: 40 }}
              onChangeText={(val) => setPassword(val)}
            />
            <TouchableOpacity
              onPress={updateSecureTextEntry}
              style={{
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={25} />
              ) : (
                <Feather name="eye" color="grey" size={25} />
              )}
            </TouchableOpacity>
          </View>
          {/* {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )} */}
          <View style={styles.mobileContainer}>
            {/* <PhoneInput
              allowZeroAfterCountryCode={true}
              style={styles.countrCode}
              initialCountry={'ng'}
              useRef="phone"
            /> */}
            {/* <CallingCodePicker onValueChange={() => {}} /> */}
            {/* <PhoneInput/> */}
            <TextInput
              style={styles.textInputMobile}
              placeholder="Phone Number"
              value={phone}
              keyboardType="numeric"
              maxLength={20}
              underlineColorAndroid="transparent"
              selectionColor="#FD264F"
              onChangeText={(val) => setPhone(val)}
            />
            {/* {data.check_numberInputChange ? (
              <Animatable.View animation="bounceIn" style={{ alignSelf:'center', alignContent:'center', alignItems:'center'}}>
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null} */}
          </View>
          <View style={styles.registerContainer}>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={createUser}
            >
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.noAccount}>
            <Text style={styles.noAccountText}>
              Already have an account?{' '}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignInScreen');
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
        <FlashMessage position={'top'} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // flexDirection: 'column',
    // marginTop: '15%',
    // paddingTop: 20,
    // paddingHorizontal: 40,
  },
  backIcon: {
    marginBottom: 37,
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
    marginBottom: 20,
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
  passInput: {
    alignSelf: 'stretch',
    paddingHorizontal: 11,
    paddingVertical: 10,
    width: '95%',
    color: '#000000',
    backgroundColor: 'transparent',
  },
  eyeIcon: {
    marginTop: 5,
  },
  registerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FD264F',
    width: '100%',
    height: 56,
    marginTop: 20,
    borderRadius: 8,
  },
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
  },
  registerText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 18,
    // lineHeight: '18px',
  },
  registerContainer: {
    width: '100%',
    // paddingHorizontal: 10,
    paddingVertical: 5,
  },
  noAccount: {
    paddingTop: 10,
    alignSelf: 'center',
    marginBottom: 105,
  },
  noAccountText: {
    color: '#FD264F',
    fontSize: 16,
    // lineHeight:'18px',
  },
  mobileContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 27,
    paddingVertical: 7,
    marginTop: 30,
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
});
