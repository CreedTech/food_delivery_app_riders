// import React from 'react';

// export const AuthContext = React.createContext();

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { BASE_URL } from '../config';
// import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext();

export const AuthProvider = ({ children,navigation }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [userToken, setUserToken] = React.useState('');
  // const navigation = useNavigation();

  const register = (firstName, lastName, email, password, phone, userType= "VENDOR") => {
    setIsLoading(true);

    axios
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
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        userInfo.token  = null
        setIsLoading(false);
        props.navigation.navigate('VerifyPhoneScreen');
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

  const verifyOTP = (verification_code) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/otp/verifyOtp`, {
        verification_code,
      })
      .then((res) => {
        navigation.navigate('SignInScreen');
        // let userInfo = res.data;
        // console.log(userInfo);
        // setUserInfo(userInfo);
        // // setUserToken = 'ddhdjkdfjjkfd';
        // AsyncStorage.setItem('userInfo', JSON.stringify(userInfo.token));
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  }

  const login = (phone, password) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/auth/login`, {
        phone,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        // setUserToken = 'ddhdjkdfjjkfd';
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo.token));
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);
    AsyncStorage.removeItem('userInfo');
      setUserInfo({});
      setIsLoading(false);
    // axios
    //   .post(
    //     `${BASE_URL}/logout`,
    //     {},
    //     {
    //       headers: { Authorization: `Bearer ${userInfo.token}` },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     AsyncStorage.removeItem('userInfo');
    //     setUserInfo({});
    //     setIsLoading(false);
    //   })
    //   .catch((e) => {
    //     console.log(`logout error ${e}`);
    //     setIsLoading(false);
    //   });
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
        setUserToken(userToken);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        register,
        login,
        logout,
        // userToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
