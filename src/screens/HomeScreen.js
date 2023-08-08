import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { format } from 'date-fns';
import { Avatar, Switch } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userModel from '../model/user';
import axios from 'axios';
import { BASE_URL } from '../config';

const HomeScreen = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState('');
  const [userBalance, setUserBalance] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [rides, setRides] = useState([]);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  useEffect(() => {
    async function getUser() {
      const result = await userModel.getProfile();
      const walletBalance = await userModel.getBalance();
      handleAxiosRequest();

      setUserInfo(result);
      setUserBalance(walletBalance);
    }

    getUser();
    rides.map((r) => {
      console.log(r.recipientAddress);
    });
    if (isEnabled) {
      console.log('Availability is Set to Online');
    }
    setInterval(() => {
      if (isEnabled) {
        console.log('Availability is Set to Online');
        UpdateRiderLocation();
      }
    }, 60000);
    if (!isEnabled) {
      console.log('Availability is Set to offline');
    }
    console.log('Testing again');
  }, [isEnabled]);

  async function UpdateRiderLocation() {
    const driverLocation = await AsyncStorage.getItem('locationData');
    console.log('driverLocations');
    console.log(driverLocation);

    const driverId = userInfo.userId;
    const result = await userModel.updateRiderLocation({
      driverLocation,
      driverId,
    });
  }

  const handleAxiosRequest = async () => {
    await axios
      .get(`${BASE_URL}request-ride`)
      .then((response) => {
        console.log(response.data.rows[0].recipientAddress);
        setRides(response.data.rows); //changed one
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
      });
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ flexDirection: 'row', width: '70%' }}>
            <Avatar.Image
              source={require('../assets/images/profile.png')}
              size={72}
            />
            <View style={styles.user}>
              <Text style={styles.title} numberOfLines={1}>
                {userInfo.firstName} {userInfo.lastName}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              alignContent: 'center',
              alignItems: 'center',
              width: '10%',
            }}
          >
            <Icon
              name="ios-menu"
              size={35}
              onPress={() => navigation.openDrawer()}
            ></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.overview}>
          <View style={styles.available}>
            <Text
              style={{
                color: '#000000',
                fontSize: 15,
                fontFamily: 'Poppins-Regular',
                fontWeight: '900',
              }}
            >
              Availability
            </Text>

            <Switch
              trackColor={{ false: '#000000', true: '#4C9521' }}
              thumbColor={isEnabled ? '#ffffff' : '#767577'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.boardContainer}>
            <View style={styles.board}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 10,
                  fontFamily: 'Poppins-Regular',
                }}
              >
                Earning Today
              </Text>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 8,
                  fontFamily: 'Poppins-Regular',
                }}
              >
                Total Trips Today
              </Text>
            </View>
            <View style={[styles.board, styles.tripsMade]}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 32,
                  fontWeight: '900',
                  alignItems: 'center',
                  textAlign: 'center',
                  fontFamily: 'Unbounded-Regular',
                }}
              >
                N{userBalance.balance}
              </Text>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 32,
                  fontWeight: '900',
                  alignItems: 'center',
                  textAlign: 'center',
                  paddingRight: 30,
                  fontFamily: 'Unbounded-Regular',
                }}
              >
                7
              </Text>
            </View>
          </View>
          <View style={{ marginVertical: 30 }}>
            <Text style={{ fontSize: 14, fontWeight: '900' }}>
              Recent Trips
            </Text>
          </View>
          <ScrollView>
            <View style={{ flexDirection: 'column' }}>
              {rides.map((r, index) => {
                var date = new Date(r.createdAt);
                var formattedDate = format(date, 'MMMM do, yyyy H:mma');
                return (
                  <View style={styles.trips} key={index}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '80%',
                      }}
                    >
                      <View>
                        <Avatar.Image
                          style={{
                            color: '#E3E3E3',
                            backgroundColor: '#E3E3E3',
                          }}
                          source={require('../assets/images/profile.png')}
                          size={35}
                        />
                      </View>

                      <View>
                        <View style={{ marginHorizontal: 10, width: '75%' }}>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: '500',
                              fontFamily: 'Poppins-Medium',
                              width: '100%',
                            }}
                            numberOfLines={1}
                          >
                            {r.recipientAddress} - {r.senderAddress}
                          </Text>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: '400',
                              fontFamily: 'Poppins-Medium',
                            }}
                          >
                            {formattedDate}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <View style={{ width: '100%' }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '500',
                            fontFamily: 'Poppins-Medium',
                          }}
                        >
                          #600
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '400',
                            color: '#6EB088',
                          }}
                        >
                          Delivered
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
          <View style={styles.requestButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DeliveriesScreen');
              }}
            >
              <View style={styles.requestText}>
                <Text style={{ color: '#ffffff' }}>Requests</Text>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>2</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '10%',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  backIcon: {},
  user: {
    margin: 15,
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'Poppins-Bold',
  },
  overview: {
    marginVertical: 50,
    marginHorizontal: 20,
    justifyContent: 'space-around',
  },
  boardContainer: {
    padding: 20,
    alignContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
    color: '#ffffff',
    justifyContent: 'space-between',
    backgroundColor: '#200202',
    borderRadius: 12,
  },
  board: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  available: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FD929e',
    marginVertical: 20,
    padding: 10,
    borderRadius: 50,
    paddingHorizontal: 30,
    textAlign: 'center',
    alignItems: 'center',
  },
  tripsMade: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 32,
  },
  trips: {
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Black',
    width: '100%',
  },
  requestButton: {
    display: 'flex',
    justifyContent: 'center',
    margin: 20,
    padding: 20,
    borderRadius: 50,
    position: 'relative',
    bottom: '0%',
    alignItems: 'center',
    color: '#ffffff',
    width: '80%',
    borderBottomWidth: 0,
    backgroundColor: '#FD264F',
    shadowColor: 'transparent',
    fontFamily: 'Poppins-Black',
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  badge: {
    color: '#000000',
    borderRadius: 200,
    backgroundColor: '#ffffff',
    width: 20,
    height: 20,
    // padding: 5,
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    fontFamily: 'Poppins-Black',
  },
  requestText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'Poppins-Black',
  },
});
