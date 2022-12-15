import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';

const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    firstname: '',
    lastname: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <StatusBar backgroundColor="#ffffff" barStyle="light-content" />
        <View style={styles.container}>
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
          <View style={styles.mobileContainer}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderStyle={{ fontSize: 40 }}
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <View style={styles.mobileContainer}>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderStyle={{ fontSize: 40 }}
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <View style={styles.mobileContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderStyle={{ fontSize: 40 }}
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <View style={styles.mobileContainer}>
            <TextInput
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.passInput}
              placeholder="Enter Password"
              placeholderStyle={{ fontSize: 40 }}
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={30} />
              ) : (
                <Feather name="eye" color="grey" size={30} />
              )}
            </TouchableOpacity>
            
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
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <View style={styles.registerContainer}>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => {
                navigation.navigate('VerifyPhoneScreen');
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
      </KeyboardAvoidingView>
    </ScrollView>
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
    backgroundColor: '#fff',
    flexDirection: 'column',
    marginTop: '15%',
    paddingVertical: 30,
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
    marginBottom: 20,
    // lineHeight: '24px',
    // letterSpacing: '-0.01px',
    color: '#ABABB4',
  },
  textInputMobile: {
    alignSelf: 'stretch',
    width: '90%',
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
    width: '100%',
    color: '#000000',
  },
  passInput: {
    alignSelf: 'stretch',
    paddingHorizontal: 11,
    paddingVertical: 10,
    width: '90%',
    color: '#000000',
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
  // container: {
  //   flex: 1,
  //   backgroundColor: '#009387'
  // },
  // header: {
  //     flex: 1,
  //     justifyContent: 'flex-end',
  //     paddingHorizontal: 20,
  //     paddingBottom: 50
  // },
  // footer: {
  //     flex: Platform.OS === 'ios' ? 3 : 5,
  //     backgroundColor: '#fff',
  //     borderTopLeftRadius: 30,
  //     borderTopRightRadius: 30,
  //     paddingHorizontal: 20,
  //     paddingVertical: 30
  // },
  // text_header: {
  //     color: '#fff',
  //     fontWeight: 'bold',
  //     fontSize: 30
  // },
  // text_footer: {
  //     color: '#05375a',
  //     fontSize: 18
  // },
  // action: {
  //     flexDirection: 'row',
  //     marginTop: 10,
  //     borderBottomWidth: 1,
  //     borderBottomColor: '#f2f2f2',
  //     paddingBottom: 5
  // },
  // textInput: {
  //     flex: 1,
  //     marginTop: Platform.OS === 'ios' ? 0 : -12,
  //     paddingLeft: 10,
  //     color: '#05375a',
  // },
  // button: {
  //     alignItems: 'center',
  //     marginTop: 50
  // },
  // signIn: {
  //     width: '100%',
  //     height: 50,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     borderRadius: 10
  // },
  // textSign: {
  //     fontSize: 18,
  //     fontWeight: 'bold'
  // },
  // textPrivate: {
  //     flexDirection: 'row',
  //     flexWrap: 'wrap',
  //     marginTop: 20
  // },
  // color_textPrivate: {
  //     color: 'grey'
  // }
});
