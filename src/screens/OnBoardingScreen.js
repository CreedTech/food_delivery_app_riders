import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const OnBoardingScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/onboarding.png')}
          style={styles.image}
        >
          <View style={{ flex: 1 }} />
          <View style={{ flex: 5 }} />
          <View style={{ flex: 1.5 }}>
            <View
              style={{ flexDirection: 'column', width: 180, marginLeft: 205 }}
            >
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 32,
                  fontWeight: '800',
                }}
              >
                Ride & Flex
              </Text>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: '600',
                }}
              >
                Deliver food and earn Extra money
              </Text>
            </View>
          </View>
          <Animatable.View
            animation="fadeInUpBig"
            style={{
              backgroundColor: 'red',
              height: 160,
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center',
            }}
          >
            <TouchableOpacity
              style={styles.login}
              onPress={() => {
                navigation.navigate('SignInScreen');
              }}
              underlayColor="#fff"
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signup}
              onPress={() => {
                navigation.navigate('SignUpBase');
              }}
              underlayColor="#fff"
            >
              <Text style={styles.signupText}>Register</Text>
            </TouchableOpacity>
          </Animatable.View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const { height } = Dimensions.get('screen');
const height_logo = height;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    backgroundColor: '#000000a0',
    fontFamily: 'Poppins-Black',
  },
  login: {
    width: 146,
    height: 56,
    marginLeft: 40,
    paddingTop: 18,
    paddingBottom: 15,
    backgroundColor: '#FFE6EA',
    borderRadius: 10,
    borderColor: '#FFE6EA',
  },
  loginText: {
    color: '#000000',
    textAlign: 'center',
  },
  signup: {
    width: 146,
    height: 56,
    marginLeft: 30,
    paddingTop: 18,
    paddingBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFE6EA',
  },
  signupText: {
    color: '#fff',
    textAlign: 'center',
  },
});
