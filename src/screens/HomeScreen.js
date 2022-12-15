import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import SvgComponent from '../components/SvgComponent';

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
        <View style={styles.header}>
          <View style={{ flexDirection: 'row' }}>
            <Avatar.Image
              style={{ color: '#E3E3E3', backgroundColor: '#E3E3E3' }}
              source={require('../assets/images/profile.png')}
              size={72}
            />
            <View style={styles.user}>
              <Title style={styles.title}>John Mark</Title>
            </View>
          </View>
          <TouchableOpacity>
            {/* <SvgComponent /> */}
            <Icon
              name="ios-menu"
              size={35}
              onPress={() => navigation.openDrawer()}
            ></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.overview}>
          <View style={styles.boardContainer}>
            <View style={styles.board}>
              <Text style={{ color: '#ffffff' }}>Earning Today</Text>
              <Text style={{ color: '#ffffff' }}>Total Trips Today</Text>
            </View>
            <View style={[styles.board, styles.tripsMade]}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 32,
                  fontWeight: '900',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                N7,000
              </Text>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 32,
                  fontWeight: '900',
                  alignItems: 'center',
                  textAlign: 'center',
                  paddingRight: 30,
                }}
              >
                7
              </Text>
            </View>
          </View>
          <View style={{ marginVertical: 50 }}>
            <Text style={{ fontSize: 14, fontWeight: '900' }}>
              Recent Trips
            </Text>
          </View>
          <ScrollView>
            <View style={{ flexDirection: 'column' }}>
              {/* <View style={{ paddingBottom: 30 }}>
              <Text>Recent Trips</Text>
            </View> */}
              <View style={styles.trips}>
                <View>
                  <Avatar.Image
                    style={{ color: '#E3E3E3', backgroundColor: '#E3E3E3' }}
                    source={require('../assets/images/profile.png')}
                    size={50}
                  />
                </View>
                <View>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      26 Okotie samson close...
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '400' }}>
                      13 Nov, 13:06
                    </Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      N600
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
              <View style={styles.trips}>
                <View>
                  <Avatar.Image
                    style={{ color: '#E3E3E3', backgroundColor: '#E3E3E3' }}
                    source={require('../assets/images/profile.png')}
                    size={50}
                  />
                </View>
                <View>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      26 Okotie samson close...
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '400' }}>
                      13 Nov, 13:06
                    </Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      N600
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
              <View style={styles.trips}>
                <View>
                  <Avatar.Image
                    style={{ color: '#E3E3E3', backgroundColor: '#E3E3E3' }}
                    source={require('../assets/images/profile.png')}
                    size={50}
                  />
                </View>
                <View>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      26 Okotie samson close...
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '400' }}>
                      13 Nov, 13:06
                    </Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      N600
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
            </View>
          </ScrollView>
        </View>
        {/* <Text style={{ color: colors.text }}>Home Screen</Text>
        <Button
          title="Go to details screen"
          onPress={() => navigation.navigate('Details')}
        /> */}
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
    // backgroundColor: '#fff',
    flexDirection: 'column',
    // alignItems: 'flex-end',
    marginTop: '20%',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  header: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backIcon: {
    // marginBottom: 57,
  },
  user: {
    margin: 15,
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '800',
  },
  overview: {
    marginVertical: 50,
    marginHorizontal: 30,
    justifyContent: 'space-around',
  },
  boardContainer: {
    padding: 30,
    alignContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
    color: '#ffffff',
    justifyContent: 'space-between',
    backgroundColor: '#200202',
    borderRadius: 12,
    // paddingVertical:50,
  },
  board: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
});
