import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';

const FinishSetupScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/FinishSetup.png')}
          style={styles.image}
        >
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
          }}
        >
          <Text style={styles.text}>
            We would be contacting you, for further details
          </Text>
          <TouchableHighlight
            style={styles.startRiding}
            onPress={() => {
              navigation.navigate('WalletScreen');
            }}
            underlayColor="#fff"
          >
            <Text style={styles.startRidingText}>Start Riding</Text>
          </TouchableHighlight>
        </View>
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
    flexDirection: 'column',
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
    width: '100 %',
    height: 56,
    marginTop: 20,
    paddingTop: 20,
    paddingHorizontal: 50,
    paddingBottom: 20,
    backgroundColor: '#FD264F',
    borderRadius: 10,
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
    paddingBottom: 20,
  },
});
