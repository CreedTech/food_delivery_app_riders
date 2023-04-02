import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { format } from 'date-fns';
import { useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { Appbar } from 'react-native-paper';
import axios from 'axios';
import { BASE_URL } from '../config';

const MyTripsScreen = ({ navigation }) => {
  const [rides, setRides] = useState([]);
  const theme = useTheme();
  useEffect(() => {
    async function getUser() {
      console.log('Yes');
      handleAxiosRequest();
    }
    getUser();
    console.log('Yesoooo');
    rides.map((r) => {
      console.log(r.recipientAddress);
    });
  }, []);

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
        // console.log(`register error ${e}`);
      });
  };

  return (
    <View style={styles.wrapper}>
      <Appbar.Header style={{ paddingHorizontal: 15 }}>
        <Appbar.BackAction
          icon="close"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="My Trips" />
      </Appbar.Header>
      <View style={styles.container}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
        <View
          style={{
            marginVertical: 30,
            marginHorizontal: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F1F5F9',
              borderRadius: 50,
              paddingVertical: 5,
              paddingHorizontal: 15,
              width: '40%',
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: '400', color: '#475569' }}>
              From Date
            </Text>
            <Entypo name="calendar" size={20} color="black" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F1F5F9',
              borderRadius: 50,
              paddingVertical: 5,
              paddingHorizontal: 15,
              width: '40%',
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: '400', color: '#475569' }}>
              To Date
            </Text>
            <Entypo name="calendar" size={20} color="black" />
          </View>
          <View>
            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F1F5F9',
                borderRadius: 50,
                width: 50,
                height: 50,
              }}
            >
              <Ionicons name="md-funnel" size={20} color="black" />
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={{ flexDirection: 'column', marginHorizontal: 0 }}>
            {rides.map((r, index) => {
              var date = new Date(r.createdAt);
              var formattedDate = format(date, 'MMMM do, yyyy H:mma');
              return (
                <View style={styles.trips} key={index}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '80%',
                    }}
                  >
                    <View
                      style={{
                        borderRadius: 50,
                        // padding: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#FB7185',
                        width: 50,
                        height: 50,
                      }}
                    >
                      <Ionicons
                        name="bicycle-outline"
                        size={30}
                        color="black"
                      />
                    </View>
                    <View style={{ marginHorizontal: 15, width: '65%' }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '500',
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
                          color: '#ABABB4',
                        }}
                      >
                        {formattedDate}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <View style={{ width: '100%' }}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '400',
                          color: '#000000',
                        }}
                      >
                        #6,000
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
      </View>
    </View>
  );
};

export default MyTripsScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '5%',
    paddingHorizontal: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '800',
  },
  trips: {
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  tripsMade: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 32,
    backgroundColor: '#130102',
  },
});
