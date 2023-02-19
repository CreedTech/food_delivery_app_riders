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
import { AuthContext } from '../components/context';
// import { CachedImage } from 'react-native-cached-image';

const FinishSetupScreen = ({ navigation }) => {
    const { login } = React.useContext(AuthContext);

    return (
        <View style={styles.wrapper}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/FinishSetup.png')}
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
                  fontSize: 48,
                  fontWeight: '800',
                }}
              >
                John
              </Text>
            </View>
          </View>
        </ImageBackground>
          <View
            style={{
              backgroundColor: 'white',
              height: 200,
              flexDirection: 'column',
              alignItems: 'center',
              alignContent: 'center',
            padding: 20,
              // paddingBottom:50,
            }}
          >
            <Text style={styles.text}>
              We would be contacting you, for further details
            </Text>
            <TouchableHighlight
              style={styles.startRiding}
              onPress={() => {
              // signIn();
              navigation.navigate('WalletScreen');
            }}
              underlayColor="#fff"
            >
              <Text style={styles.startRidingText}>Start Riding</Text>
            </TouchableHighlight>
          </View>

        {/* <ActivityIndicator size="large" /> */}
      </View>
    </View>
    );
};


export default FinishSetupScreen;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:'column',
        // marginTop: '20%',
        // paddingVertical: 20,
        // paddingHorizontal: 60,
        },
        innerContainer: {
            flex: 1,
            marginTop: '10%',
        paddingVertical: 63,
        paddingHorizontal: 20,
        },
      image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
      startRiding: {
        // marginRight: 10,
          width: '100 %',
        height: 56,
        // marginLeft: 40,
        marginTop: 20,
          paddingTop: 20,
        paddingHorizontal:50,
        paddingBottom: 20,
        backgroundColor: '#FD264F',
        borderRadius: 10,
        // borderWidth: 1,
        // borderColor: '#ffffff',
      },
      startRidingText: {
        color: '#ffffff',
        textAlign: 'center',
      },
      text: {
        fontSize: 14,
        color: '#6C6969',
        fontWeight: '600',
        alignItems: 'center',
        width: 189,
        alignContent: 'center',
        textAlign: 'center',
        paddingBottom:20,
      },
  });