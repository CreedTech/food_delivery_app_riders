// // // import React from 'react';

// // // export const AuthContext = React.createContext();

// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import axios from 'axios';
// // import React, { createContext, useEffect, useState } from 'react';
// // import { BASE_URL } from '../config';
// // // import { useNavigation } from '@react-navigation/native';

// // export const AuthContext = createContext();

// // export const AuthProvider = ({ children,navigation }) => {
// //   const [userInfo, setUserInfo] = useState({});
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [splashLoading, setSplashLoading] = useState(false);
// //   const [userToken, setUserToken] = React.useState('');
// //   // const navigation = useNavigation();

// //   const register = (firstName, lastName, email, password, phone, userType= "VENDOR") => {
// //     setIsLoading(true);

// //     axios
// //       .post(`${BASE_URL}/user/register`, {
// //         firstName,
// //         lastName,
// //         email,
// //         password,
// //           phone,
// //         userType,
// //       })
// //       .then((res) => {
// //         let userInfo = res.data;
// //         setUserInfo(userInfo);
// //         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
// //         userInfo.token  = null
// //         setIsLoading(false);
// //         props.navigation.navigate('VerifyPhoneScreen');
// //         console.log(userInfo);
// //       })
// //         .catch((error) => {
// //             if (error.response) {
// //                 // Request made and server responded
// //                 console.log(error.response.data);
// //                 console.log(error.response.status);
// //                 console.log(error.response.headers);
// //               } else if (error.request) {
// //                 // The request was made but no response was received
// //                 console.log(error.request);
// //               } else {
// //                 // Something happened in setting up the request that triggered an Error
// //                 console.log('Error', error.message);
// //               }
// //         // console.log(`register error ${e}`);
// //         setIsLoading(false);
// //       });
// //   };

// //   const verifyOTP = (verification_code) => {
// //     setIsLoading(true);

// //     axios
// //       .post(`${BASE_URL}/otp/verifyOtp`, {
// //         verification_code,
// //       })
// //       .then((res) => {
// //         navigation.navigate('SignInScreen');
// //         // let userInfo = res.data;
// //         // console.log(userInfo);
// //         // setUserInfo(userInfo);
// //         // // setUserToken = 'ddhdjkdfjjkfd';
// //         // AsyncStorage.setItem('userInfo', JSON.stringify(userInfo.token));
// //         setIsLoading(false);
// //       })
// //       .catch((e) => {
// //         console.log(`login error ${e}`);
// //         setIsLoading(false);
// //       });
// //   }

// //   const login = (phone, password) => {
// //     setIsLoading(true);

// //     axios
// //       .post(`${BASE_URL}/auth/login`, {
// //         phone,
// //         password,
// //       })
// //       .then((res) => {
// //         let userInfo = res.data;
// //         console.log(userInfo);
// //         setUserInfo(userInfo);
// //         // setUserToken = 'ddhdjkdfjjkfd';
// //         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo.token));
// //         setIsLoading(false);
// //       })
// //       .catch((e) => {
// //         console.log(`login error ${e}`);
// //         setIsLoading(false);
// //       });
// //   };

// //   const logout = () => {
// //     setIsLoading(true);
// //     AsyncStorage.removeItem('userInfo');
// //     setUserInfo({});
// //     console.log(userInfo);
// //       setIsLoading(false);
// //     // axios
// //     //   .post(
// //     //     `${BASE_URL}/logout`,
// //     //     {},
// //     //     {
// //     //       headers: { Authorization: `Bearer ${userInfo.token}` },
// //     //     }
// //     //   )
// //     //   .then((res) => {
// //     //     console.log(res.data);
// //     //     AsyncStorage.removeItem('userInfo');
// //     //     setUserInfo({});
// //     //     setIsLoading(false);
// //     //   })
// //     //   .catch((e) => {
// //     //     console.log(`logout error ${e}`);
// //     //     setIsLoading(false);
// //     //   });
// //   };

// //   const isLoggedIn = async () => {
// //     try {
// //       setSplashLoading(true);

// //       let userInfo = await AsyncStorage.getItem('userInfo');
// //       userInfo = JSON.parse(userInfo);

// //       if (userInfo) {
// //         setUserInfo(userInfo);
// //         setUserToken(userToken);
// //       }

// //       setSplashLoading(false);
// //     } catch (e) {
// //       setSplashLoading(false);
// //       console.log(`is logged in error ${e}`);
// //     }
// //   };

// //   useEffect(() => {
// //     isLoggedIn();
// //   }, []);

// //   return (
// //     <AuthContext.Provider
// //       value={{
// //         isLoading,
// //         userInfo,
// //         splashLoading,
// //         register,
// //         login,
// //         logout,
// //         // userToken,
// //       }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };


// import React from 'react';

// export const AuthContext = React.createContext();

import React, { createContext, useState, useEffect } from 'react';
import config from "../config/config.json";
import * as Keychain from 'react-native-keychain';
import axios from 'axios';
import storage from '../model/storage';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
        
//       const credentials = await Keychain.getInternetCredentials('auth');
//       if (credentials) {
//         try {
//           const response = await axios.get(`${config.base_url}user`, {
//             headers: { Authorization: `Bearer ${credentials.password}` },
//           });
//           setUser(response.data);
//         } catch (error) {
//           console.log('Error fetching user', error);
//         }
//       }
//       setLoading(false);
//     };
//     fetchUser();
//   }, []);

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
      
        // axios
        // .post(`${config.base_url}auth/login`, {
        //   body: JSON.stringify(user),
        //   headers: {
        //     'content-type': 'application/json',
        //   },
        // })
        // .then( (res) => {
        //   const result = res.data;
        //   console.log('yo');
        //   console.log(result);
        //   const userData = response.data.User;
  
        //    storage.storeUser(userData);
  
        //   //Store token
        //   const phone = result.phone;
        //   console.log('yo phone');
        //   console.log(phone);
  
        //     storage.storeToken(phone);
        //     setUser(response.data.User);
        //   return {
        //     title: 'Login',
        //     message: 'Logged in Successfully',
        //     type: 'success',
        //   };
        // })
        // .catch((error) => {
        //   if (error.response) {
        //     console.log('yo1');
        //     // Request made and server responded
        //     console.log(error.response.data);
        //     console.log('yo2');
        //     console.log(error.response.status);
        //     console.log('yo3');
        //     console.log(error.response.headers);
        //     console.log('Error', error.response.data.message);
        //   } else if (error.request) {
        //     console.log('yo4');
        //     console.log(error.request);
        //   } else {
        //     console.log('yo5');
        //     console.log('Error', error.response.data.message);
        //   }
        //   return {
        //     title: error,
        //     message: error.response.data.message,
        //     type: 'danger',
        //   };
        //   // setIsLoading(false);
        // });
    // try {
    //     const response = await axios.post(`${config.base_url}auth/login`, {
    //         body: JSON.stringify(user),
    //     });
    //   const result = response.data.User;
    //     console.log(result);
    //     storage.storeUser(result);

    //     //Store token
    //     const phone = result.phone;
    //     console.log('yo phone');
    //     console.log(phone);

    //      storage.storeToken(phone);
    // //   await Keychain.setInternetCredentials('auth', phone, response.data.User.phone);
    //   setUser(response.data.User);
    //   return {
    //   title: 'Login',
    //   message: 'Logged in Successfully',
    //   type: 'success',
    // };
    // } catch (error) {
    //     if (error.response) {
    //         console.log('yo1');
    //         // Request made and server responded
    //         console.log(error.response);
            
    //         console.log('yo2');
    //         console.log(error.response.status);
    //         console.log('yo3');
    //         // console.log(error.response.headers);
    //         return {
    //             title: error.response.data,
    //             message: error.response.data.message,
    //             type: 'danger',
    //           };
    //       } else if (error.request) {
    //         // console.log('yo4');
    //         console.log(error.request);
    //     } else {
    //         console.log('yo5');
    //         console.log(error.data);
    //         console.log(error.message);
    //         return {
    //             title: error.data,
    //             message: error.data,
    //             type: 'danger',
    //           };
    //       }
          
    // //       else {
    // //         console.log('yo5');
    // //         console.log('Error', error.message);
    // //       }
    // //   console.log('Error logging in', error.response.data.message);
    // }
  };

    const register = async (user) => {
        const response = await fetch(`${config.base_url}user/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            },
        });
        setLoading(true);
        
        const result = await response.json(); 
      console.log(result);
      setLoading(false);
      if (Object.prototype.hasOwnProperty.call(result, 'error')) {
        
            console.log('yo');
            console.log(result.error);
            return {
                title: result.error,
                message: result.message.join('\n'),
                type: "danger",
            };
        }

        if (result.statusCode >= 400) {
            console.log('yo');
            console.log(result.error);
            return {
                title: result.error,
                message: result.message,
                type: "danger",
            };
        }
        setLoading(false);

        return {
            title: "Login",
            message: result.msg,
            type: "success",
        };   
        // try {
        //     const response = await fetch(`${config.base_url}user/register`, {
        //       method: 'POST',
        //       body: JSON.stringify(user),
        //       headers: {
        //         'content-type': 'application/json',
        //       },
        //     });
        //     const result = await response.json();
        //     console.log('yo');
        //     console.log(result);
        //     //   return {
        //     //     title: 'Login',
        //     //     message: 'Logged in Successfully',
        //     //     type: 'success',
        //     //   };
        //   } catch (error) {
        //     if (error.response) {
        //       console.log('yo1');
        //       // Request made and server responded
        //       console.log(error.response.data);
        //       console.log('yo2');
        //       console.log(error.response.status);
        //       console.log('yo3');
        //       console.log(error.response.headers);
        //     } else if (error.request) {
        //       console.log('yo4');
        //       console.log(error.request);
        //     } else {
        //       console.log('yo5');
        //       console.log('Error', error.message);
        //     }
        //     //   return {
        //     //     title: 'Login',
        //     //     message: error,
        //     //     type: 'danger',
        //     //   };
        //   }
    // try {
    //   const response = await axios.post(`${config.base_url}user/register`, { firstName,lastName, email, password ,phone, userType: 'VENDOR' });
    //   await Keychain.setInternetCredentials('auth', phone, response.data.User.phone);
    //   setUser(response.data.User);
    // } catch (error) {
    //     if (error.response) {
    //         // console.log('yo1');
    //         // Request made and server responded
    //         console.log('Error logging out', error.response.data.message);
    //         // console.log(error.response.data.message);
    //         // console.log('yo2');
    //         // console.log(error.response.status);
    //         // console.log('yo3');
    //         // console.log(error.response.headers);
    //       } else if (error.request) {
    //         // console.log('yo4');
    //         console.log(error.request);
    //       } 
    // //   console.log('Error registering', error);
    // }
    };
  
  const forgot_password = async (email) => {
    console.log(email);
      const response = await fetch(`${config.base_url}auth/forgot-password`, {
          method: 'POST',
          body: JSON.stringify(email),
          headers: {
              'Content-Type': 'application/json'
          },
      });
      
      const result = await response.json(); 
      console.log(result);
      setLoading(false);
      if (Object.prototype.hasOwnProperty.call(result, 'error')) {
          console.log('yo');
          console.log(result.error);
          return {
              title: result.error,
              message: result.message || result.message.join('\n'),
              type: "danger",
          };
      }
      setLoading(false);

      if (result.statusCode >= 400) {
          console.log('yo 400');
          console.log(result.error);
          return {
              title: result.error,
              message: result.message || result.message.join('\n'),
              type: "danger",
          };
      }
      setLoading(false);

      return {
          title: "Password Reset",
          message: result.message,
          type: "success",
      };  
    };
  
  const VerifyOtp = async (verification_code) => {
    console.log(verification_code);
      const response = await fetch(`${config.base_url}otp/verifyOtp`, {
          method: 'POST',
          body: JSON.stringify(verification_code),
          headers: {
              'content-type': 'application/json'
          },
      });
      
      const result = await response.json(); 
      console.log(result);
      if (Object.prototype.hasOwnProperty.call(result, 'error')) {
          console.log('yo');
          console.log(result.error);
          return {
              title: result.error,
              message: result.message.join('\n'),
              type: "danger",
          };
      }

      if (result.code >= 400) {
          console.log('yo');
          console.log(result.error);
          return {
              title: result.error,
              message: result.message,
              type: "danger",
          };
      }

      return {
          title: "Otp Verification",
          message: "Otp Verified",
          type: "success",
      };  
    };
  
    const ResendOtp = async (customer_mobile_number) => {
      const response = await fetch(`${config.base_url}otp/resendOtp`, {
          method: 'POST',
          customer_mobile_number,
          headers: {
              'content-type': 'application/json'
          },
      });
      
      const result = await response.json(); 
      console.log(result);
      if (Object.prototype.hasOwnProperty.call(result, 'error')) {
          console.log('yo');
          console.log(result.error);
          return {
              title: result.error,
              message: result.message,
              type: "danger",
          };
      }

      if (result.statusCode >= 400) {
          console.log('yo');
          console.log(result.error);
          return {
              title: result.error,
              message: result.message,
              type: "danger",
          };
      }

      return {
          title: "Otp Resend",
          message: result.msg,
          type: "success",
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
//   const deleteUser = async () => {
//     try {
//       const response = await axios.get(`${config.base_url}user/delete`);
//       // await storage.deleteToken();
//       // logout();
//         console.log(response);
//     setUser(null);
//   } catch (error) {
//     if (error.response) {
//       console.log('yo1');
//       // Request made and server responded
//       console.log(error.response.data);
//       console.log('yo2');
//       console.log(error.response.status);
//       console.log('yo3');
//       console.log(error.response.headers);
//       console.log('Error', error.response.data.message);
//     } else if (error.request) {
//       console.log('yo4');
//       console.log(error.request);
//     } else {
//       console.log('yo5');
//       console.log('Error', error.response.data.message);
//     }
//   }
// };

  return (
    <AuthContext.Provider value={{ user, loading,setLoading, login, register, logout,forgot_password,VerifyOtp,ResendOtp }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
