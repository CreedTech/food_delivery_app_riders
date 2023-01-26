import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import PhoneInput from 'react-native-phone-input';
// import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';

import { AuthContext } from '../components/context';

import Users from '../model/users';

const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    phone_number: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { colors } = useTheme();

  const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        phone_number: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        phone_number: val,
        check_textInputChange: false,
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

  const handleValidUser = (val) => {
    if (val.trim().length >= 10) {
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
  const loginHandle = () => {
    signIn();
    // signIn();
  };

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
    <View style={styles.wrapper}>
      <StatusBar backgroundColor="#ffffff" barStyle="light-content" />
      <View style={styles.container}>
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
            underlineColorAndroid="transparent"
            selectionColor="#FD264F"
            // onChangeText={(val) => textInputChange(val)}
            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {/* {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn" style={{ alignSelf:'center', alignContent:'center', alignItems:'center'}}>
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null} */}
        </View>
        {/* {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Invalid Phone Number</Text>
          </Animatable.View>
        )} */}
        <View style={styles.mobileContainer}>
          <TextInput
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.passwordInput}
            placeholder="Password"
            placeholderStyle={{ fontSize: 40, color: 'red' }}
            autoCapitalize="none"
            selectionColor="#FD264F"
            // onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}  style={{ alignSelf:'center', alignContent:'center', alignItems:'center'}}>
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
        <View style={styles.forgotPass}>
          <TouchableOpacity>
            <Text style={styles.passwordForgotten}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginContainer}>
          <TouchableOpacity
            style={styles.LoginButton}
            // onPress={() => {
            //   signIn();
            // }}
            onPress={() => navigation.navigate('FinishSetupScreen')}
          >
            <Text style={styles.loginText}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.noAccount}>
          <Text style={styles.noAccountText}>
            Don’t have an account?{' '}
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpScreen')}
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
    //   <View style={styles.container}>
    //       <StatusBar backgroundColor='#009387' barStyle="light-content"/>
    //     <View style={styles.header}>
    //         <Text style={styles.text_header}>Welcome!</Text>
    //     </View>
    //     <Animatable.View
    //         animation="fadeInUpBig"
    //         style={[styles.footer, {
    //             backgroundColor: colors.background
    //         }]}
    //     >
    //         <Text style={[styles.text_footer, {
    //             color: colors.text
    //         }]}>phone_number</Text>
    //         <View style={styles.action}>
    //             <FontAwesome
    //                 name="user-o"
    //                 color={colors.text}
    //                 size={20}
    //             />
    //             <TextInput
    //                 placeholder="Your phone_number"
    //                 placeholderTextColor="#666666"
    //                 style={[styles.textInput, {
    //                     color: colors.text
    //                 }]}
    //                 autoCapitalize="none"
    //                 onChangeText={(val) => textInputChange(val)}
    //                 onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
    //             />
    //             {data.check_textInputChange ?
    //             <Animatable.View
    //                 animation="bounceIn"
    //             >
    //                 <Feather
    //                     name="check-circle"
    //                     color="green"
    //                     size={20}
    //                 />
    //             </Animatable.View>
    //             : null}
    //         </View>
    //         { data.isValidUser ? null :
    //         <Animatable.View animation="fadeInLeft" duration={500}>
    //         <Text style={styles.errorMsg}>phone_number must be 4 characters long.</Text>
    //         </Animatable.View>
    //         }

    //         <Text style={[styles.text_footer, {
    //             color: colors.text,
    //             marginTop: 35
    //         }]}>Password</Text>
    //         <View style={styles.action}>
    //             <Feather
    //                 name="lock"
    //                 color={colors.text}
    //                 size={20}
    //             />
    //             <TextInput
    //                 placeholder="Your Password"
    //                 placeholderTextColor="#666666"
    //                 secureTextEntry={data.secureTextEntry ? true : false}
    //                 style={[styles.textInput, {
    //                     color: colors.text
    //                 }]}
    //                 autoCapitalize="none"
    //                 onChangeText={(val) => handlePasswordChange(val)}
    //             />
    //             <TouchableOpacity
    //                 onPress={updateSecureTextEntry}
    //             >
    //                 {data.secureTextEntry ?
    //                 <Feather
    //                     name="eye-off"
    //                     color="grey"
    //                     size={20}
    //                 />
    //                 :
    //                 <Feather
    //                     name="eye"
    //                     color="grey"
    //                     size={20}
    //                 />
    //                 }
    //             </TouchableOpacity>
    //         </View>
    //         { data.isValidPassword ? null :
    //         <Animatable.View animation="fadeInLeft" duration={500}>
    //         <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
    //         </Animatable.View>
    //         }

    //         <TouchableOpacity>
    //             <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
    //         </TouchableOpacity>
    //         <View style={styles.button}>
    //             <TouchableOpacity
    //                 style={styles.signIn}
    //                 onPress={() => {loginHandle( data.phone_number, data.password )}}
    //             >
    //                 <Text style={[styles.textSign, {
    //                     color:'#fff'
    //                 }]}>Sign In</Text>
    //             </TouchableOpacity>

    //             <TouchableOpacity
    //                 onPress={() => navigation.navigate('SignUpScreen')}
    //                 style={[styles.signIn, {
    //                     borderColor: '#009387',
    //                     borderWidth: 1,
    //                     marginTop: 15
    //                 }]}
    //             >
    //                 <Text style={[styles.textSign, {
    //                     color: '#009387'
    //                 }]}>Sign Up</Text>
    //             </TouchableOpacity>
    //         </View>
    //     </Animatable.View>
    //   </View>
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
});
