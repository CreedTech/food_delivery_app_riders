import React, { createContext, useState, useEffect } from 'react';
import config from '../config/config.json';
import * as Keychain from 'react-native-keychain';
import axios from 'axios';
import storage from '../model/storage';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (user) => {
    console.log(user);
    const response = await fetch(`${config.base_url}auth/login`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json',
      },
    });
    setLoading(true);

    const result = await response.json();
    console.log('yo');
    console.log(result);
    setLoading(false);
    if (Object.prototype.hasOwnProperty.call(result, 'error')) {
      console.log(result);
      return {
        title: result.error,
        message: result.message,
        type: 'danger',
      };
    }

    //Store userdata
    const userData = result.user;
    console.log('y1');
    console.log(userData);

    await storage.storeUser(userData);

    //Store token
    const id = result.user.userId;
    console.log(id);

    await storage.storeToken(id);
    setLoading(false);
    return {
      title: 'Login',
      message: 'Logged in Successfully',
      type: 'success',
      id: result.user.userId,
    };
  };

  const register = async (user) => {
    const response = await fetch(`${config.base_url}user/register`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json',
      },
    });
    setLoading(true);

    const result = await response.json();
    console.log(result);
    setLoading(false);
    if (Object.prototype.hasOwnProperty.call(result, 'error')) {
      console.log(result.error);
      return {
        title: result.error,
        message: result.message.join('\n'),
        type: 'danger',
      };
    }

    if (result.statusCode >= 400) {
      console.log(result.error);
      return {
        title: result.error,
        message: result.message,
        type: 'danger',
      };
    }
    setLoading(false);

    return {
      title: 'Login',
      message: result.msg,
      type: 'success',
    };
  };

  const forgot_password = async (email) => {
    console.log(email);
    const response = await fetch(`${config.base_url}auth/forgot-password`, {
      method: 'POST',
      body: JSON.stringify(email),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    console.log(result);
    setLoading(false);
    if (Object.prototype.hasOwnProperty.call(result, 'error')) {
      console.log(result.error);
      return {
        title: result.error,
        message: result.message || result.message.join('\n'),
        type: 'danger',
      };
    }
    setLoading(false);

    if (result.statusCode >= 400) {
      console.log('yo 400');
      console.log(result.error);
      return {
        title: result.error,
        message: result.message || result.message.join('\n'),
        type: 'danger',
      };
    }
    setLoading(false);

    return {
      title: 'Password Reset',
      message: result.message,
      type: 'success',
    };
  };

  const VerifyOtp = async (verification_code) => {
    console.log(verification_code);
    const response = await fetch(`${config.base_url}otp/verifyOtp`, {
      method: 'POST',
      body: JSON.stringify(verification_code),
      headers: {
        'content-type': 'application/json',
      },
    });

    const result = await response.json();
    console.log(result);
    if (Object.prototype.hasOwnProperty.call(result, 'error')) {
      console.log(result.error);
      return {
        title: result.error,
        message: result.message.join('\n'),
        type: 'danger',
      };
    }

    if (result.code >= 400) {
      console.log(result.error);
      return {
        title: result.error,
        message: result.message,
        type: 'danger',
      };
    }

    return {
      title: 'Otp Verification',
      message: 'Otp Verified',
      type: 'success',
    };
  };

  const ResendOtp = async (customer_mobile_number) => {
    const response = await fetch(`${config.base_url}otp/resendOtp`, {
      method: 'POST',
      customer_mobile_number,
      headers: {
        'content-type': 'application/json',
      },
    });

    const result = await response.json();
    console.log(result);
    if (Object.prototype.hasOwnProperty.call(result, 'error')) {
      console.log(result.error);
      return {
        title: result.error,
        message: result.message,
        type: 'danger',
      };
    }

    if (result.statusCode >= 400) {
      console.log(result.error);
      return {
        title: result.error,
        message: result.message,
        type: 'danger',
      };
    }

    return {
      title: 'Otp Resend',
      message: result.msg,
      type: 'success',
    };
  };

  const logout = async () => {
    try {
      const response = await axios.get(`${config.base_url}auth/logout`);
      await storage.deleteToken();
      // console.log(response);
      setUser(null);
    } catch (error) {
      console.log('Error logging out', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        setLoading,
        login,
        register,
        logout,
        forgot_password,
        VerifyOtp,
        ResendOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
