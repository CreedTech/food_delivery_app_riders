import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '../model/storage';

const LOCATION_TRACKING = 'location-tracking';

var l1;
var l2;
var location;

function UserLocation() {

    const [locationStarted, setLocationStarted] = React.useState(false);
    // const [driverId, setDriverId] = React.useState(null);
    // const [userInfo, setUserInfo] = useState('');
    // const [locationString, setLocationString] = React.useState(null);
    const [location, setLocation] = useState(null);

    const startLocationTracking = async () => {
           await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
        accuracy: Location.Accuracy.BestForNavigation,
      timeInterval: 1000,
      foregroundService: {
        notificationTitle: "Fudap",
        notificationBody: "Location is used when App is in background",
      },
      distanceInterval: 0,
      activityType: Location.ActivityType.AutomotiveNavigation,
      showsBackgroundLocationIndicator: true,
           });
        let location = await Location.getCurrentPositionAsync({});
        console.log('====================================');
        console.log("real");
        console.log('====================================');
        let lat = location.coords.latitude;
        let long = location.coords.longitude;
        console.log('====================================');
        console.log(lat);
        console.log(long);
        console.log('====================================');
        location = [lat, long].toString();
        setLocation(location);
        const locationData = JSON.stringify(location);
        await AsyncStorage.setItem('locationData', location);
        const driverLocation = await AsyncStorage.getItem('locationData');
        console.log("driverLocation");
        console.log(driverLocation);
        console.log("location here");
        console.log(locationData);
        const hasStarted = await Location.hasStartedLocationUpdatesAsync(
            LOCATION_TRACKING
        );
        setLocationStarted(hasStarted);
        console.log('tracking started?', hasStarted);
    };

    React.useEffect(() => {
        const config = async () => {
            let resf = await Location.requestForegroundPermissionsAsync();
            let resb = await Location.requestBackgroundPermissionsAsync();
            if (resf.status != 'granted' && resb.status !== 'granted') {
                console.log('Permission to access location was denied');
            } else {
                console.log('Permission to access location granted');
            }
        };

        config();
        startLocation();
        // console.log("Location String");
        // console.log(location);
        // setLocationString(location);
        // console.log(locationString);
    }, []);

    
    const startLocation = () => {
      
        startLocationTracking();
    }

    const stopLocation = () => {
        setLocationStarted(false);
        TaskManager.isTaskRegisteredAsync(LOCATION_TRACKING)
            .then((tracking) => {
                if (tracking) {
                    Location.stopLocationUpdatesAsync(LOCATION_TRACKING);
                }
            })
    }

    return (
        <></>
    );
}

TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
    if (error) {
        console.log('LOCATION_TRACKING task ERROR:', error);
        return;
    }
    if (data) {
        const { locations } = data;
        let lat = locations[0].coords.latitude;
        let long = locations[0].coords.longitude;

        l1 = lat;
        l2 = long;
        location = [l1, l2].toString();
        // const locationData = JSON.stringify(location);
        // await AsyncStorage.setItem('locationData', locationData);
        // console.log("location here");
        // console.log(locationData);
        // const userLocation = await storage.storeLocation();
        // console.log(userLocation);
        // console.log(location.toString());

        console.log(
            `${new Date(Date.now()).toLocaleString()}: ${lat},${long}`
        );
    }
});

export default UserLocation;