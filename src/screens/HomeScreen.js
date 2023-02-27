import React, {useEffect,useState} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import userModel from '../model/user';
import FlashMessage from 'react-native-flash-message';
import { showMessage, hideMessage } from "react-native-flash-message";
// import { AuthContext } from '../components/context';

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  // const { getUserData } = React.useContext(AuthContext);
  const [userInfo, setUserInfo] = useState('');
  const [parsed, setParsed] = useState('');
  const theme = useTheme();
  useEffect(() => {
    async function getUser() {
        const result = await userModel.getProfile();
        
        // const profile = result['user'];
      setUserInfo(result);

        // setFirstname(profile['firstName']);
        // setLastname(profile['lastName']);
        // setEmail(profile['email']);
        // setPhonenumber(profile['phoneNumber']);
      // console.log(result.email);

    };
    getUser();
}, []);
  // useEffect(() => {
    
  //   try {
  //     let user =  AsyncStorage.getItem('userInfo');
  //     // setParsed(JSON.parse(user.userId));  
  //     // console.log(parsed.firstName);
  //     setUserInfo(user);
  //     console.log(user.userId);
  //     getUserData(user.userId);
  //     // console.log(user);
      
  //   } catch (e) {
  //     console.log(e);
  //   }
    
  //   // setTimeout(async () => {
  //   //   // setIsLoading(false);
  //   //   // let userToken;
  //   //   // userToken = null;
  //   //   try {
  //   //     let user = await AsyncStorage.getItem('userInfo');
  //   //     setParsed(JSON.parse(user.id));  
  //   //     // console.log(parsed.firstName);
  //   //     setUserInfo(user);
  //   //     console.log(parsed.userId);

  //   //     // console.log(user);
        
  //   //   } catch (e) {
  //   //     console.log(e);
  //   //   }
  //   // }, 1000);
    
    
  // }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} /> */}
        <View style={styles.header}>
          <View style={{ flexDirection: 'row',width: '70%' }}>
            <Avatar.Image
              // style={{ color: '#E3E3E3', backgroundColor: '#E3E3E3' }}
              source={require('../assets/images/profile.png')}
              size={72}
            />
            <View style={styles.user}>
              <Text style={styles.title} numberOfLines={1}>
                {/* {`${userInfo.firstName.slice(
                            0,
                            8
                          )}...`} */}
                {userInfo.firstName} {userInfo.lastName}
                {/* {`${userInfo.lastName.slice(
                            0,
                            6
                          )}...`} */}
              
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{alignContent:'center', alignItems:'center',width: '10%'}}>
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
              <Text style={{ color: '#ffffff',fontSize: 10,fontFamily: 'Poppins-Regular' }}>Earning Today</Text>
              <Text style={{ color: '#ffffff',fontSize: 8,fontFamily: 'Poppins-Regular' }}>Total Trips Today</Text>
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
              {/* <View style={{ paddingBottom: 30 }}>
              <Text>Recent Trips</Text>
            </View> */}
              <View style={styles.trips}>
                <View>
                  <Avatar.Image
                    style={{ color: '#E3E3E3', backgroundColor: '#E3E3E3' }}
                    source={require('../assets/images/profile.png')}
                    size={35}
                  />
                </View>
                <View>
                  <View style={{paddingHorizontal:10}}>
                    <Text style={{ fontSize: 16, fontWeight: '500',fontFamily: 'Poppins-Medium' }}>
                      26 Okotie samson close...
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '400',fontFamily: 'Poppins-Medium' }}>
                      13 Nov, 13:06
                    </Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '500',fontFamily: 'Poppins-Medium' }}>
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
              <View style={styles.trips}>
                <View>
                  <Avatar.Image
                    style={{ color: '#E3E3E3', backgroundColor: '#E3E3E3' }}
                    source={require('../assets/images/profile.png')}
                    size={35}
                  />
                </View>
                <View>
                  <View style={{paddingHorizontal:10}}>
                    <Text style={{ fontSize: 16, fontWeight: '500',fontFamily: 'Poppins-Medium' }}>
                      26 Okotie samson close...
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '400',fontFamily: 'Poppins-Medium' }}>
                      13 Nov, 13:06
                    </Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '500',fontFamily: 'Poppins-Medium' }}>
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
              <View style={styles.trips}>
                <View>
                  <Avatar.Image
                    style={{ color: '#E3E3E3', backgroundColor: '#E3E3E3' }}
                    source={require('../assets/images/profile.png')}
                    size={35}
                  />
                </View>
                <View>
                  <View style={{paddingHorizontal:10}}>
                    <Text style={{ fontSize: 16, fontWeight: '500',fontFamily: 'Poppins-Medium' }}>
                      26 Okotie samson close...
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '400',fontFamily: 'Poppins-Medium' }}>
                      13 Nov, 13:06
                    </Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '500',fontFamily: 'Poppins-Medium' }}>
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
              <View style={styles.trips}>
                <View>
                  <Avatar.Image
                    style={{ color: '#E3E3E3', backgroundColor: '#E3E3E3' }}
                    source={require('../assets/images/profile.png')}
                    size={35}
                  />
                </View>
                <View>
                  <View style={{paddingHorizontal:10}}>
                    <Text style={{ fontSize: 16, fontWeight: '500',fontFamily: 'Poppins-Medium' }}>
                      26 Okotie samson close...
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '400',fontFamily: 'Poppins-Medium' }}>
                      13 Nov, 13:06
                    </Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '500',fontFamily: 'Poppins-Medium' }}>
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
              <View style={styles.trips}>
                <View>
                  <Avatar.Image
                    style={{ color: '#E3E3E3', backgroundColor: '#E3E3E3' }}
                    source={require('../assets/images/profile.png')}
                    size={35}
                  />
                </View>
                <View>
                  <View style={{paddingHorizontal:10}}>
                    <Text style={{ fontSize: 16, fontWeight: '500',fontFamily: 'Poppins-Medium' }}>
                      26 Okotie samson close...
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '400',fontFamily: 'Poppins-Medium' }}>
                      13 Nov, 13:06
                    </Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '500',fontFamily: 'Poppins-Medium' }}>
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
              <View style={styles.trips}>
                <View>
                  <Avatar.Image
                    style={{ color: '#E3E3E3', backgroundColor: '#E3E3E3' }}
                    source={require('../assets/images/profile.png')}
                    size={35}
                  />
                </View>
                <View>
                  <View style={{paddingHorizontal:10}}>
                    <Text style={{ fontSize: 16, fontWeight: '500',fontFamily: 'Poppins-Medium' }}>
                      26 Okotie samson close...
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '400',fontFamily: 'Poppins-Medium' }}>
                      13 Nov, 13:06
                    </Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '500',fontFamily: 'Poppins-Medium' }}>
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
              <View style={styles.trips}>
                <View>
                  <Avatar.Image
                    style={{ color: '#E3E3E3', backgroundColor: '#E3E3E3' }}
                    source={require('../assets/images/profile.png')}
                    size={35}
                  />
                </View>
                <View>
                  <View style={{paddingHorizontal:10}}>
                    <Text style={{ fontSize: 16, fontWeight: '500',fontFamily: 'Poppins-Medium' }}>
                      26 Okotie samson close...
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '400',fontFamily: 'Poppins-Medium' }}>
                      13 Nov, 13:06
                    </Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '500',fontFamily: 'Poppins-Medium' }}>
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
              <View style={styles.trips}>
                <View>
                  <Avatar.Image
                    style={{ color: '#E3E3E3', backgroundColor: '#E3E3E3' }}
                    source={require('../assets/images/profile.png')}
                    size={35}
                  />
                </View>
                <View>
                  <View style={{paddingHorizontal:10}}>
                    <Text style={{ fontSize: 16, fontWeight: '500',fontFamily: 'Poppins-Medium' }}>
                      26 Okotie samson close...
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '400',fontFamily: 'Poppins-Medium' }}>
                      13 Nov, 13:06
                    </Text>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '500',fontFamily: 'Poppins-Medium' }}>
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
            </View>
          </ScrollView>
          <View style={styles.requestButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DeliveriesScreen')
            }}
            >
              <View
                style={styles.requestText}
              >
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
    // backgroundColor: '#fff',
    flexDirection: 'column',
    // alignItems: 'flex-end',
    marginTop: '10%',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  header: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignContent: 'center',
    alignItems: 'center',
    width: '90%',
    // flexBasis:'30%'
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
    fontFamily: 'Poppins-Bold',
    // width: '60%'
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
    fontFamily: 'Poppins-Black'
  },
  requestButton: {
    display: 'flex',
    justifyContent:"center",
    margin: 20,
    padding: 20,
    borderRadius: 50,
    position: 'relative',
    // top: '10%',
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
    fontFamily: 'Poppins-Black'
  },
  requestText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'Poppins-Black'
  },
});
