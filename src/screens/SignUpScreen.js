import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import { AuthContext } from '../components/context';
import axios from 'axios';
import { BASE_URL } from '../config';
import FlashMessage from 'react-native-flash-message';
import { showMessage } from 'react-native-flash-message';
import PhoneInput from 'react-native-phone-input';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import * as EmailValidator from 'email-validator';
import Spinner from 'react-native-loading-spinner-overlay';

function checkEmail(email) {
  return EmailValidator.validate(email);
}

const SignUpScreen = ({ setToken, navigation }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    check_firstNameInputChange: true,
    check_lastNameInputChange: true,
    check_numberInputChange: false,
    check_emailInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    isValidPassword: true,
  });

  const { register, loading, setLoading, login } = useContext(AuthContext);

  useEffect(() => {
    setLoading(false);
  }, []);

  async function createUser() {
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
      // Prepare user object
      const user = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        phone: '+234' + data.phone.replace(' ', '').slice(-10),
        userType: 'VENDOR',
      };

      // Register user
      const result = await register(user);

      if (result['type'] === 'danger') {
        console.log('yo1');
        console.log(result['message']);
        showMessage({
          message: result['message'],
          type: 'danger',
          position: 'bottom',
        });
      } else {
        console.log(result['message']);
        showMessage({
          message: result['message'],
          type: 'success',
          position: 'bottom',
        });
        logIn();
        navigation.navigate('VerifyPhoneScreen');
      }
    }
  }

  async function logIn() {
    const userLogin = {
      phone: '+234' + data.phone.replace(' ', '').slice(-10),
      password: data.password,
      userType: 'VENDOR',
    };

    const loginUser = await login(userLogin);
    if (Object.prototype.hasOwnProperty.call(loginUser, 'errors')) {
      showMessage({
        message: loginUser['error']['title'],
        type: 'danger',
        position: 'bottom',
      });
    } else {
      console.log('id part');
      console.log(loginUser['id']);
      setToken(loginUser['id']);
    }
  }

  const firstNameInputChange = (val) => {
    if (val.trim().length >= 6 && val.trim().length <= 25) {
      setData({
        ...data,
        firstName: val,
        check_firstNameInputChange: true,
      });
    } else {
      setData({
        ...data,
        firstName: val,
        check_firstNameInputChange: false,
      });
    }
  };

  const lastNameInputChange = (val) => {
    if (val.trim().length >= 6 && val.trim().length <= 25) {
      setData({
        ...data,
        lastName: val,
        check_lastNameInputChange: true,
      });
    } else {
      setData({
        ...data,
        lastName: val,
        check_lastNameInputChange: false,
      });
    }
  };

  const numberInputChange = (val) => {
    if (val.trim().length == 10 && !isNaN(+val)) {
      setData({
        ...data,
        phone: val,
        check_numberInputChange: true,
      });
    } else {
      setData({
        ...data,
        phone: val,
        check_numberInputChange: false,
      });
    }
  };

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

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 30 }}
    >
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="25">
        <Spinner visible={loading} />
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
              value={data.firstName}
              placeholder="First Name"
              placeholderStyle={{ fontSize: 40 }}
              underlineColorAndroid="transparent"
              selectionColor="#FD264F"
              onChangeText={(text) => firstNameInputChange(text)}
            />
          </View>
          {data.check_firstNameInputChange ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                First Name must be more than 6 characters and less than 25
                characters long.
              </Text>
            </Animatable.View>
          )}
          <View style={styles.mobileContainer}>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={data.lastName}
              selectionColor="#FD264F"
              underlineColorAndroid="transparent"
              placeholderStyle={{ fontSize: 40 }}
              onChangeText={(text) => lastNameInputChange(text)}
            />
          </View>
          {data.check_lastNameInputChange ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Last Name must be more than 6 characters and less than 25
                characters long.
              </Text>
            </Animatable.View>
          )}
          <View style={styles.mobileContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={data.email}
              underlineColorAndroid="transparent"
              selectionColor="#FD264F"
              placeholderStyle={{ fontSize: 40 }}
              onChangeText={(text) => emailInputChange(text)}
            />
            {data.check_emailInputChange ? (
              <Animatable.View
                animation="bounceIn"
                style={{
                  alignSelf: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <View style={styles.mobileContainer}>
            <TextInput
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.passInput}
              value={data.password}
              keyboardType="numbers-and-punctuation"
              placeholder="Enter Password"
              underlineColorAndroid="transparent"
              selectionColor="#FD264F"
              placeholderStyle={{ fontSize: 40 }}
              onChangeText={(val) => handlePasswordChange(val)}
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
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be more than or equal to 6 characters long.
              </Text>
            </Animatable.View>
          )}
          <View style={styles.mobileContainer}>
            <PhoneInput
              allowZeroAfterCountryCode={true}
              style={styles.countrCode}
              initialCountry={'ng'}
              useRef="phone"
            />
            <TextInput
              style={styles.textInputMobile}
              placeholder="Phone Number"
              value={data.phone}
              keyboardType="numeric"
              maxLength={20}
              underlineColorAndroid="transparent"
              selectionColor="#FD264F"
              onChangeText={(val) => numberInputChange(val)}
            />
            {data.check_numberInputChange ? (
              <Animatable.View
                animation="bounceIn"
                style={{
                  alignSelf: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <View style={styles.registerContainer}>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={createUser}
              disabled={
                !data.phone &&
                !data.password &&
                !data.email &&
                !data.firstName &&
                !data.lastName
              }
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
  },
  backIcon: {
    marginBottom: 37,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#303030',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 20,
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
  },
  registerContainer: {
    width: '100%',
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
  errorMsg: {
    color: 'red',
  },
});
