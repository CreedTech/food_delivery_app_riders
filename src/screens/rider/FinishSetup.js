import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
  TouchableHighlight,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import styles from './styles/finishSetup';

export default FinishSetup = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/FinishSetup.png')}
          style={styles.image}
        >
          {/* <View style={{ flex: 1 }} /> */}
          {/* <View style={{ flex: 1 }} /> */}
          <View style={styles.innerContainer}>
            <View style={{ flexDirection: 'column', width: 180 }}>
              <Text
                style={{
                  color: '#6C6969',
                  textAlign: 'center',
                  fontSize: 14,
                  fontWeight: '600',
                }}
              >
                Welcome,
              </Text>
              <Text
                style={{
                  color: 'black',
                  textAlign: 'center',
                  fontSize: 32,
                  fontWeight: '800',
                }}
              >
                John
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 160,
              flexDirection: 'column',
              alignItems: 'center',
              alignContent: 'center',
              padding: 20,
            }}
          >
            <Text style={styles.text}>
              We would be contacting you, for further details
            </Text>
            <TouchableHighlight
              style={styles.startRiding}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
              underlayColor="#fff"
            >
              <Text style={styles.startRidingText}>Start Riding</Text>
            </TouchableHighlight>
          </View>
        </ImageBackground>

        {/* <ActivityIndicator size="large" /> */}
      </View>
    </View>
  );
};
