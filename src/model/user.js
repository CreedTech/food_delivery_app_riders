import config from '../config/config.json';
import storage from './storage';
import axios from 'axios';
import { BASE_URL } from '../config';

const userModel = {
  getUserData: async function getUserData(userData) {
    // const token = await storage.readToken();
    const user = userData['userData'];

    const response = await fetch(`${config.base_url}user/${user.userId}`, {
      method: 'GET',
      // headers: {
      //     'x-access-token': token['token']
      // }
    });

    const result = await response.json();

    return result;
  },

  getBalance: async function getBalance() {
    const userData = await storage.readUser();
    const user = await userModel.getUserData(userData);
    // console.log('yo');
    // console.log(user.userId);

    // const userBalance = user['user']['balance'];

    // return userBalance;
    // const user = userData['userData'];

    const response = await fetch(`${config.base_url}wallet/balance`, {
      method: 'GET',
      // headers: {
      //     'x-access-token': token['token']
      // }
    });

    const result = await response.json();

    return result;
  },

  requestRide: async function requestRide() {
    // const userData = await storage.readUser();
    // const user = await userModel.getUserData(userData);
    // console.log("yo");
    // console.log(user.userId);

    // const userBalance = user['user']['balance'];

    // return userBalance;
    // const user = userData['userData'];
    // const request = {
    //   "requestType": "EXPRESS",
    //   "senderAddress": "Quarry",
    //   "senderLocationLatLng": "7.1361098,3.3250559",
    //   "senderLandMark": "Quarry",
    //   "senderName": "Test",
    //   "senderPhone": "+2348126435378",
    //   "recipientAddress": "asero",
    //   "recipientLocationLatLng": "7.145244,3.327695",
    //   "recipientLandMark": "Asero",
    //   "recipientName": "Ayoola",
    //   "recipientPhone": "+2349137104825",
    //   "packageDetails": "Food",
    //   "pickupTime": "12:00",
    //   "userId": "6462f24a-c42e-4ad0-a53d-e3592fdb93e0"
    // }
    // console.log(request);

    axios
      .post(`${config.base_url}request-ride`, {
        requestType: 'EXPRESS',
        senderAddress: 'Quarry',
        senderLocationLatLng: '7.1361098,3.3250559',
        senderLandMark: 'Quarry',
        senderName: 'Test',
        senderPhone: '+2348126435378',
        recipientAddress: 'asero',
        recipientLocationLatLng: '7.145244,3.327695',
        recipientLandMark: 'Asero',
        recipientName: 'Ayoola',
        recipientPhone: '+2349137104825',
        packageDetails: 'Food',
        pickupTime: '12:00',
        userId: '6462f24a-c42e-4ad0-a53d-e3592fdb93e0',
      })
      .then((res) => {
        let result = res.data;
        console.log('result');
        console.log(result);
        // setUserInfo(userInfo);
        // setUserToken = 'ddhdjkdfjjkfd';
        // AsyncStorage.setItem('userToken', JSON.stringify(userInfo.token));
        // AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        // const userToken = userInfo.token;
        // setIsLoading(false);
        // dispatch({ type: 'LOGIN', id: userInfo.userId, token: userInfo.token });
      })
      .catch((error) => {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });

    // const response = await fetch(`${config.base_url}request-ride`, {
    //   method: 'POST',
    //   body: JSON.stringify(
    //     request
    //   ),
    //   // headers: {
    //   //     'x-access-token': token['token']
    //   // }
    // });

    // const result = await response.json();
    // console.log("YesSS");
    // console.log(result);

    // return result;
  },
  getRides: async function getRides() {
    // const token = await storage.readToken();
    // const user = userData['userData'];

    const response = await fetch(`${config.base_url}request-ride`, {
      method: 'GET',
      // headers: {
      //     'x-access-token': token['token']
      // }
    });

    const result = await response.json();

    return result.rows;
  },

  // getHistory: async function getHistory() {
  //     const user = await storage.readUser();
  //     const userId = user['userData']['id']

  //     const token = await storage.readToken();
  //     const respone = await fetch(`${config.base_url}users/${userId}?api_key=${API_KEY}`, {
  //         method: 'GET',
  //         headers: {
  //             'x-access-token': token['token']
  //         }
  //     }
  //     );

  //     const result = await respone.json();

  //     const userData = result['user'];

  //     const userHistory = userData['history'];

  //     return userHistory;
  // },

  // addFunds: async function addFunds(prepaid) {
  //     const token = await storage.readToken();
  //     const user = await storage.readUser();
  //     const userData = await userModel.getUserData(user);

  //     const userId = userData['user']['_id'];

  //     const requestBody = {
  //         'user_id': userId,
  //         'prepaid_code': prepaid
  //     };

  //     const response = await fetch(`${config.base_url}users/addfund?api_key=${API_KEY}`, {
  //         method: 'POST',
  //         headers: {
  //             'Content-Type': 'application/json',
  //             'x-access-token': token['token']
  //         },
  //         body: JSON.stringify(requestBody)
  //     });

  //     const result = await response;

  //     return result;
  // },

  getProfile: async function getProfile() {
    const userData = await storage.readUser();
    const user = await userModel.getUserData(userData);

    return user;
  },

  updateUser: async function updateUser(userData) {
    const token = await storage.readToken();
    const userId = await storage.readUser();
    const user = await userModel.getUserData(token);

    const body = {
      userId: user.userId,
      firstName: userData['firstName'],
      lastName: userData['lastName'],
      phone: userData['phone'],
      email: userData['email'],
    };

    // Prepare body to be urlencoded
    const formBody = [];

    for (const property in body) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(body[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }

    const requestBody = formBody.join('&');

    const response = await fetch(`${config.base_url}users`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'x-access-token': token['token'],
      },
      body: requestBody,
    });

    if (response.status === 204) {
      const message = {
        message: 'Profile Changed',
      };

      return message;
    }

    const result = await response.json();

    return result;
  },

  // deleteAccount: async function deleteAccount() {
  //     const token = await storage.readToken();
  //     const user = await storage.readUser();

  //     const userId = user['userData']['id'];

  //     const body = {
  //         'user_id': userId,
  //     };

  //     const formBody = [];

  //     for (const property in body) {
  //         const encodedKey = encodeURIComponent(property);
  //         const encodedValue = encodeURIComponent(body[property]);
  //             formBody.push(encodedKey + "=" + encodedValue);
  //     };

  //     const requestBody = formBody.join("&");

  //     const response = await fetch(`${config.base_url}users`, {
  //         method: 'DELETE',
  //         headers: {
  //             'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  //             'x-access-token': token['token']
  //         },
  //         body: requestBody
  //     });

  //     if (response.status === 204) {
  //         const message = {
  //             message: 'Account deleted',
  //         };

  //         return message;
  //     };

  //     const result = await response.json();

  //     return result;
  // }
};

export default userModel;
