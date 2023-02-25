import config from '../config/config.json';
import * as EmailValidator from 'email-validator';
import storage from './storage';
import axios from 'axios';

const authModel = {
  register: async function register(user) {
    try {
      const response = await fetch(`${config.base_url}user/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json',
        },
      });
      const result = await response.json();
      console.log('yo');
      console.log(result);
      //   return {
      //     title: 'Login',
      //     message: 'Logged in Successfully',
      //     type: 'success',
      //   };
    } catch (error) {
      if (error.response) {
        console.log('yo1');
        // Request made and server responded
        console.log(error.response.data);
        console.log('yo2');
        console.log(error.response.status);
        console.log('yo3');
        console.log(error.response.headers);
      } else if (error.request) {
        console.log('yo4');
        console.log(error.request);
      } else {
        console.log('yo5');
        console.log('Error', error.message);
      }
      //   return {
      //     title: 'Login',
      //     message: error,
      //     type: 'danger',
      //   };
    }

    // const result = await response.json();
    // console.log(result);
    // if (Object.prototype.hasOwnProperty.call(result, 'error')) {
    //   return {
    //     title: result.error.title,
    //     message: result.error.detail,
    //     type: 'danger',
    //   };
    // }

    // return {
    //   title: 'Login',
    //   message: 'Logged in Successfully',
    //   type: 'success',
    // };
  },

  login: async function login(user) {
    axios
      .post(`${config.base_url}auth/login`, {
        body: JSON.stringify(user),
        // headers: {
        //   'content-type': 'application/json',
        // },
      })
      .then( (res) => {
        const result = res.data;
        console.log('yo');
        console.log(result);
        const userData = result['user'];

         storage.storeUser(userData);

        //Store token
        const token = result['token'];
        console.log('yo token');
        console.log(token);

         storage.storeToken(token);
        return {
          title: 'Login',
          message: 'Logged in Successfully',
          type: 'success',
        };
      })
      .catch((error) => {
        if (error.response) {
          console.log('yo1');
          // Request made and server responded
          console.log(error.response.data);
          console.log('yo2');
          console.log(error.response.status);
          console.log('yo3');
          console.log(error.response.headers);
          console.log('Error', error.response.data.message);
        } else if (error.request) {
          console.log('yo4');
          console.log(error.request);
        } else {
          console.log('yo5');
          console.log('Error', error.response.data.message);
        }
        return {
          title: error,
          message: error.response.data.message,
          type: 'danger',
        };
        // setIsLoading(false);
      });
    // try {
    //   const response = await fetch(`${config.base_url}auth/login`, {
    //     method: 'POST',
    //     body: JSON.stringify(user),
    //     headers: {
    //       'content-type': 'application/json',
    //     },
    //   });
    //   const result = await response.json();
    //   console.log('yo');
    //   console.log(result);
    //   //Store userdata
    //   const userData = result['user'];

    //   await storage.storeUser(userData);

    //   //Store token
    //   const token = result['token'];
    //   console.log('yo token');
    //   console.log(token);

    //   await storage.storeToken(token);
    //   return {
    //     title: 'Login',
    //     message: 'Logged in Successfully',
    //     type: 'success',
    //   };
    // } catch (error) {
    //   if (error.response) {
    //     console.log('yo1');
    //     // Request made and server responded
    //     console.log(error.response.data);
    //     console.log('yo2');
    //     console.log(error.statusCode);
    //     console.log('yo3');
    //     console.log(error.response.headers);
    //   } else if (error.request) {
    //     console.log('yo4');
    //     console.log(error.request);
    //   } else {
    //     console.log('yo5');
    //     console.log('Error', error.message);
    //   }
    //   return {
    //     title: 'Login',
    //     message: error,
    //     type: 'danger',
    //   };
    // }
    // const response = await fetch(`${config.base_url}auth/login`, {
    //   method: 'POST',
    //   body: JSON.stringify(user),
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    // });

    // const result = await response.json();
    // console.log(result);

    // if (Object.prototype.hasOwnProperty.call(result, 'error')) {
    //   console.log(result);
    //   return {
    //     title: result.error,
    //     message: result.message,
    //     type: 'danger',
    //   };
    // }

    // //Store userdata
    // const userData = result['user'];

    // await storage.storeUser(userData);

    // //Store token
    // const token = result['token'];
    // console.log(token);

    // await storage.storeToken(token);

    // return {
    //   title: 'Login',
    //   message: 'Logged in Successfully',
    //   type: 'success',
    // };
  },

  checkEmail: function checkEmail(email) {
    return EmailValidator.validate(email);
  },

  test: function test() {
    console.log('authmodel');
  },

  logout: async function logout() {
    const response = await fetch(`${config.base_url}auth/logout`, {
      method: 'GET',
      // body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json',
      },
    });

    const result = await response.json();
    console.log(result);
    await storage.deleteToken();
    if (Object.prototype.hasOwnProperty.call(result, 'errors')) {
      return {
        title: result.errors.title,
        message: result.errors.detail,
        type: 'danger',
      };
    }

    return {
      title: 'Logout',
      message: 'Logged out Successfully',
      type: 'success',
    };
  },
};

export default authModel;
