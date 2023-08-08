import config from '../config/config.json';
import storage from './storage';
import axios from 'axios';

const userModel = {
  getUserData: async function getUserData(userData) {
    const user = userData['userData'];

    const response = await fetch(`${config.base_url}user/${user.userId}`, {
      method: 'GET',
    });

    const result = await response.json();

    return result;
  },

  getBalance: async function getBalance() {
    const userData = await storage.readUser();
    const user = await userModel.getUserData(userData);

    const response = await fetch(`${config.base_url}wallet/balance`, {
      method: 'GET',
    });

    const result = await response.json();

    return result;
  },

  requestRide: async function requestRide() {
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
  },
  getRides: async function getRides() {
    const response = await fetch(`${config.base_url}request-ride`, {
      method: 'GET',
    });

    const result = await response.json();

    return result.rows;
  },
  updateRiderLocation: async function UpdateRiderLocation({
    driverLocation,
    driverId,
  }) {
    console.log('riderInfo');
    console.log({ driverLocation, driverId });
    axios
      .post(`${config.base_url}location/update-rider-location`, {
        location: driverLocation,
        driverId: driverId,
      })
      .then((res) => {
        let result = res.data;
        console.log('result');
        console.log(result);
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
  },

  assignDeviceToken: async function AssignDeviceToken(deviceToken) {
    console.log(deviceToken);
    axios
      .post(`${config.base_url}user/assign-device-token`, {
        deviceToken,
      })
      .then((res) => {
        let result = res.data;
        console.log('result');
        console.log(result);
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
  },

  getProfile: async function getProfile() {
    const response = await fetch(`${config.base_url}user/profile`, {
      method: 'GET',
    });

    const user = await response.json();
    console.log('User');
    console.log(user);

    return user;
  },
  getLocation: async function getLocation() {
    const userLocation = await storage.readLocation();

    return userLocation;
  },

  updateUser: async function updateUser(userData) {
    const token = await storage.readToken();
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
};

export default userModel;
